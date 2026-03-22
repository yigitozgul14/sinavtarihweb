"use client";

import { motion } from "framer-motion";
import { useMapContext } from "react-simple-maps";

interface TerritoryPolygonProps {
  points: [number, number][];
  color: string;
  isSelected: boolean;
  isHovered: boolean;
  isAnySelected: boolean;
  isAnyHovered: boolean;
  currentZoom: number;
  phaseOpacity: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function TerritoryPolygon({
  points,
  color,
  isSelected,
  isHovered,
  isAnySelected,
  isAnyHovered,
  currentZoom,
  phaseOpacity,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: TerritoryPolygonProps) {
  const { projection } = useMapContext();

  const projected = points.map((p) => projection(p));
  if (projected.some((p) => p === null)) return null;

  const d =
    projected
      .map((p, i) => `${i === 0 ? "M" : "L"}${p![0].toFixed(1)},${p![1].toFixed(1)}`)
      .join("") + "Z";

  const zoomFactor = isSelected
    ? 1
    : Math.min(1, Math.max(0, (currentZoom - 1.3) / 1.2));

  const highlighted = isSelected || isHovered;
  const dimmed = !highlighted && (isAnySelected || isAnyHovered);

  const baseFill   = highlighted ? 0.55 : dimmed ? 0.08 : 0.2;
  const baseStroke = highlighted ? 1.0  : dimmed ? 0.15 : 0.4;

  const fillOpacity   = baseFill   * (highlighted ? 1 : zoomFactor) * phaseOpacity;
  const strokeOpacity = baseStroke * (highlighted ? 1 : zoomFactor) * phaseOpacity;
  const strokeWidth   = highlighted ? 1.6 : 0.8;

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
      transition={{ duration: 0.25 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
