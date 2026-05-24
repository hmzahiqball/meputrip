import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Heart, History } from "lucide-react";
import { CATEGORIES, TRIPS, type Trip } from "@/data/trips";
import { TripCard } from "./TripCard";
import { TripDetailDialog } from "./TripDetailDialog";
import { useFavorites, useRecentlyViewed } from "@/hooks/use-trip-store";
import { cn } from "@/lib/utils";

export function TripSection() {
  const [cat, setCat] = useState<string>("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Trip | null>(null);
  const { favorites } = useFavorites();
  const { recent } = useRecentlyViewed();

  const filtered = useMemo(() => {
    return TRIPS.filter((t) => {
      const matchCat = cat === "all" || t.category === cat;
      const matchQ =
        !q ||
        t.name.toLowerCase().includes(q.toLowerCase()) ||
        t.location.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [cat, q]);

  return (
    <section id="trips" className="relative py-24 md:py-32 bg-background">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              · Paket Trip
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">
              Pilih perjalananmu, <br />
              <span className="italic font-light">kami yang urus sisanya.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs">
            {favorites.length > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 text-destructive px-3 py-1.5 font-medium">
                <Heart className="h-3.5 w-3.5 fill-current" /> {favorites.length} favorit
              </span>
            )}
            {recent.length > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-foreground/70 px-3 py-1.5 font-medium">
                <History className="h-3.5 w-3.5" /> {recent.length} dilihat
              </span>
            )}
          </div>
        </motion.div>

        {/* Search & filter */}
        <div className="mb-10 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Cari destinasi atau lokasi..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full rounded-full border border-border bg-card py-3.5 pl-11 pr-5 text-sm shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all border",
                  cat === c.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-foreground/70 border-border hover:border-primary hover:text-primary",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <TripCard key={t.id} trip={t} onOpen={setOpen} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            Belum ada trip yang cocok. Coba kata kunci lain.
          </div>
        )}
      </div>

      <TripDetailDialog trip={open} onClose={() => setOpen(null)} />
    </section>
  );
}
