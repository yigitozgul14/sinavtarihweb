import type { EventCategory, HistoricalEvent } from "@/types";

export function filterByPeriod(
  events: HistoricalEvent[],
  periodId: string
): HistoricalEvent[] {
  return events.filter((e) => e.periodId === periodId);
}

export function filterByCategory(
  events: HistoricalEvent[],
  category: EventCategory
): HistoricalEvent[] {
  return events.filter((e) => e.category === category);
}

export function filterByYearRange(
  events: HistoricalEvent[],
  startYear: number,
  endYear: number
): HistoricalEvent[] {
  return events.filter((e) => e.year >= startYear && e.year <= endYear);
}

export function getEventById(
  events: HistoricalEvent[],
  id: string
): HistoricalEvent | undefined {
  return events.find((e) => e.id === id);
}
