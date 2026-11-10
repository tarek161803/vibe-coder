"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loadCatalog, STARTER_OBSTACLES } from "@/content";
import { WORLD } from "@/game/config";
import { Game } from "@/game/engine";
import type { GameOverResult, GamePhase } from "@/game/types";
import { playSfx, resetMusic, setMuted, setMusicTempo, startMusic, stopMusic, unlockAudio } from "@/lib/audio";
import { vibrate } from "@/lib/haptics";
import { recordRun, useProgress, type RunRecord } from "@/lib/progress";
import { getSettings, updateSettings, useSettings } from "@/lib/settings";
import { formatTokens } from "@/lib/tokens";
import { GameControls, TouchButtons } from "./GameControls";
import { LessonModal } from "./LessonModal";

/** Ignore restart keys briefly after dying so a held jump doesn't skip the lesson. */
const RESTART_LOCK_MS = 700;
/** A touch that moves this far down within SWIPE_WINDOW_MS is a slide, not a jump. */
const SWIPE_DISTANCE = 18;
const SWIPE_WINDOW_MS = 90;
/** Preferred maximum world width before the canvas starts scaling up. */
const PREFERRED_WIDTH = 1000;
/** Horizontal space taken by the console frame's border and padding. */
const CARD_CHROME = 44;
/** Vertical space reserved for the logo, the console's status strips and the credits line. */
const RESERVED_HEIGHT = 250;
/** Smallest canvas height (CSS px) when shrinking it to fit a short screen. */
const MIN_CANVAS_HEIGHT = 100;
/** Shell padding the reserved heights above already account for (normal / short screens). */
const SHELL_PADDING = 40;
const SHELL_PADDING_SHORT = 16;
/** On short screens (landscape phones) the logo and credits are hidden. */
const SHORT_SCREEN = 560;
const RESERVED_HEIGHT_SHORT = 110;
/** Extra vertical space for the on-screen gamepad buttons on touch devices. */
const TOUCH_BUTTONS_HEIGHT = 136;
const TOUCH_BUTTONS_HEIGHT_SHORT = 86;

type TouchGesture = {
  id: number;
  x: number;
  y: number;
  mode: "pending" | "jump" | "slide";
  timer: number;
};

const isJumpKey = (code: string) => code === "Space" || code === "ArrowUp" || code === "KeyW";
const isSlideKey = (code: string) => code === "ArrowDown" || code === "KeyS";

const toggleMute = () => updateSettings({ muted: !getSettings().muted });

/** Music tempo for the agents count: 1 agent = base tempo, rising gently to ~1.06× at top speed. */
const musicTempo = (agents: number) => 1 + Math.min(1, Math.max(0, (agents - 1) / 16)) * 0.06;

/** Extra vertical padding the shell grew by to clear a notch or home indicator. */
function safeAreaExtra(shell: HTMLElement | null, basePadding: number) {
  if (!shell) return 0;
  const style = getComputedStyle(shell);
  return Math.max(0, parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) - basePadding);
}

export default function VibeCoderGame() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game | null>(null);
  const phaseRef = useRef<GamePhase>("ready");
  const overAtRef = useRef(0);
  const gestureRef = useRef<TouchGesture | null>(null);

  const [phase, setPhase] = useState<GamePhase>("ready");
  const [agents, setAgents] = useState(1);
  const [result, setResult] = useState<(GameOverResult & RunRecord) | null>(null);
  const progress = useProgress();
  const { muted } = useSettings();
  const [total, setTotal] = useState(STARTER_OBSTACLES.length);

  const retry = useCallback(() => {
    setResult(null);
    gameRef.current?.restart();
  }, []);

  // ── Engine lifecycle & responsive sizing ──────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current!;
    const stage = stageRef.current!;
    const css = getComputedStyle(document.documentElement);

    const game = new Game(
      canvas,
      {
        onPhaseChange: (next) => {
          if (next === "playing") {
            // Resuming continues the tune; a new run starts it from the top.
            if (phaseRef.current !== "paused") resetMusic();
            startMusic();
          } else {
            stopMusic();
          }
          phaseRef.current = next;
          if (next === "over") overAtRef.current = performance.now();
          setPhase(next);
        },
        onGameOver: (run) => {
          setResult({ ...run, ...recordRun(run.score, run.tech.id) });
        },
        onAgentsChange: (count) => {
          setAgents(count);
          setMusicTempo(musicTempo(count));
        },
        onEvent: (event) => {
          playSfx(event);
          if (!getSettings().muted) vibrate(event);
        },
      },
      {
        pixel: css.getPropertyValue("--font-press-start").trim() || "monospace",
        mono: css.getPropertyValue("--font-jetbrains").trim() || "monospace",
      },
      STARTER_OBSTACLES,
    );
    gameRef.current = game;

    // The full catalog is a big chunk; play starts with the curated set and
    // the rest joins the obstacle pool as soon as it has loaded.
    let cancelled = false;
    loadCatalog()
      .then((catalog) => {
        if (cancelled) return;
        game.addTechnologies(catalog);
        setTotal(STARTER_OBSTACLES.length + catalog.length);
      })
      .catch((error) => console.error("Failed to load the technology catalog", error));

    const shell = stage.parentElement!;
    const fit = (maxCssHeight: number) => {
      const cssWidth = stage.clientWidth - CARD_CHROME;
      let worldWidth = Math.min(Math.max(cssWidth, WORLD.minWidth), PREFERRED_WIDTH);
      let scale = cssWidth / worldWidth;
      if (WORLD.height * scale > maxCssHeight) {
        scale = maxCssHeight / WORLD.height;
        worldWidth = Math.min(WORLD.maxWidth, cssWidth / scale);
      }
      canvas.style.width = `${Math.floor(worldWidth * scale)}px`;
      canvas.style.height = `${Math.floor(WORLD.height * scale)}px`;
      game.resize(worldWidth, scale, Math.min(window.devicePixelRatio || 1, 2));
    };

    const resize = () => {
      // Size against the shell, which is exactly the visible area.
      const screenHeight = shell.clientHeight;
      const short = screenHeight <= SHORT_SCREEN;
      const reserved =
        (short ? RESERVED_HEIGHT_SHORT : RESERVED_HEIGHT) +
        (window.matchMedia("(pointer: coarse)").matches ? (short ? TOUCH_BUTTONS_HEIGHT_SHORT : TOUCH_BUTTONS_HEIGHT) : 0) +
        safeAreaExtra(shell, short ? SHELL_PADDING_SHORT : SHELL_PADDING);
      fit(Math.max(170, Math.min(screenHeight * 0.7, screenHeight - reserved)));
      // The page is a fixed-height screen: if the estimate above still overflows it,
      // shrink the canvas by exactly the overflow so everything fits without scrolling.
      const overflow = shell.scrollHeight - shell.clientHeight;
      if (overflow > 0) fit(Math.max(MIN_CANVAS_HEIGHT, canvas.offsetHeight - overflow));
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    window.addEventListener("resize", resize);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("resize", resize);
      game.destroy();
      stopMusic();
      gameRef.current = null;
    };
  }, []);

  // ── Keyboard & focus handling ─────────────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const game = gameRef.current;
      if (!game) return;
      const current = phaseRef.current;
      const onControl = (e.target as HTMLElement | null)?.closest("button, a, input, textarea");
      const canRestart = !e.repeat && performance.now() - overAtRef.current > RESTART_LOCK_MS;

      if (isJumpKey(e.code)) {
        // Let focused buttons/links handle Space themselves outside of gameplay.
        if (onControl && current !== "playing") return;
        e.preventDefault();
        if (e.repeat) return;
        if (current === "ready") game.start();
        else if (current === "playing") game.jumpPress();
        else if (current === "paused") game.resume();
        else if (current === "over" && canRestart) retry();
      } else if (isSlideKey(e.code)) {
        e.preventDefault();
        if (!e.repeat) game.slidePress();
      } else if (e.code === "KeyM" && !e.repeat) {
        toggleMute();
      } else if (e.code === "KeyP" || e.code === "Escape") {
        if (current === "playing") game.pause();
        else if (current === "paused") game.resume();
      } else if (e.code === "Enter" && current === "over" && !onControl && canRestart) {
        e.preventDefault();
        retry();
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (isJumpKey(e.code)) gameRef.current?.jumpRelease();
      else if (isSlideKey(e.code)) gameRef.current?.slideRelease();
    };

    const autoPause = () => gameRef.current?.pause();
    const onVisibility = () => document.hidden && autoPause();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", autoPause);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", autoPause);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [retry]);

  useEffect(() => setMuted(muted), [muted]);

  // Browsers only allow audio after a user gesture; capture runs before the game handlers start the music.
  useEffect(() => {
    window.addEventListener("pointerdown", unlockAudio, true);
    window.addEventListener("keydown", unlockAudio, true);
    return () => {
      window.removeEventListener("pointerdown", unlockAudio, true);
      window.removeEventListener("keydown", unlockAudio, true);
    };
  }, []);

  // ── Touch / mouse input on the stage ──────────────────────────────────
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const game = gameRef.current;
    if (!game || (e.target as HTMLElement).closest("[data-ui]")) return;
    const current = phaseRef.current;

    if (current === "ready") return game.start();
    if (current === "paused") return game.resume();
    if (current !== "playing") return;

    if (e.pointerType === "mouse") {
      if (e.button === 0) game.jumpPress();
      return;
    }

    // Touch: wait a moment to tell a tap (jump) from a swipe down (slide).
    e.currentTarget.setPointerCapture(e.pointerId);
    const gesture: TouchGesture = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      mode: "pending",
      timer: window.setTimeout(() => {
        if (gesture.mode !== "pending") return;
        gesture.mode = "jump";
        gameRef.current?.jumpPress();
      }, SWIPE_WINDOW_MS),
    };
    gestureRef.current = gesture;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.id !== e.pointerId || gesture.mode === "slide") return;
    const dx = e.clientX - gesture.x;
    const dy = e.clientY - gesture.y;
    if (dy > SWIPE_DISTANCE && dy > Math.abs(dx)) {
      window.clearTimeout(gesture.timer);
      // Swiping down mid-jump cancels the ascent and fast-falls into a slide.
      if (gesture.mode === "jump") gameRef.current?.jumpRelease();
      gesture.mode = "slide";
      gameRef.current?.slidePress();
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const game = gameRef.current;
    if (!game) return;
    if (e.pointerType === "mouse") return game.jumpRelease();

    const gesture = gestureRef.current;
    if (!gesture || gesture.id !== e.pointerId) return;
    window.clearTimeout(gesture.timer);
    if (gesture.mode === "pending") {
      // Quick tap released before the swipe window: jump right away.
      game.jumpPress();
      game.jumpRelease();
    } else if (gesture.mode === "jump") {
      game.jumpRelease();
    } else {
      game.slideRelease();
    }
    gestureRef.current = null;
  };

  // ── On-screen buttons (touch devices) ─────────────────────────────────
  const jumpButton = {
    onPress: () => {
      const game = gameRef.current;
      const current = phaseRef.current;
      if (current === "ready") game?.start();
      else if (current === "paused") game?.resume();
      else if (current === "playing") game?.jumpPress();
    },
    onRelease: () => gameRef.current?.jumpRelease(),
  };
  const slideButton = {
    onPress: () => gameRef.current?.slidePress(),
    onRelease: () => gameRef.current?.slideRelease(),
  };

  return (
    <div className="relative isolate flex h-dvh flex-col items-center justify-center-safe gap-5 overflow-hidden safe-shell portrait:pointer-coarse:justify-start portrait:pointer-coarse:pt-[max(3.5rem,calc(var(--safe-top)+1.75rem))] [@media(max-height:560px)]:gap-2">
      <div aria-hidden className="page-bg">
        <div className="grid-floor" />
      </div>

      <header className="text-center [@media(max-height:560px)]:hidden">
        <h1 className="title-glow font-pixel text-2xl leading-tight animate-flicker sm:text-4xl">
          VIBE<span className="text-cyan-300">_</span>CODER
        </h1>
        <p className="mt-3 font-pixel text-[8px] tracking-[0.35em] text-cyan-300/70 sm:text-[9px]">
          {"// EVERY CRASH IS A LESSON"}
        </p>
      </header>

      <div ref={stageRef} className="flex w-full max-w-[1120px] justify-center">
        <div className="hud-glow">
          {/* Neon gradient edge */}
          <div className="hud-frame bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 p-[1.5px]">
            <div className="hud-frame bg-[linear-gradient(180deg,#0b0d1f,#06070f)] px-5 py-2.5">
              {/* Top status strip */}
              <div className="mb-2 flex h-7 items-center justify-between gap-3 font-pixel text-[8px] tracking-wider text-slate-500 sm:text-[9px]">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span className="text-emerald-300/80">
                    {agents} {agents === 1 ? "AGENT" : "AGENTS"} RUNNING
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span>
                    MAX <span className="text-orange-300">{progress.highScore > 0 ? formatTokens(progress.highScore) : "--"}</span>
                  </span>
                  <button
                    type="button"
                    data-ui
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute sound" : "Mute sound"}
                    aria-pressed={muted}
                    className="-m-1.5 p-1.5 text-cyan-300/80 hover:text-cyan-200"
                  >
                    <SpeakerIcon muted={muted} />
                  </button>
                </span>
              </div>

              {/* Game screen */}
              <div
                className="relative overflow-hidden ring-1 ring-cyan-300/25 touch-none select-none"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onContextMenu={(e) => e.preventDefault()}
              >
                <canvas ref={canvasRef} className="block" aria-label="Vibe Coder game" role="img" />

                {/* Targeting brackets */}
                <span aria-hidden className="pointer-events-none absolute left-2 top-2 size-4 border-l-2 border-t-2 border-cyan-300/70" />
                <span aria-hidden className="pointer-events-none absolute right-2 top-2 size-4 border-r-2 border-t-2 border-cyan-300/70" />
                <span aria-hidden className="pointer-events-none absolute bottom-2 left-2 size-4 border-b-2 border-l-2 border-fuchsia-300/70" />
                <span aria-hidden className="pointer-events-none absolute bottom-2 right-2 size-4 border-b-2 border-r-2 border-fuchsia-300/70" />

                {phase === "ready" && (
                  <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/30 px-4">
                    <div className="holo-panel px-6 py-4 text-center sm:px-10 sm:py-6">
                      <p className="font-pixel text-[8px] tracking-[0.3em] text-fuchsia-300/80 sm:text-[9px]">READY TO VIBE?</p>
                      <p className="neon-text mt-3 font-pixel text-[10px] text-cyan-200 animate-blink sm:text-sm">
                        <span className="pointer-coarse:hidden">PRESS SPACE TO START</span>
                        <span className="hidden pointer-coarse:inline">TAP TO START</span>
                      </p>
                    </div>
                  </div>
                )}

                {phase === "paused" && (
                  <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/55">
                    <div className="holo-panel px-8 py-5 text-center">
                      <p className="neon-text font-pixel text-sm text-white sm:text-lg">PAUSED</p>
                      <p className="mt-3 font-pixel text-[8px] tracking-wider text-cyan-200/80 sm:text-[9px]">
                        <span className="pointer-coarse:hidden">PRESS P / SPACE TO RESUME</span>
                        <span className="hidden pointer-coarse:inline">TAP TO RESUME</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <GameControls />
            </div>
          </div>
        </div>
      </div>

      <TouchButtons jump={jumpButton} slide={slideButton} />

      {/* Credit pinned to the bottom of the visible area; out of the layout flow so it never shrinks the game. */}
      <p className="absolute inset-x-0 bottom-[max(0.5rem,var(--safe-bottom))] text-center font-pixel text-[8px] tracking-wider text-slate-500 [@media(max-height:560px)]:hidden">
        vibe coded by{" "}
        <a
          href="https://github.com/itarek99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 underline decoration-slate-600 underline-offset-2 hover:text-cyan-300 hover:decoration-cyan-300"
        >
          itarek99
        </a>
      </p>

      {phase === "over" && result && (
        <LessonModal
          tech={result.tech}
          score={result.score}
          highScore={progress.highScore}
          isNewHighScore={result.isNewHighScore}
          discoveredCount={progress.discovered.length}
          total={total}
          onRetry={retry}
        />
      )}
    </div>
  );
}

/** Pixel-style speaker; crossed out when muted. */
function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 12 10" className="h-[10px] w-3" aria-hidden>
      <path d="M0 3h2l3-3h1v10H5L2 7H0z" fill="currentColor" />
      {muted ? (
        <path d="M8 3l1 1 1-1 1 1-1 1 1 1-1 1-1-1-1 1-1-1 1-1-1-1z" fill="currentColor" />
      ) : (
        <path d="M8 3h1v4H8zM10 1h1v8h-1z" fill="currentColor" />
      )}
    </svg>
  );
}
