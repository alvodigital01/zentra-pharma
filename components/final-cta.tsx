"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="section-divider section-padding relative overflow-hidden bg-[#0E2A47] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%),linear-gradient(180deg,#153B63_0%,#0E2A47_100%)]" />
      <div className="absolute inset-0 dark-grid opacity-15" />

      <Container className="relative">
        <Reveal>
          <motion.div className="overflow-hidden rounded-[36px] border border-white/12 bg-white/6 px-6 py-10 shadow-dark backdrop-blur-xl sm:px-8 sm:py-12 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/74">
                  Atendimento Zenthra
                </span>
                <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[3.2rem]">
                  Fale com a Zenthra Pharma.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  Estamos prontos para apresentar nossas linhas e oferecer um atendimento claro, proximo e confiavel.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <CtaButton
                  href={whatsappUrl}
                  variant="secondary"
                  className="w-full justify-center sm:w-auto sm:px-8 sm:py-4"
                >
                  Falar no WhatsApp agora
                </CtaButton>
                <p className="max-w-sm text-sm leading-7 text-white/58 lg:text-right">
                  Um canal direto para esclarecer duvidas e conhecer melhor a marca.
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
