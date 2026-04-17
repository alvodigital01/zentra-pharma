"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { ProductMockup } from "@/components/product-mockup";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createWhatsAppUrl, products } from "@/lib/content";

export function Products() {
  return (
    <section
      id="produtos"
      className="section-divider section-padding relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 light-grid opacity-20" />
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-[#153B63]/[0.05] blur-3xl" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Produtos"
            title={
              <>
                Produtos de qualidade
                <span className="block"> com extrema pureza.</span>
              </>
            }
            description={
              <>
                Qualidade, performance e pureza
                <span className="block sm:inline"> em cada produto.</span>
              </>
            }
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 3).map((product, index) => (
            <Reveal key={product.name} delay={0.08 + index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#D9E1EC] bg-white p-4 shadow-soft"
              >
                <ProductMockup
                  accentClassName={product.accentClassName}
                  images={product.images}
                  label={product.name}
                  clean
                />

                <div className="flex flex-1 flex-col px-2 pb-3 pt-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                    {product.category}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0F1720]">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5B6575]">{product.description}</p>

                  <div className="mt-6 pt-2">
                    <CtaButton
                      href={createWhatsAppUrl(`Olá, tenho interesse no produto ${product.name}.`)}
                      className="w-full justify-center"
                    >
                      Quero esse produto
                    </CtaButton>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
