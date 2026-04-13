import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da Zenthra Pharma.",
};

const sections = [
  {
    title: "Coleta de informações",
    content:
      "Ao entrar em contato conosco por WhatsApp, formulários ou canais institucionais, poderemos coletar dados de identificação, contato e preferências para dar continuidade ao atendimento.",
  },
  {
    title: "Uso dos dados",
    content:
      "As informações são utilizadas para responder solicitações, personalizar o contato, melhorar a experiência de navegação e manter a comunicação alinhada ao interesse demonstrado pelo usuário.",
  },
  {
    title: "Compartilhamento",
    content:
      "A Zenthra Pharma não comercializa dados pessoais. O compartilhamento ocorre apenas quando necessário para a operação do serviço, cumprimento legal ou uso de ferramentas essenciais à comunicação.",
  },
  {
    title: "Segurança",
    content:
      "Adotamos medidas técnicas e organizacionais para reduzir riscos de acesso indevido, perda ou uso inadequado das informações armazenadas.",
  },
  {
    title: "Direitos do titular",
    content:
      "O titular pode solicitar atualização, correção ou exclusão dos dados fornecidos, além de esclarecimentos sobre tratamento e armazenamento, por meio do nosso canal oficial de contato.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="overflow-x-clip bg-[#F5F7FB] pt-32">
        <section className="relative overflow-hidden border-b border-[#D9E1EC] bg-white pb-16 pt-8">
          <div className="absolute inset-0 light-grid opacity-20" />
          <Container className="relative">
            <span className="inline-flex rounded-full border border-[#D9E1EC] bg-[#FAFBFD] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#153B63]">
              Privacidade
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-[#0F1720] sm:text-5xl">
              Transparencia e cuidado em cada ponto de contato.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5B6575] sm:text-lg">
              Esta política descreve, de forma objetiva, como a {siteConfig.name} trata
              dados pessoais durante a navegação e o atendimento.
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
