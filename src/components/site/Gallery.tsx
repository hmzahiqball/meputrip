import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Kawah Putih", span: "row-span-2" },
  { src: g2, alt: "Hiking sunrise", span: "" },
  { src: g3, alt: "Hidden waterfall", span: "" },
  { src: g4, alt: "Glamping forest", span: "row-span-2" },
  { src: g5, alt: "Sunset healing", span: "" },
  { src: g6, alt: "Rice terraces", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-secondary/50">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              · Gallery
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">
              Momen-momen yang <span className="italic font-light">tak ternilai.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Setiap trip adalah cerita. Berikut sebagian kecil yang sempat kami abadikan
            bersama para traveler MepuTrip.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-2xl group ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-3 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {it.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
