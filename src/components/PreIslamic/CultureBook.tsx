"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import culturePages from "@/data/islamiyet-oncesi/culturePages";
import type { CulturePageData, ContentItem } from "@/data/islamiyet-oncesi/culturePages";

// ─── Renk paleti (anasayfa ile aynı) ────────────────────────────────
const C = {
  bg:        "#12171F",
  card:      "#1a1f2a",
  cardLight: "#1f2638",
  border:    "rgba(255,255,255,0.08)",
  primary:   "#EEE6E2",
  secondary: "#C0B8A5",
  ochre:     "#C8A96E",
  ochreLt:   "#E0C796",
};

// ─── İçerik bloğu ───────────────────────────────────────────────────
function ContentBlock({ item }: { item: ContentItem }) {
  if (item.type === "divider") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "12px 0", width: "100%" }}>
        <div style={{ flex: 1, height: 1, background: C.border }} />
        <span style={{ fontSize: 8, color: C.ochre }}>◆</span>
        <div style={{ flex: 1, height: 1, background: C.border }} />
      </div>
    );
  }

  if (item.type === "paragraph") {
    return (
      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.8,
        color: C.secondary,
        margin: "0 0 14px",
        width: "100%",
      }}>
        {item.text}
      </p>
    );
  }

  if (item.type === "list") {
    return (
      <ul style={{ margin: "0 0 14px", paddingLeft: 0, listStyle: "none", width: "100%" }}>
        {item.items.map((it, i) => (
          <li key={i} style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            lineHeight: 1.75,
            color: C.secondary,
            display: "flex",
            gap: 10,
            marginBottom: 6,
          }}>
            <span style={{ color: C.ochre, flexShrink: 0, marginTop: 5, fontSize: 8 }}>◆</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (item.type === "term-list") {
    return (
      <div style={{ margin: "0 0 14px", width: "100%" }}>
        {item.entries.map((e, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 6,
              alignItems: "baseline",
              padding: "7px 12px",
              background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
              borderRadius: 4,
            }}
          >
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 700,
              color: C.ochre,
              flexShrink: 0,
              minWidth: 110,
            }}>
              {e.term}
            </span>
            <span style={{ fontSize: 11, color: `${C.ochre}55`, flexShrink: 0 }}>→</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.primary, lineHeight: 1.55 }}>
              {e.def}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

// ─── Kapak içeriği ──────────────────────────────────────────────────
function CoverContent({ data }: { data: CulturePageData }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "40px 48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40, width: "100%" }}>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${C.ochre}88)` }} />
        <span style={{ fontSize: 18, color: C.ochre }}>✦</span>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${C.ochre}88)` }} />
      </div>

      <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.35em", color: C.ochre, marginBottom: 20, textTransform: "uppercase" }}>
        KPSS Tarihi
      </div>

      <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, lineHeight: 1.35, color: C.primary, whiteSpace: "pre-line", marginBottom: 8 }}>
        {data.title}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "28px 0", width: "100%" }}>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${C.ochre}55)` }} />
        <span style={{ fontSize: 12, color: C.ochre }}>◆</span>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${C.ochre}55)` }} />
      </div>

      {data.subtitle && (
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.secondary, letterSpacing: "0.06em", lineHeight: 2 }}>
          {data.subtitle}
        </div>
      )}
    </div>
  );
}

// ─── Normal sayfa içeriği ────────────────────────────────────────────
function NormalContent({ data }: { data: CulturePageData }) {
  return (
    <>
      <div style={{ marginBottom: 12, width: "100%" }}>
        {data.subtitle && (
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.2em", color: C.ochre, textTransform: "uppercase", marginBottom: 6 }}>
            {data.subtitle}
          </div>
        )}
        <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: C.ochreLt, lineHeight: 1.2 }}>
          {data.title}
        </div>
        <div style={{ height: 1, background: `linear-gradient(to right, ${C.ochre}88, transparent)`, marginTop: 10, marginBottom: 20 }} />
      </div>
      {data.content.map((item, i) => (
        <ContentBlock key={i} item={item} />
      ))}
    </>
  );
}

// ─── Son sayfa içeriği ───────────────────────────────────────────────
function FinalContent({ data, onGoToQuiz }: { data: CulturePageData; onGoToQuiz?: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 20, padding: "40px 48px" }}>
      <div style={{ fontSize: 36, color: C.ochre }}>✦</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, color: C.ochreLt }}>{data.title}</div>
      {data.subtitle && (
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: C.secondary }}>{data.subtitle}</div>
      )}
      {data.content.map((item, i) => (
        <ContentBlock key={i} item={item} />
      ))}
      {onGoToQuiz && (
        <button
          onClick={onGoToQuiz}
          style={{
            marginTop: 16,
            padding: "13px 40px",
            background: C.ochre,
            color: "#12171F",
            border: "none",
            borderRadius: 6,
            fontSize: 15,
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
        >
          Quiz'e Başla →
        </button>
      )}
    </div>
  );
}

// ─── Ana bileşen ─────────────────────────────────────────────────────
interface CultureBookProps {
  onGoToQuiz: () => void;
}

export default function CultureBook({ onGoToQuiz }: CultureBookProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalPages = culturePages.length;
  const page = culturePages[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === totalPages - 1;

  // Sayfa değişince scroll'u başa al
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [pageIndex]);

  // Klavye navigasyonu
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  function goNext() {
    if (pageIndex < totalPages - 1) {
      setDirection(1);
      setPageIndex((i) => i + 1);
    }
  }

  function goPrev() {
    if (pageIndex > 0) {
      setDirection(-1);
      setPageIndex((i) => i - 1);
    }
  }

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        width: "100%",
        height: "100%",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Üst kontroller */}
      <div style={{
        position: "absolute",
        top: 12,
        right: 20,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: C.secondary, letterSpacing: "0.08em" }}>
          {pageIndex + 1} / {totalPages}
        </span>
        <button
          onClick={onGoToQuiz}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            color: C.secondary,
            background: "transparent",
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            padding: "5px 14px",
            cursor: "pointer",
          }}
        >
          Kültür bölümünü geç →
        </button>
      </div>

      {/* Kart */}
      <div style={{
        width: "min(680px, 90vw)",
        height: "min(620px, calc(100vh - 160px))",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderRadius: 12,
        border: `1px solid ${C.border}`,
        background: C.card,
        boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        overflow: "hidden",
      }}>
        {/* Üst aksanı */}
        <div style={{ height: 2, background: `linear-gradient(to right, transparent, ${C.ochre}66, transparent)`, flexShrink: 0 }} />

        {/* Sayfa içeriği */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={pageIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ position: "absolute", inset: 0, overflow: "hidden" }}
            >
              <div
                ref={scrollRef}
                style={{
                  height: "100%",
                  overflowY: "auto",
                  padding: page.isCover || page.isFinal ? "0" : "28px 36px 20px",
                  boxSizing: "border-box",
                  scrollbarWidth: "thin",
                  scrollbarColor: `${C.ochre}44 transparent`,
                }}
              >
                {page.isCover ? (
                  <CoverContent data={page} />
                ) : page.isFinal ? (
                  <FinalContent data={page} onGoToQuiz={onGoToQuiz} />
                ) : (
                  <NormalContent data={page} />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Alt bar */}
        {!page.isCover && !page.isFinal && (
          <div style={{
            flexShrink: 0,
            height: 36,
            borderTop: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 20px",
          }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: `${C.secondary}50`, letterSpacing: "0.1em" }}>
              {pageIndex} / {totalPages - 2}
            </span>
          </div>
        )}
      </div>

      {/* Alt navigasyon */}
      <div style={{ display: "flex", alignItems: "center", gap: 40, marginTop: 20 }}>
        <button
          onClick={goPrev}
          disabled={isFirst}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: isFirst ? `${C.secondary}25` : C.secondary,
            background: "transparent",
            border: "none",
            cursor: isFirst ? "default" : "pointer",
            letterSpacing: "0.06em",
            padding: "6px 0",
            transition: "color 0.2s",
          }}
        >
          ← Önceki
        </button>

        {/* Nokta göstergesi */}
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {culturePages.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > pageIndex ? 1 : -1); setPageIndex(i); }}
              style={{
                width: i === pageIndex ? 18 : 6,
                height: 6,
                borderRadius: 3,
                background: i === pageIndex ? C.ochre : `${C.secondary}30`,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.2s",
              }}
            />
          ))}
        </div>

        {isLast ? (
          <button
            onClick={onGoToQuiz}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 700,
              color: "#12171F",
              background: C.ochre,
              border: "none",
              borderRadius: 6,
              padding: "8px 24px",
              cursor: "pointer",
            }}
          >
            Quiz'e Başla →
          </button>
        ) : (
          <button
            onClick={goNext}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: C.secondary,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.06em",
              padding: "6px 0",
              transition: "color 0.2s",
            }}
          >
            Sonraki →
          </button>
        )}
      </div>
    </motion.div>
  );
}
