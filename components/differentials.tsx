"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import {
  ChatIcon,
  DiscretionIcon,
  FlowIcon,
  LabIcon,
  PersonalizedIcon,
  PremiumIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { differentials } from "@/lib/content";

const icons = {
  structure: LabIcon,
  premium: PremiumIcon,
  direct: ChatIcon,
  optimized: FlowIcon,
  personalized: PersonalizedIcon,
  discretion: DiscretionIcon,
};

export function Differentials() {
  return (
    <section id="diferenciais" className="section-divider section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 light-grid opacity-15" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Quatro pilares visuais e estruturais para reforcar seriedade, clareza e organizacao."
            description="A manutencao reduziu excessos e concentrou a experiencia nos elementos que realmente melhoram a percepcao da marca."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {differentials.map((item, index) => {
              const Icon = icons[item.icon];

              return (
                <Reveal key={item.title} delay={0.08 + index * 0.05}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 240, damping: 24 }}
                    className="group relative h-full rounded-[28px] border border-[#D9E1EC] bg-[#FAFBFD] p-6 shadow-soft"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D9E1EC] bg-white text-[#153B63] transition duration-300 group-hover:border-[#153B63]/16">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[#0F1720]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5B6575]">{item.description}</p>
                  </motion.article>
                </Reveal>
              );
            })}
        </div>
      </Container>
    </section>
  );
}
