export interface Period {
  id: string;
  slug: string;
  name: string;
  startYear: number;
  endYear: number | null; // null = devam ediyor
  color: string; // Haritada/timeline'da kullanılacak renk
  description: string;
}
