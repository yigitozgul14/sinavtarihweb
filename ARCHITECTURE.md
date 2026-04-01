# KPSS Tarih Web — Mimari Kararlar

## Global Davranış Kuralları

### 1. Medeniyet Seçildiğinde Media Player Durur

**Kural:** Kullanıcı harita üzerinde veya aktif kültürler panelinden bir medeniyete/devlete tıkladığında oynatma otomatik olarak durur.

**Uygulama:** Her path'in page bileşeninde selection state'i doğrudan `setState` ile değil, bir `handleSelect` wrapper fonksiyonu üzerinden yönetilmelidir:

```ts
// [donem]/page.tsx — period paths
const handleEntitySelect = useCallback((id: string | null) => {
  setSelectedEntityId(id);
  if (id !== null) pausePlayback();
}, [pausePlayback]);

// islamiyet-oncesi — custom path
const handleCivSelect = useCallback((id: string | null) => {
  setSelectedCivId(id);
  if (id !== null) setIsPlaying(false);
}, []);
```

**Kritik:** Harita bileşenine, aktif kültürler paneline ve diğer tüm selection kaynaklarına `setSelected*` yerine her zaman bu wrapper handler'lar (`handleEntitySelect` / `handleCivSelect`) geçilmelidir. Aksi hâlde panel playback'i bypass eder.

---

### 2. Yeni Path Eklerken Checklist

Yeni bir egitim path'i eklendiğinde şu dosyalar güncellenmeli:

1. `src/data/<slug>/` — `civilizations.json`, `events.json`, `transitions.json`, `adapter.ts`, `culturePages.ts`, `quizQuestions.ts`
2. `src/data/periods/registry.ts` — yeni path kaydı
3. `src/constants/periods.ts` — renk ve tarih aralığı
4. `src/app/egitim/page.tsx` — `DEDICATED_ROUTES`
5. `src/components/timeline/PeriodFilter.tsx` — `DEDICATED_ROUTES`
6. `src/components/layout/Header.tsx` — `DEDICATED_ROUTES`
7. Yeni geçiş türleri varsa `TransitionArrow.tsx` ve `PeriodMap.tsx` legend'ına ekle
