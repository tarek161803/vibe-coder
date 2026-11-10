"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loadCatalog, STARTER_OBSTACLES } from "@/content";
import { WORLD } from "@/game/config";
import { Game } from "@/game/engine";
import type { GameOverResult, GamePhase } from "@/game/types";
import { recordRun, useProgress, type RunRecord } from "@/lib/progress";
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
/** On short screens (landscape phones) the logo and credits are hidden. */
const SHORT_SCREEN = 560;
const RESERVED_HEIGHT_SHORT = 110;
/** Extra vertical space for the on-screen gamepad buttons on touch devices. */
const TOUCH_BUTTONS_HEIGHT = 112;
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
          phaseRef.current = next;
          if (next === "over") overAtRef.current = performance.now();
          setPhase(next);
        },
        onGameOver: (run) => {
          setResult({ ...run, ...recordRun(run.score, run.tech.id) });
        },
        onAgentsChange: setAgents,
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

    const resize = () => {
      const cssWidth = stage.clientWidth - CARD_CHROME;
      const short = window.innerHeight <= SHORT_SCREEN;
      const reserved =
        (short ? RESERVED_HEIGHT_SHORT : RESERVED_HEIGHT) +
        (window.matchMedia("(pointer: coarse)").matches ? (short ? TOUCH_BUTTONS_HEIGHT_SHORT : TOUCH_BUTTONS_HEIGHT) : 0);
      const maxCssHeight = Math.max(170, Math.min(window.innerHeight * 0.7, window.innerHeight - reserved));
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
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    window.addEventListener("resize", resize);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("resize", resize);
      game.destroy();
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
    <div className="relative flex min-h-dvh flex-col items-center justify-center gap-5 overflow-clip px-3 py-5 [@media(max-height:560px)]:gap-2 [@media(max-height:560px)]:py-2">
      <div aria-hidden className="grid-floor" />

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
                <span>
                  MAX <span className="text-orange-300">{progress.highScore > 0 ? formatTokens(progress.highScore) : "--"}</span>
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

      <p className="hidden rounded-lg bg-violet-500/10 px-3 py-2 text-center font-mono text-xs text-violet-200 portrait:pointer-coarse:block">
        Tip: rotate your phone to landscape for a bigger screen.
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
