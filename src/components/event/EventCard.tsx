"use client";

import type { HistoricalEvent } from "@/types";
import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";

interface EventCardProps {
  event: HistoricalEvent;
  onClick?: (event: HistoricalEvent) => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick?.(event)}
      className="w-full text-left p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-700/60 backdrop-blur-md transition-all border border-white/5 shadow-md flex flex-col gap-2 group"
    >
      <div className="flex items-start justify-between gap-3 w-full">
        <span className="text-foreground text-sm font-display font-semibold leading-snug group-hover:text-ochre-light transition-colors text-lg">
          {event.title}
        </span>
        <span className="text-ochre text-xs shrink-0 font-sans tracking-widest bg-zinc-900/50 px-2 py-1 rounded-md">
          {event.date}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <Badge category={event.category} />
        <span className="text-zinc-400 font-sans text-xs flex items-center gap-1 uppercase tracking-wider">
          <svg className="w-3 h-3 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location.name}
        </span>
      </div>
    </motion.button>
  );
}
