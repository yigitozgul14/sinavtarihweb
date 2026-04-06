import type { PeriodDataBundle } from "@/types/period-data";

export type PeriodDataLoader = () => Promise<PeriodDataBundle>;

export const PERIOD_DATA_REGISTRY: Record<string, PeriodDataLoader> = {
  "islamiyet-oncesi-turk-tarihi": () =>
    import("@/data/islamiyet-oncesi/adapter").then((m) => m.loadBundle()),
  "ilk-turk-islam-devletleri": () =>
    import("@/data/ilk-turk-islam-devletleri/adapter").then((m) => m.loadBundle()),
  "osmanli-kurulus-yukselme": () =>
    import("@/data/osmanli-kurulus-yukselme/adapter").then((m) => m.loadBundle()),
  "osmanli-duraklama-gerileme": () =>
    import("@/data/osmanli-duraklama-gerileme/adapter").then((m) => m.loadBundle()),
  "osmanli-19yy-istibdat": () =>
    import("@/data/osmanli-19yy-istibdat/adapter").then((m) => m.loadBundle()),
};
