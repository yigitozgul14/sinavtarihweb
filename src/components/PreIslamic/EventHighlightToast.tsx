"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CivEvent, Civilization } from "@/types";

const EVENT_ICONS: Record<string, string> = {
  savaş: "⚔",
  antlaşma: "📜",
  din: "✦",
  göç: "→",
  kültür: "◈",
  siyasi: "◉",
  kuruluş: "★",
  yıkılış: "✕",
};

function formatYear(year: number): string {
  return year < 0 ? `MÖ ${Math.abs(year)}` : `MS ${year}`;
}

interface EventHighlightToastProps {
  event: CivEvent | null;
  civilizations: Civilization[];
}

export default function EventHighlightToast({
  event,
  civilizations,
}: EventHighlightToastProps) {
  const civ = event ? civilizations.find((c) => c.id === event.civId) : null;

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-4 left-4 z-[5] pointer-events-none"
        >
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl border shadow-lg backdrop-blur-sm"
            style={{
              background: "rgba(18,23,31,0.90)",
              borderColor: civ ? `${civ.color}55` : "rgba(255,255,255,0.12)",
            }}
          >
            {/* Event type icon */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0"
              style={{
                background: civ ? `${civ.color}22` : "rgba(255,255,255,0.08)",
                border: `1px solid ${civ?.color ?? "#888"}44`,
              }}
            >
              {EVENT_ICONS[event.type] ?? "●"}
            </div>

            {/* Event info */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="font-sans text-[10px] uppercase tracking-widest font-semibold"
                  style={{ color: civ?.color ?? "#E8C88A" }}
                >
                  {formatYear(event.year)}
                </span>
                {civ && (
                  <>
                    <span className="font-sans text-[10px] text-white/25">·</span>
                    <span className="font-sans text-[10px] text-white/45 truncate">
                      {civ.name}
                    </span>
                  </>
                )}
              </div>
              <p className="font-display text-sm text-white/90 leading-tight mt-0.5 max-w-xs truncate">
                {event.title}
              </p>
            </div>

            {/* Progress bar showing 2.5s countdown */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] rounded-b-xl"
              style={{ background: civ?.color ?? "#E8C88A", opacity: 0.6 }}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 2.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
