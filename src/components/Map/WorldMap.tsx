"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import type { HistoricalEvent } from "@/types";
import { GEO_URL } from "@/constants/map";

interface WorldMapProps {
  events?: HistoricalEvent[];
  selectedEvent?: HistoricalEvent | null;
}

export default function WorldMap({
  events = [],
  selectedEvent = null,
}: WorldMapProps) {
  const highlightedCodes = new Set(selectedEvent?.location.countryCodes ?? []);

  // Filtreli ama seçili olmayan olayların ülkeleri (soluk vurgu)
  const activeCodes = new Set(
    events.flatMap((e) => e.location.countryCodes ?? [])
  );

  function getFill(numericCode: number): string {
    if (highlightedCodes.has(numericCode)) return "#DC143C"; // seçili: kırmızı
    if (activeCodes.has(numericCode)) return "#4a1a22";      // filtrede var: koyu kırmızı
    return "#1e293b";                                          // varsayılan
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ComposableMap>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const code = Number(geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getFill(code)}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: highlightedCodes.has(code) ? "#ff3355" : "#334155" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </motion.div>
  );
}
