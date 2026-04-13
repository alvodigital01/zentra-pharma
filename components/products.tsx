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
      className="section-divider section-padding relative overflow-hidden bg-[#F5F7FB]"
    >
      <div className="absolute inset-0 light-grid opacity-20" />
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-[#153B63]/[0.05] blur-3xl" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Produtos"
            title="Cards desenhados para apresentar produto com clareza, proporcao elegante e aparencia institucional."
            description="A secao prioriza imagem, nome e descricao curta, mantendo uma leitura premium e distante da linguagem de e-commerce."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={0.08 + index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
                className="group relative h-full overflow-hidden rounded-[30px] border border-[#D9E1EC] bg-white p-4 shadow-soft"
              >
                <ProductMockup accentClassName={product.accentClassName} label={product.name} />

                <div className="px-2 pb-3 pt-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#153B63]">
                    {product.category}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0F1720]">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5B6575]">{product.description}</p>

                  <div className="mt-6">
                    <CtaButton
                      href={createWhatsAppUrl(`Ola, quero saber mais sobre ${product.name}.`)}
                      variant="ghost"
                      className="w-full justify-center"
                    >
                      Saiba mais
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
