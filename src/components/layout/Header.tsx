"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PERIODS } from "@/constants/periods";

const DEDICATED_ROUTES: Record<string, string> = {
  "islamiyet-oncesi-turk-tarihi": "/egitim/islamiyet-oncesi-turk-tarihi",
  "ilk-turk-islam-devletleri": "/egitim/ilk-turk-islam-devletleri",
  "osmanli-kurulus-yukselme": "/egitim/osmanli-kurulus-yukselme",
  "osmanli-duraklama-gerileme": "/egitim/osmanli-duraklama-gerileme",
};

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const activePeriodSlug = pathname.startsWith("/egitim/")
    ? pathname.replace("/egitim/", "")
    : null;
  const activePeriod = activePeriodSlug
    ? PERIODS.find((p) => p.slug === activePeriodSlug)
    : null;
  const pageTitle = activePeriod ? activePeriod.name : "KPSS Tarih Haritası";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-foreground font-display font-medium text-2xl tracking-wide drop-shadow-md hover:text-ochre-light transition-colors">
          {pageTitle}
        </Link>
        <nav className="flex items-center gap-8 text-[0.85rem] uppercase tracking-widest font-sans font-semibold text-zinc-300">
          <Link href="/" className="hover:text-ochre-light transition-colors drop-shadow-sm">
            Anasayfa
          </Link>

          {/* Dropdown Menu for Eğitim İçeriği */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-ochre-light transition-colors drop-shadow-sm flex items-center gap-1 py-4 uppercase tracking-widest font-sans font-semibold">
              Eğitim İçeriği
              <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="py-2 flex flex-col">
                    {PERIODS.map((period) => {
                      const href = DEDICATED_ROUTES[period.slug] ?? `/egitim?period=${period.slug}`;
                      return (
                        <Link
                          key={period.id}
                          href={href}
                          className="px-4 py-3 hover:bg-white/10 transition-colors flex items-center gap-3 text-zinc-300 hover:text-ochre-light font-sans normal-case tracking-normal text-sm"
                        >
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: period.color }} />
                          {period.name}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  );
}
