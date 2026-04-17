import Image from "next/image";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const testimonialSlots = [
  {
    title: "Depoimento 01",
    file: "/depoimentos/depoimento1.PNG",
    image: "/depoimentos/depoimento1.PNG",
    caption: "Cliente mostrando a experiência com o pedido",
  },
  {
    title: "Depoimento 02",
    file: "/depoimentos/whatsapp-02.png",
    caption: "Espaço para mais um print real do WhatsApp",
  },
  {
    title: "Depoimento 03",
    file: "/depoimentos/whatsapp-03.png",
    caption: "Espaço para reforçar confiança com outro depoimento",
  },
];

export function ProductTestimonials() {
  return (
    <section className="section-divider section-padding relative overflow-hidden bg-[#F5F7FB]">
      <div className="absolute inset-0 light-grid opacity-15" />
      <div className="absolute left-[10%] top-20 h-56 w-56 rounded-full bg-[#153B63]/[0.05] blur-3xl" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title="Confiança de quem já pediu."
            description="Depoimentos reais para gerar mais segurança na compra."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonialSlots.map((slot, index) => (
              <div
                key={slot.title}
                className={`group relative overflow-hidden rounded-[32px] border border-[#D9E1EC] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,42,71,0.12)] ${
                  index === 0
                    ? "bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F8FC_100%)] md:col-span-2 xl:col-span-1"
                    : "bg-[linear-gradient(180deg,#FCFDFE_0%,#F7FAFD_100%)]"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#153B63]/16 to-transparent" />
                <div className="absolute -right-6 top-6 h-28 w-28 rounded-full bg-[#153B63]/[0.05] blur-3xl" />
                <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-white/80 blur-3xl" />

                <div className="relative p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                        {slot.title}
                      </div>
                      <div className="mt-3 max-w-[16rem] text-sm leading-7 text-[#5B6575]">
                        {slot.caption}
                      </div>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9E1EC] bg-white/90 text-[#153B63] shadow-[0_8px_18px_rgba(15,23,32,0.06)]">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="mx-auto max-w-[20rem] rounded-[30px] border border-[#D9E1EC] bg-[#E9F0F7] p-2 shadow-[0_22px_50px_rgba(15,23,32,0.10)]">
                    <div className="overflow-hidden rounded-[24px] border border-[#D9E1EC] bg-white">
                      <div className="flex items-center gap-2 border-b border-[#E5EBF2] bg-[#F8FBFE] px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E1EC]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E1EC]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E1EC]" />
                        <div className="ml-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#153B63]">
                          WhatsApp
                        </div>
                      </div>

                      {slot.image ? (
                        <div className="relative aspect-[9/16] w-full bg-[#EEF3F8]">
                          <Image
                            src={slot.image}
                            alt={slot.title}
                            fill
                            sizes="(min-width: 1280px) 300px, (min-width: 768px) 42vw, 92vw"
                            unoptimized
                            className="object-contain object-top"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[9/16] items-center justify-center bg-[linear-gradient(180deg,#FDFEFF_0%,#F1F6FB_100%)] p-6 text-center">
                          <div className="max-w-[14rem]">
                            <div className="text-base font-semibold tracking-[-0.02em] text-[#0F1720]">
                              Reserve este espaço para um print real
                            </div>
                            <p className="mt-3 text-sm leading-7 text-[#5B6575]">
                              Use o arquivo <strong>{slot.file}</strong>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
