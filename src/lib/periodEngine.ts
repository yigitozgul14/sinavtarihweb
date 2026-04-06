import type { PeriodEntity, PeriodEntityTransition } from "@/types/period-data";

// Her tick'te kaç yıl ilerlenecek — aktif entitelerin en kısa ömürlüsüne göre adapte olur.
const MIN_SCREEN_SECONDS = 4; // 1x hızda minimum ekran süresi
const TICKS_PER_SECOND = 10;  // 100ms tick aralığı

export const MAX_BUFFER = 50;

// Slow zone: entity kuruluş/kapanış yılına yaklaşıldığında otomatik yavaşlama
export const SLOW_ZONE_YEARS = 15;
export const SLOW_ZONE_FACTOR = 0.2; // increment'i 5x yavaşlat

// Event slow zone: önemli olaylara yaklaşıldığında da yavaşla (entity slow zone'dan daha dar pencere)
export const SLOW_ZONE_YEARS_EVENT = 8;

/**
 * Bir entity için asimetrik fade penceresi hesaplar.
 * fadeIn  = startYear'dan kaç yıl önce görünmeye başlasın
 * fadeOut = endYear'dan kaç yıl sonra görünmeye devam etsin
 * Transition bağlantılı entity'lerle overlap'i önlemek için clamp edilir.
 */
export function getEntityFadeWindow(
  entity: PeriodEntity,
  allEntities: PeriodEntity[],
  allTransitions: PeriodEntityTransition[]
): { fadeIn: number; fadeOut: number } {
  const successorIds = allTransitions.filter((t) => t.from === entity.id).map((t) => t.to);
  const predecessorIds = allTransitions.filter((t) => t.to === entity.id).map((t) => t.from);

  const successors = allEntities.filter((e) => successorIds.includes(e.id));
  const predecessors = allEntities.filter((e) => predecessorIds.includes(e.id));

  const gapAfter =
    successors.length > 0
      ? Math.min(...successors.map((s) => Math.max(0, s.startYear - entity.endYear)))
      : Infinity;
  const gapBefore =
    predecessors.length > 0
      ? Math.min(...predecessors.map((p) => Math.max(0, entity.startYear - p.endYear)))
      : Infinity;

  return {
    fadeIn:  Math.min(MAX_BUFFER, Math.floor(gapBefore / 2)),
    fadeOut: Math.min(MAX_BUFFER, Math.floor(gapAfter  / 2)),
  };
}

/**
 * Mevcut yıl ve hız için hesaplanan increment değeri (yıl/100ms).
 * Aktif entity'lerin en kısa ömürlüsü ekranda en az MIN_SCREEN_SECONDS kalsın.
 * Entity başlangıç/bitiş yıllarına ve önemli olaylara yaklaşıldığında otomatik yavaşlar.
 */
export function getIncrement(
  year: number,
  speed: number,
  entities: PeriodEntity[],
  pauseEvents?: Array<{ year: number }>
): number {
  const inEntitySlowZone = entities.some(
    (e) =>
      Math.abs(year - e.startYear) <= SLOW_ZONE_YEARS ||
      Math.abs(year - e.endYear) <= SLOW_ZONE_YEARS
  );

  const inEventSlowZone =
    pauseEvents != null && pauseEvents.length > 0
      ? pauseEvents.some((e) => Math.abs(year - e.year) <= SLOW_ZONE_YEARS_EVENT)
      : false;

  const inSlowZone = inEntitySlowZone || inEventSlowZone;

  const activeEntities = entities.filter(
    (e) => e.startYear <= year && e.endYear >= year
  );

  if (activeEntities.length === 0) {
    const base = speed * 5;
    return inSlowZone ? Math.max(speed * 0.2, base * SLOW_ZONE_FACTOR) : base;
  }

  const minLifespan = Math.min(...activeEntities.map((e) => e.endYear - e.startYear));
  const maxIncrement = minLifespan / (MIN_SCREEN_SECONDS * TICKS_PER_SECOND / speed);
  const increment = Math.min(speed * 5, Math.max(speed * 0.5, maxIncrement));

  return inSlowZone ? Math.max(speed * 0.2, increment * SLOW_ZONE_FACTOR) : increment;
}
