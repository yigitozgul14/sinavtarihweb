"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useMapContext } from "react-simple-maps";

interface EventArrowProps {
  from: [number, number];
  to: [number, number];
  color: string;
  currentZoom: number;
  onComplete: () => void;
}

export default function EventArrow({
  from,
  to,
  color,
  currentZoom,
  onComplete,
}: EventArrowProps) {
  const { projection } = useMapContext();
  const completedRef = useRef(false);

  const p1 = projection(from);
  const p2 = projection(to);

  function handleAnimationComplete() {
    if (completedRef.current) return;
    completedRef.current = true;
    setTimeout(() => onComplete(), 900);
  }

  if (!p1 || !p2) return null;

  const mx = (p1[0] + p2[0]) / 2;
  const my = (p1[1] + p2[1]) / 2 - Math.abs(p2[0] - p1[0]) * 0.25;
  const d = `M${p1[0]},${p1[1]} Q${mx},${my} ${p2[0]},${p2[1]}`;

  const sw = Math.max(0.6, 2 / Math.sqrt(currentZoom));
  const markerId = `arrow-${color.replace("#", "")}-${Math.round(currentZoom * 10)}`;

  return (
    <g>
      <defs>
        <marker
          id={markerId}
          markerWidth={6}
          markerHeight={6}
          refX={5}
          refY={3}
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill={color} />
        </marker>
      </defs>
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={sw}
        strokeDasharray="4,3"
        markerEnd={`url(#${markerId})`}
        initial={{ pathLength: 0, opacity: 0.9 }}
        animate={{ pathLength: 1, opacity: [0.9, 0.9, 0] }}
        transition={{
          pathLength: { duration: 0.65, ease: "easeInOut" },
          opacity: { duration: 1.5, times: [0, 0.6, 1] },
        }}
        onAnimationComplete={handleAnimationComplete}
      />
    </g>
  );
}
