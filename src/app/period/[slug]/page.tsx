import { PERIODS } from "@/constants/periods";
import { ALL_EVENTS } from "@/data/events";
import { filterByPeriod } from "@/lib/events";
import EventCard from "@/components/event/EventCard";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PeriodPage({ params }: Props) {
  const { slug } = await params;
  const period = PERIODS.find((p) => p.slug === slug);

  if (!period) notFound();

  const events = filterByPeriod(ALL_EVENTS, period.id);

  return (
    <main className="min-h-screen bg-zinc-950 pt-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-white text-2xl font-bold mb-1">{period.name}</h1>
          <p className="text-zinc-400 text-sm">
            {period.startYear} – {period.endYear ?? "günümüz"}
          </p>
          <p className="text-zinc-300 text-sm mt-2">{period.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {events.length === 0 && (
            <p className="text-zinc-500 text-sm">
              Bu döneme ait olay henüz eklenmemiş.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return PERIODS.map((p) => ({ slug: p.slug }));
}
