"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Map, {
  Source,
  Layer,
  Marker,
  type MapRef,
} from "react-map-gl/maplibre";
import { motion, AnimatePresence } from "framer-motion";
import type { FeatureCollection } from "geojson";
import type { PeriodEntity, PeriodEntityEvent, PeriodEntityTransition } from "@/types/period-data";
import { chaikinSmooth } from "@/lib/chaikin";
import "maplibre-gl/dist/maplibre-gl.css";

/* ─── Types ──────────────────────────────────────────────────── */

interface PeriodMapLibreProps {
  entities: PeriodEntity[];
  events: PeriodEntityEvent[];
  transitions: PeriodEntityTransition[];
  visibleEntities: PeriodEntity[];
  currentYear: number;
  selectedEntityId: string | null;
  hoveredEntityId: string | null;
  onEntitySelect: (id: string | null) => void;
  onEntityHover: (id: string | null) => void;
  mapCenter?: [number, number];
}

/* ─── Constants ───────────────────────────────────────────────── */

const MAP_BASE_STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

const LAND_COLOR = "#E8E0D6";
const WATER_COLOR = "#A8C5DA";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function customizeBaseStyle(style: Record<string, any>): Record<string, any> {
  return {
    ...style,
    layers: style.layers
      // Remove all text / icon labels
      .filter((l: Record<string, unknown>) => l.type !== "symbol")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((l: Record<string, any>) => {
        // Recolor background → parchment
        if (l.id === "background") {
          return { ...l, paint: { ...(l.paint ?? {}), "background-color": LAND_COLOR } };
        }
        // Recolor water layers → blue
        if (typeof l.id === "string" && l.id.startsWith("water")) {
          if (l.type === "fill")
            return { ...l, paint: { ...(l.paint ?? {}), "fill-color": WATER_COLOR, "fill-outline-color": WATER_COLOR } };
          if (l.type === "line")
            return { ...l, paint: { ...(l.paint ?? {}), "line-color": WATER_COLOR } };
        }
        return l;
      }),
  };
}

const EVENT_TYPE_ICON: Record<string, string> = {
  savaş: "⚔️",
  antlaşma: "📜",
  din: "🌙",
  kuruluş: "🔶",
  yıkılış: "💥",
  göç: "🏹",
  kültür: "✦",
  siyasi: "👑",
};

const TRANSITION_COLOR: Record<string, string> = {
  "göç": "#E8A045",
  "yıkılış": "#D63A3A",
  "restorasyon": "#5090F0",
  "hakimiyet-geçişi": "#C8A030",
  "genişleme": "#16A34A",
  "bağlantı": "#888",
};

const CITY_TYPE_SIZE: Record<string, number> = {
  capital: 6,
  city: 4,
  port: 4,
  fortress: 4,
  sacred: 5,
};

const MAX_BUFFER = 50;

/* ─── Utilities ───────────────────────────────────────────────── */

function formatYear(year: number): string {
  return year < 0 ? `MÖ ${Math.abs(year)}` : `MS ${year}`;
}

function getEntityFadeWindow(
  entity: { id: string; startYear: number; endYear: number },
  allEntities: { id: string; startYear: number; endYear: number }[],
  allTransitions: PeriodEntityTransition[]
): { fadeIn: number; fadeOut: number } {
  const successorIds = allTransitions.filter((t) => t.from === entity.id).map((t) => t.to);
  const predecessorIds = allTransitions.filter((t) => t.to === entity.id).map((t) => t.from);
  const successors = allEntities.filter((e) => successorIds.includes(e.id));
  const predecessors = allEntities.filter((e) => predecessorIds.includes(e.id));
  const gapAfter = successors.length > 0
    ? Math.min(...successors.map((s) => Math.max(0, s.startYear - entity.endYear)))
    : Infinity;
  const gapBefore = predecessors.length > 0
    ? Math.min(...predecessors.map((p) => Math.max(0, entity.startYear - p.endYear)))
    : Infinity;
  return {
    fadeIn: Math.min(MAX_BUFFER, Math.floor(gapBefore / 2)),
    fadeOut: Math.min(MAX_BUFFER, Math.floor(gapAfter / 2)),
  };
}

function getPhaseOpacity(
  entity: { startYear: number; endYear: number },
  currentYear: number,
  fadeIn: number,
  fadeOut: number
): number {
  if (currentYear < entity.startYear)
    return fadeIn === 0 ? 1 : (currentYear - (entity.startYear - fadeIn)) / fadeIn;
  if (currentYear > entity.endYear)
    return fadeOut === 0 ? 1 : 1 - (currentYear - entity.endYear) / fadeOut;
  return 1;
}

function closedRing(coords: [number, number][]): [number, number][] {
  if (coords.length < 2) return coords;
  const first = coords[0];
  const last = coords[coords.length - 1];
  if (first[0] === last[0] && first[1] === last[1]) return coords;
  return [...coords, first];
}

// Quadratic bezier curve points in geographic space
function geoBezierPoints(
  from: [number, number],
  to: [number, number],
  n = 32
): [number, number][] {
  const cpLon = (from[0] + to[0]) / 2;
  const cpLat = (from[1] + to[1]) / 2 + Math.abs(to[0] - from[0]) * 0.15;
  const pts: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const mt = 1 - t;
    pts.push([
      mt * mt * from[0] + 2 * mt * t * cpLon + t * t * to[0],
      mt * mt * from[1] + 2 * mt * t * cpLat + t * t * to[1],
    ]);
  }
  return pts;
}

// Partial bezier (de Casteljau) — 0→progress
function geoBezierPartialPoints(
  from: [number, number],
  to: [number, number],
  progress: number,
  n = 32
): [number, number][] {
  if (progress <= 0) return [from];
  const cpLon = (from[0] + to[0]) / 2;
  const cpLat = (from[1] + to[1]) / 2 - Math.abs(to[0] - from[0]) * 0.15;
  const p = Math.min(1, progress);
  const subCp: [number, number] = [
    from[0] + (cpLon - from[0]) * p,
    from[1] + (cpLat - from[1]) * p,
  ];
  const mt = 1 - p;
  const subEnd: [number, number] = [
    mt * mt * from[0] + 2 * mt * p * cpLon + p * p * to[0],
    mt * mt * from[1] + 2 * mt * p * cpLat + p * p * to[1],
  ];
  const pts: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const mt2 = 1 - t;
    pts.push([
      mt2 * mt2 * from[0] + 2 * mt2 * t * subCp[0] + t * t * subEnd[0],
      mt2 * mt2 * from[1] + 2 * mt2 * t * subCp[1] + t * t * subEnd[1],
    ]);
  }
  return pts;
}

/* ─── GeoJSON builders ─────────────────────────────────────────── */

function buildTerritoriesGeoJson(
  visibleEntities: PeriodEntity[],
  entities: PeriodEntity[],
  transitions: PeriodEntityTransition[],
  currentYear: number,
  selectedEntityId: string | null
): FeatureCollection {
  const isAnySelected = selectedEntityId !== null;
  return {
    type: "FeatureCollection",
    features: visibleEntities.map((entity) => {
      const { fadeIn, fadeOut } = getEntityFadeWindow(entity, entities, transitions);
      const phase = Math.max(0, Math.min(1, getPhaseOpacity(entity, currentYear, fadeIn, fadeOut)));
      const isSel = entity.id === selectedEntityId;
      const baseFill = isSel ? 0.55 : isAnySelected ? 0.1 : 0.25;
      const baseStroke = isSel ? 1.0 : isAnySelected ? 0.2 : 0.6;
      return {
        type: "Feature",
        properties: {
          id: entity.id,
          color: entity.color,
          fillOpacity: phase * baseFill,
          strokeOpacity: phase * baseStroke,
          strokeWidth: isSel ? 2 : 1,
        },
        geometry: {
          type: "Polygon",
          coordinates: [closedRing(chaikinSmooth(entity.territoryPolygon))],
        },
      };
    }),
  };
}

function buildCitiesGeoJson(
  activeEntities: PeriodEntity[],
  currentYear: number,
  entities: PeriodEntity[],
  transitions: PeriodEntityTransition[]
): FeatureCollection {
  const features = activeEntities.flatMap((entity) => {
    const { fadeIn, fadeOut } = getEntityFadeWindow(entity, entities, transitions);
    const phase = Math.max(0, Math.min(1, getPhaseOpacity(entity, currentYear, fadeIn, fadeOut)));
    return (entity.cities ?? []).map((city) => ({
      type: "Feature" as const,
      properties: {
        id: city.id,
        name: city.name,
        type: city.type,
        color: entity.color,
        phase,
        radius: CITY_TYPE_SIZE[city.type] ?? 4,
      },
      geometry: {
        type: "Point" as const,
        coordinates: city.coordinates,
      },
    }));
  });
  return { type: "FeatureCollection", features };
}

function buildTransitionLinesGeoJson(
  relevantTransitions: PeriodEntityTransition[],
  entities: PeriodEntity[]
): FeatureCollection {
  const features = relevantTransitions.flatMap((t) => {
    const fromEntity = entities.find((e) => e.id === t.from);
    const toEntity = entities.find((e) => e.id === t.to);
    if (!fromEntity || !toEntity) return [];
    const color = TRANSITION_COLOR[t.type] ?? "#888";
    return [{
      type: "Feature" as const,
      properties: { color, type: t.type },
      geometry: {
        type: "LineString" as const,
        coordinates: geoBezierPoints(fromEntity.centroid, toEntity.centroid),
      },
    }];
  });
  return { type: "FeatureCollection", features };
}

function buildTravelArrowsGeoJson(
  activeEntities: PeriodEntity[],
  events: PeriodEntityEvent[],
  currentYear: number
): FeatureCollection {
  const features = activeEntities.flatMap((entity) => {
    const entityEvents = events.filter((e) => e.entityId === entity.id).sort((a, b) => a.year - b.year);
    const nextEvent = entityEvents.find((e) => e.year > currentYear);
    if (!nextEvent) return [];
    const prevEvent = entityEvents.filter((e) => e.year <= currentYear).at(-1);
    const fromYear = prevEvent?.year ?? entity.startYear;
    const progress = Math.min(1, Math.max(0, (currentYear - fromYear) / (nextEvent.year - fromYear)));
    if (progress <= 0) return [];
    return [{
      type: "Feature" as const,
      properties: { color: entity.color },
      geometry: {
        type: "LineString" as const,
        coordinates: geoBezierPartialPoints(entity.centroid, nextEvent.coordinates, progress),
      },
    }];
  });
  return { type: "FeatureCollection", features };
}

/* ─── Sub-components ───────────────────────────────────────────── */

function PulseRing({ color }: { color: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        border: `2px solid ${color}`,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        width: ["14px", "52px"],
        height: ["14px", "52px"],
        marginLeft: ["-7px", "-26px"],
        marginTop: ["-7px", "-26px"],
        opacity: [0.8, 0],
      }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

function CentroidDot({
  entity,
  isSelected,
  phase,
  onSelect,
}: {
  entity: PeriodEntity;
  isSelected: boolean;
  phase: number;
  onSelect: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: phase, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.35 }}
      className="relative flex flex-col items-center cursor-pointer"
      style={{ pointerEvents: "all" }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      {isSelected && (
        <>
          <PulseRing color={entity.color} />
          <div
            className="absolute text-center font-bold uppercase tracking-widest pointer-events-none select-none whitespace-nowrap"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "13px",
              color: "#2A1F12",
              textShadow: "0 0 4px rgba(250,246,240,1), 0 0 4px rgba(250,246,240,1), 0 0 8px rgba(250,246,240,0.8)",
              bottom: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {entity.name.toUpperCase()}
          </div>
        </>
      )}

      {/* Dot */}
      <div
        className="rounded-full border-2 border-white shadow-md flex-shrink-0"
        style={{
          width: isSelected ? 14 : 10,
          height: isSelected ? 14 : 10,
          background: entity.color,
          boxShadow: isSelected ? `0 0 8px ${entity.color}88` : undefined,
        }}
      />

      {!isSelected && (
        <div className="flex flex-col items-center pointer-events-none select-none mt-0.5">
          <span
            className="font-bold whitespace-nowrap"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "9px",
              color: entity.color,
              textShadow:
                "0 0 3px rgba(250,246,240,0.95), 0 0 3px rgba(250,246,240,0.95), 0 0 3px rgba(250,246,240,0.95)",
            }}
          >
            {entity.name}
          </span>
          <span
            className="whitespace-nowrap"
            style={{
              fontFamily: "var(--font-source-sans, sans-serif)",
              fontSize: "7px",
              color: "#2A1F12",
              opacity: 0.75,
              textShadow: "0 0 2px rgba(250,246,240,0.9)",
            }}
          >
            {formatYear(entity.startYear)}–{formatYear(entity.endYear)}
          </span>
        </div>
      )}
    </motion.div>
  );
}

function EventMarkerDot({
  ev,
  entities,
  onMouseEnter,
  onMouseLeave,
}: {
  ev: PeriodEntityEvent;
  entities: PeriodEntity[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const ownerEntity = entities.find((e) => e.id === ev.entityId);
  const color1 = ownerEntity?.color ?? "#2A1F12";
  const secondaryEntity = ev.secondaryEntityId ? entities.find((e) => e.id === ev.secondaryEntityId) : null;
  const color2 = secondaryEntity?.color ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.35, type: "spring", stiffness: 220 }}
      className="relative flex items-center justify-center cursor-pointer"
      style={{ width: 28, height: 28, pointerEvents: "all" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Burst ring */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ border: `1px solid ${color1}`, top: 0, left: 0, right: 0, bottom: 0 }}
        initial={{ scale: 0.4, opacity: 0.9 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Background circle */}
      <div
        className="absolute rounded-full"
        style={{
          inset: 2,
          background: "rgba(250,246,240,0.88)",
        }}
      />

      {/* Colored border — split if two entities */}
      {color2 ? (
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 28 28"
          style={{ width: 28, height: 28 }}
        >
          <path
            d="M 14 2 A 12 12 0 0 0 14 26"
            fill="none"
            stroke={color1}
            strokeWidth={2}
          />
          <path
            d="M 14 2 A 12 12 0 0 1 14 26"
            fill="none"
            stroke={color2}
            strokeWidth={2}
          />
        </svg>
      ) : (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: 1.5,
            border: `2px solid ${color1}`,
            borderRadius: "50%",
            opacity: 0.9,
          }}
        />
      )}

      {/* Icon */}
      <span className="relative z-10 select-none" style={{ fontSize: 12, lineHeight: 1 }}>
        {EVENT_TYPE_ICON[ev.type] ?? "●"}
      </span>
    </motion.div>
  );
}

function CityLabel({
  name,
  type,
  color,
}: {
  name: string;
  type: string;
  color: string;
}) {
  const isCapital = type === "capital" || type === "sacred";
  return (
    <div
      className="pointer-events-none select-none whitespace-nowrap"
      style={{
        fontFamily: "var(--font-cinzel)",
        fontSize: isCapital ? "8px" : "7px",
        fontWeight: isCapital ? "600" : "400",
        color: isCapital ? color : "#2A1F12",
        textShadow:
          "0 0 3px rgba(222,208,160,0.98), 0 0 3px rgba(222,208,160,0.98), 0 0 3px rgba(222,208,160,0.98)",
        marginTop: "3px",
      }}
    >
      {isCapital ? "★ " : ""}
      {name}
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────────────── */

export default function PeriodMapLibre({
  entities,
  events,
  transitions,
  visibleEntities,
  currentYear,
  selectedEntityId,
  onEntitySelect,
  mapCenter = [65, 48],
}: PeriodMapLibreProps) {
  const mapRef = useRef<MapRef>(null);
  const [hoveredEvent, setHoveredEvent] = useState<PeriodEntityEvent | null>(null);
  const [mapZoom, setMapZoom] = useState(3);
  const prevSelectedRef = useRef<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mapStyle, setMapStyle] = useState<string | Record<string, any>>(MAP_BASE_STYLE_URL);

  // Fetch base style, strip labels, recolor water/land
  useEffect(() => {
    fetch(MAP_BASE_STYLE_URL)
      .then((r) => r.json())
      .then((style) => setMapStyle(customizeBaseStyle(style)))
      .catch(() => {}); // keep URL fallback on error
  }, []);

  // Fly when selection changes
  useEffect(() => {
    if (!mapRef.current) return;
    if (selectedEntityId === prevSelectedRef.current) return;
    prevSelectedRef.current = selectedEntityId;
    const entity = entities.find((e) => e.id === selectedEntityId);
    mapRef.current.flyTo({
      center: entity ? (entity.mapFocus.center as [number, number]) : mapCenter,
      zoom: entity ? (entity.mapFocus.zoom ?? 4.5) : 3,
      duration: 800,
    });
  }, [selectedEntityId, entities, mapCenter]);

  const selectedEntity = entities.find((e) => e.id === selectedEntityId) ?? null;

  const relevantTransitions = selectedEntityId
    ? transitions.filter((t) => t.from === selectedEntityId || t.to === selectedEntityId)
    : [];

  const visibleEntityIds = new Set(visibleEntities.map((e) => e.id));
  const visibleEvents = selectedEntityId
    ? []
    : events.filter((e) => visibleEntityIds.has(e.entityId) && e.year <= currentYear);

  const activeEntities = visibleEntities.filter(
    (e) => currentYear >= e.startYear && currentYear <= e.endYear
  );

  // GeoJSON sources (memoized)
  const territoriesGeoJson = useMemo(
    () => buildTerritoriesGeoJson(visibleEntities, entities, transitions, currentYear, selectedEntityId),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleEntities, currentYear, selectedEntityId]
  );

  const citiesGeoJson = useMemo(
    () => buildCitiesGeoJson(activeEntities, currentYear, entities, transitions),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeEntities, currentYear]
  );

  const transitionLinesGeoJson = useMemo(
    () => buildTransitionLinesGeoJson(relevantTransitions, entities),
    [relevantTransitions, entities]
  );

  const travelArrowsGeoJson = useMemo(
    () => buildTravelArrowsGeoJson(activeEntities, events, currentYear),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeEntities, currentYear]
  );

  const handleZoomIn = useCallback(() => {
    mapRef.current?.zoomIn({ duration: 300 });
  }, []);

  const handleZoomOut = useCallback(() => {
    mapRef.current?.zoomOut({ duration: 300 });
  }, []);

  const handleMapClick = useCallback(() => {
    if (selectedEntityId) onEntitySelect(null);
  }, [selectedEntityId, onEntitySelect]);

  // City labels shown only when zoomed in enough
  const showCityLabels = mapZoom >= 4.5;

  return (
    <div className="relative w-full h-full" style={{ background: "#e8e0d6" }}>
      <Map
        ref={mapRef}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mapStyle={mapStyle as any}
        initialViewState={{ longitude: mapCenter[0], latitude: mapCenter[1], zoom: 3 }}
        style={{ width: "100%", height: "100%" }}
        onClick={handleMapClick}
        onZoomEnd={(e) => setMapZoom(e.viewState.zoom)}
        minZoom={2.5}
        maxZoom={10}
        maxPitch={0}
        renderWorldCopies={false}
      >
        {/* ── Territory polygons ── */}
        <Source id="territories" type="geojson" data={territoriesGeoJson}>
          <Layer
            id="territories-fill"
            type="fill"
            paint={{
              "fill-color": ["get", "color"] as unknown as string,
              "fill-opacity": ["get", "fillOpacity"] as unknown as number,
            }}
          />
          <Layer
            id="territories-line"
            type="line"
            layout={{ "line-join": "round", "line-cap": "round" }}
            paint={{
              "line-color": ["get", "color"] as unknown as string,
              "line-width": ["get", "strokeWidth"] as unknown as number,
              "line-opacity": ["get", "strokeOpacity"] as unknown as number,
            }}
          />
        </Source>

        {/* ── City dots (MapLibre circle layer — visible at zoom ≥ 4) ── */}
        <Source id="cities" type="geojson" data={citiesGeoJson}>
          {/* Capital / sacred */}
          <Layer
            id="cities-capital"
            type="circle"
            minzoom={4}
            filter={["in", "type", "capital", "sacred"] as unknown as boolean}
            paint={{
              "circle-color": ["get", "color"] as unknown as string,
              "circle-radius": 6,
              "circle-stroke-color": "#FAF6F0",
              "circle-stroke-width": 2,
              "circle-opacity": ["get", "phase"] as unknown as number,
              "circle-stroke-opacity": ["get", "phase"] as unknown as number,
            }}
          />
          {/* Other city types */}
          <Layer
            id="cities-other"
            type="circle"
            minzoom={4}
            filter={["!in", "type", "capital", "sacred"] as unknown as boolean}
            paint={{
              "circle-color": "#FAF6F0",
              "circle-radius": 4,
              "circle-stroke-color": ["get", "color"] as unknown as string,
              "circle-stroke-width": 1.5,
              "circle-opacity": ["get", "phase"] as unknown as number,
              "circle-stroke-opacity": ["get", "phase"] as unknown as number,
            }}
          />
        </Source>

        {/* ── Transition arrows ── */}
        <Source id="transitions" type="geojson" data={transitionLinesGeoJson}>
          <Layer
            id="transitions-line"
            type="line"
            paint={{
              "line-color": ["get", "color"] as unknown as string,
              "line-width": 1.5,
              "line-opacity": 0.75,
              "line-dasharray": [4, 3],
            }}
          />
        </Source>

        {/* ── Traveling arrows ── */}
        <Source id="travel" type="geojson" data={travelArrowsGeoJson}>
          <Layer
            id="travel-line"
            type="line"
            paint={{
              "line-color": ["get", "color"] as unknown as string,
              "line-width": 1.5,
              "line-opacity": 0.8,
            }}
          />
        </Source>

        {/* ── City labels (HTML Markers — shown at zoom ≥ 4.5) ── */}
        {showCityLabels &&
          activeEntities.flatMap((entity) =>
            (entity.cities ?? []).map((city) => (
              <Marker
                key={`city-label-${city.id}`}
                longitude={city.coordinates[0]}
                latitude={city.coordinates[1]}
                anchor="top"
              >
                <CityLabel name={city.name} type={city.type} color={entity.color} />
              </Marker>
            ))
          )}

        {/* ── Centroid dots + labels ── */}
        <AnimatePresence>
          {visibleEntities.map((entity) => {
            const isSelected = entity.id === selectedEntityId;
            if (selectedEntityId && !isSelected) return null;
            const { fadeIn, fadeOut } = getEntityFadeWindow(entity, entities, transitions);
            const phase = Math.max(0, Math.min(1, getPhaseOpacity(entity, currentYear, fadeIn, fadeOut)));
            return (
              <Marker
                key={`centroid-${entity.id}`}
                longitude={entity.centroid[0]}
                latitude={entity.centroid[1]}
                anchor="center"
              >
                <CentroidDot
                  entity={entity}
                  isSelected={isSelected}
                  phase={phase}
                  onSelect={() => onEntitySelect(isSelected ? null : entity.id)}
                />
              </Marker>
            );
          })}
        </AnimatePresence>

        {/* ── Event markers ── */}
        <AnimatePresence>
          {visibleEvents.map((ev) => (
            <Marker
              key={`event-${ev.id}`}
              longitude={ev.coordinates[0]}
              latitude={ev.coordinates[1]}
              anchor="center"
            >
              <EventMarkerDot
                ev={ev}
                entities={entities}
                onMouseEnter={() => setHoveredEvent(ev)}
                onMouseLeave={() => setHoveredEvent(null)}
              />
            </Marker>
          ))}
        </AnimatePresence>
      </Map>

      {/* ── Zoom controls ── */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
        {[
          { label: "+", handler: handleZoomIn, title: "Yakınlaştır" },
          { label: "−", handler: handleZoomOut, title: "Uzaklaştır" },
        ].map(({ label, handler, title }) => (
          <button
            key={label}
            onClick={handler}
            title={title}
            className="w-8 h-8 rounded-lg flex items-center justify-center font-sans text-base font-medium transition-colors shadow-sm"
            style={{
              background: "rgba(250,246,240,0.95)",
              border: "1px solid rgba(0,0,0,0.12)",
              color: "#2A1F12",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Event tooltip ── */}
      <AnimatePresence>
        {hoveredEvent && !selectedEntityId && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 backdrop-blur border rounded-xl px-4 py-3 max-w-sm pointer-events-none z-20 shadow-xl"
            style={{ background: "rgba(250,246,240,0.97)", borderColor: "rgba(0,0,0,0.10)" }}
          >
            <p
              className="text-base font-medium leading-snug"
              style={{ fontFamily: "var(--font-im-fell)", color: "#2A1F12" }}
            >
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
      <AnimatePresence>
        {relevantTransitions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute bottom-4 left-4 backdrop-blur border rounded-xl p-3 text-xs font-sans z-10 shadow-md"
            style={{ background: "rgba(250,246,240,0.9)", borderColor: "rgba(0,0,0,0.10)" }}
          >
            <p
              className="mb-2 uppercase tracking-wider text-[9px]"
              style={{ color: "rgba(122,106,88,0.7)" }}
            >
              Geçiş Türleri
            </p>
            {[
              { type: "göç", color: "#E8A045", label: "Göç" },
              { type: "yıkılış", color: "#D63A3A", label: "Yıkılış" },
              { type: "restorasyon", color: "#5090F0", label: "Restorasyon" },
              { type: "hakimiyet-geçişi", color: "#C8A030", label: "Hâkimiyet Geçişi" },
              { type: "genişleme", color: "#16A34A", label: "Genişleme" },
              { type: "bağlantı", color: "#888", label: "Bağlantı" },
            ]
              .filter((item) => relevantTransitions.some((t) => t.type === item.type))
              .map((item) => (
                <div key={item.type} className="flex items-center gap-2 mb-1 last:mb-0">
                  <span
                    className="w-5 border-t-2 border-dashed flex-shrink-0"
                    style={{ borderColor: item.color }}
                  />
                  <span style={{ color: item.color }}>{item.label}</span>
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Selected entity info badge ── */}
      {selectedEntity && (
        <div
          className="absolute top-4 left-4 z-10 rounded-xl px-3 py-2 shadow-lg border text-xs"
          style={{
            background: "rgba(250,246,240,0.95)",
            borderColor: selectedEntity.color + "55",
          }}
        >
          <p
            className="font-semibold"
            style={{ fontFamily: "var(--font-cinzel)", color: selectedEntity.color, fontSize: "10px" }}
          >
            {selectedEntity.name}
          </p>
          <p className="font-sans opacity-60 mt-0.5" style={{ color: "#2A1F12", fontSize: "8px" }}>
            {formatYear(selectedEntity.startYear)} – {formatYear(selectedEntity.endYear)}
          </p>
        </div>
      )}
    </div>
  );
}
