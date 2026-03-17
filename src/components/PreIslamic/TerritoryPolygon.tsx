"use client";

import { motion } from "framer-motion";
import { useMapContext } from "react-simple-maps";

interface TerritoryPolygonProps {
  points: [number, number][];
  color: string;
  isSelected: boolean;
  isAnySelected: boolean;
  currentZoom: number;
  phaseOpacity: number; // 0→1: fading in (pre-start buffer) or fading out (post-end buffer)
  onClick: () => void;
}

export default function TerritoryPolygon({
  points,
  color,
  isSelected,
  isAnySelected,
  currentZoom,
  phaseOpacity,
  onClick,
}: TerritoryPolygonProps) {
  const { projection } = useMapContext();

  const projected = points.map((p) => projection(p));
  if (projected.some((p) => p === null)) return null;

  const d =
    projected
      .map((p, i) => `${i === 0 ? "M" : "L"}${p![0].toFixed(1)},${p![1].toFixed(1)}`)
      .join("") + "Z";

  // Territory fades in as user zooms in (zoom 1.3 → 2.5 maps to opacity 0 → 1)
  const zoomFactor = isSelected
    ? 1
    : Math.min(1, Math.max(0, (currentZoom - 1.3) / 1.2));

  const baseFill = isSelected ? 0.55 : isAnySelected ? 0.08 : 0.35;
  const baseStroke = isSelected ? 1.0 : isAnySelected ? 0.15 : 0.7;

  const fillOpacity = baseFill * zoomFactor * phaseOpacity;
  const strokeOpacity = baseStroke * zoomFactor * phaseOpacity;
  const strokeWidth = isSelected ? 1.6 : 0.8;

  return (
    <motion.path
      d={d}
      fill={color}
      fillOpacity={fillOpacity}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      strokeLinejoin="round"
      style={{ cursor: "pointer" }}
      initial={{ fillOpacity: 0, strokeOpacity: 0 }}
      animate={{ fillOpacity, strokeOpacity }}
      exit={{ fillOpacity: 0, strokeOpacity: 0 }}
      transition={{ duration: 0.45 }}
      onClick={onClick}
    />
  );
}
