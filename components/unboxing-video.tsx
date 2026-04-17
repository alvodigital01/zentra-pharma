import { Container } from "@/components/container";
import { CheckBadgeIcon, PackageIcon, TruckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const videoPublicPath = "/videos/entrega-zenthra.mp4";

const highlights = [
  {
    title: "Embalagem",
    description: "Apresentação organizada e alinhada ao padrão da marca.",
    icon: PackageIcon,
  },
  {
    title: "Segurança",
    description: "Um cuidado pensado para transmitir mais confiança.",
    icon: CheckBadgeIcon,
  },
  {
    title: "Entrega",
    description: "Mais clareza sobre como o pedido chega até você.",
    icon: TruckIcon,
  },
];

export function UnboxingVideo() {
  return (
    <section
      id="entrega"
      className="section-divider section-padding relative overflow-hidden bg-white"
    >
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

              <div className="mt-8 grid gap-3">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-[22px] border border-[#D9E1EC] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)] px-4 py-4 shadow-soft"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D9E1EC] bg-[#FAFBFD] text-[#153B63]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-[#5B6575]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
