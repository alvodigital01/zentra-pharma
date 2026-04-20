import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { siteConfig, whatsappUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da Zenthra Pharma.",
};

const highlights = [
  {
    label: "Transparência",
    text: "Tratamos informações pessoais com comunicação clara e objetiva.",
  },
  {
    label: "Segurança",
    text: "Adotamos medidas para proteger dados compartilhados em nossos canais.",
  },
  {
    label: "Controle",
    text: "Você pode solicitar atualização, correção ou exclusão dos seus dados.",
  },
];

const sections = [
  {
    title: "1. Quais dados podem ser coletados",
    content: [
      "Quando você navega pelo site ou entra em contato com a Zenthra Pharma, podemos receber informações como nome, telefone, mensagens enviadas, preferências de atendimento e dados básicos de navegação.",
      "Também podemos utilizar tecnologias de medição de acesso e desempenho, como ferramentas de analytics, para entender visitas, páginas acessadas, tempo de navegação e interações gerais com o site.",
      "Essas informações podem ser fornecidas diretamente por você, especialmente ao falar conosco por WhatsApp ou por outros canais institucionais.",
    ],
  },
  {
    title: "2. Como utilizamos essas informações",
    content: [
      "Os dados são utilizados para responder solicitações, esclarecer dúvidas, conduzir o atendimento, confirmar disponibilidade, organizar pedidos e melhorar a experiência de quem acessa nossos canais.",
      "As informações de navegação e desempenho também podem ser usadas para medir acessos, entender a performance das páginas e orientar melhorias no conteúdo e na comunicação do site.",
      "Também podemos usar essas informações para manter uma comunicação mais coerente com o interesse demonstrado pelo visitante.",
    ],
  },
  {
    title: "3. Compartilhamento de dados",
    content: [
      "A Zenthra Pharma não comercializa dados pessoais.",
      "Quando necessário para a operação do site, dados de navegação podem ser processados por provedores de tecnologia e analytics contratados para mensuração de acesso, segurança e funcionamento da plataforma.",
      "O compartilhamento pode acontecer apenas quando necessário para viabilizar ferramentas de atendimento, operação do site, cumprimento de obrigações legais ou proteção da própria operação.",
    ],
  },
  {
    title: "4. Armazenamento e proteção",
    content: [
      "Adotamos medidas técnicas e organizacionais voltadas à proteção das informações tratadas, buscando reduzir riscos de acesso indevido, uso inadequado, alteração ou perda de dados.",
      "Mesmo com esse cuidado, nenhum ambiente digital é totalmente imune a riscos, por isso mantemos atenção contínua sobre segurança e boas práticas.",
    ],
  },
  {
    title: "5. Direitos do titular",
    content: [
      "Você pode solicitar confirmação sobre o tratamento de dados, atualização de informações, correção de registros, exclusão de dados fornecidos ou esclarecimentos sobre a forma como esses dados são utilizados.",
      "As solicitações podem ser feitas por nossos canais oficiais de contato.",
    ],
  },
  {
    title: "6. Atualizações desta política",
    content: [
      "Esta política pode ser ajustada para refletir mudanças operacionais, legais ou de comunicação institucional.",
      "Sempre que necessário, o conteúdo desta página será atualizado para manter clareza e consistência com a experiência oferecida pela marca.",
    ],
  },
];

export default function PrivacyPage() {
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
                Privacidade
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#0F1720] sm:text-5xl lg:text-[4rem]">
                Cuidado com seus dados em cada ponto de contato.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5B6575] sm:text-lg">
                Esta página explica, de forma clara, como a {siteConfig.name} trata
                informações pessoais durante a navegação, o atendimento e a comunicação com
                nossos canais oficiais.
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
                <div className="mt-5 grid gap-4 max-w-4xl">
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
                  Precisa falar sobre privacidade ou atualização de dados?
                </h2>
                <p className="mt-4 text-base leading-8 text-[#5B6575] sm:text-lg">
                  Se você quiser esclarecer qualquer ponto desta política ou solicitar uma
                  atualização relacionada aos seus dados, entre em contato por nossos canais
                  oficiais.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-pulse button-pulse-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
                >
                  Falar no WhatsApp
                </a>
                <Link
                  href="/termos"
                  className="button-pulse button-pulse-surface inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-[#0E2A47] shadow-soft transition hover:-translate-y-0.5"
                >
                  Ver termos de uso
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
