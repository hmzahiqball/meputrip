import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/trips";

export function FloatingWA() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20MepuTrip%2C%20saya%20mau%20tanya%20trip`}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3.5 shadow-lift"
      aria-label="Chat WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="h-5 w-5 relative" />
      <span className="hidden sm:inline text-sm font-semibold relative">Chat Kami</span>
    </motion.a>
  );
}
