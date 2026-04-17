"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { CheckBadgeIcon, CompassIcon, PenIcon, TruckIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { howItWorksSteps } from "@/lib/content";

const icons = {
  contact: WhatsAppIcon,
  objective: PenIcon,
  direction: CheckBadgeIcon,
  followup: TruckIcon,
};

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-divider section-padding relative overflow-hidden bg-[#F5F7FB]"
    >
      <div className="absolute inset-0 light-grid opacity-15" />
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[#153B63]/[0.05] blur-3xl" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title="Atendimento direto e rápido."
            description="Do primeiro contato à entrega para todo o Brasil."
            align="center"
          />
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-10 right-10 top-[4.2rem] hidden h-px bg-gradient-to-r from-transparent via-[#D9E1EC] to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-4">
            {howItWorksSteps.map((step, index) => {
              const Icon = icons[step.icon];

              return (
                <Reveal key={step.number} delay={0.08 + index * 0.07}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 240, damping: 24 }}
                    className="relative h-full rounded-[30px] border border-[#D9E1EC] bg-white p-6 shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-xs uppercase tracking-[0.4em] text-[#5B6575]">
                        0{step.number}
                      </div>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D9E1EC] bg-[#FAFBFD] text-[#153B63]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="pt-1 text-2xl font-semibold tracking-[-0.03em] text-[#0F1720]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#5B6575]">{step.description}</p>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
