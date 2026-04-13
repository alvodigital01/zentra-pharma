"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { trustBadges, whatsappUrl } from "@/lib/content";

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div className="absolute inset-x-12 top-10 h-48 rounded-full bg-[#0E2A47]/6 blur-3xl" />

      <div className="relative overflow-hidden rounded-[36px] border border-[#D9E1EC] bg-white p-5 shadow-medium sm:p-7">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#153B63]/18 to-transparent" />

        <div className="flex items-center justify-between gap-4 border-b border-[#D9E1EC] pb-5">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#5B6575]">
              Estrutura institucional
            </div>
            <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#0F1720]">
              Presenca visual mais seria e organizada.
            </div>
          </div>
          <Logo compact />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-[#D9E1EC] bg-[#F8FAFD] p-4">
            <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-[24px] border border-[#D9E1EC] bg-white">
              <div className="absolute inset-x-10 top-4 h-6 rounded-full bg-[#EEF2F7]" />
              <div className="absolute bottom-8 left-1/2 h-56 w-36 -translate-x-1/2 rounded-[30px] border border-[#D9E1EC] bg-gradient-to-b from-white to-[#F4F7FB] shadow-soft" />
              <div className="absolute bottom-52 left-1/2 h-8 w-20 -translate-x-1/2 rounded-full border border-[#D9E1EC] bg-white" />
              <div className="absolute bottom-16 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-[#0E2A47]/[0.04]" />
              <div className="absolute bottom-20 left-1/2 w-24 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.34em] text-[#5B6575]">
                Espaco para imagem real
              </div>
              <div className="absolute bottom-10 left-1/2 w-28 -translate-x-1/2 text-center text-sm font-semibold text-[#0E2A47]">
                Product Display
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                label: "Direcao visual",
                text: "Paleta mais sobria, mais branca e alinhada com uma presenca pharma premium.",
              },
              {
                label: "Leitura institucional",
                text: "Hierarquia enxuta para comunicar marca, produtos e proximo passo com mais clareza.",
              },
              {
                label: "Conversao organizada",
                text: "Contato via WhatsApp integrado ao fluxo sem excesso de estimulos ou poluicao visual.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-[#D9E1EC] bg-[#FAFBFD] p-5"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                  {item.label}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#5B6575]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-[#D9E1EC] bg-[#F5F7FB] pb-20 pt-32 sm:pb-24 sm:pt-36"
    >
      <div className="absolute inset-0 bg-hero-radial opacity-90" />
      <div className="absolute inset-0 light-grid opacity-30" />
      <div className="absolute left-[12%] top-24 h-32 w-32 rounded-full border border-[#D9E1EC] bg-white/70 blur-3xl" />
      <div className="absolute right-[8%] top-20 hidden h-52 w-52 rounded-full bg-[#153B63]/[0.05] blur-3xl lg:block" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-[#D9E1EC] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                Zenthra Pharma
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex rounded-full border border-[#D9E1EC] bg-[#FAFBFD] px-3.5 py-2 text-[11px] uppercase tracking-[0.22em] text-[#5B6575]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F1720] sm:text-5xl lg:text-[4.35rem]">
                Excelencia, confianca e apresentacao premium para uma marca pharma.
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5B6575] sm:text-lg">
                Uma presenca digital premium, criada para transmitir credibilidade,
                organizacao e alto padrao visual com leitura institucional mais clara.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton href={whatsappUrl}>Falar no WhatsApp</CtaButton>
                <CtaButton href="/#sobre" variant="secondary" external={false}>
                  Conhecer a estrutura
                </CtaButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
