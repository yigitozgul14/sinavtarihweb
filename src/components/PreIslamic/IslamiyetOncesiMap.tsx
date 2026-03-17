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
import type { Civilization, CivEvent, CivTransition } from "@/types";
import TransitionArrow from "./TransitionArrow";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const EVENT_TYPE_ICON: Record<string, string> = {
  savaş: "⚔",
  antlaşma: "📜",
  din: "☪",
  kuruluş: "👑",
  yıkılış: "💥",
  göç: "→",
  kültür: "✦",
  siyasi: "⚑",
};

interface IslamiyetOncesiMapProps {
  civilizations: Civilization[];
  events: CivEvent[];
  transitions: CivTransition[];
  selectedCivId: string | null;
  onCivSelect: (id: string | null) => void;
}

export default function IslamiyetOncesiMap({
  civilizations,
  events,
  transitions,
  selectedCivId,
  onCivSelect,
}: IslamiyetOncesiMapProps) {
  const [hoveredEvent, setHoveredEvent] = useState<CivEvent | null>(null);

  const selectedCiv = civilizations.find((c) => c.id === selectedCivId) ?? null;

  // Active territory codes
  const activeCodes = new Set(
    selectedCiv ? selectedCiv.territoryCodes : civilizations.flatMap((c) => c.territoryCodes)
  );

  // Color lookup: code → color
  const codeColorMap = new Map<number, string>();
  for (const civ of civilizations) {
    for (const code of civ.territoryCodes) {
      if (!selectedCivId || civ.id === selectedCivId) {
        codeColorMap.set(code, civ.color);
      }
    }
  }

  function getFill(numericCode: number): string {
    const color = codeColorMap.get(numericCode);
    if (!color) return "#1e293b";
    if (selectedCivId) {
      return activeCodes.has(numericCode) ? color : "#1a2030";
    }
    return color;
  }

  function getOpacity(numericCode: number): number {
    if (!selectedCivId) return 0.6;
    return activeCodes.has(numericCode) ? 0.75 : 0.15;
  }

  // Relevant transitions for selected civ
  const relevantTransitions = selectedCivId
    ? transitions.filter(
        (t) => t.from === selectedCivId || t.to === selectedCivId
      )
    : [];

  // Events to show
  const visibleEvents = selectedCivId
    ? events.filter((e) => e.civId === selectedCivId)
    : [];

  // Map focus
  const mapCenter: [number, number] = selectedCiv
    ? selectedCiv.mapFocus.center
    : [55, 45];
  const mapScale = selectedCiv ? selectedCiv.mapFocus.scale : 280;

  return (
    <div className="relative w-full h-full" style={{ background: "#0D1117" }}>
      <ComposableMap
        projectionConfig={{ center: [55, 45], scale: 280 }}
        width={1200}
        height={600}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          center={mapCenter}
          zoom={mapScale / 280}
          maxZoom={8}
          minZoom={1}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const code = Number(geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFill(code)}
                    fillOpacity={getOpacity(code)}
                    style={{
                      default: {
                        outline: "none",
                        stroke: "#253045",
                        strokeWidth: 0.4,
                        transition: "fill 0.4s, fill-opacity 0.4s",
                      },
                      hover: {
                        outline: "none",
                        stroke: "#3a4a65",
                        strokeWidth: 0.6,
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Transition arrows */}
          {relevantTransitions.map((t, i) => (
            <TransitionArrow
              key={i}
              transition={t}
              civilizations={civilizations}
            />
          ))}

          {/* Civilization centroids (clickable dots) */}
          {civilizations.map((civ) => {
            const isSelected = civ.id === selectedCivId;
            const isActive = !selectedCivId || isSelected;
            return (
              <Marker
                key={civ.id}
                coordinates={civ.centroid}
                onClick={() => onCivSelect(isSelected ? null : civ.id)}
              >
                <motion.circle
                  r={isSelected ? 8 : 5}
                  fill={civ.color}
                  fillOpacity={isActive ? 1 : 0.3}
                  stroke={isSelected ? "#fff" : civ.color}
                  strokeWidth={isSelected ? 2 : 1}
                  style={{ cursor: "pointer" }}
                  animate={{ r: isSelected ? 8 : 5 }}
                  transition={{ duration: 0.3 }}
                />
                {isSelected && (
                  <motion.circle
                    r={14}
                    fill="none"
                    stroke={civ.color}
                    strokeWidth={1.5}
                    strokeOpacity={0.4}
                    initial={{ r: 8, opacity: 1 }}
                    animate={{ r: 22, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </Marker>
            );
          })}

          {/* Event markers */}
          {visibleEvents.map((ev) => (
            <Marker
              key={ev.id}
              coordinates={ev.coordinates}
              onMouseEnter={() => setHoveredEvent(ev)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <motion.text
                textAnchor="middle"
                fontSize={10}
                style={{ cursor: "pointer", userSelect: "none" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {EVENT_TYPE_ICON[ev.type] ?? "●"}
              </motion.text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Event tooltip */}
      <AnimatePresence>
        {hoveredEvent && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1a2030]/95 backdrop-blur border border-white/10 rounded-xl px-4 py-3 max-w-xs pointer-events-none z-20"
          >
            <p className="font-display text-base text-primary font-medium">
              {hoveredEvent.title}
            </p>
            <p className="font-sans text-xs text-ochre mb-1">
              {hoveredEvent.year < 0
                ? `MÖ ${Math.abs(hoveredEvent.year)}`
                : `MS ${hoveredEvent.year}`}
            </p>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              {hoveredEvent.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend for transition types */}
      {relevantTransitions.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 left-4 bg-[#1a2030]/80 backdrop-blur border border-white/10 rounded-xl p-3 text-xs font-sans z-10"
        >
          <p className="text-secondary/60 mb-2 uppercase tracking-wider text-[10px]">Geçiş Türleri</p>
          {[
            { type: "göç", color: "#E8A045", label: "Göç" },
            { type: "yıkılış", color: "#D63A3A", label: "Yıkılış" },
            { type: "restorasyon", color: "#5090F0", label: "Restorasyon" },
            { type: "hakimiyet-geçişi", color: "#C8A030", label: "Hâkimiyet Geçişi" },
            { type: "bağlantı", color: "#888", label: "Bağlantı" },
          ]
            .filter((item) =>
              relevantTransitions.some((t) => t.type === item.type)
            )
            .map((item) => (
              <div key={item.type} className="flex items-center gap-2 mb-1">
                <span
                  className="w-6 h-px border-t-2 border-dashed"
                  style={{ borderColor: item.color }}
                />
                <span style={{ color: item.color }}>{item.label}</span>
              </div>
            ))}
        </motion.div>
      )}
    </div>
  );
}
