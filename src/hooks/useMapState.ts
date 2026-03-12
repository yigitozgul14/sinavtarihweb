"use client";

import { useState } from "react";
import type { MapViewState } from "@/types";
import { DEFAULT_MAP_VIEW } from "@/constants/map";

export function useMapState() {
  const [view, setView] = useState<MapViewState>(DEFAULT_MAP_VIEW);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  function resetView() {
    setView(DEFAULT_MAP_VIEW);
  }

  return { view, setView, resetView, selectedEventId, setSelectedEventId };
}
