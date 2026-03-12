import type { EventCategory } from "@/types";

const CATEGORY_LABELS: Record<EventCategory, string> = {
  siyasi: "Siyasi",
  askeri: "Askeri",
  ekonomik: "Ekonomik",
  kulturel: "Kültürel",
  sosyal: "Sosyal",
};

const CATEGORY_COLORS: Record<EventCategory, string> = {
  siyasi: "bg-blue-900 text-blue-200",
  askeri: "bg-red-900 text-red-200",
  ekonomik: "bg-yellow-900 text-yellow-200",
  kulturel: "bg-purple-900 text-purple-200",
  sosyal: "bg-green-900 text-green-200",
};

interface BadgeProps {
  category: EventCategory;
}

export default function Badge({ category }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${CATEGORY_COLORS[category]}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
