import { ALL_EVENTS } from "@/data/events";
import { getEventById } from "@/lib/events";
import EventDetail from "@/components/event/EventDetail";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = getEventById(ALL_EVENTS, id);

  if (!event) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 pt-20 px-4">
      <div className="max-w-2xl mx-auto">
        <EventDetail event={event} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return ALL_EVENTS.map((e) => ({ id: e.id }));
}
