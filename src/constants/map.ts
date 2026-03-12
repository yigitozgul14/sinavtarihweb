import type { MapViewState } from "@/types";

export const DEFAULT_MAP_VIEW: MapViewState = {
  center: [35, 39], // Türkiye merkezi
  zoom: 3,
};

export const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const MAP_COLORS = {
  default: "#1e293b",
  hover: "#334155",
  selected: "#DC143C",
  highlight: "#B22222",
} as const;
