"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import {
  CompositionIcon,
  PulseIcon,
  RoutineIcon,
  ScaleIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { performanceLines } from "@/lib/content";

const icons = {
  weight: ScaleIcon,
  performance: PulseIcon,
  composition: CompositionIcon,
  wellbeing: RoutineIcon,
};

export function PerformanceLines() {
  return (
    <section
      id="linhas"
      className="section-divider section-padding relative overflow-hidden bg-[#0B0F1A] text-white"
    >
      <div className="absolute inset-0 dark-grid opacity-25" />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#1E56A8]/20 blur-[120px]" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Linhas de performance"
            title="Frentes estratégicas pensadas para evolução corporal, bem-estar e rotina de alta exigência."
            description="Cada linha foi posicionada para comunicar benefício de forma clara, elegante e objetiva, com visual limpo e sensação de tecnologia aplicada à performance."
            inverse
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {performanceLines.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <Reveal key={item.title} delay={0.08 + index * 0.06}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/6 p-6 shadow-[0_24px_70px_rgba(4,10,24,0.35)] backdrop-blur-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8FB7FF]/40 to-transparent" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#1E56A8]/15 blur-2xl transition duration-300 group-hover:bg-[#1E56A8]/22" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#8FB7FF]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="relative mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-4 text-sm leading-7 text-white/68">
                    {item.description}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
