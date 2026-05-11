"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { Container } from "@/components/container";
import { PlayIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const videoPublicPath = "/videos/entrega-zenthra.mp4";

const steps = [
  {
    number: "01",
    title: "Contato",
    description: "O atendimento começa de forma simples e direta, pelo canal mais conveniente para você.",
  },
  {
    number: "02",
    title: "Alinhamento do pedido",
    description: "Entendemos sua necessidade com clareza para orientar o pedido com atenção e organização.",
  },
  {
    number: "03",
    title: "Confirmação e preparo",
    description: "Após a confirmação, organizamos tudo com discrição e cuidado para uma experiência segura.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Realizamos entregas para todo o Brasil com praticidade, discrição e atenção em cada pedido.",
  },
] as const;

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(wrapperRef, { amount: 0.4 });
  const [hasStarted, setHasStarted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isDesktop) return;
    if (isInView) {
      video.muted = true;
      void video.play().then(() => setHasStarted(true)).catch(() => {});
      return;
    }
    video.pause();
  }, [isDesktop, isInView]);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    void video.play().then(() => setHasStarted(true)).catch(() => {});
  }

  return (
    <div ref={wrapperRef} className="relative aspect-video overflow-hidden rounded-[20px] bg-[#EAF0F6]">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        controls={hasStarted}
        playsInline
        preload="metadata"
      >
        <source src={videoPublicPath} type="video/mp4" />
      </video>

      {!hasStarted && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(10,28,46,0.08)_0%,rgba(10,28,46,0.42)_100%)] transition-colors duration-300 hover:bg-[linear-gradient(180deg,rgba(10,28,46,0.14)_0%,rgba(10,28,46,0.50)_100%)]"
          aria-label="Iniciar vídeo de entrega"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#153B63] shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
              <PlayIcon className="ml-1 h-6 w-6" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white/80">
              Ver como chega
            </span>
          </motion.div>
        </button>
      )}
    </div>
  );
}

export function Journey() {
  return (
    <section
      id="como-funciona"
      className="section-divider section-padding bg-white"
    >
      <span id="entrega" className="absolute" aria-hidden="true" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-24">

          {/* Left: heading */}
          <Reveal>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B9BD5]">
                Como funciona
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#0F1720] sm:text-4xl">
                Da conversa à entrega.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#667085]">
                Cada etapa pensada para ser simples, segura e transparente.
              </p>
            </div>
          </Reveal>

          {/* Right: steps */}
          <div>
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={0.05 + index * 0.07}>
                <div className="flex gap-8 border-t border-[#EAECF0] py-7 first:border-t-0 first:pt-0">
                  <span className="mt-0.5 w-7 shrink-0 font-mono text-sm text-[#C5CDD8]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0F1720]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Video */}
            <Reveal delay={0.1}>
              <div className="mt-8 border-t border-[#EAECF0] pt-8">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9BA8B5]">
                  Como o produto chega
                </span>
                <div className="mt-5 overflow-hidden rounded-[22px] border border-[#E5E9EF] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
                  <VideoPlayer />
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
