"use client";

import { AnimatePresence, motion } from "framer-motion";
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

interface EventHighlightToastProps {
  event: PeriodEntityEvent | null;
  entities: PeriodEntity[];
}

export default function EventHighlightToast({ event, entities }: EventHighlightToastProps) {
  const entity = event ? entities.find((e) => e.id === event.entityId) : null;

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
              borderColor: entity ? `${entity.color}55` : "rgba(255,255,255,0.12)",
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0"
              style={{
                background: entity ? `${entity.color}22` : "rgba(255,255,255,0.08)",
                border: `1px solid ${entity?.color ?? "#888"}44`,
              }}
            >
              {EVENT_ICONS[event.type] ?? "●"}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="font-sans text-[10px] uppercase tracking-widest font-semibold"
                  style={{ color: entity?.color ?? "#E8C88A" }}
                >
                  {formatYear(event.year)}
                </span>
                {entity && (
                  <>
                    <span className="font-sans text-[10px] text-white/25">·</span>
                    <span className="font-sans text-[10px] text-white/45 truncate">
                      {entity.name}
                    </span>
                  </>
                )}
              </div>
              <p className="font-display text-sm text-white/90 leading-tight mt-0.5 max-w-xs truncate">
                {event.title}
              </p>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 h-[2px] rounded-b-xl"
              style={{ background: entity?.color ?? "#E8C88A", opacity: 0.6 }}
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
