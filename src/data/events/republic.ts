import type { HistoricalEvent } from "@/types";

export const REPUBLIC_EVENTS: HistoricalEvent[] = [
  {
    id: "cumhuriyet-ilani-1923",
    title: "Türkiye Cumhuriyeti'nin İlanı",
    description:
      "29 Ekim 1923'te Mustafa Kemal Atatürk önderliğinde Türkiye Cumhuriyeti'nin ilan edilmesi.",
    date: "1923-10-29",
    year: 1923,
    periodId: "turk-cumhuriyeti",
    category: "siyasi",
    location: {
      name: "Ankara",
      coordinates: [32.86, 39.92],
      countryCodes: [792],
    },
    importance: 3,
    tags: ["cumhuriyet", "Atatürk", "ilanı"],
  },
  {
    id: "lozan-antlasmasi-1923",
    title: "Lozan Antlaşması",
    description:
      "24 Temmuz 1923'te imzalanan Lozan Antlaşması ile Türkiye'nin sınırları uluslararası alanda tanındı.",
    date: "1923-07-24",
    year: 1923,
    periodId: "turk-cumhuriyeti",
    category: "siyasi",
    location: {
      name: "Lozan, İsviçre",
      coordinates: [6.63, 46.52],
      countryCodes: [756, 792], // İsviçre + Türkiye
    },
    importance: 3,
    tags: ["Lozan", "antlaşma", "sınırlar"],
  },
];
