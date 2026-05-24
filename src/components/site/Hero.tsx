import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Star } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-mountain.jpg";
import { RESERVASI_URL, SPREADSHEET_URL } from "@/data/trips";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="MepuTrip — Pemandangan pegunungan saat sunrise"
          className="h-full w-full object-cover scale-110"
          width={1920}
          height={1080}
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />

      <div className="container-prose relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28 pt-32">
        <motion.div style={{ opacity }} className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open Trip · Adventure · Healing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-balance leading-[1.02]"
          >
            Temukan kembali <br />
            <span className="italic font-light text-accent">dirimu</span> di alam.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base md:text-lg text-white/80 text-pretty"
          >
            MepuTrip merancang perjalanan open trip, healing, dan adventure dengan
            sentuhan personal — biar yang kamu bawa pulang bukan sekadar foto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={RESERVASI_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Reservasi Sekarang
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={SPREADSHEET_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 glass-dark px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15"
            >
              <Calendar className="h-4 w-4" /> Cek Availability
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md text-white"
          >
            {[
              { icon: MapPin, value: "30+", label: "Destinasi" },
              { icon: Star, value: "4.9", label: "Rating Trip" },
              { icon: Calendar, value: "5K+", label: "Trip Selesai" },
            ].map((s) => (
              <div key={s.label} className="">
                <s.icon className="h-4 w-4 text-accent mb-2" />
                <div className="font-display text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-8 w-px bg-white/40"
        />
      </motion.div>
    </section>
  );
}
