import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { siteConfig, whatsappUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso da Zenthra Pharma.",
};

const highlights = [
  {
    label: "Clareza",
    text: "Regras apresentadas de forma objetiva para uma navegação segura.",
  },
  {
    label: "Uso responsável",
    text: "O conteúdo do site deve ser utilizado de maneira lícita e adequada.",
  },
  {
    label: "Proteção da marca",
    text: "Identidade, textos e materiais institucionais não podem ser reproduzidos sem autorização.",
  },
];

const sections = [
  {
    title: "1. Finalidade deste site",
    content: [
      `Este ambiente apresenta a marca ${siteConfig.name}, seus canais de contato, produtos, posicionamento institucional e informações de apoio ao atendimento.`,
      "Todo o conteúdo disponibilizado possui caráter institucional, comercial e informativo.",
    ],
  },
  {
    title: "2. Uso adequado da plataforma",
    content: [
      "Ao acessar este site, o visitante concorda em utilizá-lo de forma lícita, respeitosa e compatível com a finalidade da plataforma.",
      "Não é permitido praticar ações que prejudiquem a integridade do site, interfiram nos canais de contato ou comprometam a experiência de outros usuários.",
    ],
  },
  {
    title: "3. Conteúdo e disponibilidade",
    content: [
      "As informações exibidas podem ser atualizadas, ajustadas ou removidas a qualquer momento, sem necessidade de aviso prévio.",
      "Disponibilidade de produtos, condições de atendimento e detalhes operacionais devem sempre ser confirmados por nossos canais oficiais.",
    ],
  },
  {
    title: "4. Propriedade intelectual",
    content: [
      "Elementos visuais, identidade da marca, textos, layout, imagens e materiais institucionais pertencem à Zenthra Pharma ou são utilizados com autorização.",
      "Nenhuma reprodução, redistribuição ou uso indevido desses materiais é permitida sem autorização prévia.",
    ],
  },
  {
    title: "5. Limitações e responsabilidade",
    content: [
      "O conteúdo do site não substitui análise individual, orientação especializada ou confirmação direta por nossos canais de atendimento.",
      "A navegação no site não cria garantia automática de disponibilidade, condição comercial ou atendimento sem validação prévia.",
    ],
  },
  {
    title: "6. Atualizações destes termos",
    content: [
      "Os termos podem ser modificados para refletir mudanças operacionais, institucionais, técnicas ou legais.",
      "Sempre que necessário, esta página será atualizada para manter clareza e consistência com a experiência oferecida pela marca.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="overflow-x-clip bg-[#F5F7FB] pt-32">
        <section className="relative overflow-hidden border-b border-[#D9E1EC] bg-white pb-24 pt-8">
          <div className="absolute inset-0 light-grid opacity-20" />
          <div className="absolute left-[10%] top-16 h-40 w-40 rounded-full bg-[#153B63]/[0.05] blur-3xl" />
          <div className="absolute right-[8%] top-10 h-48 w-48 rounded-full bg-[#153B63]/[0.04] blur-3xl" />

          <Container className="relative">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#D9E1EC] bg-[#FAFBFD] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                Termos de uso
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#0F1720] sm:text-5xl lg:text-[4rem]">
                Diretrizes claras para uma experiência segura e consistente.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5B6575] sm:text-lg">
                Estes termos organizam a relação entre o visitante e a {siteConfig.name},
                reforçando transparência, uso responsável e coerência com a proposta
                institucional da marca.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[26px] border border-[#D9E1EC] bg-[#FAFBFD] p-6 shadow-soft"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                    {item.label}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#5B6575]">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[30px] border border-[#D9E1EC] bg-white p-7 shadow-soft sm:p-8"
              >
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#0F1720] sm:text-[1.85rem]">
                  {section.title}
                </h2>
                <div className="mt-5 grid max-w-4xl gap-4">
                  {section.content.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[#5B6575]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <div className="rounded-[32px] border border-[#D9E1EC] bg-white p-8 shadow-soft sm:p-10">
              <div className="max-w-3xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                  Canal oficial
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0F1720] sm:text-4xl">
                  Precisa esclarecer alguma condição de uso?
                </h2>
                <p className="mt-4 text-base leading-8 text-[#5B6575] sm:text-lg">
                  Se você quiser tirar dúvidas sobre estes termos, disponibilidade de
                  informações ou canais oficiais da marca, fale conosco diretamente.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#0E2A47] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#123454]"
                >
                  Falar no WhatsApp
                </a>
                <Link
                  href="/politica-de-privacidade"
                  className="inline-flex items-center justify-center rounded-full border border-[#D9E1EC] bg-[#FAFBFD] px-6 py-3.5 text-sm font-semibold text-[#0E2A47] shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Ver política de privacidade
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
