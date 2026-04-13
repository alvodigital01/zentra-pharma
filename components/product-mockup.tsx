import { cn } from "@/lib/utils";

export function ProductMockup({
  accentClassName,
  label,
}: {
  accentClassName: string;
  label: string;
}) {
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

        <div className="absolute left-1/2 top-24 h-12 w-24 -translate-x-1/2 rounded-full border border-[#D9E1EC] bg-white" />
        <div className="absolute left-1/2 top-32 h-52 w-36 -translate-x-1/2 rounded-[30px] border border-[#D9E1EC] bg-gradient-to-b from-white to-[#F4F7FB] shadow-soft" />
        <div className="absolute left-1/2 top-44 h-20 w-20 -translate-x-1/2 rounded-full bg-[#0E2A47]/[0.05]" />

        <div className="absolute bottom-16 left-1/2 w-40 -translate-x-1/2 text-center">
          <div className="text-[10px] uppercase tracking-[0.34em] text-[#5B6575]">
            Placeholder visual
          </div>
          <div className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#0E2A47]">
            {label}
          </div>
          <div className="mt-2 text-xs leading-6 text-[#5B6575]">
            Estrutura pronta para imagem real do produto.
          </div>
        </div>
      </div>
    </div>
  );
}
