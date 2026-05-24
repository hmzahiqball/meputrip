import { useCallback } from "react";
import { useLocalStorage } from "./use-local-storage";

const FAV_KEY = "meputrip:favorites";
const RECENT_KEY = "meputrip:recent";
const BOOKINGS_KEY = "meputrip:bookings";
const NEWSLETTER_KEY = "meputrip:newsletter";

export type Booking = {
  id: string;
  tripId: string;
  tripName: string;
  date: string;
  status: "pending" | "confirmed";
  createdAt: number;
};

export function useFavorites() {
  const [favs, setFavs] = useLocalStorage<string[]>(FAV_KEY, []);
  const toggle = useCallback(
    (id: string) =>
      setFavs((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    [setFavs],
  );
  const has = useCallback((id: string) => favs.includes(id), [favs]);
  return { favorites: favs, toggle, has };
}

export function useRecentlyViewed() {
  const [recent, setRecent] = useLocalStorage<string[]>(RECENT_KEY, []);
  const push = useCallback(
    (id: string) => setRecent((prev) => [id, ...prev.filter((x) => x !== id)].slice(0, 6)),
    [setRecent],
  );
  return { recent, push };
}

export function useBookings() {
  const [bookings, setBookings] = useLocalStorage<Booking[]>(BOOKINGS_KEY, []);
  const add = useCallback(
    (b: Omit<Booking, "id" | "createdAt" | "status">) =>
      setBookings((prev) => [
        { ...b, id: crypto.randomUUID(), createdAt: Date.now(), status: "pending" },
        ...prev,
      ]),
    [setBookings],
  );
  return { bookings, add };
}

export function useNewsletter() {
  const [emails, setEmails] = useLocalStorage<string[]>(NEWSLETTER_KEY, []);
  const subscribe = useCallback(
    (email: string) => setEmails((prev) => (prev.includes(email) ? prev : [...prev, email])),
    [setEmails],
  );
  return { emails, subscribe };
}
