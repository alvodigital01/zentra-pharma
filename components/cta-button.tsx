import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function CtaButton({
  href,
  children,
  className,
  variant = "primary",
  external,
}: CtaButtonProps) {
  const shared =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition duration-300";

  const variants = {
    primary:
      "bg-[#0E2A47] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#153B63] hover:shadow-medium",
    secondary:
      "border border-[#D9E1EC] bg-white text-[#0E2A47] shadow-soft hover:-translate-y-0.5 hover:border-[#0E2A47]/18 hover:shadow-soft",
    ghost:
      "border border-[#D9E1EC] bg-[#FAFBFD] text-[#153B63] hover:-translate-y-0.5 hover:border-[#153B63]/18 hover:bg-white hover:shadow-soft",
  } as const;

  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(shared, variants[variant], className)}
    >
      <span>{children}</span>
      <ArrowUpRightIcon className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
