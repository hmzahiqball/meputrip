import { motion } from "framer-motion";
import { Sparkles, Users, ShieldCheck, Leaf } from "lucide-react";
import g5 from "@/assets/gallery-5.jpg";
import g2 from "@/assets/gallery-2.jpg";

const values = [
  { icon: Leaf, title: "Eco-conscious", desc: "Trip rendah jejak, hormat ke alam & komunitas lokal." },
  { icon: Users, title: "Komunitas Hangat", desc: "Open trip yang terasa seperti rombongan teman lama." },
  { icon: ShieldCheck, title: "Aman & Terkurasi", desc: "Itinerary diuji, partner lokal terpercaya." },
  { icon: Sparkles, title: "Personal Touch", desc: "Detail kecil yang bikin trip kamu beda." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lift">
            <img src={g5} alt="MepuTrip experience" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-lift border-4 border-background hidden sm:block">
            <img src={g2} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -top-6 -left-6 hidden md:flex flex-col items-center justify-center w-32 h-32 rounded-full bg-accent text-accent-foreground shadow-glow">
            <span className="font-display text-3xl font-bold">5+</span>
            <span className="text-[10px] uppercase tracking-widest">Tahun</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            · Tentang Kami
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance leading-[1.05]">
            Kami bukan agen trip biasa. <span className="italic font-light text-primary">Kami teman jalanmu.</span>
          </h2>
          <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
            MepuTrip lahir dari kecintaan terhadap alam Indonesia dan kebutuhan akan
            ruang untuk healing dari hiruk pikuk kota. Kami merancang open trip, private trip,
            gathering, dan healing journey dengan rasa yang personal — tanpa rumus kaku.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-5 hover-lift"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
