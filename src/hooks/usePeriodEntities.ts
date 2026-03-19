import { useMemo } from "react";
import { getEntityFadeWindow } from "@/lib/periodEngine";
import type { PeriodEntity, PeriodEntityTransition } from "@/types/period-data";

export function usePeriodEntities(
  entities: PeriodEntity[],
  transitions: PeriodEntityTransition[],
  currentYear: number
) {
  const visibleEntities = useMemo(
    () =>
      entities.filter((e) => {
        const { fadeIn, fadeOut } = getEntityFadeWindow(e, entities, transitions);
        return currentYear >= e.startYear - fadeIn && currentYear <= e.endYear + fadeOut;
      }),
    [entities, transitions, currentYear]
  );

  return { visibleEntities };
}
