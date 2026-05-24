import { motion } from "framer-motion";
import { Heart, MapPin, Clock, Star, ArrowUpRight } from "lucide-react";
import type { Trip } from "@/data/trips";
import { cn } from "@/lib/utils";
import { useFavorites, useRecentlyViewed } from "@/hooks/use-trip-store";

const idr = (n: number) => new Intl.NumberFormat("id-ID").format(n);

const AVAIL_STYLES: Record<Trip["availability"], string> = {
  available: "bg-primary/15 text-primary",
  limited: "bg-accent/20 text-accent-foreground",
  full: "bg-destructive/15 text-destructive",
};
const AVAIL_LABEL: Record<Trip["availability"], string> = {
  available: "Tersedia",
  limited: "Hampir Penuh",
  full: "Full Booked",
};

export function TripCard({ trip, onOpen }: { trip: Trip; onOpen: (t: Trip) => void }) {
  const { has, toggle } = useFavorites();
  const { push } = useRecentlyViewed();
  const fav = has(trip.id);

  const handleOpen = () => {
    push(trip.id);
    onOpen(trip);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-soft hover-lift flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={trip.image}
          alt={trip.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className={cn("rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur", AVAIL_STYLES[trip.availability])}>
            {AVAIL_LABEL[trip.availability]}
          </span>
        </div>

        <button
          aria-label="favorite"
          onClick={() => toggle(trip.id)}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full glass transition-transform hover:scale-110 active:scale-95"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              fav ? "fill-destructive text-destructive" : "text-foreground",
            )}
          />
        </button>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <div className="flex items-center gap-1 text-xs text-white/80">
              <MapPin className="h-3 w-3" /> {trip.location}
            </div>
            <h3 className="font-display text-xl font-bold mt-1 leading-tight">{trip.name}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-muted-foreground line-clamp-2">{trip.description}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-primary" /> {trip.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {trip.rating}{" "}
            <span className="text-muted-foreground/70">({trip.reviews})</span>
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Mulai dari</div>
            <div className="font-display text-xl font-bold text-foreground">
              Rp{idr(trip.price)}
              <span className="text-xs font-normal text-muted-foreground"> /pax</span>
            </div>
          </div>
          <button
            onClick={handleOpen}
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2.5 text-xs font-semibold transition-all hover:bg-primary"
          >
            Detail
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
