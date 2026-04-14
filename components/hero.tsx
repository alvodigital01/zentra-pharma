"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/content";

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
              Zenthra Pharma
            </div>
            <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#0F1720]">
              Presenca que traduz confianca.
            </div>
          </div>
          <Logo compact />
        </div>

        <div className="mt-6">
          <div className="rounded-[30px] border border-[#D9E1EC] bg-[#F8FAFD] p-4">
            <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-[24px] border border-[#D9E1EC] bg-white">
              <div className="absolute inset-x-3 bottom-3 top-3 overflow-hidden rounded-[30px] border border-[#D9E1EC] bg-white shadow-soft">
                <Image
                  src="/foto1.jpeg"
                  alt="Produto Zenthra Pharma"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
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
                Produtos de extrema pureza
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F1720] sm:text-5xl lg:text-[4.35rem]">
                Zenthra Pharma.
                <br />
                Produtos de extrema pureza.
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5B6575] sm:text-lg">
                Sofisticacao, confianca e atendimento humanizado em uma marca
                pensada para quem prioriza cuidado, seguranca e excelencia.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton href={whatsappUrl}>Falar no WhatsApp</CtaButton>
                <CtaButton href="/#sobre" variant="secondary" external={false}>
                  Conhecer a marca
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
