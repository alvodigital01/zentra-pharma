import Link from "next/link";

import { cn } from "@/lib/utils";

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div
      className={cn(
        "relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl",
        light
          ? "bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
          : "bg-gradient-to-br from-[#F8FAFD] to-white shadow-soft",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl",
          light ? "border border-white/12" : "border border-[#D9E1EC]",
        )}
      />
      <svg viewBox="0 0 80 80" className="relative h-10 w-10" aria-hidden="true">
        <defs>
          <linearGradient id="zenthra-logo-gradient" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#1D4E89" />
            <stop offset="100%" stopColor="#0E2A47" />
          </linearGradient>
        </defs>
        <path
          d="M18 19h35c2.9 0 4.3 3.5 2.2 5.5L31.5 48h26c3 0 4.3 3.7 1.9 5.7L49 63H17.5c-2.8 0-4.2-3.4-2.2-5.4L39 34H18.3c-3 0-4.4-3.7-2-5.8L28 19Z"
          fill="url(#zenthra-logo-gradient)"
        />
        <circle cx="53.5" cy="16.5" r="5.3" fill="url(#zenthra-logo-gradient)" />
        <path
          d="M49.5 23.5c3.2 2.4 5 6 5 10.4V44"
          stroke="url(#zenthra-logo-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M42.5 20.5c2 5.1 5.9 9.1 11.1 11.3"
          stroke="url(#zenthra-logo-gradient)"
          strokeWidth="4.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function Logo({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <BrandMark light={light} />
      {!compact ? (
        <div className="leading-none">
          <div
            className={cn(
              "text-lg font-semibold uppercase tracking-[0.16em]",
              light ? "text-white" : "text-[#0F1720]",
            )}
          >
            Zenthra
          </div>
          <div
            className={cn(
              "mt-1 text-[0.68rem] uppercase tracking-[0.5em]",
              light ? "text-white/62" : "text-[#153B63]/62",
            )}
          >
            Pharma
          </div>
        </div>
      ) : null}
    </Link>
  );
}
