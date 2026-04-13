import type {
  PeriodDataBundle,
  PeriodEntity,
  PeriodEntityEvent,
  PeriodEntityTransition,
} from "@/types/period-data";
import type { Civilization, CivEvent, CivTransition } from "@/types";
import { spreadSameYearEvents } from "@/lib/spreadEvents";

function civToEntity(civ: Civilization): PeriodEntity {
  return {
    id: civ.id,
    name: civ.name,
    startYear: civ.startYear,
    endYear: civ.endYear,
    color: civ.color,
    centroid: civ.centroid,
    mapFocus: civ.mapFocus,
    territoryPolygon: civ.territoryPolygon,
    hideFromMap: civ.hideFromMap,
    meta: {
      ruler: civ.ruler,
      location: civ.location,
      summary: civ.summary,
      facts: civ.facts,
    },
  };
}

function civEventToEntityEvent(e: CivEvent): PeriodEntityEvent {
  return {
    id: e.id,
    entityId: e.civId,
    secondaryEntityId: e.secondaryCivId,
    title: e.title,
    year: e.year,
    type: e.type,
    coordinates: e.coordinates,
    description: e.description,
  };
}

function civTransitionToEntityTransition(t: CivTransition): PeriodEntityTransition {
  return {
    from: t.from,
    to: t.to,
    type: t.type,
    label: t.label,
    year: t.year,
  };
}

export async function loadBundle(): Promise<PeriodDataBundle> {
  const [
    { default: civsRaw },
    { default: eventsRaw },
    { default: transitionsRaw },
    { default: culturePages },
    { default: quizQuestions },
  ] = await Promise.all([
    import("./civilizations.json"),
    import("./events.json"),
    import("./transitions.json"),
    import("./culturePages"),
    import("./quizQuestions"),
  ]);

  return {
    entities:    (civsRaw as Civilization[]).map(civToEntity),
    events:      spreadSameYearEvents((eventsRaw as CivEvent[]).map(civEventToEntityEvent)),
    transitions: (transitionsRaw as CivTransition[]).map(civTransitionToEntityTransition),
    culturePages,
    quizQuestions,
    config: {
      minYear: 1299,
      maxYear: 1579,
      mapCenter: [32, 40],
      mapScale: 500,
      autoPauseEventTypes: ["savaş", "antlaşma", "siyasi", "kuruluş"],
    },
  };
}
