import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Bagaimana cara reservasi trip di MepuTrip?",
    a: "Klik tombol Reservasi di paket trip pilihanmu, isi form Google, lalu tim kami akan konfirmasi via WhatsApp dalam 1×24 jam.",
  },
  {
    q: "Apakah open trip bisa untuk solo traveler?",
    a: "Bisa! Justru banyak solo traveler yang join. Kami pastikan suasana hangat dan inklusif untuk semua peserta.",
  },
  {
    q: "Bagaimana kebijakan refund jika trip dibatalkan?",
    a: "Refund 100% jika dibatalkan dari pihak kami. Jika dari peserta, mengikuti ketentuan H-7 (50%), H-3 (25%).",
  },
  {
    q: "Apakah harga sudah termasuk transportasi & makan?",
    a: "Mayoritas paket sudah include transportasi PP titik kumpul, akomodasi, makan sesuai itinerary, tiket masuk, dan guide.",
  },
  {
    q: "Bisa private trip atau custom itinerary?",
    a: "Bisa banget! Hubungi kami via WhatsApp, ceritakan tanggal, budget, dan vibe yang kamu mau — kami racikkan.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-background">
      <div className="container-prose grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            · FAQ
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance leading-[1.05]">
            Pertanyaan yang <br />
            <span className="italic font-light">sering muncul.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Belum nemu jawabannya? Sapa kami langsung di WhatsApp — biasanya kami balas
            dalam hitungan menit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-2xl px-5 bg-card data-[state=open]:shadow-soft data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
