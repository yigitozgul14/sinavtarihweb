import type { HistoricalEvent } from "@/types";
import { OTTOMAN_EVENTS } from "./ottoman";
import { REPUBLIC_EVENTS } from "./republic";

export const ALL_EVENTS: HistoricalEvent[] = [
  ...OTTOMAN_EVENTS,
  ...REPUBLIC_EVENTS,
].sort((a, b) => a.year - b.year);

export { OTTOMAN_EVENTS, REPUBLIC_EVENTS };
