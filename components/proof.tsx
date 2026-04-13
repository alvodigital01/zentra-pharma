"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { proofMetrics, testimonials } from "@/lib/content";

export function Proof() {
  return (
    <section
      id="autoridade"
      className="section-divider section-padding relative overflow-hidden bg-[#0B0F1A] text-white"
    >
      <div className="absolute inset-0 dark-grid opacity-20" />
      <div className="absolute left-10 top-16 h-64 w-64 rounded-full bg-[#1E56A8]/16 blur-[120px]" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Autoridade"
            title="Sinais de confiança distribuídos para reforçar credibilidade sem sobrecarregar a experiência."
            description="A prova social aqui é tratada com sofisticação: indicadores enxutos, discurso consistente e depoimentos curtos para validar percepção, processo e atendimento."
            inverse
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {proofMetrics.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.1 + index * 0.08 }}
                    className="rounded-[24px] border border-white/10 bg-[#08101d] p-5"
                  >
                    <div className="text-3xl font-semibold text-white">{item.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.32em] text-[#8FB7FF]">
                      {item.label}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={0.1 + index * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl"
                >
                  <div className="text-4xl leading-none text-[#8FB7FF]">“</div>
                  <p className="mt-4 text-base leading-8 text-white/72">{item.quote}</p>
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="mt-1 text-sm text-white/48">{item.role}</div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
