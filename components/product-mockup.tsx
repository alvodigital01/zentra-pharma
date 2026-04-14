"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function ProductMockup({
  accentClassName,
  images,
  label,
}: {
  accentClassName: string;
  images: string[];
  label: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  function showPreviousImage() {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNextImage() {
    setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[#D9E1EC] bg-[#FAFBFD] p-5">
      <div className="absolute -left-8 top-5 h-24 w-24 rounded-full bg-[#EEF2F7] blur-3xl" />
      <div
        className={cn(
          "absolute -right-10 bottom-10 h-28 w-28 rounded-full blur-3xl",
          accentClassName,
        )}
      />

      <div className="relative h-full rounded-[24px] border border-[#D9E1EC] bg-white">
        <div className="absolute inset-x-5 top-5 h-8 rounded-full bg-[#F2F5F9]" />
        <div className="absolute inset-x-7 top-16 h-[1px] bg-[#D9E1EC]" />

        <div className="absolute inset-x-6 top-24 bottom-24 overflow-hidden rounded-[30px] border border-[#D9E1EC] bg-gradient-to-b from-white to-[#F4F7FB] shadow-soft">
          <div className="absolute inset-3 overflow-hidden rounded-[24px] bg-[#F8FAFD]">
            <Image
              src={images[currentIndex]}
              alt={label}
              fill
              sizes="(min-width: 1280px) 220px, (min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/18 via-transparent to-white/16" />
          </div>

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label={`Ver imagem anterior de ${label}`}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/88 text-[#0E2A47] shadow-soft transition hover:bg-white"
              >
                &#8249;
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label={`Ver proxima imagem de ${label}`}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/88 text-[#0E2A47] shadow-soft transition hover:bg-white"
              >
                &#8250;
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {images.map((image, index) => (
                  <span
                    key={`${image}-${index}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      index === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/60",
                    )}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="absolute bottom-16 left-1/2 w-40 -translate-x-1/2 text-center">
          <div className="text-[10px] uppercase tracking-[0.34em] text-[#5B6575]">
            Zenthra Pharma
          </div>
          <div className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#0E2A47]">
            {label}
          </div>
          <div className="mt-2 text-xs leading-6 text-[#5B6575]">
            Qualidade, presenca e identidade visual premium.
          </div>
        </div>
      </div>
    </div>
  );
}
