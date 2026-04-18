"use client";

import { motion } from "framer-motion";

import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/content";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      aria-label="Abrir contato"
      className="button-pulse button-pulse-green fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-medium transition hover:-translate-y-0.5 hover:shadow-dark"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </motion.a>
  );
}
