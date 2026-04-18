import { ArrowUpRightIcon, BasketIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  icon?: "arrow" | "basket";
};

export function CtaButton({
  href,
  children,
  className,
  variant = "primary",
  external,
  icon = "arrow",
}: CtaButtonProps) {
  const shared =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-[#0E2A47] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#123454] hover:shadow-[0_16px_34px_rgba(14,42,71,0.18)]",
    secondary:
      "border border-[#D9E1EC] bg-white text-[#0E2A47] shadow-soft hover:-translate-y-0.5 hover:border-[#C5D0DD] hover:bg-[#F7FAFC] hover:shadow-[0_12px_28px_rgba(15,23,32,0.08)]",
    ghost:
      "border border-[#D9E1EC] bg-[#FAFBFD] text-[#153B63] shadow-soft hover:-translate-y-0.5 hover:border-[#C9D4E0] hover:bg-[#FFFFFF] hover:text-[#0E2A47] hover:shadow-[0_12px_28px_rgba(15,23,32,0.08)]",
  } as const;

  const isExternal = external ?? href.startsWith("http");
  const Icon = icon === "basket" ? BasketIcon : ArrowUpRightIcon;
  const iconClassName =
    icon === "basket"
      ? "h-4 w-4 transition duration-300 group-hover:scale-105"
      : "h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(shared, variants[variant], className)}
    >
      <span>{children}</span>
      <Icon className={iconClassName} />
    </a>
  );
}
