"use client";

import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function ProductMockup({
  accentClassName,
  images,
  label,
  clean = false,
}: {
  accentClassName: string;
  images: string[];
  label: string;
  clean?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.55 });

  function showPreviousImage() {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNextImage() {
    setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  useEffect(() => {
    if (!hasMultipleImages || !isInView) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 3200);

    return () => window.clearInterval(interval);
  }, [hasMultipleImages, images.length, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        clean
          ? "aspect-[4/3] rounded-[22px]"
          : "rounded-[28px] border border-[#D9E1EC] bg-[#FAFBFD] p-5 aspect-[4/5]",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute rounded-full blur-3xl",
          clean ? "-left-6 top-4 h-20 w-20 bg-white/90" : "-left-8 top-5 h-24 w-24 bg-[#EEF2F7]",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute rounded-full blur-3xl",
          clean ? "-right-6 bottom-4 h-20 w-20 opacity-70" : "-right-10 bottom-10 h-28 w-28",
          accentClassName,
        )}
      />

      <div
        className={cn(
          "relative h-full bg-white",
          clean
            ? "rounded-[22px]"
            : "rounded-[24px] border border-[#D9E1EC]",
        )}
      >
        {!clean ? <div className="absolute inset-x-5 top-5 h-8 rounded-full bg-[#F2F5F9]" /> : null}
        {!clean ? <div className="absolute inset-x-7 top-16 h-[1px] bg-[#D9E1EC]" /> : null}

        <div
          className={cn(
            "overflow-hidden",
            clean
              ? "absolute inset-0 rounded-[22px] bg-[linear-gradient(180deg,#FBFDFF_0%,#EEF3F8_100%)]"
              : "absolute inset-x-6 top-24 bottom-24 rounded-[30px] border border-[#D9E1EC] bg-gradient-to-b from-white to-[#F4F7FB]",
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute overflow-hidden",
              clean
                ? "inset-0 rounded-[22px]"
                : "inset-3 rounded-[24px] bg-[#F8FAFD]",
            )}
          >
            {clean ? (
              <>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/80 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#DDE6F0]/70 to-transparent" />
              </>
            ) : null}
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt={label}
                width={1200}
                height={1200}
                sizes="(min-width: 1280px) 360px, (min-width: 768px) 42vw, 92vw"
                unoptimized
                className={cn(
                  "h-full w-full object-center",
                  clean
                    ? "relative z-10 object-cover"
                    : "p-4 sm:p-5",
                )}
              />
            </div>
            {!clean ? (
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/18 via-transparent to-white/16" />
            ) : null}
          </div>

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label={`Ver imagem anterior de ${label}`}
                className="button-pulse-carousel absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white/80 opacity-65 shadow-[0_6px_16px_rgba(14,42,71,0.1)] transition-all duration-300 hover:-translate-y-1/2 hover:opacity-100"
              >
                &#8249;
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label={`Ver próxima imagem de ${label}`}
                className="button-pulse-carousel absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white/80 opacity-65 shadow-[0_6px_16px_rgba(14,42,71,0.1)] transition-all duration-300 hover:-translate-y-1/2 hover:opacity-100"
              >
                &#8250;
              </button>

              <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#0F1720]/26 px-3 py-2 backdrop-blur-sm">
                {images.map((image, index) => (
                  <span
                    key={`${image}-${index}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      index === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/55",
                    )}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        {!clean ? (
          <div className="absolute bottom-16 left-1/2 w-40 -translate-x-1/2 text-center">
            <div className="text-[10px] uppercase tracking-[0.34em] text-[#5B6575]">
              Zenthra Pharma
            </div>
            <div className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#0E2A47]">
              {label}
            </div>
            <div className="mt-2 text-xs leading-6 text-[#5B6575]">
              Qualidade, presença e identidade visual premium.
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
