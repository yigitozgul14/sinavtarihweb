"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PERIODS } from "@/constants/periods";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const SECTIONS = [
  {
    title: "İslamiyet Öncesi Türk Tarihi",
    description:
      "Orta Asya'nın uçsuz bucaksız bozkırlarında doğan Türk medeniyeti; Hunlardan Göktürklere, Uygurlardan Hazarlara — göçebe yaşamın güçlü mirasını keşfedin.",
    period: "ilk-turk-devletleri",
    icon: "🏹",
  },
  {
    title: "Büyük Selçuklu İmparatorluğu",
    description:
      "İslam dünyasının kalkanı ve kılıcı olan Selçuklular; Dandanakan'dan Malazgirt'e uzanan yolda Anadolu'nun kapılarını Türklere açan büyük imparatorluk.",
    period: "buyuk-selcuklu",
    icon: "⚔️",
  },
  {
    title: "Anadolu Selçuklu Dönemi",
    description:
      "Anadolu'yu yurt edinme serüveni; Konya merkezli bir medeniyet, kervansaraylar, medreseler ve Mevlana'nın hümanizmi.",
    period: "anadolu-selcuklu",
    icon: "🕌",
  },
  {
    title: "Osmanlı İmparatorluğu",
    description:
      "Söğüt'te bir uç beyliğinden üç kıtaya yayılan cihan devletine — kuruluştan yükselişe, duraklamadan dağılmaya altı asırlık bir destan.",
    period: "osmanli-kurulus",
    icon: "👑",
  },
  {
    title: "Kurtuluş Savaşı ve Cumhuriyet",
    description:
      "Emperyalizme karşı verilen bağımsızlık mücadelesi; Mustafa Kemal Atatürk önderliğinde kurulan modern Türkiye Cumhuriyeti.",
    period: "kurtulus-savasi",
    icon: "🇹🇷",
  },
  {
    title: "Dünya Tarihi",
    description:
      "Antik medeniyetlerden sanayi devrimine, dünya savaşlarından soğuk savaşa — küresel tarihin dönüm noktalarını harita üzerinde keşfedin.",
    period: null,
    icon: "🌍",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ochre/[0.04] rounded-full blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl"
        >
          <p className="font-sans text-[clamp(0.7rem,1.5vw,0.85rem)] text-ochre uppercase tracking-[0.25em] mb-6 font-semibold">
            Tarihi Keşfetmenin Yeni Yolu
          </p>
          <h1 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-primary mb-8 tracking-[-0.02em]">
            Bir Milletin Serüveni{" "}
            <br className="hidden md:block" />
            <span className="text-ochre-light italic">
              Orta Asya'dan Anadolu'ya.
            </span>
          </h1>
          <p className="font-sans text-[clamp(1rem,2vw,1.25rem)] text-secondary max-w-[560px] mx-auto leading-[1.7] mb-10">
            İslamiyet öncesi Türklerden Osmanlı İmparatorluğu'na, Kurtuluş Savaşı'ndan modern Türkiye'ye — tarihi interaktif harita ve zaman çizelgesi ile keşfedin.
          </p>
          <Link
            href="/egitim"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ochre/90 hover:bg-ochre text-background font-sans font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.3)] hover:scale-105"
          >
            Keşfetmeye Başla
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-secondary/30 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 bg-ochre rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── SEPARATOR ── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-ochre/20 to-transparent" />
      </div>

      {/* ── PERIOD SECTIONS ── */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-sans text-[0.8rem] text-ochre uppercase tracking-[0.2em] mb-4 font-semibold"
          >
            İçerik Haritası
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display font-light text-[clamp(1.8rem,4vw,3rem)] text-primary leading-[1.2]"
          >
            Dönemler ve Konular
          </motion.h2>
        </motion.div>

        <div className="grid gap-6">
          {SECTIONS.map((section, i) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
            >
              <Link
                href={section.period ? `/egitim?period=${section.period}` : "/egitim"}
                className="group block p-8 rounded-2xl border border-foreground/[0.06] hover:border-ochre/20 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <span className="text-3xl mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl text-primary group-hover:text-ochre-light transition-colors duration-300 mb-2">
                      {section.title}
                    </h3>
                    <p className="font-sans text-secondary/80 leading-[1.7] text-[0.95rem]">
                      {section.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-secondary/30 group-hover:text-ochre shrink-0 mt-2 transition-all duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-foreground/[0.06] py-12 text-center">
        <p className="font-sans text-secondary/50 text-sm">
          © 2026 KPSS Tarih Haritası. Tüm hakları saklıdır.
        </p>
      </footer>
    </main>
  );
}
