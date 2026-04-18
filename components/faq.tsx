"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/content";

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="section-divider section-padding relative overflow-hidden bg-[#F5F7FB]"
    >
      <div className="absolute inset-0 light-grid opacity-15" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#153B63]/[0.04] blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Dúvidas frequentes."
              description=""
              align="center"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 space-y-4">
              {faqs.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={item.question}
                    className={`overflow-hidden rounded-[30px] border bg-white shadow-soft transition-all duration-300 ${
                      isOpen
                        ? "border-[#153B63]/18 shadow-[0_24px_54px_rgba(14,42,71,0.12)]"
                        : "border-[#D9E1EC] hover:border-[#153B63]/16 hover:shadow-[0_22px_48px_rgba(14,42,71,0.10)]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                    >
                      <span className="pr-4 text-[1.15rem] font-semibold leading-8 tracking-[-0.02em] text-[#0F1720]">
                        {item.question}
                      </span>
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-[#153B63] transition-all duration-300 ${
                          isOpen
                            ? "border-[#153B63]/18 bg-[#F5F7FB] rotate-45"
                            : "border-[#D9E1EC] bg-[#FAFBFD]"
                        }`}
                      >
                        <span className="text-2xl leading-none">+</span>
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`border-t border-[#D9E1EC] px-7 text-base leading-8 text-[#5B6575] transition-all duration-300 ${
                            isOpen ? "pb-7 pt-4 opacity-100" : "pb-0 pt-0 opacity-0"
                          }`}
                        >
                          {item.answer}
                        </div>
                      </div>
                    </div>
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
