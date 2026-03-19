"use client";

import { motion } from "framer-motion";
import { useMapContext } from "react-simple-maps";

interface TravelingArrowProps {
  from: [number, number];
  to: [number, number];
  progress: number;
  color: string;
  zoomScale: number;
  entityId: string;
}

function qbezierPoint(
  p0: [number, number],
  cp: [number, number],
  p2: [number, number],
  t: number
): [number, number] {
  const mt = 1 - t;
  return [
    mt * mt * p0[0] + 2 * mt * t * cp[0] + t * t * p2[0],
    mt * mt * p0[1] + 2 * mt * t * cp[1] + t * t * p2[1],
  ];
}

function lerp2(a: [number, number], b: [number, number], t: number): [number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

export default function TravelingArrow({
  from,
  to,
  progress,
  color,
  zoomScale,
  entityId,
}: TravelingArrowProps) {
  const { projection } = useMapContext();

  const p1 = projection(from);
  const p2 = projection(to);
  if (!p1 || !p2) return null;

  const start: [number, number] = [p1[0], p1[1]];
  const end: [number, number] = [p2[0], p2[1]];

  const fullCp: [number, number] = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2 - Math.abs(end[0] - start[0]) * 0.25,
  ];

  const subCp = lerp2(start, fullCp, progress);
  const subEnd = qbezierPoint(start, fullCp, end, progress);

  const d = `M${start[0]},${start[1]} Q${subCp[0]},${subCp[1]} ${subEnd[0]},${subEnd[1]}`;
  const sw = 1.5 * zoomScale;
  const markerId = `travelarrow-${entityId}-${color.replace("#", "")}`;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <defs>
        <marker
          id={markerId}
          markerWidth={6}
          markerHeight={6}
          refX={5}
          refY={3}
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill={color} fillOpacity={0.8} />
        </marker>
      </defs>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeOpacity={0.8}
        strokeWidth={sw}
        markerEnd={`url(#${markerId})`}
      />
    </motion.g>
  );
}
