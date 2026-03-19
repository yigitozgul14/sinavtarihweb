"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quizQuestions from "@/data/islamiyet-oncesi/quizQuestions";

interface QuizSectionProps {
  onBack: () => void;
}

type AnswerState = number | null; // seçilen şık index'i

export default function QuizSection({ onBack }: QuizSectionProps) {
  const total = quizQuestions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>(new Array(total).fill(null));
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const isAnswered = selectedAnswer !== null;

  function handleSelect(optIndex: number) {
    if (isAnswered) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optIndex;
      return next;
    });
  }

  function handleNext() {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleRetry() {
    setAnswers(new Array(total).fill(null));
    setCurrentIndex(0);
    setShowResult(false);
  }

  const score = answers.filter((a, i) => a === quizQuestions[i].correctIndex).length;

  if (showResult) {
    return <ResultScreen score={score} total={total} onRetry={handleRetry} onBack={onBack} />;
  }

  const progressPct = ((currentIndex) / total) * 100;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#12171F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflowY: "auto",
        padding: "32px 16px 48px",
      }}
    >
      {/* Progress bar */}
      <div style={{ width: "100%", maxWidth: 680, marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(192,184,165,0.5)", letterSpacing: "0.1em" }}>
            SORU {currentIndex + 1} / {total}
          </span>
          <button
            onClick={onBack}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "rgba(192,184,165,0.4)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            ← Geri dön
          </button>
        </div>
        {/* Progress track */}
        <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", background: "#C8A96E", borderRadius: 2 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Soru kartı */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
          style={{ width: "100%", maxWidth: 680 }}
        >
          {/* Soru metni */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "24px 28px",
              marginBottom: 20,
            }}
          >
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "#C8A96E", letterSpacing: "0.15em", marginBottom: 12 }}>
              {currentIndex + 1 <= 10 ? "DEVLET" :
               currentIndex + 1 <= 13 ? "SOSYAL HAYAT" :
               currentIndex + 1 <= 17 ? "HUKUK" :
               currentIndex + 1 <= 20 ? "ORDU" :
               currentIndex + 1 <= 21 ? "BİLİM" :
               currentIndex + 1 <= 26 ? "DİN VE İNANIŞ" :
               currentIndex + 1 <= 28 ? "MÜZİK VE SPOR" :
               currentIndex + 1 <= 31 ? "EKONOMİ" : "EDEBİYAT VE YAZI"}
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#EEE6E2", lineHeight: 1.5, margin: 0 }}>
              {question.question}
            </p>
          </div>

          {/* Şıklar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {question.options.map((opt, optIdx) => {
              const isSelected = selectedAnswer === optIdx;
              const isCorrect = optIdx === question.correctIndex;
              const showWrong = isAnswered && isSelected && !isCorrect;
              const showCorrect = isAnswered && isCorrect;

              let borderColor = "rgba(255,255,255,0.1)";
              let bg = "rgba(255,255,255,0.04)";
              let textColor = "#C0B8A5";

              if (showCorrect) {
                borderColor = "#22c55e";
                bg = "rgba(34,197,94,0.1)";
                textColor = "#86efac";
              } else if (showWrong) {
                borderColor = "#ef4444";
                bg = "rgba(239,68,68,0.1)";
                textColor = "#fca5a5";
              } else if (!isAnswered) {
                // hover görsel efekti inline olarak yapılamıyor; pasif state
              }

              return (
                <div key={optIdx}>
                  <motion.button
                    onClick={() => handleSelect(optIdx)}
                    disabled={isAnswered}
                    whileHover={!isAnswered ? { scale: 1.005, x: 2 } : {}}
                    whileTap={!isAnswered ? { scale: 0.998 } : {}}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 20px",
                      background: bg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: 8,
                      cursor: isAnswered ? "default" : "pointer",
                      textAlign: "left",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                  >
                    {/* Şık harfi */}
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 11,
                        fontWeight: 700,
                        color: showCorrect ? "#22c55e" : showWrong ? "#ef4444" : "#C8A96E",
                        flexShrink: 0,
                        width: 20,
                        textAlign: "center",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {["A", "B", "C", "D"][optIdx]}
                    </span>

                    {/* Şık metni */}
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        color: textColor,
                        lineHeight: 1.5,
                        flex: 1,
                      }}
                    >
                      {opt}
                    </span>

                    {/* Doğru/Yanlış ikonu */}
                    {showCorrect && <span style={{ color: "#22c55e", fontSize: 16, flexShrink: 0 }}>✓</span>}
                    {showWrong && <span style={{ color: "#ef4444", fontSize: 16, flexShrink: 0 }}>✗</span>}
                  </motion.button>

                  {/* Açıklama (yanlış şıkta göster) */}
                  <AnimatePresence>
                    {showWrong && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            margin: "6px 0 4px",
                            padding: "10px 16px",
                            background: "rgba(239,68,68,0.07)",
                            border: "1px solid rgba(239,68,68,0.2)",
                            borderRadius: 6,
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                          }}
                        >
                          <span style={{ color: "#C8A96E", fontSize: 12, flexShrink: 0, marginTop: 1 }}>💡</span>
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(192,184,165,0.8)", lineHeight: 1.6, margin: 0 }}>
                            {question.explanation}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Sonraki butonu */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.15 }}
                style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}
              >
                <button
                  onClick={handleNext}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#12171F",
                    background: "#C8A96E",
                    border: "none",
                    borderRadius: 6,
                    padding: "12px 28px",
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                  }}
                >
                  {currentIndex < total - 1 ? "Sonraki Soru →" : "Testi Tamamla"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Sonuç ekranı ────────────────────────────────────────────────────
function ResultScreen({
  score,
  total,
  onRetry,
  onBack,
}: {
  score: number;
  total: number;
  onRetry: () => void;
  onBack: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const grade =
    pct >= 90 ? "Mükemmel!" :
    pct >= 70 ? "Çok İyi!" :
    pct >= 50 ? "İyi" :
    "Daha fazla çalışmalısın";

  const gradeColor =
    pct >= 90 ? "#22c55e" :
    pct >= 70 ? "#C8A96E" :
    pct >= 50 ? "#60a5fa" :
    "#ef4444";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        width: "100%",
        height: "100%",
        background: "#12171F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: 32,
      }}
    >
      {/* Skor dairesi */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: `3px solid ${gradeColor}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `${gradeColor}11`,
          marginBottom: 16,
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: gradeColor }}>
          {score}
        </span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(192,184,165,0.5)" }}>
          / {total}
        </span>
      </div>

      <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: gradeColor, fontWeight: 600 }}>
        {grade}
      </div>

      <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(192,184,165,0.6)", marginBottom: 32 }}>
        {pct}% doğru · {score} doğru, {total - score} yanlış
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={onRetry}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 600,
            color: "#12171F",
            background: "#C8A96E",
            border: "none",
            borderRadius: 6,
            padding: "12px 28px",
            cursor: "pointer",
          }}
        >
          Tekrar Dene
        </button>
        <button
          onClick={onBack}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "rgba(192,184,165,0.6)",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 6,
            padding: "12px 28px",
            cursor: "pointer",
          }}
        >
          ← Haritaya Dön
        </button>
      </div>
    </motion.div>
  );
}
