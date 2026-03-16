import type { HistoricalEvent } from "@/types";
import Badge from "@/components/ui/Badge";

interface EventDetailProps {
  event: HistoricalEvent;
  onClose?: () => void;
}

export default function EventDetail({ event, onClose }: EventDetailProps) {
  return (
    <div className="bg-zinc-950/50 p-6 flex flex-col gap-4 relative">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-foreground font-display font-light text-3xl leading-tight drop-shadow-md">
          {event.title}
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-ochre-light bg-white/5 hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-all shrink-0"
          >
            ×
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Badge category={event.category} />
        <span className="text-ochre font-sans tracking-widest bg-zinc-900/60 px-2 py-1 rounded text-sm shadow-inner">
          {event.date}
        </span>
        <span className="text-zinc-400 font-sans text-sm flex items-center gap-1 uppercase tracking-wider">
          <svg className="w-4 h-4 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location.name}
        </span>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-ochre/20 via-ochre/10 to-transparent my-1" />

      <p className="text-zinc-300 font-sans text-[clamp(1rem,1.1vw,1.1rem)] leading-relax font-normal">
        {event.description}
      </p>

      {event.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 border border-white/10 text-ochre-light font-sans text-xs rounded-full shadow-sm tracking-wide"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
