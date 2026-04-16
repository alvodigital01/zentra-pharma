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
      <div className="absolute left-[12%] top-16 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="absolute bottom-8 right-[10%] h-48 w-48 rounded-full bg-white/[0.05] blur-3xl" />

      <Container className="relative">
        <Reveal>
          <motion.div className="overflow-hidden rounded-[38px] border border-white/14 bg-white/[0.05] px-6 py-12 shadow-dark backdrop-blur-xl sm:px-8 sm:py-14 lg:px-14 lg:py-16">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div>
                <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/74">
                  Peça pelo WhatsApp
                </span>
                <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4rem]">
                  Escolha seu produto e fale direto com a gente.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  Atendimento rápido, discreto e sem enrolação para você tirar dúvidas, confirmar disponibilidade e fazer seu pedido com mais segurança.
                </p>
              </div>

              <div className="mt-10 flex w-full max-w-3xl flex-col items-center gap-5">
                <CtaButton
                  href={whatsappUrl}
                  variant="secondary"
                  className="w-full justify-center text-base sm:w-auto sm:min-w-[19rem] sm:px-9 sm:py-4"
                >
                  Quero meu produto
                </CtaButton>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
