"use client";

import { useState, useEffect, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

import { PERIOD_DATA_REGISTRY } from "@/data/periods/registry";
import { usePeriodPhase } from "@/hooks/usePeriodPhase";
import { usePeriodPlayback } from "@/hooks/usePeriodPlayback";
import { usePeriodEntities } from "@/hooks/usePeriodEntities";
import type { PeriodDataBundle, PeriodConfig } from "@/types/period-data";

// Dynamic imports — each loads only when the relevant phase is active
const PeriodMap = dynamic(
  () => import("@/components/period/PeriodMap"),
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

const ActiveEntitiesPanel = dynamic(
  () => import("@/components/period/ActiveEntitiesPanel"),
  { ssr: false }
);

const EntityDetailPanel = dynamic(
  () => import("@/components/period/EntityDetailPanel"),
  { ssr: false }
);

const EventHighlightToast = dynamic(
  () => import("@/components/period/EventHighlightToast"),
  { ssr: false }
);

const MediaPlayerBar = dynamic(
  () => import("@/components/period/MediaPlayerBar"),
  { ssr: false }
);

const CultureBook = dynamic(
  () => import("@/components/period/CultureBook"),
  { ssr: false }
);

const QuizSection = dynamic(
  () => import("@/components/period/QuizSection"),
  { ssr: false }
);

const DEFAULT_CONFIG: PeriodConfig = {
  minYear: -700,
  maxYear: 1300,
  mapCenter: [65, 48],
  mapScale: 420,
  autoPauseEventTypes: ["savaş", "antlaşma", "din", "göç", "kültür", "siyasi"],
};

// Human-readable period title for TopBar
function getPeriodTitle(donem: string): string {
  return donem
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function PeriodPage({ params }: { params: Promise<{ donem: string }> }) {
  const router = useRouter();
  const { donem } = use(params);

  const [bundle, setBundle] = useState<PeriodDataBundle | null>(null);
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);
  const [hoveredEntityId, setHoveredEntityId] = useState<string | null>(null);

  const { appPhase, goToCulture, goToQuiz, goToTimeline } = usePeriodPhase();

  // Load period data
  useEffect(() => {
    const loader = PERIOD_DATA_REGISTRY[donem];
    if (!loader) {
      router.replace("/egitim");
      return;
    }
    loader().then(setBundle);
  }, [donem, router]);

  const config = bundle?.config ?? DEFAULT_CONFIG;

  const {
    currentYear,
    isPlaying,
    speed,
    highlightedEvent,
    togglePlay,
    pausePlayback,
    handleYearChange,
    handleSpeedChange,
  } = usePeriodPlayback({
    events: bundle?.events ?? [],
    entities: bundle?.entities ?? [],
    config,
  });

  const { visibleEntities } = usePeriodEntities(
    bundle?.entities ?? [],
    bundle?.transitions ?? [],
    currentYear
  );

  const handleEntitySelect = useCallback((id: string | null) => {
    setSelectedEntityId(id);
    if (id !== null) pausePlayback();
  }, [pausePlayback]);

  const selectedEntity = bundle?.entities.find((e) => e.id === selectedEntityId) ?? null;

  if (!bundle) {
    return (
      <div className="w-screen h-screen flex items-center justify-center" style={{ background: "#FAF6F0" }}>
        <span className="font-sans text-xs text-[#7A6A58]/40 uppercase tracking-widest">
          Yükleniyor…
        </span>
      </div>
    );
  }

  const isDark = appPhase !== "timeline";

  return (
    <main
      className="flex flex-col w-screen h-screen overflow-hidden"
      style={{ background: isDark ? "#12171F" : "#FAF6F0" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center gap-4 px-5 py-3 border-b flex-shrink-0 z-20"
        style={{
          background: isDark ? "#12171F" : "#FAF6F0",
          borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
        }}
      >
        <Link
          href="/egitim"
          className="font-sans text-xs hover:opacity-70 transition-opacity"
          style={{ color: isDark ? "rgba(192,184,165,0.5)" : "#7A6A58" }}
        >
          ← Eğitim
        </Link>
        <div className="w-px h-4" style={{ background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)" }} />
        <h1
          className="font-display text-lg font-light tracking-wide"
          style={{ color: isDark ? "#C8A96E" : "#2A1F12" }}
        >
          {appPhase === "timeline" && getPeriodTitle(donem)}
          {appPhase === "culture" && "Kültür ve Medeniyet"}
          {appPhase === "quiz" && "Quiz"}
        </h1>
        <div
          className="ml-auto font-sans text-[10px] uppercase tracking-wider"
          style={{ color: isDark ? "rgba(192,184,165,0.4)" : "#7A6A58" }}
        >
          {appPhase === "timeline" && `${bundle.entities.length} Medeniyet · ${bundle.events.length} Olay`}
          {appPhase === "culture" && "Kültür & Medeniyet"}
          {appPhase === "quiz" && "Test"}
        </div>
      </div>

      {/* Timeline phase */}
      {appPhase === "timeline" && (
        <>
          <div className="relative flex-1 min-h-0">
            <PeriodMap
              entities={bundle.entities}
              events={bundle.events}
              transitions={bundle.transitions}
              visibleEntities={visibleEntities}
              currentYear={currentYear}
              selectedEntityId={selectedEntityId}
              hoveredEntityId={hoveredEntityId}
              onEntitySelect={handleEntitySelect}
              onEntityHover={setHoveredEntityId}
              mapCenter={config.mapCenter}
              mapScale={config.mapScale}
            />

            <ActiveEntitiesPanel
              visibleEntities={visibleEntities}
              selectedEntityId={selectedEntityId}
              onSelect={setSelectedEntityId}
              onHover={setHoveredEntityId}
            />

            <EventHighlightToast event={highlightedEvent} entities={bundle.entities} />

            <div className="absolute top-4 right-4 z-10">
              <AnimatePresence mode="wait">
                {selectedEntity && (
                  <EntityDetailPanel
                    key={selectedEntity.id}
                    entity={selectedEntity}
                    events={bundle.events}
                    transitions={bundle.transitions}
                    entities={bundle.entities}
                    onClose={() => setSelectedEntityId(null)}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Start hint */}
            {!selectedEntityId && !isPlaying && currentYear === config.minYear && (
              <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
                <p
                  className="font-sans text-[11px] px-3 py-1.5 rounded-full border"
                  style={{ color: "#7A6A58", background: "rgba(250,246,240,0.85)", borderColor: "rgba(0,0,0,0.08)" }}
                >
                  ▶ Oynat tuşuna basarak tarihi keşfet
                </p>
              </div>
            )}

            {/* Culture transition button */}
            <AnimatePresence>
              {currentYear >= config.maxYear && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
                >
                  <button
                    onClick={goToCulture}
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
              minYear={config.minYear}
              maxYear={config.maxYear}
              isPlaying={isPlaying}
              speed={speed}
              events={bundle.events}
              entities={bundle.entities}
              onYearChange={handleYearChange}
              onTogglePlay={togglePlay}
              onSpeedChange={handleSpeedChange}
            />
          </div>
        </>
      )}

      {/* Culture phase */}
      {appPhase === "culture" && (
        <div className="flex-1 min-h-0">
          <CultureBook pages={bundle.culturePages} onGoToQuiz={goToQuiz} />
        </div>
      )}

      {/* Quiz phase */}
      {appPhase === "quiz" && (
        <div className="flex-1 min-h-0">
          <QuizSection questions={bundle.quizQuestions} onBack={goToTimeline} />
        </div>
      )}
    </main>
  );
}
