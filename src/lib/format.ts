/**
 * Yılı "MÖ 530" veya "MS 375" formatında döndürür.
 */
export function formatYear(year: number): string {
  const y = Math.round(year);
  return y < 0 ? `MÖ ${Math.abs(y)}` : `MS ${y}`;
}
