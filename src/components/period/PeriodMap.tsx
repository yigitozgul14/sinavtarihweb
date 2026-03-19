"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { formatYear } from "@/lib/format";
import { getEntityFadeWindow } from "@/lib/periodEngine";
import type { PeriodEntity, PeriodEntityEvent, PeriodEntityTransition } from "@/types/period-data";
import TerritoryPolygon from "./TerritoryPolygon";
import TransitionArrow from "./TransitionArrow";
import TravelingArrow from "./TravelingArrow";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const EVENT_TYPE_ICON: Record<string, string> = {
  savaş:    "⚔",
  antlaşma: "📜",
  din:      "☽",
  kuruluş:  "◆",
  yıkılış:  "✕",
  göç:      "→",
  kültür:   "✦",
  siyasi:   "⚑",
};

function getPhaseOpacity(
  entity: { startYear: number; endYear: number },
  currentYear: number,
  fadeIn: number,
  fadeOut: number
): number {
  if (currentYear < entity.startYear) return fadeIn === 0 ? 1 : (currentYear - (entity.startYear - fadeIn)) / fadeIn;
  if (currentYear > entity.endYear) return fadeOut === 0 ? 1 : 1 - (currentYear - entity.endYear) / fadeOut;
  return 1;
}

interface PeriodMapProps {
  entities: PeriodEntity[];
  events: PeriodEntityEvent[];
  transitions: PeriodEntityTransition[];
  visibleEntities: PeriodEntity[];
  currentYear: number;
  selectedEntityId: string | null;
  onEntitySelect: (id: string | null) => void;
  mapCenter?: [number, number];
  mapScale?: number;
}

export default function PeriodMap({
  entities,
  events,
  transitions,
  visibleEntities,
  currentYear,
  selectedEntityId,
  onEntitySelect,
  mapCenter = [65, 48],
  mapScale = 420,
}: PeriodMapProps) {
  const [hoveredEvent, setHoveredEvent] = useState<PeriodEntityEvent | null>(null);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>(mapCenter);
  const [prevSelectedEntityId, setPrevSelectedEntityId] = useState<string | null>(null);

  const selectedEntity = entities.find((e) => e.id === selectedEntityId) ?? null;

  const relevantTransitions = selectedEntityId
    ? transitions.filter((t) => t.from === selectedEntityId || t.to === selectedEntityId)
    : [];

  const visibleEntityIds = new Set(visibleEntities.map((e) => e.id));
  const visibleEvents = selectedEntityId
    ? []
    : events.filter((e) => visibleEntityIds.has(e.entityId) && e.year <= currentYear);

  // Derived-state zoom sync when selection changes
  if (selectedEntityId !== prevSelectedEntityId) {
    setPrevSelectedEntityId(selectedEntityId);
    setZoom(selectedEntity ? selectedEntity.mapFocus.scale / 280 : 1);
    setCenter(selectedEntity ? selectedEntity.mapFocus.center : mapCenter);
  }

  const zScale = Math.max(0.45, 1 / Math.sqrt(zoom));
  const activeEntities = visibleEntities.filter(
    (e) => currentYear >= e.startYear && currentYear <= e.endYear
  );

  return (
    <div className="relative w-full h-full" style={{ background: "#FAF6F0" }}>
      <ComposableMap
        projectionConfig={{ center: mapCenter, scale: mapScale }}
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
          {/* Base world map */}
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

          {/* Territory polygons */}
          <AnimatePresence>
            {visibleEntities.map((entity) => {
              const { fadeIn, fadeOut } = getEntityFadeWindow(entity, entities, transitions);
              return (
                <TerritoryPolygon
                  key={`territory-${entity.id}`}
                  points={entity.territoryPolygon}
                  color={entity.color}
                  isSelected={entity.id === selectedEntityId}
                  isAnySelected={selectedEntityId !== null}
                  currentZoom={zoom}
                  phaseOpacity={getPhaseOpacity(entity, currentYear, fadeIn, fadeOut)}
                  onClick={() => onEntitySelect(entity.id === selectedEntityId ? null : entity.id)}
                />
              );
            })}
          </AnimatePresence>

          {/* Transition arrows */}
          {relevantTransitions.map((t, i) => (
            <TransitionArrow key={i} transition={t} entities={entities} />
          ))}

          {/* Traveling arrows */}
          <AnimatePresence>
            {!selectedEntityId && activeEntities.flatMap((entity) => {
              const entityEvents = events
                .filter((e) => e.entityId === entity.id)
                .sort((a, b) => a.year - b.year);

              const nextEvent = entityEvents.find((e) => e.year > currentYear);
              if (!nextEvent) return [];

              const prevEvent = entityEvents.filter((e) => e.year <= currentYear).at(-1);
              const fromYear = prevEvent?.year ?? entity.startYear;
              const progress = Math.min(1, Math.max(0, (currentYear - fromYear) / (nextEvent.year - fromYear)));

              return [
                <TravelingArrow
                  key={`travel-${entity.id}-${nextEvent.id}`}
                  from={entity.centroid}
                  to={nextEvent.coordinates}
                  progress={progress}
                  color={entity.color}
                  zoomScale={zScale}
                  entityId={entity.id}
                />,
              ];
            })}
          </AnimatePresence>

          {/* Entity centroid dots + labels */}
          {visibleEntities.map((entity) => {
            const isSelected = entity.id === selectedEntityId;
            if (selectedEntityId && !isSelected) return null;

            const dotR = (isSelected ? 7 : 5) * zScale;
            const sw = (isSelected ? 2 : 1.5) * zScale;
            const nameSize = 9 * zScale;
            const yearSize = 6 * zScale;
            const nameY = -11 * zScale;
            const yearY = -3 * zScale;
            const { fadeIn: fi, fadeOut: fo } = getEntityFadeWindow(entity, entities, transitions);
            const phase = getPhaseOpacity(entity, currentYear, fi, fo);

            return (
              <Marker
                key={entity.id}
                coordinates={entity.centroid}
                onClick={() => onEntitySelect(isSelected ? null : entity.id)}
              >
                <g opacity={phase}>
                  {isSelected && (
                    <>
                      <motion.circle
                        fill="none"
                        stroke={entity.color}
                        strokeWidth={1.5 * zScale}
                        strokeOpacity={0.4}
                        initial={{ r: 8 * zScale, opacity: 0.8 }}
                        animate={{ r: 22 * zScale, opacity: 0 }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.text
                        textAnchor="middle"
                        y={-26 * zScale}
                        fontSize={20 * zScale}
                        fill="#FFFFFF"
                        stroke={entity.color}
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
                        {entity.name.toUpperCase()}
                      </motion.text>
                    </>
                  )}

                  <motion.circle
                    r={dotR}
                    fill={entity.color}
                    stroke="#ffffff"
                    strokeWidth={sw}
                    style={{ cursor: "pointer" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  />

                  {!isSelected && (
                    <>
                      <motion.text
                        textAnchor="middle"
                        y={nameY}
                        fontSize={nameSize}
                        fill={entity.color}
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
                        {entity.name}
                      </motion.text>
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
                        {formatYear(entity.startYear)}–{formatYear(entity.endYear)}
                      </motion.text>
                    </>
                  )}
                </g>
              </Marker>
            );
          })}

          {/* Event markers */}
          <AnimatePresence>
            {visibleEvents.map((ev) => {
              const iconSize = 16 * zScale;
              const borderR = iconSize * 0.85;
              const borderW = 1.2 * zScale;

              const ownerEntity = entities.find((e) => e.id === ev.entityId);
              const color1 = ownerEntity?.color ?? "#2A1F12";
              const secondaryEntity = ev.secondaryEntityId
                ? entities.find((e) => e.id === ev.secondaryEntityId)
                : null;
              const color2 = secondaryEntity?.color ?? null;

              return (
                <Marker
                  key={ev.id}
                  coordinates={ev.coordinates}
                  onMouseEnter={() => setHoveredEvent(ev)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  <motion.circle
                    r={borderR}
                    fill="rgba(250,246,240,0.85)"
                    stroke="none"
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: borderR, opacity: 1 }}
                    exit={{ r: 0, opacity: 0 }}
                    transition={{ duration: 0.35, type: "tween", ease: "easeOut" }}
                  />

                  {color2 ? (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    >
                      <path d={`M 0,${-borderR} A ${borderR},${borderR} 0 0,0 0,${borderR}`} fill="none" stroke={color1} strokeWidth={borderW} />
                      <path d={`M 0,${-borderR} A ${borderR},${borderR} 0 0,1 0,${borderR}`} fill="none" stroke={color2} strokeWidth={borderW} />
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

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
        <button
          onClick={() => setZoom((z) => Math.min(8, z * 1.5))}
          className="w-8 h-8 rounded-lg flex items-center justify-center font-sans text-base font-medium transition-colors shadow-sm"
          style={{ background: "rgba(250,246,240,0.95)", border: "1px solid rgba(0,0,0,0.12)", color: "#2A1F12" }}
          title="Yakınlaştır"
        >
          +
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(1, z / 1.5))}
          className="w-8 h-8 rounded-lg flex items-center justify-center font-sans text-base font-medium transition-colors shadow-sm"
          style={{ background: "rgba(250,246,240,0.95)", border: "1px solid rgba(0,0,0,0.12)", color: "#2A1F12" }}
          title="Uzaklaştır"
        >
          −
        </button>
      </div>

      {/* Event tooltip */}
      <AnimatePresence>
        {hoveredEvent && !selectedEntityId && (
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

      {/* Transition legend */}
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
            { type: "göç",              color: "#E8A045", label: "Göç" },
            { type: "yıkılış",          color: "#D63A3A", label: "Yıkılış" },
            { type: "restorasyon",      color: "#5090F0", label: "Restorasyon" },
            { type: "hakimiyet-geçişi", color: "#C8A030", label: "Hâkimiyet Geçişi" },
            { type: "bağlantı",         color: "#888",    label: "Bağlantı" },
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
