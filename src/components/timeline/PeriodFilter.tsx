"use client";

import { useRouter } from "next/navigation";
import { PERIODS } from "@/constants/periods";
import { motion } from "framer-motion";

const DEDICATED_ROUTES: Record<string, string> = {
  "islamiyet-oncesi-turk-tarihi": "/egitim/islamiyet-oncesi-turk-tarihi",
  "ilk-turk-islam-devletleri": "/egitim/ilk-turk-islam-devletleri",
  "osmanli-kurulus-yukselme": "/egitim/osmanli-kurulus-yukselme",
};

interface PeriodFilterProps {
  activePeriodId: string | null;
  onSelect: (periodId: string | null) => void;
}

export default function PeriodFilter({
  activePeriodId,
  onSelect,
}: PeriodFilterProps) {
  const router = useRouter();

  function handlePeriodClick(slug: string) {
    if (DEDICATED_ROUTES[slug]) {
      router.push(DEDICATED_ROUTES[slug]);
    } else {
      onSelect(slug);
    }
  }

  return (
    <div className="flex flex-nowrap gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.15em] font-bold transition-all whitespace-nowrap shadow-sm ${
          activePeriodId === null
            ? "bg-foreground text-zinc-900 shadow-white/20"
            : "bg-white/10 text-zinc-300 hover:text-foreground hover:bg-white/20"
        }`}
      >
        TÜMÜNÜ GÖSTER
      </motion.button>
      
      <div className="w-px bg-white/10 mx-1 self-stretch" />
      
      {PERIODS.map((period) => (
        <motion.button
          key={period.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePeriodClick(period.slug)}
          className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.1em] font-semibold transition-all whitespace-nowrap border ${
            activePeriodId === period.slug
              ? "text-white border-transparent shadow-lg"
              : "bg-black/20 text-zinc-400 hover:text-white border-white/5 hover:border-white/20 hover:bg-white/10"
          }`}
          style={
            activePeriodId === period.slug
              ? { backgroundColor: period.color, boxShadow: `0 4px 14px 0 ${period.color}66` }
              : undefined
          }
        >
          {period.name}
        </motion.button>
      ))}
    </div>
  );
}
