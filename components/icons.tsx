import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

function SvgWrapper({
  className,
  children,
  viewBox = "0 0 24 24",
}: {
  className?: string;
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </SvgWrapper>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 6.8c0-1 1.1-1.6 2-.9l8.2 5.2c.8.5.8 1.7 0 2.2L10 18.5c-.9.6-2-.1-2-1V6.8Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.2a9.8 9.8 0 0 0-8.36 14.91L2.2 21.8l4.82-1.39A9.8 9.8 0 1 0 12 2.2Zm0 17.82a8.02 8.02 0 0 1-4.08-1.12l-.29-.17-2.86.82.83-2.79-.19-.29A8.03 8.03 0 1 1 12 20.02Zm4.41-5.98c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </SvgWrapper>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </SvgWrapper>
  );
}

export function ScaleIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M12 5v13" />
      <path d="M7 8h10" />
      <path d="M5 8 2.5 13a3 3 0 0 0 5 0L5 8Z" />
      <path d="M19 8 16.5 13a3 3 0 0 0 5 0L19 8Z" />
      <path d="M8 19h8" />
    </SvgWrapper>
  );
}

export function PulseIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M3 12h4l2.2-4 3.6 8 2.4-4H21" />
      <path d="M12 21c-4.4-2.6-7.5-6-7.5-10A4.5 4.5 0 0 1 12 7.2 4.5 4.5 0 0 1 19.5 11c0 4-3.1 7.4-7.5 10Z" />
    </SvgWrapper>
  );
}

export function CompositionIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3.5v3" />
      <path d="M12 17.5v3" />
      <path d="m4.9 6 2.1 2" />
      <path d="m17 18 2.1 2" />
      <path d="M3.5 12h3" />
      <path d="M17.5 12h3" />
      <path d="m4.9 18 2.1-2" />
      <path d="m17 6 2.1-2" />
    </SvgWrapper>
  );
}

export function RoutineIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M12 4v4" />
      <path d="M12 16v4" />
      <path d="m6 6 2.8 2.8" />
      <path d="m15.2 15.2 2.8 2.8" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="m6 18 2.8-2.8" />
      <path d="M15.2 8.8 18 6" />
      <circle cx="12" cy="12" r="3.5" />
    </SvgWrapper>
  );
}

export function ContactIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M7 4h10a2 2 0 0 1 2 2v12l-3-2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </SvgWrapper>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2v2.5" />
      <path d="M22 12h-2.5" />
      <path d="M12 22v-2.5" />
      <path d="M2 12h2.5" />
    </SvgWrapper>
  );
}

export function PenIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="m4 20 4.2-1 9-9a2.1 2.1 0 0 0-3-3l-9 9L4 20Z" />
      <path d="m12.8 6.2 3 3" />
      <path d="M4 20h4.5" />
    </SvgWrapper>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-2.2 5.6-3.4 1.4 2.2-5.6 3.4-1.4Z" />
    </SvgWrapper>
  );
}

export function CheckBadgeIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M12 3.8 14.5 5l2.8-.2 1.1 2.6 2 2-.9 2.7.4 2.8-2.3 1.7-1.3 2.5-2.8-.4L12 20.2l-2.5-1.2-2.8.4-1.3-2.5-2.3-1.7.4-2.8-.9-2.7 2-2L6.7 4.8 9.5 5 12 3.8Z" />
      <path d="m8.7 12.2 2.1 2.1 4.6-4.8" />
    </SvgWrapper>
  );
}

export function OrbitIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M6 12c0-4.4 2.7-8 6-8s6 3.6 6 8-2.7 8-6 8-6-3.6-6-8Z" />
      <path d="M4.8 9c3.7-2.3 8.2-2.2 10.1.8 1.8 2.9-.2 7.1-3.9 9.3" />
    </SvgWrapper>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M3 7.5h10.5v8H3z" />
      <path d="M13.5 10h3.2l2.3 2.6v2.9h-5.5" />
      <path d="M7 18.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />
      <path d="M16.5 18.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />
      <path d="M8.8 18.5h5.9" />
    </SvgWrapper>
  );
}

export function PackageIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="m12 3 7 3.8v9L12 20l-7-4.2v-9L12 3Z" />
      <path d="m5.2 7 6.8 4 6.8-4" />
      <path d="M12 11v9" />
    </SvgWrapper>
  );
}

export function PersonalizedIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M17 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-1A4.5 4.5 0 0 0 7 18.5V20" />
      <circle cx="12" cy="8" r="3" />
      <path d="m18 7 1.2 1.2L22 5.5" />
    </SvgWrapper>
  );
}

export function DiscretionIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M12 3 5 6v5c0 4.3 2.9 8.2 7 9.3 4.1-1.1 7-5 7-9.3V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.4" />
    </SvgWrapper>
  );
}

export function LabIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M9 3v5l-4.5 7.8A2 2 0 0 0 6.2 19h11.6a2 2 0 0 0 1.7-3.2L15 8V3" />
      <path d="M8 13h8" />
      <path d="M9 3h6" />
    </SvgWrapper>
  );
}

export function PremiumIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M12 3 14.7 8.6 21 9.4l-4.6 4 1.4 6.1L12 16.4 6.2 19.5l1.4-6.1-4.6-4 6.3-.8L12 3Z" />
    </SvgWrapper>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M6 6h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      <path d="M8 11h8" />
      <path d="M8 14h5" />
    </SvgWrapper>
  );
}

export function FlowIcon({ className }: IconProps) {
  return (
    <SvgWrapper className={className}>
      <path d="M4 8h7" />
      <path d="m8 4 4 4-4 4" />
      <path d="M20 16h-7" />
      <path d="m16 20-4-4 4-4" />
    </SvgWrapper>
  );
}
