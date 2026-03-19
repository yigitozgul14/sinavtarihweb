"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { formatYear } from "@/lib/format";
import type { PeriodEntity, PeriodEntityEvent } from "@/types/period-data";

interface EntityTimelineProps {
  entities: PeriodEntity[];
  events: PeriodEntityEvent[];
  selectedEntityId: string | null;
  onSelect: (id: string | null) => void;
  timelineStart?: number;
  timelineEnd?: number;
}

const DEFAULT_START = -750;
const DEFAULT_END = 1300;

const TICKS = [-700, -500, -300, -100, 100, 300, 500, 700, 900, 1100, 1300];

export default function EntityTimeline({
  entities,
  events,
  selectedEntityId,
  onSelect,
  timelineStart = DEFAULT_START,
  timelineEnd = DEFAULT_END,
}: EntityTimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalSpan = timelineEnd - timelineStart;

  function yearToPercent(year: number): number {
    return ((year - timelineStart) / totalSpan) * 100;
  }

  const sorted = [...entities].sort((a, b) => a.startYear - b.startYear);

  return (
    <div className="w-full h-full bg-[#0D1117] border-t border-white/[0.06] flex flex-col select-none">
      <div className="flex items-center justify-between px-4 pt-3 pb-1 flex-shrink-0">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary/50">
          Kronoloji — {timelineStart < 0 ? `MÖ ${Math.abs(timelineStart)}` : timelineStart} – MS {timelineEnd}
        </p>
        {selectedEntityId && (
          <button
            onClick={() => onSelect(null)}
            className="font-sans text-[10px] text-secondary/50 hover:text-secondary transition-colors"
          >
            Tümünü göster ✕
          </button>
        )}
      </div>

      <div ref={scrollRef} className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar px-4 pb-3">
        <div className="relative min-w-[900px] h-full pt-6">
          {/* Year axis */}
          <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none">
            {TICKS.map((year) => (
              <div
                key={year}
                className="absolute top-0 flex flex-col items-center"
                style={{ left: `${yearToPercent(year)}%` }}
              >
                <span className="font-sans text-[9px] text-secondary/40 whitespace-nowrap">
                  {formatYear(year)}
                </span>
                <div className="w-px h-2 bg-white/10 mt-0.5" />
              </div>
            ))}
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 top-6 pointer-events-none">
            {TICKS.map((year) => (
              <div
                key={year}
                className="absolute top-0 bottom-0 w-px bg-white/[0.04]"
                style={{ left: `${yearToPercent(year)}%` }}
              />
            ))}
          </div>

          {/* Entity bars */}
          <div className="relative space-y-1 mt-0">
            {sorted.map((entity, i) => {
              const leftPct = yearToPercent(entity.startYear);
              const widthPct = yearToPercent(entity.endYear) - leftPct;
              const isSelected = entity.id === selectedEntityId;
              const isDimmed = selectedEntityId !== null && !isSelected;

              const entityEvents = events.filter((e) => e.entityId === entity.id);

              return (
                <motion.div
                  key={entity.id}
                  className="relative flex items-center"
                  style={{ height: 28 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  <motion.div
                    className="absolute h-6 rounded-full cursor-pointer flex items-center px-2"
                    style={{
                      left: `${leftPct}%`,
                      width: `${Math.max(widthPct, 2)}%`,
                      backgroundColor: isSelected ? entity.color : `${entity.color}55`,
                      border: `1px solid ${entity.color}${isSelected ? "ff" : "44"}`,
                      opacity: isDimmed ? 0.25 : 1,
                      boxShadow: isSelected ? `0 0 12px 2px ${entity.color}44` : "none",
                    }}
                    onClick={() => onSelect(isSelected ? null : entity.id)}
                    whileHover={{ scale: 1.02 }}
                    animate={{ scale: isSelected ? 1.04 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      className="font-sans text-[9px] whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{
                        color: isSelected ? "#fff" : entity.color,
                        fontWeight: isSelected ? 600 : 400,
                      }}
                    >
                      {entity.name}
                    </span>
                  </motion.div>

                  {entityEvents.map((ev) => {
                    const evLeft = yearToPercent(ev.year);
                    if (evLeft < leftPct || evLeft > leftPct + widthPct) return null;
                    return (
                      <motion.div
                        key={ev.id}
                        className="absolute w-2 h-2 rounded-full border border-white/60 z-10"
                        style={{
                          left: `${evLeft}%`,
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "#fff",
                          opacity: isDimmed ? 0.1 : 0.9,
                        }}
                        title={ev.title}
                        initial={{ scale: 0 }}
                        animate={{ scale: isSelected ? 1.3 : 1, opacity: isDimmed ? 0.1 : 0.9 }}
                        transition={{ duration: 0.3 }}
                      />
                    );
                  })}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
