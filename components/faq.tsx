"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs, whatsappUrl } from "@/lib/content";

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="section-divider section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 light-grid opacity-15" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Tire suas duvidas com rapidez e clareza."
              description="Selecionamos as perguntas mais comuns para facilitar seu primeiro contato com a marca."
            />

            <div className="mt-8 rounded-[32px] border border-[#D9E1EC] bg-[#FAFBFD] p-6 shadow-soft">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                Atendimento direto
              </div>
              <p className="mt-4 text-lg leading-8 text-[#5B6575]">
                Se preferir, fale conosco pelo WhatsApp e receba um atendimento direto,
                atencioso e personalizado.
              </p>
              <div className="mt-6">
                <CtaButton href={whatsappUrl} variant="ghost">
                  Falar no WhatsApp
                </CtaButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              {faqs.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-[28px] border border-[#D9E1EC] bg-[#FAFBFD] shadow-soft"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="pr-4 text-lg font-semibold tracking-[-0.02em] text-[#0F1720]">
                        {item.question}
                      </span>
                      <span className="text-2xl text-[#153B63]">{isOpen ? "-" : "+"}</span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                        >
                          <div className="border-t border-[#D9E1EC] px-6 pb-6 pt-1 text-sm leading-7 text-[#5B6575]">
                            {item.answer}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
