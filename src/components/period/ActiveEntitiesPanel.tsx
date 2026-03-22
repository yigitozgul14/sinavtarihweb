"use client";

import { AnimatePresence, motion } from "framer-motion";
import { formatYear } from "@/lib/format";
import type { PeriodEntity } from "@/types/period-data";

interface ActiveEntitiesPanelProps {
  visibleEntities: PeriodEntity[];
  selectedEntityId: string | null;
  onSelect: (id: string | null) => void;
  onHover: (id: string | null) => void;
}

export default function ActiveEntitiesPanel({
  visibleEntities,
  selectedEntityId,
  onSelect,
  onHover,
}: ActiveEntitiesPanelProps) {
  if (visibleEntities.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute top-4 left-4 z-10 bg-background/85 backdrop-blur border border-white/[0.08] rounded-xl p-3 min-w-[180px] max-w-[220px] shadow-xl"
    >
      <p className="font-sans text-[9px] text-secondary/40 uppercase tracking-widest mb-2">
        Aktif Kültürler
      </p>
      <ul className="flex flex-col gap-1">
        <AnimatePresence mode="popLayout">
          {visibleEntities.map((entity) => {
            const isSelected = entity.id === selectedEntityId;
            return (
              <motion.li
                key={entity.id}
                layout
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  onClick={() => onSelect(isSelected ? null : entity.id)}
                  onMouseEnter={() => onHover(entity.id)}
                  onMouseLeave={() => onHover(null)}
                  className={`w-full flex items-center gap-2 text-left rounded-lg px-2 py-1 transition-colors ${
                    isSelected ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: entity.color }} />
                  <span className="flex-1 min-w-0">
                    <span className={`font-sans text-[11px] leading-tight block truncate ${isSelected ? "text-primary" : "text-secondary/70"}`}>
                      {entity.name}
                    </span>
                    <span className="font-sans text-[9px] text-secondary/30 block">
                      {formatYear(entity.startYear)} – {formatYear(entity.endYear)}
                    </span>
                  </span>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
}
