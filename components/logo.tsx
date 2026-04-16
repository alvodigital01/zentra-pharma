import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

function BrandMark({
  light = false,
  fill = false,
}: {
  light?: boolean;
  fill?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl",
        fill ? "h-16 w-16" : "h-12 w-12",
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
      <Image
        src="/logozenthra.PNG"
        alt="Logo Zenthra Pharma"
        fill
        sizes={fill ? "64px" : "48px"}
        className={cn("relative object-contain", fill ? "p-0" : "p-1")}
        priority
      />
    </div>
  );
}

export function Logo({
  light = false,
  compact = false,
  fillMark = false,
}: {
  light?: boolean;
  compact?: boolean;
  fillMark?: boolean;
}) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <BrandMark light={light} fill={fillMark} />
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
