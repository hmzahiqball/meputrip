import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, Mountain, Send } from "lucide-react";
import { toast } from "sonner";
import { useNewsletter } from "@/hooks/use-trip-store";
import { WHATSAPP_NUMBER } from "@/data/trips";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.4a8.16 8.16 0 0 0 4.77 1.52V7.47a4.85 4.85 0 0 1-1.84-.78Z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const { subscribe } = useNewsletter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribe(email);
    toast.success("Yeay, kamu subscribed!", { description: "Newsletter trip terbaru akan dikirim." });
    setEmail("");
  };

  return (
    <footer id="contact" className="relative bg-charcoal text-charcoal-foreground pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal/95" />
      <div className="container-prose relative">
        {/* CTA newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-merah p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 justify-between mb-20 shadow-glow"
        >
          <div className="max-w-md">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
              Dapatkan trip terbaru tiap minggu.
            </h3>
            <p className="text-primary-foreground/80 mt-2">
              Newsletter pendek, info promo & rilisan open trip baru.
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@kamu.com"
              className="flex-1 md:w-72 rounded-full bg-white/10 backdrop-blur border border-white/20 px-5 py-3.5 text-sm text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20"
            />
            <button
              type="submit"
              className="rounded-full bg-accent text-accent-foreground px-5 py-3.5 font-semibold text-sm inline-flex items-center gap-2 hover:bg-accent/90 transition"
            >
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Mountain className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-bold">
                Mepu<span className="text-accent">Trip</span>
              </span>
            </a>
            <p className="mt-5 text-white/70 max-w-md leading-relaxed">
              Vendor travel modern untuk open trip, healing journey, gathering, dan
              eksplorasi alam Indonesia. Tiap perjalanan dirancang dengan rasa.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/meputrip", label: "Instagram" },
                { icon: TikTokIcon, href: "https://tiktok.com/@meputrip", label: "TikTok" },
                { icon: Mail, href: "mailto:halo@meputrip.id", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Explore</h4>
            <ul className="space-y-2.5 text-white/80">
              <li><a className="hover:text-accent" href="#trips">Paket Trip</a></li>
              <li><a className="hover:text-accent" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-accent" href="#about">Tentang Kami</a></li>
              <li><a className="hover:text-accent" href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Kontak</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex gap-2"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /> +62 812-3456-7890</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> halo@meputrip.id</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Jl. Pendakian No. 17, Bandung, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} MepuTrip. All rights reserved.</p>
          <p>
            Made with ♥ for slow travelers · WA{" "}
            <a className="text-accent hover:underline" href={`https://wa.me/${WHATSAPP_NUMBER}`}>
              +62 812 3456 7890
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
