/** Bottom strip of the console: control prompts and the pause button. */
export function GameControls({ canPause, onPause }: { canPause: boolean; onPause: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 px-1 pt-2.5 font-pixel text-[8px] tracking-wider text-slate-400 sm:text-[9px]">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="flex items-center gap-1.5 pointer-coarse:hidden">
          <KeyCap>SPACE</KeyCap>
          <KeyCap>↑</KeyCap>
          JUMP
        </span>
        <span className="flex items-center gap-1.5 pointer-coarse:hidden">
          <KeyCap>↓</KeyCap>
          SLIDE
        </span>
        <span className="flex items-center gap-1.5 pointer-coarse:hidden">
          <KeyCap>P</KeyCap>
          PAUSE
        </span>
        <span className="hidden pointer-coarse:inline">TAP: JUMP · SWIPE ↓: SLIDE</span>
      </div>

      <button
        onClick={onPause}
        disabled={!canPause}
        className="holo-panel shrink-0 px-3 py-2 text-fuchsia-200 transition hover:text-white disabled:pointer-events-none disabled:opacity-35"
      >
        ❚❚ PAUSE
      </button>
    </div>
  );
}

function KeyCap({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded-sm border border-cyan-400/50 bg-cyan-400/10 px-1.5 font-pixel text-[8px] text-cyan-200 shadow-[0_0_8px_rgba(34,211,238,0.25)]">
      {children}
    </kbd>
  );
}
