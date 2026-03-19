"use client";

import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import type { Civilization, CivEvent, CivTransition } from "@/types";
import TransitionArrow from "./TransitionArrow";
import TerritoryPolygon from "./TerritoryPolygon";
import TravelingArrow from "./TravelingArrow";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const EVENT_TYPE_ICON: Record<string, string> = {
  savaş: "⚔",
  antlaşma: "📜",
  din: "☽",
  kuruluş: "◆",
  yıkılış: "✕",
  göç: "→",
  kültür: "✦",
  siyasi: "⚑",
};

function formatYear(year: number): string {
  return year < 0 ? `MÖ ${Math.abs(year)}` : `MS ${year}`;
}

const MAX_BUFFER = 50;

function getCivFadeWindow(
  civ: { id: string; startYear: number; endYear: number },
  allCivs: { id: string; startYear: number; endYear: number }[],
  allTransitions: CivTransition[]
): { fadeIn: number; fadeOut: number } {
  const successorIds   = allTransitions.filter((t) => t.from === civ.id).map((t) => t.to);
  const predecessorIds = allTransitions.filter((t) => t.to   === civ.id).map((t) => t.from);
  const successors   = allCivs.filter((c) => successorIds.includes(c.id));
  const predecessors = allCivs.filter((c) => predecessorIds.includes(c.id));
  const gapAfter  = successors.length   > 0 ? Math.min(...successors.map((s)   => Math.max(0, s.startYear - civ.endYear)))   : Infinity;
  const gapBefore = predecessors.length > 0 ? Math.min(...predecessors.map((p) => Math.max(0, civ.startYear - p.endYear))) : Infinity;
  return {
    fadeIn:  Math.min(MAX_BUFFER, Math.floor(gapBefore / 2)),
    fadeOut: Math.min(MAX_BUFFER, Math.floor(gapAfter  / 2)),
  };
}

// 0→1 fading in, 1 active, 1→0 fading out — uses asymmetric fade windows
function getPhaseOpacity(
  civ: { startYear: number; endYear: number },
  currentYear: number,
  fadeIn: number,
  fadeOut: number
): number {
  if (currentYear < civ.startYear) return fadeIn  === 0 ? 1 : (currentYear - (civ.startYear - fadeIn))  / fadeIn;
  if (currentYear > civ.endYear)   return fadeOut === 0 ? 1 : 1 - (currentYear - civ.endYear) / fadeOut;
  return 1;
}

interface IslamiyetOncesiMapProps {
  civilizations: Civilization[];
  events: CivEvent[];
  transitions: CivTransition[];
  visibleCivs: Civilization[];
  currentYear: number;
  selectedCivId: string | null;
  onCivSelect: (id: string | null) => void;
}

export default function IslamiyetOncesiMap({
  civilizations,
  events,
  transitions,
  visibleCivs,
  currentYear,
  selectedCivId,
  onCivSelect,
}: IslamiyetOncesiMapProps) {
  const [hoveredEvent, setHoveredEvent] = useState<CivEvent | null>(null);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([65, 48]);
  // Track previous selectedCivId to detect prop changes during render (derived-state pattern)
  const [prevSelectedCivId, setPrevSelectedCivId] = useState<string | null>(null);

  const selectedCiv = civilizations.find((c) => c.id === selectedCivId) ?? null;

  const relevantTransitions = selectedCivId
    ? transitions.filter(
        (t) => t.from === selectedCivId || t.to === selectedCivId
      )
    : [];

  const visibleCivIds = new Set(visibleCivs.map((c) => c.id));
  // Hide all events and arrows when a civ is selected — focus mode shows only that civ
  const visibleEvents = selectedCivId
    ? []
    : events.filter((e) => visibleCivIds.has(e.civId) && e.year <= currentYear);

  // Derived-state pattern (react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes):
  // detect selectedCivId prop change during render and update zoom synchronously.
  // React restarts the render with the new state — no effect, no cascade.
  if (selectedCivId !== prevSelectedCivId) {
    setPrevSelectedCivId(selectedCivId);
    setZoom(selectedCiv ? selectedCiv.mapFocus.scale / 280 : 1);
    setCenter(selectedCiv ? selectedCiv.mapFocus.center : [65, 48]);
  }

  // Zoom-aware scale factor — sqrt for gentler reduction, min 0.45
  const zScale = Math.max(0.45, 1 / Math.sqrt(zoom));

  // Officially active civs (within their real startYear–endYear) — used for arrows/events
  const activeCivs = visibleCivs.filter(
    (c) => currentYear >= c.startYear && currentYear <= c.endYear
  );

  return (
    <div className="relative w-full h-full" style={{ background: "#FAF6F0" }}>
      <ComposableMap
        projectionConfig={{ center: [65, 48], scale: 420 }}
        width={1200}
        height={500}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ZoomableGroup
          center={center}
          zoom={zoom}
          maxZoom={8}
          minZoom={1}
          onMoveEnd={({ coordinates, zoom: z }: { coordinates: [number, number]; zoom: number }) => {
            setCenter(coordinates);
            setZoom(z);
          }}
        >
          {/* ── Base world map (light cream) ── */}
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E8E0D6"
                  stroke="#C8C0B4"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#DDD5C8" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* ── Territory polygons — zoom-based opacity ── */}
          <AnimatePresence>
            {visibleCivs.map((civ) => {
              const { fadeIn, fadeOut } = getCivFadeWindow(civ, civilizations, transitions);
              return (
                <TerritoryPolygon
                  key={`territory-${civ.id}`}
                  points={civ.territoryPolygon}
                  color={civ.color}
                  isSelected={civ.id === selectedCivId}
                  isAnySelected={selectedCivId !== null}
                  currentZoom={zoom}
                  phaseOpacity={getPhaseOpacity(civ, currentYear, fadeIn, fadeOut)}
                  onClick={() =>
                    onCivSelect(civ.id === selectedCivId ? null : civ.id)
                  }
                />
              );
            })}
          </AnimatePresence>

          {/* ── Transition arrows (selected civ only) ── */}
          {relevantTransitions.map((t, i) => (
            <TransitionArrow key={i} transition={t} civilizations={civilizations} />
          ))}

          {/* ── Traveling arrows — only for officially active civs, hidden when a civ is selected ── */}
          <AnimatePresence>
            {!selectedCivId && activeCivs.flatMap((civ) => {
              const civEvents = events
                .filter((e) => e.civId === civ.id)
                .sort((a, b) => a.year - b.year);

              const nextEvent = civEvents.find((e) => e.year > currentYear);
              if (!nextEvent) return [];

              const prevEvent = civEvents.filter((e) => e.year <= currentYear).at(-1);
              const fromYear = prevEvent?.year ?? civ.startYear;
              const progress = Math.min(
                1,
                Math.max(0, (currentYear - fromYear) / (nextEvent.year - fromYear))
              );

              return [
                <TravelingArrow
                  key={`travel-${civ.id}-${nextEvent.id}`}
                  from={civ.centroid}
                  to={nextEvent.coordinates}
                  progress={progress}
                  color={civ.color}
                  zoomScale={zScale}
                  civId={civ.id}
                />,
              ];
            })}
          </AnimatePresence>

          {/* ── Civilization centroid dots + labels ── */}
          {visibleCivs.map((civ) => {
            const isSelected = civ.id === selectedCivId;
            if (selectedCivId && !isSelected) return null;

            const dotR = (isSelected ? 7 : 5) * zScale;
            const sw = (isSelected ? 2 : 1.5) * zScale;
            const nameSize = 9 * zScale;
            const yearSize = 6 * zScale;
            const nameY = -11 * zScale;
            const yearY = -3 * zScale;
            const { fadeIn: fi, fadeOut: fo } = getCivFadeWindow(civ, civilizations, transitions);
            const phase = getPhaseOpacity(civ, currentYear, fi, fo);

            return (
              <Marker
                key={civ.id}
                coordinates={civ.centroid}
                onClick={() => onCivSelect(isSelected ? null : civ.id)}
              >
              <g opacity={phase}>
                {/* Pulse ring + EU4-style territory name on selected */}
                {isSelected && (
                  <>
                    <motion.circle
                      fill="none"
                      stroke={civ.color}
                      strokeWidth={1.5 * zScale}
                      strokeOpacity={0.4}
                      initial={{ r: 8 * zScale, opacity: 0.8 }}
                      animate={{ r: 22 * zScale, opacity: 0 }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                    />
                    {/* Large territory name — EU4 style */}
                    <motion.text
                      textAnchor="middle"
                      y={-26 * zScale}
                      fontSize={20 * zScale}
                      fill="#FFFFFF"
                      stroke={civ.color}
                      strokeWidth={20 * zScale * 0.55}
                      paintOrder="stroke"
                      letterSpacing={2.5 * zScale}
                      fontFamily="'Source Sans 3', sans-serif"
                      fontWeight="900"
                      style={{ pointerEvents: "none", userSelect: "none" }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {civ.name.toUpperCase()}
                    </motion.text>
                  </>
                )}

                {/* Main dot — white border */}
                <motion.circle
                  r={dotR}
                  fill={civ.color}
                  stroke="#ffffff"
                  strokeWidth={sw}
                  style={{ cursor: "pointer" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />

                {/* Civ name — colored, bold, white outline via paintOrder */}
                {!isSelected && (
                  <>
                    <motion.text
                      textAnchor="middle"
                      y={nameY}
                      fontSize={nameSize}
                      fill={civ.color}
                      stroke="rgba(250,246,240,0.9)"
                      strokeWidth={nameSize * 0.45}
                      paintOrder="stroke"
                      fontFamily="'Source Sans 3', sans-serif"
                      fontWeight="800"
                      style={{ pointerEvents: "none", userSelect: "none" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      {civ.name}
                    </motion.text>
                    {/* Year range — dark primary, same outline trick */}
                    <motion.text
                      textAnchor="middle"
                      y={yearY}
                      fontSize={yearSize}
                      fill="#2A1F12"
                      stroke="rgba(250,246,240,0.9)"
                      strokeWidth={yearSize * 0.5}
                      paintOrder="stroke"
                      fontFamily="'Source Sans 3', sans-serif"
                      fontWeight="400"
                      style={{ pointerEvents: "none", userSelect: "none" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.75 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                    >
                      {formatYear(civ.startYear)}–{formatYear(civ.endYear)}
                    </motion.text>
                  </>
                )}
              </g>
              </Marker>
            );
          })}

          {/* ── Event markers — appear when currentYear crosses ev.year ── */}
          <AnimatePresence>
            {visibleEvents.map((ev) => {
              const iconSize = 16 * zScale;
              const borderR = iconSize * 0.85;
              const borderW = 1.2 * zScale;

              const ownerCiv = civilizations.find((c) => c.id === ev.civId);
              const color1 = ownerCiv?.color ?? "#2A1F12";
              const secondaryCiv = ev.secondaryCivId
                ? civilizations.find((c) => c.id === ev.secondaryCivId)
                : null;
              const color2 = secondaryCiv?.color ?? null;

              return (
                <Marker
                  key={ev.id}
                  coordinates={ev.coordinates}
                  onMouseEnter={() => setHoveredEvent(ev)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  {/* Background circle for icon */}
                  <motion.circle
                    r={borderR}
                    fill="rgba(250,246,240,0.85)"
                    stroke="none"
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: borderR, opacity: 1 }}
                    exit={{ r: 0, opacity: 0 }}
                    transition={{ duration: 0.35, type: "tween", ease: "easeOut" }}
                  />

                  {/* Colored border — single civ or split two-civ */}
                  {color2 ? (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    >
                      <path
                        d={`M 0,${-borderR} A ${borderR},${borderR} 0 0,0 0,${borderR}`}
                        fill="none"
                        stroke={color1}
                        strokeWidth={borderW}
                      />
                      <path
                        d={`M 0,${-borderR} A ${borderR},${borderR} 0 0,1 0,${borderR}`}
                        fill="none"
                        stroke={color2}
                        strokeWidth={borderW}
                      />
                    </motion.g>
                  ) : (
                    <motion.circle
                      r={borderR}
                      fill="none"
                      stroke={color1}
                      strokeWidth={borderW}
                      initial={{ opacity: 0, r: 0 }}
                      animate={{ opacity: 0.9, r: borderR }}
                      exit={{ opacity: 0, r: 0 }}
                      transition={{ duration: 0.35, type: "tween", ease: "easeOut" }}
                    />
                  )}

                  {/* Entry burst ring */}
                  <motion.circle
                    fill="none"
                    stroke={color1}
                    strokeWidth={0.7 * zScale}
                    strokeOpacity={0.4}
                    initial={{ r: iconSize * 0.5, opacity: 0.9 }}
                    animate={{ r: iconSize * 2, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <motion.text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={iconSize}
                    style={{ cursor: "pointer", userSelect: "none", pointerEvents: "all" }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 220, delay: 0.1 }}
                  >
                    {EVENT_TYPE_ICON[ev.type] ?? "●"}
                  </motion.text>
                </Marker>
              );
            })}
          </AnimatePresence>
        </ZoomableGroup>
      </ComposableMap>

      {/* ── Zoom controls ── */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
        <button
          onClick={() => setZoom((z) => Math.min(8, z * 1.5))}
          className="w-8 h-8 rounded-lg flex items-center justify-center font-sans text-base font-medium transition-colors shadow-sm"
          style={{
            background: "rgba(250,246,240,0.95)",
            border: "1px solid rgba(0,0,0,0.12)",
            color: "#2A1F12",
          }}
          title="Yakınlaştır"
        >
          +
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(1, z / 1.5))}
          className="w-8 h-8 rounded-lg flex items-center justify-center font-sans text-base font-medium transition-colors shadow-sm"
          style={{
            background: "rgba(250,246,240,0.95)",
            border: "1px solid rgba(0,0,0,0.12)",
            color: "#2A1F12",
          }}
          title="Uzaklaştır"
        >
          −
        </button>
      </div>

      {/* ── Event tooltip — only when no civ selected ── */}
      <AnimatePresence>
        {hoveredEvent && !selectedCivId && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 backdrop-blur border rounded-xl px-4 py-3 max-w-sm pointer-events-none z-20 shadow-xl"
            style={{ background: "rgba(250,246,240,0.97)", borderColor: "rgba(0,0,0,0.10)" }}
          >
            <p className="font-display text-base font-medium leading-snug" style={{ color: "#2A1F12" }}>
              {hoveredEvent.title}
            </p>
            <p className="font-sans text-xs text-ochre mt-0.5 mb-1">
              {formatYear(hoveredEvent.year)}
            </p>
            <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(74,63,50,0.8)" }}>
              {hoveredEvent.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Transition legend ── */}
      {relevantTransitions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute bottom-4 left-4 backdrop-blur border rounded-xl p-3 text-xs font-sans z-10 shadow-md"
          style={{ background: "rgba(250,246,240,0.9)", borderColor: "rgba(0,0,0,0.10)" }}
        >
          <p className="mb-2 uppercase tracking-wider text-[9px]" style={{ color: "rgba(122,106,88,0.7)" }}>
            Geçiş Türleri
          </p>
          {[
            { type: "göç", color: "#E8A045", label: "Göç" },
            { type: "yıkılış", color: "#D63A3A", label: "Yıkılış" },
            { type: "restorasyon", color: "#5090F0", label: "Restorasyon" },
            { type: "hakimiyet-geçişi", color: "#C8A030", label: "Hâkimiyet Geçişi" },
            { type: "bağlantı", color: "#888", label: "Bağlantı" },
          ]
            .filter((item) => relevantTransitions.some((t) => t.type === item.type))
            .map((item) => (
              <div key={item.type} className="flex items-center gap-2 mb-1 last:mb-0">
                <span className="w-5 border-t-2 border-dashed flex-shrink-0" style={{ borderColor: item.color }} />
                <span style={{ color: item.color }}>{item.label}</span>
              </div>
            ))}
        </motion.div>
      )}
    </div>
  );
}
