"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

import IslamiyetOncesiMap from "@/components/PreIslamic/IslamiyetOncesiMap";
import CivilizationTimeline from "@/components/PreIslamic/CivilizationTimeline";
import CivilizationDetail from "@/components/PreIslamic/CivilizationDetail";

import civilizationsData from "@/data/islamiyet-oncesi/civilizations.json";
import eventsData from "@/data/islamiyet-oncesi/events.json";
import transitionsData from "@/data/islamiyet-oncesi/transitions.json";

import type { Civilization, CivEvent, CivTransition } from "@/types";

const civilizations = civilizationsData as Civilization[];
const events = eventsData as CivEvent[];
const transitions = transitionsData as CivTransition[];

export default function IslamiyetOncesiTurkTarihiPage() {
  const [selectedCivId, setSelectedCivId] = useState<string | null>(null);

  const selectedCiv = civilizations.find((c) => c.id === selectedCivId) ?? null;

  return (
    <main className="flex flex-col w-screen h-screen overflow-hidden bg-[#0D1117]">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-5 py-3 border-b border-white/[0.06] flex-shrink-0 bg-[#0D1117]/90 backdrop-blur z-20">
        <Link
          href="/egitim"
          className="font-sans text-xs text-secondary/60 hover:text-secondary transition-colors flex items-center gap-1"
        >
          ← Eğitim
        </Link>
        <div className="w-px h-4 bg-white/10" />
        <h1 className="font-display text-lg text-primary font-light tracking-wide">
          İslamiyet Öncesi Türk Tarihi
        </h1>
        <div className="ml-auto font-sans text-[10px] text-secondary/40 uppercase tracking-wider">
          {civilizations.length} Medeniyet · {events.length} Olay
        </div>
      </div>

      {/* Map area (~60% height) */}
      <div className="relative flex-1 min-h-0" style={{ flexBasis: "62%" }}>
        <IslamiyetOncesiMap
          civilizations={civilizations}
          events={events}
          transitions={transitions}
          selectedCivId={selectedCivId}
          onCivSelect={setSelectedCivId}
        />

        {/* Detail panel overlay */}
        <div className="absolute top-4 right-4 z-10">
          <AnimatePresence mode="wait">
            {selectedCiv && (
              <CivilizationDetail
                key={selectedCiv.id}
                civ={selectedCiv}
                events={events}
                transitions={transitions}
                civilizations={civilizations}
                onClose={() => setSelectedCivId(null)}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Hint when nothing selected */}
        {!selectedCivId && (
          <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
            <p className="font-sans text-[11px] text-secondary/40 bg-[#0D1117]/60 px-3 py-1.5 rounded-full border border-white/[0.06]">
              Haritadaki noktalara veya timeline'a tıklayın
            </p>
          </div>
        )}
      </div>

      {/* Timeline area (~38% height) */}
      <div style={{ flexBasis: "38%", flexShrink: 0 }} className="min-h-0">
        <CivilizationTimeline
          civilizations={civilizations}
          events={events}
          selectedCivId={selectedCivId}
          onSelect={setSelectedCivId}
        />
      </div>
    </main>
  );
}
