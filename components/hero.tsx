"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";

const productLines = [
  { name: "Retatrutida", tag: "GLP-1 · GIP · Glucagon" },
  { name: "Tirzepatida", tag: "GLP-1 · GIP" },
  { name: "Glow Blend",  tag: "BPC-157 · TB-500 · GHK-Cu" },
];

const stats = [
  { value: "12+",    label: "produtos" },
  { value: "PIX",    label: "preço especial" },
  { value: "Brasil", label: "entrega nacional" },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-[#D9E1EC] bg-white pb-20 pt-28 sm:pb-24 sm:pt-36"
    >
      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(#153B63 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Radial glow top-left */}
      <div
        aria-hidden
        className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#153B63]/[0.05] blur-[120px]"
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white"
      />

      <Container className="relative">
        <div className="mx-auto max-w-5xl">

          {/* Brand overline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-6 bg-[#D9E1EC]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#153B63]">
              Zenthra Pharma
            </span>
            <span className="h-px w-4 bg-[#D9E1EC]" />
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#5B6575]">
              Em estoque
            </span>
          </motion.div>

          {/* Stacked product names — main headline */}
          <div className="mt-10 space-y-0">
            {productLines.map((line, i) => (
              <div key={line.name} className="overflow-hidden pb-1">
                <motion.div
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.78,
                    delay: 0.08 + i * 0.11,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-baseline sm:gap-5 sm:text-left"
                >
                  <span className="font-body text-[3.35rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[#0F1720] sm:text-[5.2rem] lg:text-[7rem]">
                    {line.name}
                  </span>
                  <span className="pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#153B63]/40 sm:text-[11px]">
                    {line.tag}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.78 }}
            className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 border-t border-[#D9E1EC] pt-8 text-center"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-semibold tracking-tight text-[#0F1720] sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#5B6575]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
