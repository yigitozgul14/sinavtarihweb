"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import type { HistoricalEvent } from "@/types";
import { GEO_URL } from "@/constants/map";

interface WorldMapProps {
  events?: HistoricalEvent[];
  selectedEvent?: HistoricalEvent | null;
  onEventSelect?: (event: HistoricalEvent | null) => void;
}

export default function WorldMap({
  events = [],
  selectedEvent = null,
  onEventSelect
}: WorldMapProps) {
  const highlightedCodes = new Set(selectedEvent?.location.countryCodes ?? []);

  const activeCodes = new Set(
    events.flatMap((e) => e.location.countryCodes ?? [])
  );

  function getFill(numericCode: number): string {
    if (highlightedCodes.has(numericCode)) return "#B8926A"; // selected: warm ochre
    if (activeCodes.has(numericCode)) return "#D5C4A8";      // active: light tan
    return "#E8E0D6";                                         // default: warm light gray
  }

  const handleGeographyClick = (code: number) => {
    const eventForCountry = events.find(e => e.location.countryCodes?.includes(code));
    if (eventForCountry && onEventSelect) {
      onEventSelect(eventForCountry);
    } else if (onEventSelect) {
      onEventSelect(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      style={{ background: "#FAF6F0" }}
    >
      <ComposableMap
        projectionConfig={{
          scale: 180,
          center: [35, 39]
        }}
        width={800}
        height={600}
        style={{ width: "100%", height: "100%", background: "#FAF6F0" }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const code = Number(geo.id);
                const isClickable = activeCodes.has(code);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFill(code)}
                    onClick={() => handleGeographyClick(code)}
                    style={{
                      default: { 
                        outline: "none", 
                        stroke: "#C8C0B4",
                        strokeWidth: 0.5 
                      },
                      hover: { 
                        outline: "none", 
                        fill: highlightedCodes.has(code) ? "#A07850" : (activeCodes.has(code) ? "#C8B090" : "#DDD5C8"),
                        stroke: "#B0A898",
                        strokeWidth: 0.75,
                        cursor: isClickable ? "pointer" : "default" 
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </motion.div>
  );
}
