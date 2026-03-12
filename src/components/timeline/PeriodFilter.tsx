"use client";

import { PERIODS } from "@/constants/periods";

interface PeriodFilterProps {
  activePeriodId: string | null;
  onSelect: (periodId: string | null) => void;
}

export default function PeriodFilter({
  activePeriodId,
  onSelect,
}: PeriodFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
          activePeriodId === null
            ? "bg-white text-zinc-900"
            : "bg-zinc-800 text-zinc-400 hover:text-white"
        }`}
      >
        Tümü
      </button>
      {PERIODS.map((period) => (
        <button
          key={period.id}
          onClick={() => onSelect(period.id)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            activePeriodId === period.id
              ? "text-white"
              : "bg-zinc-800 text-zinc-400 hover:text-white"
          }`}
          style={
            activePeriodId === period.id
              ? { backgroundColor: period.color }
              : undefined
          }
        >
          {period.name}
        </button>
      ))}
    </div>
  );
}
