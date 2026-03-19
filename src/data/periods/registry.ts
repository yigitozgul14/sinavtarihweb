import type { PeriodDataBundle } from "@/types/period-data";

export type PeriodDataLoader = () => Promise<PeriodDataBundle>;

export const PERIOD_DATA_REGISTRY: Record<string, PeriodDataLoader> = {
  "islamiyet-oncesi-turk-tarihi": () =>
    import("@/data/islamiyet-oncesi/adapter").then((m) => m.loadBundle()),
};
