"use client";

import { motion } from "framer-motion";
import type { Civilization, CivEvent, CivTransition } from "@/types";

interface CivilizationDetailProps {
  civ: Civilization;
  events: CivEvent[];
  transitions: CivTransition[];
  civilizations: Civilization[];
  onClose: () => void;
}

const EVENT_TYPE_LABEL: Record<string, string> = {
  savaş: "Savaş",
  antlaşma: "Antlaşma",
  din: "Dinî Kabul",
  kuruluş: "Kuruluş",
  yıkılış: "Yıkılış",
  göç: "Göç",
  kültür: "Kültür",
  siyasi: "Siyasi",
};

const EVENT_TYPE_COLOR: Record<string, string> = {
  savaş: "#D63A3A",
  antlaşma: "#5090F0",
  din: "#C8A030",
  kuruluş: "#30A850",
  yıkılış: "#9B5EC0",
  göç: "#E8A045",
  kültür: "#C850A0",
  siyasi: "#20A89A",
};

function formatYear(year: number): string {
  return year < 0 ? `MÖ ${Math.abs(year)}` : `MS ${year}`;
}

export default function CivilizationDetail({
  civ,
  events,
  transitions,
  civilizations,
  onClose,
}: CivilizationDetailProps) {
  const civEvents = events.filter((e) => e.civId === civ.id);
  const outgoing = transitions.filter((t) => t.from === civ.id);
  const incoming = transitions.filter((t) => t.to === civ.id);

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="w-full max-w-sm bg-[#151c28]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Header */}
      <div
        className="px-5 pt-5 pb-4"
        style={{ borderBottom: `1px solid ${civ.color}22` }}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: civ.color }}>
              {formatYear(civ.startYear)} — {formatYear(civ.endYear)}
            </p>
            <h2 className="font-display text-2xl text-primary font-light leading-tight">
              {civ.name}
            </h2>
            <p className="font-sans text-xs text-secondary mt-1">{civ.location}</p>
          </div>
          <button
            onClick={onClose}
            className="text-secondary/50 hover:text-secondary transition-colors mt-1 flex-shrink-0 text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {civ.ruler !== "-" && (
          <p className="font-sans text-xs mt-3 text-secondary/80">
            <span className="text-secondary/50">Önemli Hükümdar: </span>
            <span className="text-primary/90">{civ.ruler}</span>
          </p>
        )}

        <p className="font-sans text-xs text-secondary/70 leading-relaxed mt-3">
          {civ.summary}
        </p>
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto custom-scrollbar max-h-[55vh] p-5 space-y-5">
        {/* Facts */}
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-secondary/50 mb-2">
            Önemli Bilgiler
          </p>
          <ul className="space-y-2">
            {civ.facts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: civ.color }}
                />
                <p className="font-sans text-xs text-secondary/80 leading-relaxed">
                  {fact}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Events */}
        {civEvents.length > 0 && (
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-secondary/50 mb-2">
              Önemli Olaylar
            </p>
            <div className="space-y-2">
              {civEvents.map((ev) => (
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
                      className="px-1.5 py-0.5 rounded text-[9px] font-sans font-bold uppercase tracking-wider"
                      style={{
                        background: `${EVENT_TYPE_COLOR[ev.type] ?? "#888"}22`,
                        color: EVENT_TYPE_COLOR[ev.type] ?? "#888",
                      }}
                    >
                      {EVENT_TYPE_LABEL[ev.type] ?? ev.type}
                    </span>
                    <span className="font-sans text-[10px] text-secondary/60">
                      {formatYear(ev.year)}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-primary/90 font-medium">
                    {ev.title}
                  </p>
                  <p className="font-sans text-[11px] text-secondary/70 leading-relaxed mt-1">
                    {ev.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Connections */}
        {(incoming.length > 0 || outgoing.length > 0) && (
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-secondary/50 mb-2">
              Bağlantılar
            </p>
            <div className="space-y-1.5">
              {incoming.map((t, i) => {
                const fromCiv = civilizations.find((c) => c.id === t.from);
                return (
                  <div key={`in-${i}`} className="flex items-center gap-2 text-xs font-sans text-secondary/70">
                    <span className="text-[10px]">←</span>
                    <span style={{ color: fromCiv?.color }}>{fromCiv?.name}</span>
                    <span className="text-secondary/40 text-[10px]">{t.label}</span>
                  </div>
                );
              })}
              {outgoing.map((t, i) => {
                const toCiv = civilizations.find((c) => c.id === t.to);
                return (
                  <div key={`out-${i}`} className="flex items-center gap-2 text-xs font-sans text-secondary/70">
                    <span className="text-[10px]">→</span>
                    <span style={{ color: toCiv?.color }}>{toCiv?.name}</span>
                    <span className="text-secondary/40 text-[10px]">{t.label}</span>
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
