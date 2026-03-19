/**
 * Yılı "MÖ 530" veya "MS 375" formatında döndürür.
 */
export function formatYear(year: number): string {
  return year < 0 ? `MÖ ${Math.abs(year)}` : `MS ${year}`;
}
