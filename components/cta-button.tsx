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
    "button-pulse group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "button-pulse-primary text-white shadow-soft hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(14,42,71,0.28)]",
    secondary:
      "button-pulse-surface text-[#0E2A47] shadow-soft hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(14,42,71,0.16)]",
    ghost:
      "button-pulse-surface text-[#153B63] shadow-soft hover:-translate-y-0.5 hover:text-[#0E2A47] hover:shadow-[0_16px_30px_rgba(14,42,71,0.16)]",
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
