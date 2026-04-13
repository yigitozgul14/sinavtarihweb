/**
 * Aynı yılda birden fazla event varsa bunları sırayla göstermek için
 * engine'in kullandığı `year` değerine küçük fraksiyonel offset ekler.
 *
 * Örnek: 1913 yılında 6 event → 1913.00, 1913.15, 1913.30, 1913.45, 1913.60, 1913.75
 *
 * - Tüm eventler 0.90 yıl içinde kalır → Math.round() ile hepsi aynı yılı gösterir
 * - Engine her eventi ayrı bir threshold'da tetikler → kullanıcı kaçırmaz
 * - JSON'daki integer year değerleri değişmez; bu dönüşüm yalnızca bundle yüklenirken çalışır
 *
 * @param events  PeriodEntityEvent dizisi (year: number alanı olmalı)
 * @param maxSpread  Grup içi toplam yayılım (varsayılan 0.90 — integer sınırının altında kalır)
 */
export function spreadSameYearEvents<T extends { year: number }>(
  events: T[],
  maxSpread = 0.9
): T[] {
  // Yıla göre grupla (orijinal sırayı koru)
  const byYear = new Map<number, T[]>();
  for (const ev of events) {
    const bucket = byYear.get(ev.year);
    if (bucket) {
      bucket.push(ev);
    } else {
      byYear.set(ev.year, [ev]);
    }
  }

  const result: T[] = [];

  for (const [, group] of byYear) {
    if (group.length === 1) {
      result.push(group[0]);
    } else {
      // Grubun tamamı maxSpread içinde eşit aralıklarla dağıtılır
      const spacing = maxSpread / (group.length - 1);
      group.forEach((ev, i) => {
        result.push({ ...ev, year: ev.year + i * spacing });
      });
    }
  }

  // Engine'in doğru sırayla ilerleyebilmesi için year'a göre sırala
  return result.sort((a, b) => a.year - b.year);
}
