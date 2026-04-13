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
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[#D9E1EC] bg-white/96 px-4 py-3 text-[#0E2A47] shadow-soft backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-medium"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E2A47] text-white">
        <WhatsAppIcon className="h-5 w-5" />
      </span>
      <span className="hidden text-sm font-medium sm:block">WhatsApp</span>
    </motion.a>
  );
}
