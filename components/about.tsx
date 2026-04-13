"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights } from "@/lib/content";

export function About() {
  return (
    <section id="sobre" className="section-divider section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 light-grid opacity-20" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Sobre a marca"
              title="Uma apresentacao institucional mais limpa, mais precisa e mais alinhada ao universo pharma."
              description="A manutencao visual reorganiza a experiencia para transmitir seriedade, controle e sofisticacao com menos ruido e mais consistencia."
            />

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5B6575]">
              Em vez de exagerar no discurso, a Zenthra passa a comunicar valor por meio de
              hierarquia clara, espacos respirando melhor e uma composicao visual que reforca
              confianca desde o primeiro bloco.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.label} delay={0.08 + index * 0.05}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="rounded-[28px] border border-[#D9E1EC] bg-[#FAFBFD] p-6 shadow-soft"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                    {item.label}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[#0F1720]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5B6575]">{item.description}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
