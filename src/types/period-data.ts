import type { CulturePageData, ContentItem } from "@/data/islamiyet-oncesi/culturePages";
import type { QuizQuestion } from "@/data/islamiyet-oncesi/quizQuestions";

export type { CulturePageData, ContentItem };
export type { QuizQuestion };

export interface PeriodEntity {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  color: string;
  centroid: [number, number];
  mapFocus: { center: [number, number]; scale: number };
  territoryPolygon: [number, number][];
  hideFromMap?: boolean;
  /** Dönem-özel alanlar (ruler, summary, facts, location vb.) */
  meta: Record<string, unknown>;
}

export interface PeriodEntityEvent {
  id: string;
  entityId: string;
  secondaryEntityId?: string;
  title: string;
  year: number;
  /** Açık string — her dönem kendi event type'larını tanımlar */
  type: string;
  coordinates: [number, number];
  description: string;
}

export interface PeriodEntityTransition {
  from: string;
  to: string;
  type: string;
  label: string;
  year?: number;
}

export interface PeriodConfig {
  minYear: number;
  maxYear: number;
  mapCenter: [number, number];
  mapScale: number;
  autoPauseEventTypes: string[];
}

export interface PeriodDataBundle {
  entities: PeriodEntity[];
  events: PeriodEntityEvent[];
  transitions: PeriodEntityTransition[];
  culturePages: CulturePageData[];
  quizQuestions: QuizQuestion[];
  config: PeriodConfig;
}
