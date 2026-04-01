"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

import CivilizationDetail from "@/components/PreIslamic/CivilizationDetail";
import ActiveCulturesPanel from "@/components/PreIslamic/ActiveCulturesPanel";
import EventHighlightToast from "@/components/PreIslamic/EventHighlightToast";

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

const CultureBook = dynamic(
  () => import("@/components/PreIslamic/CultureBook"),
  { ssr: false }
);

const QuizSection = dynamic(
  () => import("@/components/PreIslamic/QuizSection"),
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

// Slow zone: medeniyet kuruluş/kapanış yılına yaklaşıldığında otomatik yavaşlama
const SLOW_ZONE_YEARS = 15;   // ±15 yıl içinde slow zone aktif
const SLOW_ZONE_FACTOR = 0.2; // increment'i 5x yavaşlat

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
  // Slow zone: herhangi bir medeniyetin startYear veya endYear'ına ±SLOW_ZONE_YEARS içindeyse yavaşla
  const inSlowZone = civilizations.some(
    (c) =>
      Math.abs(year - c.startYear) <= SLOW_ZONE_YEARS ||
      Math.abs(year - c.endYear) <= SLOW_ZONE_YEARS
  );

  const activeCivs = civilizations.filter(
    (c) => c.startYear <= year && c.endYear >= year
  );

  if (activeCivs.length === 0) {
    const base = speed * 5;
    return inSlowZone ? Math.max(speed * 0.2, base * SLOW_ZONE_FACTOR) : base;
  }

  const minLifespan = Math.min(...activeCivs.map((c) => c.endYear - c.startYear));

  // Bu lifespan'in en az MIN_SCREEN_SECONDS / speed saniye görünmesi için gereken max increment
  const maxIncrement = minLifespan / (MIN_SCREEN_SECONDS * TICKS_PER_SECOND / speed);

  // Alt sınır: çok yavaş donmaması için; üst sınır: base hız
  const increment = Math.min(speed * 5, Math.max(speed * 0.5, maxIncrement));

  // Slow zone'daysa increment'i düşür (ama speed * 0.2'nin altına inme)
  return inSlowZone ? Math.max(speed * 0.2, increment * SLOW_ZONE_FACTOR) : increment;
}

// Harici event türleri (kuruluş/yıkılış hariç) — auto-pause için
const HARICI_EVENT_TYPES = new Set(["savaş", "antlaşma", "din", "göç", "kültür", "siyasi"]);

type AppPhase = "timeline" | "culture" | "quiz";

export default function IslamiyetOncesiTurkTarihiPage() {
  const [appPhase, setAppPhase] = useState<AppPhase>("timeline");
  const [selectedCivId, setSelectedCivId] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(MIN_YEAR);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<0.5 | 1 | 2>(1);
  const [highlightedEvent, setHighlightedEvent] = useState<CivEvent | null>(null);

  // Refs for auto-pause mechanism
  const pausedForEventsRef = useRef<Set<string>>(new Set());
  const autoResumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevYearRef = useRef<number>(MIN_YEAR);
  const isPlayingRef = useRef(false);

  const selectedCiv = civilizations.find((c) => c.id === selectedCivId) ?? null;

  // Keep isPlayingRef in sync for use inside currentYear effect
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Event detection: harici event'lere ulaşıldığında 2.5s auto-pause
  useEffect(() => {
    const prevYear = Math.floor(prevYearRef.current);
    const currYear = Math.floor(currentYear);
    prevYearRef.current = currentYear;

    if (!isPlayingRef.current) return;
    if (currYear === prevYear) return;

    const triggered = events.find(
      (e) =>
        HARICI_EVENT_TYPES.has(e.type) &&
        e.year > prevYear &&
        e.year <= currYear &&
        !pausedForEventsRef.current.has(e.id)
    );

    if (triggered) {
      pausedForEventsRef.current.add(triggered.id);
      setHighlightedEvent(triggered);
      setIsPlaying(false);
      autoResumeTimeoutRef.current = setTimeout(() => {
        setHighlightedEvent(null);
        setIsPlaying(true);
        autoResumeTimeoutRef.current = null;
      }, 2500);
    }
  }, [currentYear]);

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

  // Spacebar toggle — auto-resume timeout temizlenir
  const togglePlay = useCallback(() => {
    if (autoResumeTimeoutRef.current) {
      clearTimeout(autoResumeTimeoutRef.current);
      autoResumeTimeoutRef.current = null;
      setHighlightedEvent(null);
    }
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
        style={{
          background: appPhase === "timeline" ? "#FAF6F0" : "#12171F",
          borderColor: appPhase === "timeline" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)",
        }}
      >
        <Link
          href="/egitim"
          className="font-sans text-xs hover:opacity-70 transition-opacity flex items-center gap-1"
          style={{ color: appPhase === "timeline" ? "#7A6A58" : "rgba(192,184,165,0.5)" }}
        >
          ← Eğitim
        </Link>
        <div className="w-px h-4" style={{ background: appPhase === "timeline" ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.1)" }} />
        <h1
          className="font-display text-lg font-light tracking-wide"
          style={{ color: appPhase === "timeline" ? "#2A1F12" : "#C8A96E" }}
        >
          {appPhase === "timeline" && "İslamiyet Öncesi Türk Tarihi"}
          {appPhase === "culture" && "Kültür ve Medeniyet"}
          {appPhase === "quiz" && "Quiz"}
        </h1>
        <div className="ml-auto font-sans text-[10px] uppercase tracking-wider" style={{ color: appPhase === "timeline" ? "#7A6A58" : "rgba(192,184,165,0.4)" }}>
          {appPhase === "timeline" && `${civilizations.length} Medeniyet · ${events.length} Olay`}
          {appPhase === "culture" && "Kültür & Medeniyet"}
          {appPhase === "quiz" && "Test"}
        </div>
      </div>

      {/* ─── Timeline fazı ─────────────────────────────────────── */}
      {appPhase === "timeline" && (
        <>
          {/* Map area */}
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

            <ActiveCulturesPanel
              visibleCivs={visibleCivs}
              selectedCivId={selectedCivId}
              onSelect={handleCivSelect}
            />

            <EventHighlightToast event={highlightedEvent} civilizations={civilizations} />

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

            {/* Hint */}
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

            {/* Kültür ve Medeniyete Geç butonu */}
            <AnimatePresence>
              {currentYear >= MAX_YEAR && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
                >
                  <button
                    onClick={() => setAppPhase("culture")}
                    className="font-sans text-sm font-medium px-6 py-3 rounded-full border shadow-lg transition-all hover:scale-105"
                    style={{
                      background: "#2A1F12",
                      color: "#F5E6C8",
                      borderColor: "#8B6914",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Kültür ve Medeniyet Bilgilerine Geç →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Media player bar */}
          <div className="flex-shrink-0 relative z-30" style={{ height: "52px" }}>
            <MediaPlayerBar
              currentYear={currentYear}
              minYear={MIN_YEAR}
              maxYear={MAX_YEAR}
              isPlaying={isPlaying}
              speed={speed}
              events={events}
              civilizations={civilizations}
              onYearChange={(y) => {
                prevYearRef.current = y;
                for (const eventId of [...pausedForEventsRef.current]) {
                  const ev = events.find((e) => e.id === eventId);
                  if (ev && ev.year >= Math.floor(y)) {
                    pausedForEventsRef.current.delete(eventId);
                  }
                }
                if (autoResumeTimeoutRef.current) {
                  clearTimeout(autoResumeTimeoutRef.current);
                  autoResumeTimeoutRef.current = null;
                  setHighlightedEvent(null);
                }
                setCurrentYear(y);
                setIsPlaying(false);
              }}
              onTogglePlay={togglePlay}
              onSpeedChange={setSpeed}
            />
          </div>
        </>
      )}

      {/* ─── Kültür fazı ─────────────────────────────────────────── */}
      {appPhase === "culture" && (
        <div className="flex-1 min-h-0">
          <CultureBook onGoToQuiz={() => setAppPhase("quiz")} />
        </div>
      )}

      {/* ─── Quiz fazı ───────────────────────────────────────────── */}
      {appPhase === "quiz" && (
        <div className="flex-1 min-h-0">
          <QuizSection onBack={() => setAppPhase("timeline")} />
        </div>
      )}
    </main>
  );
}
