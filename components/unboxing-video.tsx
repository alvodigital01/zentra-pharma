"use client";

import { useEffect, useRef, useState } from "react";

import { useInView } from "framer-motion";

import { Container } from "@/components/container";
import { PackageIcon, PlayIcon, TruckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const videoPublicPath = "/videos/entrega-zenthra.mp4";

const highlights = [
  {
    title: "Embalagem",
    description: "Apresentacao organizada e alinhada ao padrao da marca.",
    icon: PackageIcon,
  },
  {
    title: "Entrega",
    description: "Mais clareza sobre como o pedido chega ate voce.",
    icon: TruckIcon,
  },
];

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(wrapperRef, { amount: 0.45 });
  const [hasStarted, setHasStarted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => setIsDesktop(mediaQuery.matches);

    updateDesktop();
    mediaQuery.addEventListener("change", updateDesktop);

    return () => mediaQuery.removeEventListener("change", updateDesktop);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isDesktop) {
      return;
    }

    if (isInView) {
      video.muted = true;
      void video.play().then(() => setHasStarted(true)).catch(() => {});
      return;
    }

    video.pause();
  }, [isDesktop, isInView]);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = false;
    void video.play().then(() => setHasStarted(true)).catch(() => {});
  }

  const showOverlay = !hasStarted && !isDesktop;

  return (
    <div ref={wrapperRef} className="relative overflow-hidden rounded-[26px] border border-[#D9E1EC] bg-white">
      <div className="flex aspect-video items-center justify-center bg-[#EAF0F6]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls={hasStarted}
          playsInline
          preload="metadata"
        >
          <source src={videoPublicPath} type="video/mp4" />
          Seu navegador nao suporta video.
        </video>
      </div>

      {showOverlay ? (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(10,28,46,0.12)_0%,rgba(10,28,46,0.48)_100%)] text-white transition hover:bg-[linear-gradient(180deg,rgba(10,28,46,0.16)_0%,rgba(10,28,46,0.55)_100%)]"
          aria-label="Iniciar video de entrega"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="button-pulse button-pulse-surface flex h-16 w-16 items-center justify-center rounded-full text-[#153B63] shadow-[0_16px_34px_rgba(3,10,22,0.24)]">
              <PlayIcon className="ml-1 h-6 w-6" />
            </span>
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/84">
                Assistir video
              </div>
              <div className="mt-2 text-sm text-white/82">
                Toque para ver como o pedido chega ate voce
              </div>
            </div>
          </div>
        </button>
      ) : null}
    </div>
  );
}

export function UnboxingVideo() {
  return (
    <section
      id="entrega"
      className="section-divider section-padding relative overflow-hidden bg-[#F5F7FB]"
    >
      <div className="absolute inset-0 light-grid opacity-15" />
      <div className="absolute right-[10%] top-20 h-64 w-64 rounded-full bg-[#153B63]/[0.05] blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal>
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="Como o produto chega"
                title="Veja de perto como seu pedido chega ate voce."
                description="Uma apresentacao real da abertura do produto, da embalagem e da experiencia de entrega para transmitir mais seguranca antes do seu pedido."
              />

              <div className="mt-8 grid gap-3">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-[22px] border border-[#D9E1EC] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)] px-4 py-4 shadow-soft"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D9E1EC] bg-[#FAFBFD] text-[#153B63]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-[#5B6575]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto w-full max-w-[42rem]">
              <div className="relative overflow-hidden rounded-[34px] border border-[#D9E1EC] bg-[#F8FAFD] p-4 shadow-medium sm:p-5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#153B63]/18 to-transparent" />
                <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-white/80 blur-3xl" />
                <div className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-[#153B63]/[0.08] blur-3xl" />

                <VideoPlayer />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
