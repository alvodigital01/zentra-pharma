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

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function formatPrice(value: number) {
  return currencyFormatter.format(value);
}

export function CatalogSection() {
  return (
    <section
      id="catalogo"
      className="section-divider section-padding relative overflow-hidden bg-[#F5F7FB]"
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
            const savings = product.cardPrice - product.pixPrice;

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

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <div className="rounded-[24px] border border-[#0E2A47]/10 bg-[linear-gradient(180deg,#0E2238_0%,#173A61_100%)] px-4 py-4 text-white shadow-[0_18px_30px_rgba(14,42,71,0.16)]">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/72">
                          Pix
                        </div>
                        <div className="mt-2 text-[1.9rem] font-semibold leading-none tracking-[-0.055em] sm:text-[2.1rem]">
                          {formatPrice(product.pixPrice)}
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-[#D9E1EC] bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FBFE_100%)] px-4 py-4">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#153B63]">
                          Cartão até 5x
                        </div>
                        <div className="mt-2 text-[1.7rem] font-semibold leading-none tracking-[-0.05em] text-[#0F1720] sm:text-[1.85rem]">
                          {formatPrice(product.cardPrice)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 rounded-full border border-[#D9E1EC] bg-[#FAFBFD] px-4 py-2.5 text-sm text-[#5B6575]">
                      Economize <span className="font-semibold text-[#0F1720]">{formatPrice(savings)}</span> no Pix
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
