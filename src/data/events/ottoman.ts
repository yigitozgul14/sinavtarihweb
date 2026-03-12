import type { HistoricalEvent } from "@/types";

// world-atlas numeric ISO 3166-1 kodları:
// Türkiye: 792, Yunanistan: 300, Bulgaristan: 100,
// Sırbistan: 688, Macaristan: 348, İsviçre: 756

export const OTTOMAN_EVENTS: HistoricalEvent[] = [
  {
    id: "osmanli-kurulus-1299",
    title: "Osmanlı Devleti'nin Kuruluşu",
    description:
      "Osman Bey liderliğinde Osmanlı Devleti'nin kurulması. Söğüt merkezli bu küçük Türkmen beyliği zamanla büyük bir imparatorluğa dönüşecektir.",
    date: "1299",
    year: 1299,
    periodId: "osmanlı-kuruluş",
    category: "siyasi",
    location: {
      name: "Söğüt, Bilecik",
      coordinates: [30.17, 39.97],
      countryCodes: [792],
    },
    importance: 3,
    tags: ["kuruluş", "Osman Bey", "beylik"],
  },
  {
    id: "bursa-fethi-1326",
    title: "Bursa'nın Fethi",
    description:
      "Orhan Bey döneminde Bursa'nın fethedilmesi ve Osmanlı'nın ilk büyük şehir merkezi haline gelmesi.",
    date: "1326",
    year: 1326,
    periodId: "osmanlı-kuruluş",
    category: "askeri",
    location: {
      name: "Bursa",
      coordinates: [29.06, 40.18],
      countryCodes: [792],
    },
    importance: 2,
    tags: ["fetih", "Orhan Bey", "Bursa"],
  },
  {
    id: "istanbul-fethi-1453",
    title: "İstanbul'un Fethi",
    description:
      "Fatih Sultan Mehmet liderliğinde Konstantinopolis'in fethedilmesi. Bu olay Orta Çağ'ın sonu ve Yeni Çağ'ın başlangıcı olarak kabul edilir.",
    date: "1453-05-29",
    year: 1453,
    periodId: "osmanlı-yükseliş",
    category: "askeri",
    location: {
      name: "İstanbul",
      coordinates: [28.97, 41.01],
      countryCodes: [792, 300], // Türkiye + Yunanistan (Bizans toprakları)
    },
    importance: 3,
    tags: ["fetih", "Fatih", "Bizans", "İstanbul"],
  },
];
