import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Clock, Star, Check } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import type { Trip } from "@/data/trips";
import { RESERVASI_URL } from "@/data/trips";
import { useBookings } from "@/hooks/use-trip-store";

const idr = (n: number) => new Intl.NumberFormat("id-ID").format(n);

export function TripDetailDialog({ trip, onClose }: { trip: Trip | null; onClose: () => void }) {
  const { add } = useBookings();

  useEffect(() => {
    if (trip) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [trip]);

  const handleBook = () => {
    if (!trip) return;
    add({ tripId: trip.id, tripName: trip.name, date: new Date().toISOString() });
    toast.success("Reservasi tersimpan di history!", {
      description: "Kamu akan diarahkan ke form reservasi.",
    });
    setTimeout(() => window.open(RESERVASI_URL, "_blank"), 600);
  };

  return (
    <AnimatePresence>
      {trip && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-charcoal/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-2xl bg-card rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-lift max-h-[92vh] overflow-y-auto"
          >
            <div className="relative aspect-[16/9]">
              <img src={trip.image} alt={trip.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full glass"
                aria-label="close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <div className="flex items-center gap-1 text-xs text-white/80">
                  <MapPin className="h-3 w-3" /> {trip.location}
                </div>
                <h3 className="font-display text-3xl font-bold mt-1">{trip.name}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" /> {trip.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-accent text-accent" /> {trip.rating} · {trip.reviews} review
                </span>
              </div>

              <p className="mt-5 text-foreground/80 leading-relaxed">{trip.description}</p>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Highlight Trip</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {trip.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2.5 text-sm"
                    >
                      <Check className="h-4 w-4 text-primary" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-border pt-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Harga / pax</div>
                  <div className="font-display text-3xl font-bold">Rp{idr(trip.price)}</div>
                </div>
                <button
                  onClick={handleBook}
                  className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft hover:bg-accent/90 transition"
                >
                  Reservasi Trip Ini
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
