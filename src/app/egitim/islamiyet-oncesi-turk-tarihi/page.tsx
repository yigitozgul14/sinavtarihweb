"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

import CivilizationDetail from "@/components/PreIslamic/CivilizationDetail";
import ActiveCulturesPanel from "@/components/PreIslamic/ActiveCulturesPanel";

// Both map and player bar depend on client-only APIs (D3 projection / range input)
const IslamiyetOncesiMap = dynamic(
  () => import("@/components/PreIslamic/IslamiyetOncesiMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center" style={{ background: "#FAF6F0" }}>
        <span className="font-sans text-xs text-[#7A6A58]/40 uppercase tracking-widest">
          Harita yükleniyor…
        </span>
      </div>
    ),
  }
);

const MediaPlayerBar = dynamic(
  () => import("@/components/PreIslamic/MediaPlayerBar"),
  { ssr: false }
);

import civilizationsData from "@/data/islamiyet-oncesi/civilizations.json";
import eventsData from "@/data/islamiyet-oncesi/events.json";
import transitionsData from "@/data/islamiyet-oncesi/transitions.json";

import type { Civilization, CivEvent, CivTransition } from "@/types";

const civilizations = civilizationsData as Civilization[];
const events = eventsData as CivEvent[];
const transitions = transitionsData as CivTransition[];

const MIN_YEAR = -700;
const MAX_YEAR = 1300;

// All significant years (civ starts/ends + events) — sorted
const KEY_YEARS = [
  // civ starts
  -700, -220, 375, 552, 562, 650, 681, 682, 744, 766, 840, 850, 860, 895, 900, 1000,
  // civ ends
  -200, 216, 469, 630, 744, 823, 840, 864, 965, 1050, 1091, 1212, 1236, 1241, 1300,
  // events
  -530, -214, -209, 375, 434, 447, 452, 557, 626, 639, 682, 732, 740, 751, 762, 813, 864, 922, 1071, 1091,
].filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);

function getIncrement(year: number, speed: number): number {
  const nextKey = KEY_YEARS.find((y) => y > year);
  if (!nextKey) return speed * 5;

  const gap = nextKey - year;
  let baseInc: number;
  if (gap <= 30) baseInc = speed * 5;
  else if (gap <= 100) baseInc = speed * 15;
  else if (gap <= 300) baseInc = speed * 35;
  else baseInc = speed * 60;

  // Never overshoot the next key year
  return Math.min(baseInc, gap);
}

export default function IslamiyetOncesiTurkTarihiPage() {
  const [selectedCivId, setSelectedCivId] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(MIN_YEAR);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<0.5 | 1 | 2>(1);

  const selectedCiv = civilizations.find((c) => c.id === selectedCivId) ?? null;

  const visibleCivs = civilizations.filter(
    (c) => currentYear >= c.startYear && currentYear <= c.endYear
  );

  // Playback interval
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrentYear((y) => {
        if (y >= MAX_YEAR) {
          setIsPlaying(false);
          return MAX_YEAR;
        }
        return y + getIncrement(y, speed);
      });
    }, 100);
    return () => clearInterval(id);
  }, [isPlaying, speed]);

  // Spacebar toggle
  const togglePlay = useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === " " && e.target === document.body) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [togglePlay]);

  return (
    <main className="flex flex-col w-screen h-screen overflow-hidden" style={{ background: "#FAF6F0" }}>
      {/* Top bar */}
      <div
        className="flex items-center gap-4 px-5 py-3 border-b flex-shrink-0 z-20"
        style={{ background: "#FAF6F0", borderColor: "rgba(0,0,0,0.08)" }}
      >
        <Link
          href="/egitim"
          className="font-sans text-xs hover:opacity-70 transition-opacity flex items-center gap-1"
          style={{ color: "#7A6A58" }}
        >
          ← Eğitim
        </Link>
        <div className="w-px h-4" style={{ background: "rgba(0,0,0,0.12)" }} />
        <h1 className="font-display text-lg font-light tracking-wide" style={{ color: "#2A1F12" }}>
          İslamiyet Öncesi Türk Tarihi
        </h1>
        <div className="ml-auto font-sans text-[10px] uppercase tracking-wider" style={{ color: "#7A6A58" }}>
          {civilizations.length} Medeniyet · {events.length} Olay
        </div>
      </div>

      {/* Map area (~88% height) */}
      <div className="relative flex-1 min-h-0">
        <IslamiyetOncesiMap
          civilizations={civilizations}
          events={events}
          transitions={transitions}
          visibleCivs={visibleCivs}
          currentYear={currentYear}
          selectedCivId={selectedCivId}
          onCivSelect={setSelectedCivId}
        />

        {/* Active cultures panel (left overlay) */}
        <ActiveCulturesPanel
          visibleCivs={visibleCivs}
          selectedCivId={selectedCivId}
          onSelect={setSelectedCivId}
        />

        {/* Detail panel overlay (right) */}
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

        {/* Hint when nothing selected and not playing */}
        {!selectedCivId && !isPlaying && currentYear === MIN_YEAR && (
          <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
            <p
              className="font-sans text-[11px] px-3 py-1.5 rounded-full border"
              style={{
                color: "#7A6A58",
                background: "rgba(250,246,240,0.85)",
                borderColor: "rgba(0,0,0,0.08)",
              }}
            >
              ▶ Oynat tuşuna basarak tarihi keşfet
            </p>
          </div>
        )}
      </div>

      {/* Media player bar (~52px height) */}
      <div className="flex-shrink-0" style={{ height: "52px" }}>
        <MediaPlayerBar
          currentYear={currentYear}
          minYear={MIN_YEAR}
          maxYear={MAX_YEAR}
          isPlaying={isPlaying}
          speed={speed}
          onYearChange={(y) => {
            setCurrentYear(y);
            setIsPlaying(false);
          }}
          onTogglePlay={togglePlay}
          onSpeedChange={setSpeed}
        />
      </div>
    </main>
  );
}
