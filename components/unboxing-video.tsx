import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const videoPublicPath = "/videos/entrega-zenthra.mp4";

export function UnboxingVideo() {
  return (
    <section className="section-divider section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 light-grid opacity-15" />
      <div className="absolute right-[10%] top-20 h-64 w-64 rounded-full bg-[#153B63]/[0.05] blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal>
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="Como o produto chega"
                title="Veja de perto como seu pedido chega até você."
                description="Uma apresentação real da abertura do produto, da embalagem e da experiência de entrega para transmitir mais segurança antes do seu pedido."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-[#D9E1EC] bg-[#FAFBFD] p-5 shadow-soft">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                    Embalagem
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#5B6575]">
                    Apresentação organizada e visual alinhado ao padrão da marca.
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#D9E1EC] bg-[#FAFBFD] p-5 shadow-soft">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                    Discrição
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#5B6575]">
                    Um cuidado pensado para passar confiança em cada detalhe.
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#D9E1EC] bg-[#FAFBFD] p-5 shadow-soft">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                    Experiência
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#5B6575]">
                    Mais clareza sobre o que esperar antes de falar no WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto w-full max-w-[42rem]">
              <div className="relative overflow-hidden rounded-[34px] border border-[#D9E1EC] bg-[#F8FAFD] p-4 shadow-medium sm:p-5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#153B63]/18 to-transparent" />
                <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-white/80 blur-3xl" />
                <div className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-[#153B63]/[0.08] blur-3xl" />

                <div className="relative overflow-hidden rounded-[26px] border border-[#D9E1EC] bg-white">
                  <div className="flex aspect-video items-center justify-center bg-[#EAF0F6]">
                    <video
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    >
                      <source src={videoPublicPath} type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
