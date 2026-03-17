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

// Her tick'te kaç yıl ilerlenecek — aktif medeniyetlerin en kısa ömürlüsüne göre adapte olur.
// Hedef: en kısa ömürlü aktif medeniyet ekranda en az MIN_SCREEN_SECONDS saniye kalsın.
const MIN_SCREEN_SECONDS = 4; // 1x hızda minimum ekran süresi
const TICKS_PER_SECOND = 10;  // setInterval(100ms)

const MAX_BUFFER = 50;

// Compute asymmetric fade window per civ based on transition gaps.
// fadeIn  = how many years before startYear the civ starts appearing
// fadeOut = how many years after  endYear  the civ keeps appearing
// Clamped to half the gap toward the related (transition) successor/predecessor,
// so directly-connected civs never visually overlap.
function getCivFadeWindow(
  civ: Civilization,
  allCivs: Civilization[],
  allTransitions: CivTransition[]
): { fadeIn: number; fadeOut: number } {
  const successorIds = allTransitions.filter((t) => t.from === civ.id).map((t) => t.to);
  const predecessorIds = allTransitions.filter((t) => t.to === civ.id).map((t) => t.from);

  const successors = allCivs.filter((c) => successorIds.includes(c.id));
  const predecessors = allCivs.filter((c) => predecessorIds.includes(c.id));

  const gapAfter =
    successors.length > 0
      ? Math.min(...successors.map((s) => Math.max(0, s.startYear - civ.endYear)))
      : Infinity;
  const gapBefore =
    predecessors.length > 0
      ? Math.min(...predecessors.map((p) => Math.max(0, civ.startYear - p.endYear)))
      : Infinity;

  return {
    fadeIn:  Math.min(MAX_BUFFER, Math.floor(gapBefore / 2)),
    fadeOut: Math.min(MAX_BUFFER, Math.floor(gapAfter  / 2)),
  };
}

function getIncrement(year: number, speed: number): number {
  const activeCivs = civilizations.filter(
    (c) => c.startYear <= year && c.endYear >= year
  );
  if (activeCivs.length === 0) return speed * 5;

  const minLifespan = Math.min(...activeCivs.map((c) => c.endYear - c.startYear));

  // Bu lifespan'in en az MIN_SCREEN_SECONDS / speed saniye görünmesi için gereken max increment
  const maxIncrement = minLifespan / (MIN_SCREEN_SECONDS * TICKS_PER_SECOND / speed);

  // Alt sınır: çok yavaş donmaması için; üst sınır: base hız
  return Math.min(speed * 5, Math.max(speed * 0.5, maxIncrement));
}

export default function IslamiyetOncesiTurkTarihiPage() {
  const [selectedCivId, setSelectedCivId] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(MIN_YEAR);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<0.5 | 1 | 2>(1);

  const selectedCiv = civilizations.find((c) => c.id === selectedCivId) ?? null;

  const handleCivSelect = useCallback((id: string | null) => {
    setSelectedCivId(id);
    if (id !== null) setIsPlaying(false);
  }, []);

  // Each civ's fade window is clamped to avoid overlapping with transition-connected civs.
  const visibleCivs = civilizations.filter((c) => {
    const { fadeIn, fadeOut } = getCivFadeWindow(c, civilizations, transitions);
    return currentYear >= c.startYear - fadeIn && currentYear <= c.endYear + fadeOut;
  });

  // Playback — requestAnimationFrame for smooth 60fps progress
  useEffect(() => {
    if (!isPlaying) return;

    let rafId: number;
    let lastTimestamp: number | null = null;

    function frame(timestamp: number) {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
        rafId = requestAnimationFrame(frame);
        return;
      }

      // Cap delta to 100ms to avoid big jumps when tab was hidden
      const delta = Math.min(timestamp - lastTimestamp, 100);
      lastTimestamp = timestamp;

      setCurrentYear((y) => {
        if (y >= MAX_YEAR) {
          setIsPlaying(false);
          return MAX_YEAR;
        }
        // getIncrement returns years-per-100ms; scale by actual elapsed fraction
        return y + getIncrement(y, speed) * (delta / 100);
      });

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
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
          onCivSelect={handleCivSelect}
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
