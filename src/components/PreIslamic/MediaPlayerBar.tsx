"use client";

interface MediaPlayerBarProps {
  currentYear: number;
  minYear: number;
  maxYear: number;
  isPlaying: boolean;
  speed: 0.5 | 1 | 2;
  onYearChange: (year: number) => void;
  onTogglePlay: () => void;
  onSpeedChange: (s: 0.5 | 1 | 2) => void;
}

function formatYear(year: number): string {
  return year < 0 ? `MÖ ${Math.abs(year)}` : `MS ${year}`;
}

export default function MediaPlayerBar({
  currentYear,
  minYear,
  maxYear,
  isPlaying,
  speed,
  onYearChange,
  onTogglePlay,
  onSpeedChange,
}: MediaPlayerBarProps) {
  const progress = ((currentYear - minYear) / (maxYear - minYear)) * 100;

  return (
    <div className="w-full h-full bg-background border-t border-white/[0.08] flex items-center gap-5 px-6">
      {/* Rewind button */}
      <button
        onClick={() => onYearChange(minYear)}
        className="text-secondary/50 hover:text-secondary transition-colors flex-shrink-0"
        title="Başa sar"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
        </svg>
      </button>

      {/* Play / Pause button */}
      <button
        onClick={onTogglePlay}
        className="w-9 h-9 rounded-full bg-ochre/90 hover:bg-ochre flex items-center justify-center flex-shrink-0 transition-colors shadow-md"
        title={isPlaying ? "Duraklat (Space)" : "Oynat (Space)"}
      >
        {isPlaying ? (
          /* Pause icon */
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#12171F">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          /* Play icon */
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#12171F">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Year display */}
      <div className="flex-shrink-0 w-24 text-right">
        <span className="font-display text-lg text-ochre font-medium leading-none">
          {formatYear(Math.round(currentYear))}
        </span>
      </div>

      {/* Scrubber */}
      <div className="flex-1 flex items-center gap-2 min-w-0">
        <span className="font-sans text-[10px] text-secondary/30 flex-shrink-0">
          {formatYear(minYear)}
        </span>
        <div className="relative flex-1 h-6 flex items-center group">
          {/* Track background */}
          <div className="absolute inset-x-0 h-[3px] rounded-full bg-white/10" />
          {/* Filled portion */}
          <div
            className="absolute left-0 h-[3px] rounded-full bg-ochre/60"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min={minYear}
            max={maxYear}
            step={1}
            value={Math.round(currentYear)}
            onChange={(e) => onYearChange(Number(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer h-6"
          />
          {/* Thumb indicator */}
          <div
            className="absolute w-3 h-3 rounded-full bg-ochre shadow-md pointer-events-none transition-transform group-hover:scale-125"
            style={{ left: `calc(${progress}% - 6px)` }}
          />
        </div>
        <span className="font-sans text-[10px] text-secondary/30 flex-shrink-0">
          {formatYear(maxYear)}
        </span>
      </div>

      {/* Speed controls */}
      <div className="flex items-center gap-1 flex-shrink-0">
        {([0.5, 1, 2] as const).map((s) => (
          <button
            key={s}
            onClick={() => onSpeedChange(s)}
            className={`font-sans text-[11px] px-2 py-1 rounded transition-colors ${
              speed === s
                ? "bg-ochre/20 text-ochre"
                : "text-secondary/40 hover:text-secondary/70"
            }`}
          >
            {s === 0.5 ? "0.5x" : `${s}x`}
          </button>
        ))}
      </div>

      {/* Space hint */}
      {!isPlaying && (
        <span className="font-sans text-[10px] text-secondary/25 flex-shrink-0 hidden lg:block">
          Space
        </span>
      )}
    </div>
  );
}
