"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { getIncrement } from "@/lib/periodEngine";
import type { PeriodEntityEvent, PeriodConfig, PeriodEntity } from "@/types/period-data";

interface UsePeriodPlaybackOptions {
  events: PeriodEntityEvent[];
  entities: PeriodEntity[];
  config: Pick<PeriodConfig, "minYear" | "maxYear" | "autoPauseEventTypes">;
}

export function usePeriodPlayback({
  events,
  entities,
  config,
}: UsePeriodPlaybackOptions) {
  const { minYear, maxYear, autoPauseEventTypes } = config;
  const autoPauseSet = new Set(autoPauseEventTypes);

  const [currentYear, setCurrentYear] = useState<number>(minYear);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<0.5 | 1 | 2>(1);
  const [highlightedEvent, setHighlightedEvent] = useState<PeriodEntityEvent | null>(null);

  const pausedForEventsRef = useRef<Set<string>>(new Set());
  const autoResumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevYearRef = useRef<number>(minYear);
  const isPlayingRef = useRef(false);

  // Bundle yüklenince (minYear değişince) state'i sıfırla
  useEffect(() => {
    if (autoResumeTimeoutRef.current) {
      clearTimeout(autoResumeTimeoutRef.current);
      autoResumeTimeoutRef.current = null;
    }
    setCurrentYear(minYear);
    setIsPlaying(false);
    setHighlightedEvent(null);
    pausedForEventsRef.current = new Set();
    prevYearRef.current = minYear;
  }, [minYear]);

  // Keep ref in sync for use inside effects
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Auto-pause on event detection
  useEffect(() => {
    const prevYear = prevYearRef.current;
    prevYearRef.current = currentYear;

    if (!isPlayingRef.current) return;
    if (currentYear <= prevYear) return;

    const triggered = events.find(
      (e) =>
        autoPauseSet.has(e.type) &&
        e.year > prevYear &&
        e.year <= currentYear &&
        !pausedForEventsRef.current.has(e.id)
    );

    if (triggered) {
      pausedForEventsRef.current.add(triggered.id);
      setHighlightedEvent(triggered);
      setIsPlaying(false);
      autoResumeTimeoutRef.current = setTimeout(() => {
        setHighlightedEvent(null);
        setIsPlaying(true);
        autoResumeTimeoutRef.current = null;
      }, 2500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYear]);

  // RAF-based playback loop
  useEffect(() => {
    if (!isPlaying) return;

    let rafId: number;
    let lastTimestamp: number | null = null;

    function frame(timestamp: number) {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
        rafId = requestAnimationFrame(frame);
        return;
      }

      const delta = Math.min(timestamp - lastTimestamp, 100);
      lastTimestamp = timestamp;

      setCurrentYear((y) => {
        if (y >= maxYear) {
          setIsPlaying(false);
          return maxYear;
        }
        return y + getIncrement(y, speed, entities, events) * (delta / 100);
      });

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [isPlaying, speed, entities, events, maxYear]);

  // Spacebar toggle
  const togglePlay = useCallback(() => {
    if (autoResumeTimeoutRef.current) {
      clearTimeout(autoResumeTimeoutRef.current);
      autoResumeTimeoutRef.current = null;
      setHighlightedEvent(null);
    }
    setIsPlaying((p) => !p);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === " " && e.target === document.body) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [togglePlay]);

  const handleYearChange = useCallback(
    (year: number) => {
      prevYearRef.current = year;
      for (const eventId of [...pausedForEventsRef.current]) {
        const ev = events.find((e) => e.id === eventId);
        if (ev && ev.year >= year) {
          pausedForEventsRef.current.delete(eventId);
        }
      }
      if (autoResumeTimeoutRef.current) {
        clearTimeout(autoResumeTimeoutRef.current);
        autoResumeTimeoutRef.current = null;
        setHighlightedEvent(null);
      }
      setCurrentYear(year);
      setIsPlaying(false);
    },
    [events]
  );

  const handleSpeedChange = useCallback((s: 0.5 | 1 | 2) => {
    setSpeed(s);
  }, []);

  const pausePlayback = useCallback(() => {
    if (autoResumeTimeoutRef.current) {
      clearTimeout(autoResumeTimeoutRef.current);
      autoResumeTimeoutRef.current = null;
      setHighlightedEvent(null);
    }
    setIsPlaying(false);
  }, []);

  return {
    currentYear,
    setCurrentYear,
    isPlaying,
    speed,
    highlightedEvent,
    togglePlay,
    pausePlayback,
    handleYearChange,
    handleSpeedChange,
  };
}
