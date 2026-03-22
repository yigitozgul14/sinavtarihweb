# KPSS Tarihi — Proje Mimarisi

> Bu dosya, projenin genel yapısını, teknik kararlarını ve uygulanan refactoring'i belgeler.
> Context olarak kullanmak için tasarlanmıştır.

---

## Tech Stack

| Katman | Teknoloji | Versiyon |
|---|---|---|
| Framework | Next.js App Router | 16.1.6 |
| UI | React | 19.2.3 |
| Dil | TypeScript (strict) | 5 |
| Stil | Tailwind CSS v4 + CSS custom properties | 4 |
| Animasyon | Framer Motion | 12 |
| Harita | react-simple-maps (D3 tabanlı) | 3 |

---

## Klasör Yapısı

```
src/
├── app/
│   ├── page.tsx                                      Ana sayfa
│   ├── egitim/
│   │   ├── page.tsx                                  Dönem seçici
│   │   ├── [donem]/
│   │   │   └── page.tsx                              ✅ Generic dynamic route (YENİ)
│   │   └── islamiyet-oncesi-turk-tarihi/
│   │       └── page.tsx                              Eski hardcoded route (Faz 4'te silinecek)
│   ├── event/[id]/page.tsx
│   └── period/[slug]/page.tsx
│
├── components/
│   ├── period/                                       ✅ Generic component katmanı (YENİ)
│   │   ├── PeriodMap.tsx                             İnteraktif harita
│   │   ├── EntityDetailPanel.tsx                     Entity detay paneli
│   │   ├── ActiveEntitiesPanel.tsx                   Aktif medeniyet listesi
│   │   ├── EventHighlightToast.tsx                   Olay bildirim toast'u
│   │   ├── MediaPlayerBar.tsx                        Oynatma çubuğu
│   │   ├── CultureBook.tsx                           Kültür kitabı (props inject)
│   │   ├── QuizSection.tsx                           Quiz bölümü (props inject)
│   │   ├── TerritoryPolygon.tsx                      Coğrafi bölge poligonu
│   │   ├── TransitionArrow.tsx                       Geçiş oku (medeniyetler arası)
│   │   ├── TravelingArrow.tsx                        Hareketli olay oku
│   │   ├── EntityTimeline.tsx                        Kronoloji şeridi
│   │   └── EventArrow.tsx                            Olay animasyon oku
│   ├── PreIslamic/                                   Eski dönem-özel bileşenler (silinecek)
│   ├── ui/
│   │   ├── BottomSheet.tsx                           ✅ Mobile bottom sheet (YENİ)
│   │   └── Badge.tsx
│   ├── Map/
│   ├── event/
│   ├── layout/
│   └── timeline/
│
├── types/
│   ├── period-data.ts                                ✅ Generic tip sistemi (YENİ)
│   ├── civilization.ts                               Orijinal somut tipler (korunur)
│   ├── event.ts
│   ├── period.ts
│   ├── map.ts
│   └── index.ts                                      Barrel export (period-data eklendi)
│
├── data/
│   ├── islamiyet-oncesi/
│   │   ├── civilizations.json                        18 medeniyet verisi
│   │   ├── events.json                               20 olay verisi
│   │   ├── transitions.json                          8 geçiş verisi
│   │   ├── culturePages.ts                           12 kültür sayfası
│   │   ├── quizQuestions.ts                          74 soru havuzu
│   │   └── adapter.ts                                ✅ PeriodDataBundle üretici (YENİ)
│   ├── periods/
│   │   ├── index.ts
│   │   └── registry.ts                               ✅ PERIOD_DATA_REGISTRY (YENİ)
│   └── events/
│       ├── ottoman.ts
│       └── republic.ts
│
├── hooks/
│   ├── usePeriodPhase.ts                             ✅ Faz state makinesi (YENİ)
│   ├── usePeriodPlayback.ts                          ✅ RAF oynatma döngüsü (YENİ)
│   ├── usePeriodEntities.ts                          ✅ Görünür entity filtresi (YENİ)
│   ├── useBreakpoint.ts                              ✅ Viewport breakpoint (YENİ)
│   ├── useMapState.ts
│   └── useTimeline.ts
│
├── lib/
│   ├── format.ts                                     ✅ Merkezi formatYear (YENİ)
│   ├── periodEngine.ts                               ✅ getEntityFadeWindow, getIncrement (YENİ)
│   └── events.ts
│
└── constants/
    ├── periods.ts
    └── map.ts
```

---

## Generic Tip Sistemi (`src/types/period-data.ts`)

Tüm dönem bileşenleri bu tipleri kullanır. Somut tipler (`Civilization`, `CivEvent`) silinmez — adapter aracılığıyla generic'e dönüştürülür.

```typescript
// Her dönemin temel entitesi (Medeniyet, Devlet, Hanedan…)
interface PeriodEntity {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  color: string;
  centroid: [number, number];           // Harita merkez noktası [lon, lat]
  mapFocus: { center: [number, number]; scale: number };
  territoryPolygon: [number, number][]; // Coğrafi sınır
  meta: Record<string, unknown>;        // Dönem-özel alanlar (ruler, summary, facts…)
}

// Tarihsel olay
interface PeriodEntityEvent {
  id: string;
  entityId: string;                     // civId → entityId (renamed)
  secondaryEntityId?: string;
  title: string;
  year: number;
  type: string;                         // açık string — her dönem kendi union type'ını tanımlar
  coordinates: [number, number];
  description: string;
}

// Medeniyetler arası geçiş
interface PeriodEntityTransition {
  from: string;
  to: string;
  type: string;
  label: string;
  year?: number;
}

// Dönem konfigürasyonu
interface PeriodConfig {
  minYear: number;
  maxYear: number;
  mapCenter: [number, number];
  mapScale: number;
  autoPauseEventTypes: string[];        // Bu tiplerdeki olaylarda oynatma otomatik durur
}

// Dönem veri paketi — her dönemin adapter.ts'i bunu üretir
interface PeriodDataBundle {
  entities: PeriodEntity[];
  events: PeriodEntityEvent[];
  transitions: PeriodEntityTransition[];
  culturePages: CulturePageData[];
  quizQuestions: QuizQuestion[];
  config: PeriodConfig;
}
```

### Mevcut → Generic Tip Eşlemesi

| Mevcut Tip | Generic Tip | Değişen Alan |
|---|---|---|
| `Civilization` | `PeriodEntity` | `ruler`, `location`, `summary`, `facts` → `meta` alanına |
| `CivEvent` | `PeriodEntityEvent` | `civId` → `entityId` |
| `CivTransition` | `PeriodEntityTransition` | Yapı birebir aynı |

---

## Adapter Pattern (`src/data/islamiyet-oncesi/adapter.ts`)

Her dönem klasörü bir `adapter.ts` içerir ve `loadBundle(): Promise<PeriodDataBundle>` export eder.
Orijinal JSON'lar hiç değiştirilmez — mapping fonksiyonlarıyla dönüştürülür.

```typescript
export async function loadBundle(): Promise<PeriodDataBundle> {
  const [civs, evs, trans, { default: culturePages }, { default: quizQuestions }] =
    await Promise.all([
      import("./civilizations.json"),
      import("./events.json"),
      import("./transitions.json"),
      import("./culturePages"),
      import("./quizQuestions"),
    ]);

  return {
    entities:    civs.default.map(civToEntity),
    events:      evs.default.map(civEventToEntityEvent),
    transitions: trans.default.map(civTransitionToEntityTransition),
    culturePages,
    quizQuestions,
    config: {
      minYear: -700, maxYear: 1300,
      mapCenter: [65, 48], mapScale: 420,
      autoPauseEventTypes: ["savaş", "antlaşma", "din", "göç", "kültür", "siyasi"],
    },
  };
}
```

---

## Period Data Registry (`src/data/periods/registry.ts`)

Yeni bir dönem eklemek için sadece buraya bir satır eklenir. Generic route ve tüm bileşenler otomatik çalışır.

```typescript
export const PERIOD_DATA_REGISTRY: Record<string, PeriodDataLoader> = {
  "islamiyet-oncesi-turk-tarihi": () =>
    import("@/data/islamiyet-oncesi/adapter").then((m) => m.loadBundle()),

  // Yeni dönem eklemek:
  // "buyuk-selcuklu": () =>
  //   import("@/data/buyuk-selcuklu/adapter").then((m) => m.loadBundle()),
};
```

---

## Hook Mimarisi

### `usePeriodPhase` — Faz State Makinesi

Uygulama üç fazdan oluşur. Geçişler bu hook aracılığıyla yapılır.

```
"timeline" ──goToCulture──► "culture" ──goToQuiz──► "quiz"
     ▲                                                  │
     └──────────────────goToTimeline────────────────────┘
```

```typescript
const { appPhase, goToTimeline, goToCulture, goToQuiz } = usePeriodPhase();
```

### `usePeriodPlayback` — RAF Oynatma Döngüsü

`page.tsx`'ten çıkarılan 150+ satır oynatma logic'i. `requestAnimationFrame` tabanlı, 60fps smooth.

```typescript
const {
  currentYear, isPlaying, speed, highlightedEvent,
  togglePlay, pausePlayback, handleYearChange, handleSpeedChange,
} = usePeriodPlayback({ events, entities, config });
```

**İçerdiği özellikler:**
- `requestAnimationFrame` tabanlı smooth playback
- Adaptive increment: en kısa ömürlü aktif entity'ye göre hız ayarı
- Slow zone: kuruluş/yıkılış yılı ±15 yıl içinde otomatik yavaşlama (5x)
- Auto-pause on event: harici olay türlerinde 2.5s durdur, sonra devam et (`autoPauseEventTypes`)
- **Auto-pause on entity click**: Haritada veya panel'de bir entity'ye tıklandığında `pausePlayback()` çağrılır, oynatma otomatik durur — aktif auto-resume timeout da temizlenir
- Spacebar toggle

### `usePeriodEntities` — Entity Filtresi

```typescript
const { visibleEntities } = usePeriodEntities(entities, transitions, currentYear);
```

Asimetrik fade window algoritması: transition bağlantılı entity'lerle overlap'i önlemek için kuruluş/yıkılış etrafında buffer hesaplar.

### `useBreakpoint` — Viewport Breakpoint

```typescript
const { isMobile, isTablet, isDesktop, breakpoint } = useBreakpoint();
// breakpoint: "sm" | "md" | "lg" | "xl"
```

---

## Utility Katmanı (`src/lib/`)

### `format.ts`

Tüm bileşenler bu fonksiyonu kullanır — artık duplicate yok.

```typescript
formatYear(-530) // → "MÖ 530"
formatYear(1071) // → "MS 1071"
```

### `periodEngine.ts`

```typescript
// Asymmetric fade window — transition gap'ine göre clamp edilir
getEntityFadeWindow(entity, allEntities, allTransitions)
// → { fadeIn: number, fadeOut: number }

// Adaptive increment — slow zone + active entity lifespan'e göre
getIncrement(year, speed, entities)
// → yıl/100ms değeri
```

**Sabitler:**
```
MIN_SCREEN_SECONDS = 4    En kısa ömürlü entity ekranda min 4sn kalsın
TICKS_PER_SECOND   = 10   100ms tick aralığı
MAX_BUFFER         = 50   Fade window üst sınırı (yıl)
SLOW_ZONE_YEARS    = 15   Kuruluş/yıkılış ±15 yıl içinde yavaşla
SLOW_ZONE_FACTOR   = 0.2  Increment 5x düşür (0.2 = 1/5)
```

---

## Lazy Loading Stratejisi (3 Katman)

### Katman 1 — Route Code Splitting

`[donem]/page.tsx` tüm ağır bileşenleri `dynamic()` ile yükler:

```typescript
const PeriodMap      = dynamic(() => import("@/components/period/PeriodMap"),      { ssr: false });
const CultureBook    = dynamic(() => import("@/components/period/CultureBook"),    { ssr: false });
const QuizSection    = dynamic(() => import("@/components/period/QuizSection"),    { ssr: false });
const MediaPlayerBar = dynamic(() => import("@/components/period/MediaPlayerBar"), { ssr: false });
```

### Katman 2 — Veri Lazy Loading

JSON dosyaları o döneme girilene kadar indirilmez:

```typescript
useEffect(() => {
  const loader = PERIOD_DATA_REGISTRY[params.donem];
  if (!loader) { router.replace("/egitim"); return; }
  loader().then(setBundle); // Promise.all ile paralel yüklenir
}, [params.donem]);
```

### Katman 3 — Faz Gated Mounting

Kültür ve quiz bileşenleri yalnızca ilgili faza geçilince mount edilir:

```typescript
{appPhase === "culture" && <CultureBook pages={bundle.culturePages} ... />}
{appPhase === "quiz"    && <QuizSection questions={bundle.quizQuestions} ... />}
```

---

## Generic Route — `app/egitim/[donem]/page.tsx`

Tüm dönemler için tek route. `PERIOD_DATA_REGISTRY`'de kayıtlı olmayan slug'lar `/egitim`'e yönlendirilir.

```
/egitim/islamiyet-oncesi-turk-tarihi  →  [donem]/page.tsx  →  PERIOD_DATA_REGISTRY["islamiyet-oncesi-turk-tarihi"]
/egitim/buyuk-selcuklu               →  [donem]/page.tsx  →  PERIOD_DATA_REGISTRY["buyuk-selcuklu"]
```

**Veri akışı:**
```
params.donem
  → PERIOD_DATA_REGISTRY[donem]()
  → adapter.loadBundle()
  → PeriodDataBundle
  → usePeriodPlayback + usePeriodEntities + usePeriodPhase
  → PeriodMap + MediaPlayerBar + CultureBook + QuizSection
```

---

## İslamiyet Öncesi Türk Tarihi Dönemi

### Veri

| Dosya | İçerik | Boyut |
|---|---|---|
| `civilizations.json` | 18 Türk boyu (İskitler → Kıpçaklar) | ~15KB |
| `events.json` | 20 tarihsel olay | ~8KB |
| `transitions.json` | 8 medeniyetler arası geçiş | ~2KB |
| `culturePages.ts` | 12 kültür sayfası (kapak + içerik + son) | ~20KB |
| `quizQuestions.ts` | 74 soru havuzu | ~35KB |

### Quiz

- Havuzdan her oturum için rastgele **30 soru** seçilir
- "Tekrar Dene" yeni bir rastgele set oluşturur (`sessionKey` state)
- Kapsam: tüm 17 medeniyet — kuruluş, savaş, kültür, coğrafya soruları

### Kültür Kitabı

- Sayfa animasyonları Framer Motion `AnimatePresence` ile
- Klavye navigasyonu: `←` `→` `↑` `↓`
- Nokta indikatörü + aktif sayfa pill animasyonu
- `overflow-y: auto` ile uzun sayfalar scroll edilebilir

---

## Component Eşleme Tablosu

| Eski (PreIslamic/) | Yeni (period/) | Temel Değişiklik |
|---|---|---|
| `IslamiyetOncesiMap` | `PeriodMap` | `civilizations/visibleCivs` → `entities/visibleEntities` |
| `CivilizationDetail` | `EntityDetailPanel` | `civ: Civilization` → `entity: PeriodEntity` |
| `ActiveCulturesPanel` | `ActiveEntitiesPanel` | Aynı yapı, generic tip |
| `EventHighlightToast` | `EventHighlightToast` | `civId` → `entityId` |
| `MediaPlayerBar` | `MediaPlayerBar` | `CivEvent[]` → `PeriodEntityEvent[]`; `formatYear` import |
| `CultureBook` | `CultureBook` | `pages: CulturePageData[]` prop eklendi |
| `QuizSection` | `QuizSection` | `questions: QuizQuestion[]` prop eklendi |
| `TerritoryPolygon` | `TerritoryPolygon` | Tip-bağımsız, birebir taşıma |
| `TransitionArrow` | `TransitionArrow` | `Civilization` → `PeriodEntity` |
| `TravelingArrow` | `TravelingArrow` | `civId` → `entityId` |
| `CivilizationTimeline` | `EntityTimeline` | `Civilization/CivEvent` → generic |
| `EventArrow` | `EventArrow` | Birebir taşıma |

---

## Yeni Dönem Ekleme Kılavuzu

Yeni bir dönem eklemek için **sadece 2 adım** gerekir:

### Adım 1 — Veri Klasörü

```
src/data/yeni-donem/
├── civilizations.json     (veya hangi entity adı uygunsa)
├── events.json
├── transitions.json
├── culturePages.ts
├── quizQuestions.ts
└── adapter.ts             ← Bu dosya loadBundle() export etmeli
```

`adapter.ts` şablonu:
```typescript
import type { PeriodDataBundle } from "@/types/period-data";

export async function loadBundle(): Promise<PeriodDataBundle> {
  const [entities, events, transitions, { default: culturePages }, { default: quizQuestions }] =
    await Promise.all([
      import("./entities.json"),
      import("./events.json"),
      import("./transitions.json"),
      import("./culturePages"),
      import("./quizQuestions"),
    ]);

  return {
    entities:    entities.default.map(toEntity),
    events:      events.default.map(toEvent),
    transitions: transitions.default.map(toTransition),
    culturePages,
    quizQuestions,
    config: {
      minYear: ..., maxYear: ...,
      mapCenter: [...], mapScale: ...,
      autoPauseEventTypes: [...],
    },
  };
}
```

### Adım 2 — Registry'ye Kayıt

```typescript
// src/data/periods/registry.ts
export const PERIOD_DATA_REGISTRY = {
  "islamiyet-oncesi-turk-tarihi": () =>
    import("@/data/islamiyet-oncesi/adapter").then((m) => m.loadBundle()),

  "yeni-donem-slug": () =>                                    // ← buraya ekle
    import("@/data/yeni-donem/adapter").then((m) => m.loadBundle()),
};
```

`/egitim/yeni-donem-slug` adresi artık otomatik çalışır.

---

## Bekleyen Görevler (Faz 4)

Aşağıdaki temizlik işlemleri ileride yapılacak — mevcut uygulama etkilenmez:

- [ ] `src/components/PreIslamic/` klasörünü sil
- [ ] `src/app/egitim/islamiyet-oncesi-turk-tarihi/page.tsx` dosyasını sil
      *(zaten `[donem]` route'u bu adresi karşılıyor)*
- [ ] `PreIslamic/` componentlarındaki duplicate `formatYear` fonksiyonlarını `lib/format.ts` import'uyla değiştir
- [ ] `IslamiyetOncesiMap.tsx` içindeki duplicate `getCivFadeWindow` fonksiyonunu kaldır
- [ ] `types/index.ts`'den artık kullanılmayan barrel export'ları temizle

---

## Proje Güçlü Yönleri

- **60fps smooth playback**: `requestAnimationFrame` tabanlı, `setInterval` kullanılmıyor
- **Adaptive speed**: Aktif entity'nin ömrüne göre increment otomatik ayarlanır
- **Slow zone sistemi**: Kuruluş/yıkılış yakınında otomatik 5x yavaşlama
- **Auto-pause on event + toast**: Harici olaylarda 2.5s durdur, bilgi göster, devam et
- **Auto-pause on entity click**: Entity seçildiğinde `pausePlayback()` çağrılır; tüm dönemlerde geçerlidir
- **Zero-config yeni dönem**: Registry'ye bir satır eklemek yeterli
- **3 katman lazy loading**: Route split + veri lazy + faz-gated mount
- **Strict TypeScript**: Adapter pattern, generic tip sistemi
- **Fade window algoritması**: Geçiş bağlantılı entity'ler haritada overlap yapmaz
