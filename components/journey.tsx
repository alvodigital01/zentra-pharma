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
    description:
      "O atendimento começa de forma simples e direta, pelo canal mais conveniente para você.",
  },
  {
    number: "02",
    title: "Alinhamento do pedido",
    description:
      "Entendemos sua necessidade com clareza para orientar o pedido com atenção e organização.",
  },
  {
    number: "03",
    title: "Confirmação e preparo",
    description:
      "Após a confirmação, organizamos tudo com discrição e cuidado para uma experiência segura.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Realizamos entregas para todo o Brasil com praticidade, discrição e atenção em cada pedido.",
  },
] as const;

const pillars = [
  {
    label: "Simples",
    text: "Processo direto, sem burocracia",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-[#153B63]" aria-hidden="true">
        <path d="M10 2l2.4 5.1 5.6.8-4 3.9.9 5.5L10 14.8 5.1 17.3l.9-5.5L2 7.9l5.6-.8L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Seguro",
    text: "Atendimento confiável do início ao fim",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-[#153B63]" aria-hidden="true">
        <path d="M10 2L3 5v5c0 4.4 3 8.1 7 9 4-0.9 7-4.6 7-9V5l-7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Discreto",
    text: "Embalagem sem identificação do conteúdo",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-[#153B63]" aria-hidden="true">
        <rect x="2" y="7" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 10h16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7V4.5a2 2 0 0 1 4 0V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
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
    <div ref={wrapperRef} className="relative aspect-video overflow-hidden rounded-[20px] bg-[#101E2E]">
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
          className="absolute inset-0 flex flex-col items-center justify-end pb-7 sm:justify-center sm:pb-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,18,32,0.80) 0%, rgba(8,18,32,0.30) 42%, rgba(8,18,32,0.06) 100%)",
          }}
          aria-label="Iniciar vídeo de entrega"
        >
          {/* Play cluster */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Pulsing rings + button */}
            <div className="relative flex items-center justify-center">
              {/* Ring 1 */}
              <motion.span
                className="absolute rounded-full bg-white/18"
                style={{ width: 100, height: 100 }}
                animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
              {/* Ring 2 */}
              <motion.span
                className="absolute rounded-full bg-white/12"
                style={{ width: 100, height: 100 }}
                animate={{ scale: [1, 1.55], opacity: [0.4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
              />
              {/* Circle button — larger on mobile */}
              <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[#0E2A47] shadow-[0_12px_40px_rgba(0,0,0,0.30)] sm:h-16 sm:w-16">
                <PlayIcon className="ml-1.5 h-7 w-7 sm:ml-1 sm:h-6 sm:w-6" />
              </span>
            </div>

            {/* Label — different copy on mobile vs desktop */}
            <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-[11px] sm:tracking-[0.26em] sm:text-white/75">
              <span className="sm:hidden">Toque para assistir</span>
              <span className="hidden sm:inline">Ver como chega</span>
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
        <div className="grid gap-14 lg:grid-cols-[1fr_1.55fr] lg:gap-20">

          {/* Left: heading + pillars */}
          <Reveal>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                Como funciona
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0F1720] sm:text-4xl">
                Da conversa
                <br className="hidden lg:block" />
                {" "}à entrega.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#667085]">
                Cada etapa pensada para ser simples, segura e transparente.
              </p>

              {/* Pillars */}
              <div className="mt-8 flex flex-col gap-2.5">
                {pillars.map(({ label, text, icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-[12px] border border-[#E8ECF1] bg-[#F8F9FB] px-4 py-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EBF1F9]">
                      {icon}
                    </span>
                    <div className="min-w-0">
                      <span className="block text-sm font-semibold text-[#0F1720]">{label}</span>
                      <span className="block text-xs leading-5 text-[#8A96A6]">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: timeline + video */}
          <div>
            {/* Timeline */}
            <div className="relative">
              {/* Vertical connector line */}
              <div
                className="absolute left-[19px] top-5 w-px bg-gradient-to-b from-[#D0D8E8] to-transparent sm:left-[23px]"
                style={{ height: "calc(100% - 3rem)" }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-0">
                {steps.map((step, index) => (
                  <Reveal key={step.number} delay={0.05 + index * 0.07}>
                    <div className={`relative flex gap-5 sm:gap-7 ${index < steps.length - 1 ? "pb-8 sm:pb-10" : ""}`}>
                      {/* Numbered badge */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0E2A47] text-xs font-bold tracking-wider text-white shadow-[0_4px_14px_rgba(14,42,71,0.22)] sm:h-12 sm:w-12 sm:text-sm">
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="pt-1.5 sm:pt-2.5">
                        <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#0F1720] sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 max-w-md text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Video */}
            <Reveal delay={0.12}>
              <div className="mt-8 sm:mt-10">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E2A47]">
                    <PlayIcon className="ml-0.5 h-2.5 w-2.5 text-white" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#667085]">
                    Como o produto chega
                  </span>
                </div>
                <div className="overflow-hidden rounded-[22px] border border-[#E5E9EF] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
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
