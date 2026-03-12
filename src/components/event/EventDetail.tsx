import type { HistoricalEvent } from "@/types";
import Badge from "@/components/ui/Badge";

interface EventDetailProps {
  event: HistoricalEvent;
  onClose?: () => void;
}

export default function EventDetail({ event, onClose }: EventDetailProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2 className="text-white font-bold text-lg leading-snug">
          {event.title}
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors text-xl leading-none"
          >
            ×
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge category={event.category} />
        <span className="text-zinc-400 text-xs">{event.date}</span>
        <span className="text-zinc-400 text-xs">· {event.location.name}</span>
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed">
        {event.description}
      </p>
      {event.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
