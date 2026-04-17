"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/content";

function HeroVisual() {
  const images = [
    "/retratutide-veltrane-10mg-ml.jpg",
    "/tirzec-15mg-o.5ml.jpg",
    "/tg15mg-0,5ml.jpg",
    "/tirzepatide-veltrane-10mg-ml.jpg",
    "/lipoless=15mg-0,5ml.jpg",
    "/glowblend.jpg",
    "/retratutidenexxus-40mg.jpg",
    "/retratutideusa-40mg-2ml.jpg",
    "/tirzec4-15mg-0,5ml.jpg",
    "/lipoland-15mg-0,5ml.jpg",
    "/tirzec2-15mg-o.5ml.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cacheBust, setCacheBust] = useState("");

  function showPreviousImage() {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNextImage() {
    setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 3500);

    return () => window.clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setCacheBust(`?v=${Date.now()}`);
  }, []);

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

        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-soft sm:min-h-[24rem] sm:aspect-auto">
            <div className="absolute inset-0">
              <Image
                src={`${images[currentIndex]}${cacheBust}`}
                alt="Produto Zenthra Pharma"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                unoptimized
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/8 via-transparent to-white/12" />
            </div>

            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Ver imagem anterior do hero"
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-[#0E2A47] shadow-soft transition hover:bg-white"
            >
              &#8249;
            </button>

            <button
              type="button"
              onClick={showNextImage}
              aria-label="Ver próxima imagem do hero"
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-[#0E2A47] shadow-soft transition hover:bg-white"
            >
              &#8250;
            </button>

            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#0F1720]/28 px-3 py-2 backdrop-blur-sm">
              {images.map((image, index) => (
                <span
                  key={`${image}-${index}`}
                  className={
                    index === currentIndex
                      ? "h-1.5 w-5 rounded-full bg-white"
                      : "h-1.5 w-1.5 rounded-full bg-white/60"
                  }
                />
              ))}
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
                Produtos de extrema qualidade
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mx-auto mt-8 max-w-3xl text-center font-body text-[3.15rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0F1720] sm:text-5xl lg:mx-0 lg:text-left lg:text-[4.35rem]">
                <span className="whitespace-nowrap">Zenthra Pharma.</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline"> </span>
                Produtos de extrema pureza.
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-[#5B6575] sm:text-lg lg:mx-0 lg:text-left">
                Sofisticação, confiança e atendimento humanizado em uma marca
                pensada para quem prioriza cuidado, segurança e excelência.
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
