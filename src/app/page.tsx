import WorldMap from "@/components/Map/WorldMap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Dünya Haritası</h1>
      <div className="w-full max-w-4xl">
        <WorldMap />
      </div>
    </main>
  );
}
