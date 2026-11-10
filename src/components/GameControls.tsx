import { useState } from "react";

/** Bottom strip of the console: control prompts. */
export function GameControls() {
  return (
    <div className="mt-2 flex h-7 items-center gap-3 pr-1 font-pixel text-[8px] tracking-wider text-slate-400 sm:text-[9px]">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="flex items-center gap-1.5 pointer-coarse:hidden">
          <KeyCap>SPACE</KeyCap>
          <KeyCap><Arrow direction="up" /></KeyCap>
          <Label>JUMP</Label>
        </span>
        <span className="flex items-center gap-1.5 pointer-coarse:hidden">
          <KeyCap><Arrow direction="down" /></KeyCap>
          <Label>SLIDE</Label>
        </span>
        <span className="flex items-center gap-1.5 pointer-coarse:hidden">
          <KeyCap>P</KeyCap>
          <Label>PAUSE</Label>
        </span>
        <span className="hidden pointer-coarse:inline">TAP: JUMP · SWIPE ↓: SLIDE</span>
      </div>
    </div>
  );
}

function KeyCap({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded-sm border border-cyan-400/50 bg-cyan-400/10 px-1.5 font-pixel text-[8px] text-cyan-200 shadow-[0_0_8px_rgba(34,211,238,0.25)]">
      {typeof children === "string" ? <span className="translate-y-[0.5px] leading-none">{children}</span> : children}
    </kbd>
  );
}

/** Control label, sized to the text so it centres cleanly next to the keycaps. */
function Label({ children }: { children: React.ReactNode }) {
  return <span className="translate-y-[0.5px] leading-none">{children}</span>;
}

/** Pixel-style arrow icon (font arrows come from a fallback font and sit off-centre). */
function Arrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg viewBox="0 0 7 7" className={`size-[7px] ${direction === "down" ? "rotate-180" : ""}`} aria-hidden>
      <path d="M3 0h1v1h1v1h1v1h1v1H5v3H2V4H0V3h1V2h1V1h1z" fill="currentColor" />
    </svg>
  );
}

type HoldHandlers = { onPress: () => void; onRelease: () => void };

/** On-screen gamepad buttons for touch devices, shown under the console. */
export function TouchButtons({ jump, slide }: { jump: HoldHandlers; slide: HoldHandlers }) {
  return (
    <div data-ui className="hidden items-start justify-center gap-20 pointer-coarse:flex portrait:mt-10">
      <HoldButton label="SLIDE" handlers={slide} tint="#e879f9" />
      <HoldButton label="JUMP" handlers={jump} tint="#22d3ee" />
    </div>
  );
}

/** A button that stays "pressed" for as long as the finger is down, so jumps can be held for height. */
function HoldButton({
  label,
  handlers,
  tint,
}: {
  label: string;
  handlers: HoldHandlers;
  tint: string;
}) {
  const [pressed, setPressed] = useState(false);
  const release = () => {
    setPressed(false);
    handlers.onRelease();
  };

  return (
    <button
      type="button"
      data-pressed={pressed}
      style={{ "--tint": tint } as React.CSSProperties}
      className="pad-btn touch-none select-none outline-none"
      onPointerDown={(e) => {
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        setPressed(true);
        handlers.onPress();
      }}
      onPointerUp={release}
      onPointerCancel={release}
      onContextMenu={(e) => e.preventDefault()}
    >
      <span className="pad-btn-housing size-[82px] [@media(max-height:560px)]:size-13">
        <span className="pad-btn-cap">
          <span className="pad-btn-text font-pixel text-[11px] tracking-wider [@media(max-height:560px)]:text-[8px]">{label}</span>
        </span>
      </span>
    </button>
  );
}
