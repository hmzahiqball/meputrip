import bromo from "@/assets/trip-bromo.jpg";
import dieng from "@/assets/trip-dieng.jpg";
import bandung from "@/assets/trip-bandung.jpg";
import bali from "@/assets/trip-bali.jpg";
import rancaupas from "@/assets/trip-rancaupas.jpg";

export type Trip = {
  id: string;
  name: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  category: "adventure" | "healing" | "open-trip" | "camping";
  image: string;
  description: string;
  availability: "available" | "limited" | "full";
  highlights: string[];
};

export const TRIPS: Trip[] = [
  {
    id: "bromo-sunrise",
    name: "Bromo Sunrise Escape",
    location: "Jawa Timur",
    duration: "2D 1N",
    price: 850000,
    rating: 4.9,
    reviews: 312,
    category: "adventure",
    image: bromo,
    description: "Sunrise di Penanjakan, jeep ke kawah, dan padang savana tak terlupakan.",
    availability: "available",
    highlights: ["Jeep 4x4", "Sunrise Point", "Pasir Berbisik"],
  },
  {
    id: "dieng-trip",
    name: "Dieng Highland Journey",
    location: "Wonosobo, Jateng",
    duration: "3D 2N",
    price: 1250000,
    rating: 4.8,
    reviews: 198,
    category: "open-trip",
    image: dieng,
    description: "Plateau di atas awan, telaga warna, dan candi-candi mistis.",
    availability: "limited",
    highlights: ["Sikunir Sunrise", "Telaga Warna", "Candi Arjuna"],
  },
  {
    id: "bandung-healing",
    name: "Bandung Healing Retreat",
    location: "Bandung, Jabar",
    duration: "2D 1N",
    price: 690000,
    rating: 4.7,
    reviews: 421,
    category: "healing",
    image: bandung,
    description: "Slow trip ke kebun teh, hot spring, dan kafe bukit yang menenangkan.",
    availability: "available",
    highlights: ["Tea Walk", "Hot Spring", "Hidden Cafe"],
  },
  {
    id: "open-trip-bali",
    name: "Open Trip Bali Hidden Gems",
    location: "Bali",
    duration: "4D 3N",
    price: 2450000,
    rating: 4.9,
    reviews: 587,
    category: "open-trip",
    image: bali,
    description: "Pantai tersembunyi, sunset Uluwatu, dan upacara budaya autentik.",
    availability: "available",
    highlights: ["Nyang Nyang", "Uluwatu", "Ubud Rice Field"],
  },
  {
    id: "ranca-upas",
    name: "Camping Ranca Upas",
    location: "Ciwidey, Bandung",
    duration: "2D 1N",
    price: 450000,
    rating: 4.6,
    reviews: 263,
    category: "camping",
    image: rancaupas,
    description: "Glamping di tengah hutan pinus, ditemani api unggun & rusa liar.",
    availability: "limited",
    highlights: ["Glamping Tent", "Bonfire Night", "Penangkaran Rusa"],
  },
  {
    id: "kawah-putih",
    name: "Kawah Putih Day Trip",
    location: "Ciwidey, Bandung",
    duration: "1D",
    price: 350000,
    rating: 4.7,
    reviews: 145,
    category: "adventure",
    image: bandung,
    description: "Eksplorasi danau kawah turquoise yang surealis dalam sehari.",
    availability: "full",
    highlights: ["Kawah View", "Situ Patenggang", "Glamping Lakeside"],
  },
];

export const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "adventure", label: "Adventure" },
  { id: "healing", label: "Healing" },
  { id: "open-trip", label: "Open Trip" },
  { id: "camping", label: "Camping" },
] as const;

export const RESERVASI_URL = "https://docs.google.com/forms/d/e/1FAIpQLScc-wws_1x2hcVSKKYPz2dVtTfcWxBJMrvNEV1MWLdb1KTc1Q/viewform";
export const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/12zgmkCY7CRN2DJ-Z3LQL3KvZH-a7e3-1reiNFO25h0c/edit?gid=754375181#gid=754375181";
export const WHATSAPP_NUMBER = "6281234567890";
