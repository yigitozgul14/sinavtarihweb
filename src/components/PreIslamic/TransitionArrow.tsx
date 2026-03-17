"use client";

import { motion } from "framer-motion";
import { useMapContext } from "react-simple-maps";
import type { CivTransition, Civilization } from "@/types";

interface TransitionArrowProps {
  transition: CivTransition;
  civilizations: Civilization[];
}

const TYPE_COLOR: Record<string, string> = {
  "göç": "#E8A045",
  "yıkılış": "#D63A3A",
  "restorasyon": "#5090F0",
  "hakimiyet-geçişi": "#C8A030",
  "bağlantı": "#888",
};

function CurvedArrow({
  from,
  to,
  color,
}: {
  from: [number, number];
  to: [number, number];
  color: string;
}) {
  const { projection } = useMapContext();

  const fromProj = projection(from);
  const toProj = projection(to);

  if (!fromProj || !toProj) return null;

  const [x1, y1] = fromProj;
  const [x2, y2] = toProj;

  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - 40;

  const d = `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;

  const markerId = `arrow-${color.replace("#", "")}`;

  return (
    <g>
      <defs>
        <marker
          id={markerId}
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M 0 0 L 6 3 L 0 6 z" fill={color} opacity={0.8} />
        </marker>
      </defs>
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray="4 3"
        markerEnd={`url(#${markerId})`}
        opacity={0.7}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </g>
  );
}

export default function TransitionArrow({
  transition,
  civilizations,
}: TransitionArrowProps) {
  const fromCiv = civilizations.find((c) => c.id === transition.from);
  const toCiv = civilizations.find((c) => c.id === transition.to);

  if (!fromCiv || !toCiv) return null;

  const color = TYPE_COLOR[transition.type] ?? "#888";

  return (
    <CurvedArrow
      from={fromCiv.centroid}
      to={toCiv.centroid}
      color={color}
    />
  );
}
