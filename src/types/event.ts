export type EventCategory =
  | "siyasi"
  | "askeri"
  | "ekonomik"
  | "kulturel"
  | "sosyal";

export interface HistoricalEvent {
  id: string;
  title: string;
  description: string;
  date: string; // "1453", "1071-08", "1299"
  year: number;
  periodId: string;
  category: EventCategory;
  location: {
    name: string;
    coordinates: [number, number]; // [longitude, latitude]
    countryCodes?: number[]; // world-atlas numeric ISO 3166-1 kodları
    regionId?: string;
  };
  importance: 1 | 2 | 3; // 1: düşük, 2: orta, 3: yüksek
  tags: string[];
  relatedEventIds?: string[];
}
