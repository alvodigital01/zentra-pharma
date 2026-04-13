import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso da Zenthra Pharma.",
};

const sections = [
  {
    title: "Objetivo do site",
    content:
      "Este ambiente apresenta a marca, o posicionamento institucional, linhas de performance e formas de contato da Zenthra Pharma. O conteúdo tem caráter informativo e comercial.",
  },
  {
    title: "Uso adequado",
    content:
      "Ao navegar pelo site, o usuário concorda em utilizar o conteúdo de maneira lícita, sem comprometer a integridade da plataforma, dos canais de contato ou da experiência de outros visitantes.",
  },
  {
    title: "Propriedade intelectual",
    content:
      "Elementos visuais, textos, identidade da marca e materiais institucionais pertencem à Zenthra Pharma e não podem ser reproduzidos sem autorização prévia.",
  },
  {
    title: "Limitações",
    content:
      "As informações podem ser atualizadas sem aviso prévio. O uso do site não substitui orientação especializada, análise individual ou confirmação de disponibilidade por nossos canais oficiais.",
  },
  {
    title: "Contato",
    content:
      "Questões sobre estes termos podem ser direcionadas ao nosso canal institucional pelo e-mail e WhatsApp informados no rodapé.",
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="overflow-x-clip bg-[#F5F7FB] pt-32">
        <section className="relative overflow-hidden border-b border-[#D9E1EC] bg-white pb-16 pt-8">
          <div className="absolute inset-0 light-grid opacity-20" />
          <Container className="relative">
            <span className="inline-flex rounded-full border border-[#D9E1EC] bg-[#FAFBFD] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#153B63]">
              Termos
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-[#0F1720] sm:text-5xl">
              Diretrizes claras para uma experiencia segura e consistente.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5B6575] sm:text-lg">
              Estes termos organizam a relação entre o visitante e a {siteConfig.name},
              reforçando transparência, posicionamento premium e uso responsável do site.
            </p>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[28px] border border-[#D9E1EC] bg-white p-7 shadow-soft"
              >
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#0F1720]">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#5B6575]">
                  {section.content}
                </p>
              </article>
            ))}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
