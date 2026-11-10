"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import type { TechInfo } from "@/content/types";
import { luminance, readableInk } from "@/lib/color";
import { formatTokens } from "@/lib/tokens";
import { TechLogo } from "./TechLogo";

interface LessonModalProps {
  tech: TechInfo;
  score: number;
  highScore: number;
  isNewHighScore?: boolean;
  discoveredCount: number;
  total: number;
  onRetry: () => void;
}

/** Accents darker than this would vanish on the dark panel, so fall back to near-white. */
const MIN_ACCENT_LUMINANCE = 0.06;

/** The lesson shown after a collision: what the obstacle is and why it matters. */
export function LessonModal({
  tech,
  score,
  highScore,
  isNewHighScore,
  discoveredCount,
  total,
  onRetry,
}: LessonModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const isHazard = tech.kind === "hazard";
  const accent = luminance(tech.color) < MIN_ACCENT_LUMINANCE ? "#f1f5f9" : tech.color;

  useEffect(() => {
    dialogRef.current?.focus({ preventScroll: true });
  }, []);

  // Lock the page behind the overlay so only the lesson card scrolls.
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, []);

  return (
    <div
      data-ui
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overscroll-contain bg-black/75 safe-overlay backdrop-blur-sm animate-fade-in sm:items-center"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tech-modal-title"
        tabIndex={-1}
        style={{ "--accent": accent } as CSSProperties}
        className="relative my-auto w-full max-w-xl rounded-2xl border-2 border-[var(--accent)] bg-[#0d1024] font-mono text-slate-200 shadow-[0_0_0_4px_#000,0_0_48px_-8px_var(--accent)] outline-none animate-pop-in"
      >
        <div className="space-y-5 p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 rounded-2xl p-1 shadow-[0_0_24px_-4px_var(--accent)] ring-2 ring-[var(--accent)]/60">
              <TechLogo tech={tech} size={96} className="size-[88px] rounded-xl sm:size-24" />
            </div>
            <div className="min-w-0">
              <p className="mb-1.5 font-pixel text-[9px] leading-[1.6] tracking-wider text-[var(--accent)] sm:text-[10px]">
                {isHazard ? "WEAKNESS EXPOSED" : "SKILL NOT UNLOCKED"}
              </p>
              <h2 id="tech-modal-title" className={`font-pixel leading-tight text-white ${titleSize(tech.name)}`}>
                {tech.name}
              </h2>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                <span className="rounded-md border border-[var(--accent)]/50 bg-[var(--accent)]/10 px-2 py-0.5 text-[11px] font-semibold text-[var(--accent)]">
                  {tech.category}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">{tech.description}</p>

          <section>
            <h3 className="mb-2 font-pixel text-[10px] tracking-wide text-[var(--accent)]">
              {isHazard ? "HOW TO DEAL WITH IT" : "WHAT IT'S USED FOR"}
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {tech.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden>
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-amber-300/25 bg-amber-300/[0.07] p-3.5">
            <h3 className="mb-1.5 font-pixel text-[10px] tracking-wide text-amber-300">FUN FACT</h3>
            <p className="text-sm leading-relaxed text-amber-50/90">{tech.funFact}</p>
          </section>

          {/* Tokens: the score. Burning them kept you running, but it can't replace a skill. */}
          <p className="text-center font-pixel text-[9px] leading-[1.6] tracking-wider text-orange-300 sm:text-[10px]">
            {isHazard ? "TOKENS CAN'T FIX THIS." : "TOKENS CAN'T BUY SKILLS."}
          </p>

          <dl className="grid grid-cols-3 gap-2 text-center">
            <Stat label="Burned" value={formatTokens(score)} highlight={isNewHighScore ? "NEW MAX!" : undefined} />
            <Stat label="Max" value={formatTokens(highScore)} />
            <Stat label="Learned" value={`${discoveredCount}/${total}`} />
          </dl>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onRetry}
              className="arcade-btn flex-1 gap-2"
              style={{ background: accent, color: readableInk(accent) }}
            >
              <RestartIcon />
              Start Again
            </button>
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="arcade-btn flex-1 gap-2 bg-slate-800 text-white"
            >
              Learn More
              <ExternalIcon />
            </a>
          </div>

          <p className="hidden text-center text-[11px] text-slate-500 sm:block">
            Press <kbd className="kbd">Space</kbd> or <kbd className="kbd">Enter</kbd> to start again
          </p>
        </div>
      </div>
    </div>
  );
}

/** Longer names get a smaller pixel font so the title block stays shorter than the logo. */
function titleSize(name: string): string {
  if (name.length <= 12) return "text-lg sm:text-xl";
  if (name.length <= 18) return "text-base sm:text-lg";
  return "text-xs sm:text-base";
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: string }) {
  return (
    <div className="relative rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2.5">
      <dt className="text-[10px] uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className="mt-1 font-pixel text-xs text-white">{value}</dd>
      {highlight && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-amber-300 px-1.5 py-0.5 font-pixel text-[7px] text-black">
          {highlight}
        </span>
      )}
    </div>
  );
}

/** Chunky stroke icons sized to sit next to the pixel-font button labels. */
function RestartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square" aria-hidden>
      <path d="M3 12a9 9 0 1 0 2.64-6.36L3 8.3" />
      <path d="M3 3v5.3h5.3" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square" aria-hidden>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14v6H4V6h6" />
    </svg>
  );
}
