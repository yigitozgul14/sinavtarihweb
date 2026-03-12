import type { HistoricalEvent } from "@/types";
import Badge from "@/components/ui/Badge";

interface EventCardProps {
  event: HistoricalEvent;
  onClick?: (event: HistoricalEvent) => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <button
      onClick={() => onClick?.(event)}
      className="w-full text-left p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <span className="text-white text-sm font-medium leading-snug">
          {event.title}
        </span>
        <span className="text-zinc-500 text-xs shrink-0">{event.date}</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge category={event.category} />
        <span className="text-zinc-500 text-xs">{event.location.name}</span>
      </div>
    </button>
  );
}
