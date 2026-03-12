"use client";

import { useState } from "react";
import WorldMap from "@/components/Map/WorldMap";
import PeriodFilter from "@/components/timeline/PeriodFilter";
import EventCard from "@/components/event/EventCard";
import EventDetail from "@/components/event/EventDetail";
import { useTimeline } from "@/hooks/useTimeline";
import type { HistoricalEvent } from "@/types";

export default function Home() {
  const { filteredEvents, activePeriodId, setActivePeriodId } = useTimeline();
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  return (
    <main className="flex min-h-screen flex-col pt-14 bg-zinc-950">
      {/* Harita */}
      <div className="w-full">
        <WorldMap
          events={filteredEvents}
          selectedEvent={selectedEvent}
        />
      </div>

      {/* Dönem filtresi */}
      <div className="px-4 py-3 border-b border-zinc-800 overflow-x-auto">
        <PeriodFilter
          activePeriodId={activePeriodId}
          onSelect={setActivePeriodId}
        />
      </div>

      {/* Event listesi + detay */}
      <div className="flex flex-1 gap-4 p-4 max-w-7xl mx-auto w-full">
        {/* Liste */}
        <div className="flex flex-col gap-2 w-full max-w-sm shrink-0">
          <p className="text-zinc-500 text-xs mb-1">
            {filteredEvents.length} olay
          </p>
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={setSelectedEvent}
            />
          ))}
        </div>

        {/* Detay paneli */}
        {selectedEvent && (
          <div className="flex-1">
            <EventDetail
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          </div>
        )}
      </div>
    </main>
  );
}
