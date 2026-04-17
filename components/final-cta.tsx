"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="section-divider section-padding relative overflow-hidden bg-[#0E2238] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#112A44_0%,#0E2238_100%)]" />
      <div className="absolute inset-0 dark-grid opacity-10" />
      <div className="absolute left-1/2 top-10 h-40 w-[30rem] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[90px]" />

      <Container className="relative">
        <Reveal>
          <motion.div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#F7F4EE] px-6 py-12 text-[#10243A] shadow-[0_26px_80px_rgba(2,8,20,0.28)] sm:px-8 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#153B63]/18 to-transparent" />
            <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-[#E8EEF5] blur-3xl" />
            <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-[#DCE6F0] blur-3xl" />

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-[#D8E1EA] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                  Peça pelo WhatsApp
                </span>
                <h2 className="mx-auto mt-7 text-3xl font-semibold leading-[1] tracking-[-0.05em] text-[#10243A] sm:text-5xl lg:text-[4rem]">
                  Escolha seu produto e fale direto com a gente.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5B6575] sm:text-lg">
                  Atendimento rápido e objetivo para tirar dúvidas, confirmar disponibilidade e fazer seu pedido com mais segurança.
                </p>
              </div>

              <div className="mt-10 flex w-full max-w-3xl flex-col items-center gap-5">
                <CtaButton
                  href={whatsappUrl}
                  className="w-full justify-center text-base sm:w-auto sm:min-w-[19rem] sm:px-10 sm:py-4"
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
