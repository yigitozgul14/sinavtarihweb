"use client";

import { useState } from "react";
import { ALL_EVENTS } from "@/data/events";
import { filterByPeriod, filterByYearRange } from "@/lib/events";

export function useTimeline() {
  const [activePeriodId, setActivePeriodId] = useState<string | null>(null);
  const [yearRange, setYearRange] = useState<[number, number] | null>(null);

  const filteredEvents = (() => {
    let events = ALL_EVENTS;
    if (activePeriodId) events = filterByPeriod(events, activePeriodId);
    if (yearRange) events = filterByYearRange(events, yearRange[0], yearRange[1]);
    return events;
  })();

  return {
    filteredEvents,
    activePeriodId,
    setActivePeriodId,
    yearRange,
    setYearRange,
  };
}
