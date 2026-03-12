"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg tracking-tight">
          KPSS Tarih Haritası
        </Link>
        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">
            Harita
          </Link>
        </nav>
      </div>
    </header>
  );
}
