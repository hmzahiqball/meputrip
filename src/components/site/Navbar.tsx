import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";
import { message, WHATSAPP_NUMBER } from "@/data/trips";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#trips", label: "Paket Trip" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-border/60 py-3 shadow-soft"
          : "bg-transparent py-5",
      )}
    >
      <nav className="container-prose flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl transition-colors",
              scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 text-white backdrop-blur",
            )}
          >
            <Mountain className="h-5 w-5" />
          </span>
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-white",
            )}
          >
            Mepu<span className="text-accent">Trip</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  scrolled
                    ? "text-foreground/80 hover:text-primary"
                    : "text-white/90 hover:text-white",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:bg-accent/90 hover:shadow-lift hover:-translate-y-0.5"
          >
            Reservasi
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="menu"
          className={cn(
            "lg:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors",
            scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-white",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="container-prose pt-4 pb-6 space-y-1 glass mt-3 rounded-2xl">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-foreground/80 hover:bg-secondary hover:text-primary font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-center rounded-full bg-accent px-5 py-3 font-semibold text-accent-foreground"
          >
            Reservasi Sekarang
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
