import { useState } from "react";

export type AppPhase = "timeline" | "culture" | "quiz";

export function usePeriodPhase() {
  const [appPhase, setAppPhase] = useState<AppPhase>("timeline");

  return {
    appPhase,
    goToTimeline: () => setAppPhase("timeline"),
    goToCulture:  () => setAppPhase("culture"),
    goToQuiz:     () => setAppPhase("quiz"),
  };
}
