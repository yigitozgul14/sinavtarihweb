"use client";

import { Marker } from "react-simple-maps";
import type { HistoricalEvent } from "@/types";

interface EventMarkerProps {
  event: HistoricalEvent;
  isSelected: boolean;
  onClick: (event: HistoricalEvent) => void;
}

const IMPORTANCE_SIZE: Record<number, number> = {
  1: 4,
  2: 6,
  3: 9,
};

export default function EventMarker({
  event,
  isSelected,
  onClick,
}: EventMarkerProps) {
  const size = IMPORTANCE_SIZE[event.importance] ?? 6;

  return (
    <Marker
      coordinates={event.location.coordinates}
      onClick={() => onClick(event)}
    >
      <circle
        r={size}
        fill={isSelected ? "#fff" : "#DC143C"}
        stroke={isSelected ? "#DC143C" : "#fff"}
        strokeWidth={1.5}
        className="cursor-pointer"
      />
    </Marker>
  );
}
