import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <span
        className={cn(
          "inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em]",
          inverse
            ? "border-white/12 bg-white/8 text-white/72"
            : "border-[#D9E1EC] bg-white text-[#153B63]",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.8rem]",
          inverse ? "text-white" : "text-[#0F1720]",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-base leading-8 sm:text-lg",
          inverse ? "text-white/70" : "text-[#5B6575]",
        )}
      >
        {description}
      </p>
    </div>
  );
}
