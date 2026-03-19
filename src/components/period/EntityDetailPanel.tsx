"use client";

import { motion } from "framer-motion";
import { formatYear } from "@/lib/format";
import type { PeriodEntity, PeriodEntityEvent, PeriodEntityTransition } from "@/types/period-data";

interface EntityDetailPanelProps {
  entity: PeriodEntity;
  events: PeriodEntityEvent[];
  transitions: PeriodEntityTransition[];
  entities: PeriodEntity[];
  onClose: () => void;
}

const EVENT_TYPE_LABEL: Record<string, string> = {
  savaş:    "Savaş",
  antlaşma: "Antlaşma",
  din:      "Dinî Kabul",
  kuruluş:  "Kuruluş",
  yıkılış:  "Yıkılış",
  göç:      "Göç",
  kültür:   "Kültür",
  siyasi:   "Siyasi",
};

const EVENT_TYPE_COLOR: Record<string, string> = {
  savaş:    "#D63A3A",
  antlaşma: "#5090F0",
  din:      "#C8A030",
  kuruluş:  "#30A850",
  yıkılış:  "#9B5EC0",
  göç:      "#E8A045",
  kültür:   "#C850A0",
  siyasi:   "#20A89A",
};

export default function EntityDetailPanel({
  entity,
  events,
  transitions,
  entities,
  onClose,
}: EntityDetailPanelProps) {
  const entityEvents = events.filter((e) => e.entityId === entity.id);
  const outgoing = transitions.filter((t) => t.from === entity.id);
  const incoming = transitions.filter((t) => t.to === entity.id);

  const ruler = entity.meta.ruler as string | undefined;
  const location = entity.meta.location as string | undefined;
  const summary = entity.meta.summary as string | undefined;
  const facts = entity.meta.facts as string[] | undefined;

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="w-full max-w-sm bg-[#151c28]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4" style={{ borderBottom: `1px solid ${entity.color}22` }}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] mb-1" style={{ color: entity.color }}>
              {formatYear(entity.startYear)} — {formatYear(entity.endYear)}
            </p>
            <h2 className="font-display text-3xl text-primary font-light leading-tight">
              {entity.name}
            </h2>
            {location && (
              <p className="font-sans text-sm text-secondary mt-1">{location}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-secondary/50 hover:text-secondary transition-colors mt-1 flex-shrink-0 text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {ruler && ruler !== "-" && (
          <p className="font-sans text-sm mt-3 text-secondary/80">
            <span className="text-secondary/50">Önemli Hükümdar: </span>
            <span className="text-primary/90">{ruler}</span>
          </p>
        )}

        {summary && (
          <p className="font-sans text-sm text-secondary/70 leading-relaxed mt-3">{summary}</p>
        )}
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto custom-scrollbar max-h-[55vh] p-5 space-y-5">
        {/* Facts */}
        {facts && facts.length > 0 && (
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-secondary/50 mb-2">
              Önemli Bilgiler
            </p>
            <ul className="space-y-2">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: entity.color }} />
                  <p className="font-sans text-sm text-secondary/80 leading-relaxed">{fact}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Events */}
        {entityEvents.length > 0 && (
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-secondary/50 mb-2">
              Önemli Olaylar
            </p>
            <div className="space-y-2">
              {entityEvents.map((ev) => (
                <div
                  key={ev.id}
                  className="rounded-xl p-3 border"
                  style={{
                    background: `${EVENT_TYPE_COLOR[ev.type] ?? "#888"}0d`,
                    borderColor: `${EVENT_TYPE_COLOR[ev.type] ?? "#888"}22`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-sans font-bold uppercase tracking-wider"
                      style={{
                        background: `${EVENT_TYPE_COLOR[ev.type] ?? "#888"}22`,
                        color: EVENT_TYPE_COLOR[ev.type] ?? "#888",
                      }}
                    >
                      {EVENT_TYPE_LABEL[ev.type] ?? ev.type}
                    </span>
                    <span className="font-sans text-xs text-secondary/60">{formatYear(ev.year)}</span>
                  </div>
                  <p className="font-sans text-sm text-primary/90 font-medium">{ev.title}</p>
                  <p className="font-sans text-xs text-secondary/70 leading-relaxed mt-1">{ev.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Connections */}
        {(incoming.length > 0 || outgoing.length > 0) && (
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-secondary/50 mb-2">
              Bağlantılar
            </p>
            <div className="space-y-1.5">
              {incoming.map((t, i) => {
                const fromEntity = entities.find((e) => e.id === t.from);
                return (
                  <div key={`in-${i}`} className="flex items-center gap-2 text-sm font-sans text-secondary/70">
                    <span className="text-xs">←</span>
                    <span style={{ color: fromEntity?.color }}>{fromEntity?.name}</span>
                    <span className="text-secondary/40 text-xs">{t.label}</span>
                  </div>
                );
              })}
              {outgoing.map((t, i) => {
                const toEntity = entities.find((e) => e.id === t.to);
                return (
                  <div key={`out-${i}`} className="flex items-center gap-2 text-sm font-sans text-secondary/70">
                    <span className="text-xs">→</span>
                    <span style={{ color: toEntity?.color }}>{toEntity?.name}</span>
                    <span className="text-secondary/40 text-xs">{t.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
