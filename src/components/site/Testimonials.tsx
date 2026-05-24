import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TESTI = [
  {
    name: "Raka Pradana",
    role: "Open Trip Bromo",
    text: "Vibes-nya hangat banget. Itinerary smooth, guide-nya lucu, fotonya estetik semua. 10/10!",
    avatar: "RP",
  },
  {
    name: "Dinda Maharani",
    role: "Healing Bandung",
    text: "Bener-bener healing. Aku ga ngapa-ngapain, semua udah disiapin. Mau ikut lagi!",
    avatar: "DM",
  },
  {
    name: "Bayu Anggara",
    role: "Camping Ranca Upas",
    text: "Glamping-nya cozy, api unggun, makan enak. Recommended buat gathering kantor.",
    avatar: "BA",
  },
  {
    name: "Salsa Wibowo",
    role: "Trip Bali Hidden Gems",
    text: "Tempat-tempatnya bukan turis spot biasa. Bener-bener feel kayak lokal beneran.",
    avatar: "SW",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTI[i];

  return (
    <section className="relative py-24 md:py-32 bg-charcoal text-charcoal-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] [background:radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">
              · Testimoni
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">
              Cerita mereka, <span className="italic font-light text-accent">setelah perjalanan.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setI((p) => (p - 1 + TESTI.length) % TESTI.length)}
              className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
              aria-label="prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setI((p) => (p + 1) % TESTI.length)}
              className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
              aria-label="next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="relative max-w-4xl">
          <Quote className="h-16 w-16 text-accent/30 absolute -top-4 -left-2" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative pt-10"
            >
              <p className="font-display text-2xl md:text-4xl leading-snug text-balance">
                "{t.text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-warm flex items-center justify-center font-bold text-charcoal">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-white/60">{t.role}</div>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex gap-2">
            {TESTI.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-accent" : "w-5 bg-white/20"}`}
                aria-label={`testi-${k}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
