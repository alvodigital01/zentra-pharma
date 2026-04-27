"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  catalogProducts,
  createProductWhatsAppMessage,
  createWhatsAppUrl,
} from "@/lib/content";

export function CatalogSection() {
  return (
    <section
      id="catalogo"
      className="section-divider relative overflow-hidden bg-[#F5F7FB] pb-20 pt-12 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16"
    >
      <div className="absolute inset-0 light-grid opacity-15" />
      <div className="absolute left-[8%] top-24 h-64 w-64 rounded-full bg-white/80 blur-3xl" />
      <div className="absolute right-[10%] top-16 h-64 w-64 rounded-full bg-[#153B63]/[0.06] blur-3xl" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Catálogo"
            title={
              <>
                <span className="block">Condições especiais.</span>
              </>
            }
            description=""
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {catalogProducts.map((product, index) => {
            return (
              <Reveal key={`${product.title}-${product.presentation}`} delay={0.08 + index * 0.03}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-[#D9E1EC] bg-white shadow-soft"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#153B63]/16 to-transparent" />
                  <div className="pointer-events-none absolute -right-10 top-8 h-24 w-24 rounded-full bg-[#153B63]/[0.05] blur-3xl" />

                  <div className="relative aspect-[16/11] overflow-hidden bg-[#ECF2F8]">
                    <Image
                      src={product.image}
                      alt={`${product.title} ${product.presentation}`}
                      fill
                      sizes="(min-width: 1280px) 360px, (min-width: 768px) 46vw, 92vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/10 via-transparent to-white/18" />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#153B63]">
                        Atendimento direto
                      </div>
                      <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#D9E1EC] bg-[#FAFBFD] px-3 py-1.5 text-xs font-medium leading-5 text-[#5B6575]">
                        <span className="relative flex h-2 w-2 items-center justify-center">
                          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#0E2A47]/30" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0E2A47]" />
                        </span>
                        {product.badge ?? product.presentation}
                      </div>
                    </div>

                    <h3 className="mt-3 break-words text-[1.45rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[#0F1720] sm:text-[1.65rem]">
                      {product.title}
                    </h3>

                    <div className="mt-5 rounded-[20px] border border-[#D9E1EC] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)] px-4 py-3 shadow-[0_12px_24px_rgba(15,23,32,0.04)]">
                      <div className="flex items-center gap-2.5">
                        <motion.span
                          animate={{ scale: [1, 1.28, 1], opacity: [0.72, 1, 0.72] }}
                          transition={{
                            duration: 2.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.12,
                          }}
                          className="relative flex h-2.5 w-2.5 items-center justify-center"
                        >
                          <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#153B63]/18" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#153B63]" />
                        </motion.span>
                        <p className="text-sm font-medium leading-6 text-[#5B6575]">
                          preço especial para varejistas
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <CtaButton
                        href={createWhatsAppUrl(
                          createProductWhatsAppMessage(product.title, product.presentation),
                        )}
                        icon="basket"
                        className="w-full justify-center py-3"
                      >
                        Consultar disponibilidade
                      </CtaButton>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
