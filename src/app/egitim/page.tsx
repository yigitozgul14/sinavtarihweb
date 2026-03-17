"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const DEDICATED_ROUTES: Record<string, string> = {
  "islamiyet-oncesi-turk-tarihi": "/egitim/islamiyet-oncesi-turk-tarihi",
};
import WorldMap from "@/components/Map/WorldMap";
import PeriodFilter from "@/components/timeline/PeriodFilter";
import EventCard from "@/components/event/EventCard";
import EventDetail from "@/components/event/EventDetail";
import { useTimeline } from "@/hooks/useTimeline";
import type { HistoricalEvent } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

function MapInterface() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { filteredEvents, activePeriodId, setActivePeriodId } = useTimeline();
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  useEffect(() => {
    const periodSlug = searchParams.get('period');
    if (!periodSlug) return;
    if (DEDICATED_ROUTES[periodSlug]) {
      router.replace(DEDICATED_ROUTES[periodSlug]);
      return;
    }
    setActivePeriodId(periodSlug);
    setSelectedEvent(null);
  }, [searchParams, setActivePeriodId, router]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Harita (Background) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full h-full max-w-[1920px]">
          <WorldMap
            events={filteredEvents}
            selectedEvent={selectedEvent}
            onEventSelect={setSelectedEvent}
          />
        </div>
      </div>

      {/* Overlays / Floating UI Container */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col pt-20 pb-8 px-6">
        
        {/* Main Content Area */}
        <div className="flex-1 flex gap-6 items-start justify-end w-full max-w-7xl mx-auto h-full min-h-0">
          
          {/* Detail paneli (Right side) */}
          <AnimatePresence mode="wait">
            {selectedEvent && (
              <motion.div 
                key={selectedEvent.id}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-full max-w-md pointer-events-auto h-auto max-h-[80vh] overflow-y-auto custom-scrollbar shadow-2xl rounded-2xl"
              >
                <div className="bg-[#1a1f2a]/90 backdrop-blur-xl border border-white/10 p-1 rounded-2xl shadow-2xl">
                  <EventDetail
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Event listesi (Left side) */}
          <div className="absolute left-6 top-24 bottom-28 w-80 pointer-events-auto flex flex-col gap-3 overflow-hidden">
            <div className="bg-[#1a1f2a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col h-full shadow-xl">
              <p className="text-secondary text-xs mb-3 font-semibold uppercase tracking-wider pl-1 font-sans">
                {filteredEvents.length} Önemli Olay
              </p>
              <div className="overflow-y-auto custom-scrollbar flex-1 flex flex-col gap-2 pr-2">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onClick={setSelectedEvent}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dönem filtresi (Bottom Dock) */}
        <div className="w-full flex justify-center mt-auto pointer-events-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1a1f2a]/80 backdrop-blur-xl border border-white/10 p-3 rounded-full shadow-2xl max-w-4xl overflow-x-auto custom-scrollbar"
          >
            <PeriodFilter
              activePeriodId={activePeriodId}
              onSelect={setActivePeriodId}
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default function EgitimPage() {
  return (
    <Suspense fallback={<div className="w-screen h-screen bg-background flex items-center justify-center text-primary font-display text-2xl">Yükleniyor...</div>}>
      <MapInterface />
    </Suspense>
  );
}
