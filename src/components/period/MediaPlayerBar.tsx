"use client";

import { useState } from "react";
import { formatYear } from "@/lib/format";
import type { PeriodEntityEvent, PeriodEntity } from "@/types/period-data";

const EVENT_ICONS: Record<string, string> = {
  savaş:    "⚔",
  antlaşma: "📜",
  din:      "✦",
  göç:      "→",
  kültür:   "◈",
  siyasi:   "◉",
  kuruluş:  "★",
  yıkılış:  "✕",
};

interface MediaPlayerBarProps {
  currentYear: number;
  minYear: number;
  maxYear: number;
  isPlaying: boolean;
  speed: 0.5 | 1 | 2;
  onYearChange: (year: number) => void;
  onTogglePlay: () => void;
  onSpeedChange: (s: 0.5 | 1 | 2) => void;
  events?: PeriodEntityEvent[];
  entities?: PeriodEntity[];
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
  events = [],
  entities = [],
}: MediaPlayerBarProps) {
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);
  const progress = ((currentYear - minYear) / (maxYear - minYear)) * 100;

  return (
    <div className="w-full h-full bg-background border-t border-white/[0.08] flex items-center gap-5 px-6">
      {/* Rewind */}
      <button
        onClick={() => onYearChange(minYear)}
        className="text-secondary/50 hover:text-secondary transition-colors flex-shrink-0"
        title="Başa sar"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
        </svg>
      </button>

      {/* Play / Pause */}
      <button
        onClick={onTogglePlay}
        className="w-9 h-9 rounded-full bg-ochre/90 hover:bg-ochre flex items-center justify-center flex-shrink-0 transition-colors shadow-md"
        title={isPlaying ? "Duraklat (Space)" : "Oynat (Space)"}
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#12171F">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
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
          <div className="absolute inset-x-0 h-[3px] rounded-full bg-white/10" />
          <div className="absolute left-0 h-[3px] rounded-full bg-ochre/60" style={{ width: `${progress}%` }} />
          <input
            type="range"
            min={minYear}
            max={maxYear}
            step={1}
            value={Math.round(currentYear)}
            onChange={(e) => onYearChange(Number(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer h-6"
          />
          {/* Event milestone markers */}
          {events.map((e) => {
            const pct = ((e.year - minYear) / (maxYear - minYear)) * 100;
            if (pct < 0 || pct > 100) return null;
            const entity = entities.find((en) => en.id === e.entityId);
            const isHovered = hoveredEventId === e.id;
            const isPast = currentYear >= e.year;
            return (
              <div
                key={e.id}
                className="absolute flex flex-col items-center pointer-events-auto"
                style={{ left: `${pct}%`, bottom: "0px", transform: "translateX(-50%)" }}
                onMouseEnter={() => setHoveredEventId(e.id)}
                onMouseLeave={() => setHoveredEventId(null)}
              >
                {isHovered && (
                  <div
                    className="absolute bottom-full mb-2 z-30 whitespace-nowrap px-2 py-1.5 rounded-lg border text-left"
                    style={{
                      background: "rgba(18,23,31,0.95)",
                      borderColor: entity ? `${entity.color}44` : "rgba(255,255,255,0.1)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span style={{ color: entity?.color ?? "#E8C88A", fontSize: 10 }}>
                        {EVENT_ICONS[e.type] ?? "●"}
                      </span>
                      <span className="font-sans text-[10px] font-semibold" style={{ color: entity?.color ?? "#E8C88A" }}>
                        {e.year < 0 ? `MÖ ${Math.abs(Math.round(e.year))}` : `MS ${Math.round(e.year)}`}
                      </span>
                      {entity && (
                        <span className="font-sans text-[10px] text-white/40">· {entity.name}</span>
                      )}
                    </div>
                    <p className="font-sans text-[11px] text-white/80 mt-0.5 max-w-[200px] leading-tight">
                      {e.title}
                    </p>
                  </div>
                )}
                <div
                  className="w-[2px] rounded-full transition-all"
                  style={{
                    height: isHovered ? "14px" : "8px",
                    background: entity?.color ?? "#E8C88A",
                    opacity: isPast ? 0.75 : 0.3,
                    marginBottom: "1px",
                  }}
                />
              </div>
            );
          })}
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
      <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
        {([0.5, 1, 2] as const).map((s) => (
          <button
            key={s}
            onClick={() => onSpeedChange(s)}
            className={`font-sans text-[11px] px-2 py-1 rounded transition-colors ${
              speed === s ? "bg-ochre/20 text-ochre" : "text-secondary/40 hover:text-secondary/70"
            }`}
          >
            {s === 0.5 ? "0.5x" : `${s}x`}
          </button>
        ))}
      </div>

      {!isPlaying && (
        <span className="font-sans text-[10px] text-secondary/25 flex-shrink-0 hidden lg:block">
          Space
        </span>
      )}
    </div>
  );
}
