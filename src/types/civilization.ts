export type CivEventType = "savaş" | "antlaşma" | "din" | "kuruluş" | "yıkılış" | "göç" | "kültür" | "siyasi";

export type TransitionType = "göç" | "yıkılış" | "restorasyon" | "hakimiyet-geçişi" | "bağlantı";

export interface CivEvent {
  id: string;
  civId: string;
  title: string;
  year: number;
  type: CivEventType;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
}

export interface CivTransition {
  from: string;  // civilization id
  to: string;    // civilization id
  type: TransitionType;
  label: string;
  year?: number;
}

export interface MapFocus {
  center: [number, number];
  scale: number;
}

export interface Civilization {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  color: string;
  centroid: [number, number];    // [longitude, latitude] — arrow anchor
  mapFocus: MapFocus;
  territoryCodes: number[];      // world-atlas numeric ISO-3166-1
  ruler: string;
  location: string;
  summary: string;
  facts: string[];
}
