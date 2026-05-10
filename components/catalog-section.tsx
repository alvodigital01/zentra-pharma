"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import {
  catalogProducts,
  createProductWhatsAppMessage,
  createWhatsAppUrl,
  extractDosage,
  whatsappUrl,
} from "@/lib/content";

const productTabs = [
  "Tizerpatida",
  "Retatrutida",
  "Glow Blend",
] as const;

type ProductTab = (typeof productTabs)[number];

function getProductFamily(title: string): ProductTab {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("tizerpatida") || normalizedTitle.includes("tirzec")) {
    return "Tizerpatida";
  }

  if (normalizedTitle.includes("retatrutida")) {
    return "Retatrutida";
  }

  if (normalizedTitle.includes("glow")) {
    return "Glow Blend";
  }

  return "Tizerpatida";
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);
}

function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function sectionId(tab: ProductTab) {
  return `catalogo-${tab.toLowerCase().replace(/\s+/g, "-")}`;
}

function isVisibleProduct(title: string) {
  return normalizeSearch(title) !== "retatrutida nexus";
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="m21 21-4.3-4.3" />
      <circle cx="11" cy="11" r="7" />
    </svg>
  );
}

export function CatalogSection() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearch(query.trim());

  const groupedProducts = useMemo(() => {
    return productTabs
      .map((tab) => {
        const products = catalogProducts.filter((product) => {
          if (!isVisibleProduct(product.title)) {
            return false;
          }

          const belongsToTab = getProductFamily(product.title) === tab;
          const searchableContent = normalizeSearch(
            `${product.title} ${product.presentation} ${product.badge ?? ""}`,
          );

          return belongsToTab && (!normalizedQuery || searchableContent.includes(normalizedQuery));
        });

        return { tab, products };
      })
      .filter((group) => group.products.length > 0);
  }, [normalizedQuery]);

  function handleTabClick(tab: ProductTab) {
    document.getElementById(sectionId(tab))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section id="catalogo" className="relative bg-[#F8F9FB] pb-16 sm:pb-20 lg:pb-24">
      <div className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/96 shadow-[0_10px_30px_rgba(15,23,32,0.05)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1820px] flex-col gap-4 px-3 py-3 sm:px-6 sm:py-5 lg:px-8">
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[280px_minmax(280px,780px)_280px] lg:gap-4">
            <div className="flex justify-start">
              <Logo />
            </div>

            <label className="relative order-3 col-span-2 block lg:order-none lg:col-span-1">
              <span className="sr-only">Buscar produtos</span>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8491] sm:left-5 sm:h-5 sm:w-5" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar produtos..."
                className="h-12 w-full rounded-full border border-[#C9D2DE] bg-white px-10 text-sm text-[#111827] outline-none transition placeholder:text-[#8A94A3] focus:border-[#153B63] focus:ring-4 focus:ring-[#153B63]/10 sm:h-14 sm:px-12 sm:text-base"
              />
            </label>

            <div className="flex justify-end gap-2 sm:gap-3 lg:justify-end">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0E2A47] text-white shadow-[0_12px_24px_rgba(14,42,71,0.18)] transition hover:-translate-y-0.5 hover:bg-[#153B63] sm:h-12 sm:w-12"
                aria-label="Buscar"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0E2A47] text-white shadow-[0_12px_24px_rgba(14,42,71,0.18)] transition hover:-translate-y-0.5 hover:bg-[#153B63] sm:h-12 sm:w-12"
                aria-label="Falar no WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="-mx-3 overflow-x-auto px-3 pb-1 [scrollbar-color:#8A8D91_transparent] [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="flex min-w-max items-center gap-2 sm:gap-3">
              {productTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabClick(tab)}
                  className="h-10 rounded-full bg-[#F2F3F5] px-4 text-sm font-medium text-[#4B5563] transition hover:bg-[#0E2A47] hover:text-white sm:h-11 sm:px-6 sm:text-base"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="catalogo-lista" className="mx-auto w-full max-w-[1820px] px-3 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        {groupedProducts.length ? (
          <div className="space-y-10">
            {groupedProducts.map((group) => (
              <section
                key={group.tab}
                id={sectionId(group.tab)}
                className="scroll-mt-[178px] border-t border-[#E8ECF1] pt-7 first:border-t-0 first:pt-0 sm:scroll-mt-[190px]"
              >
                <Reveal>
                  <div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#667085]">
                        Catálogo
                      </span>
                      <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:mt-2 sm:text-3xl">
                        {group.tab}
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {group.products.map((product, index) => {
                    const details = product.badge ?? product.presentation;

                    return (
                      <Reveal
                        key={`${product.title}-${product.presentation}`}
                        delay={0.05 + index * 0.02}
                      >
                        <motion.a
                          href={createWhatsAppUrl(
                            createProductWhatsAppMessage(product.title, extractDosage(product.presentation)),
                          )}
                          whileHover={{ y: -6 }}
                          transition={{ type: "spring", stiffness: 240, damping: 24 }}
                          className="group flex h-full flex-col rounded-[14px] border border-[#EEF0F3] bg-white p-3 text-left shadow-[0_10px_26px_rgba(15,23,32,0.06)] transition hover:border-[#DDE2E8] hover:shadow-[0_16px_34px_rgba(15,23,32,0.1)] sm:p-5"
                        >
                          <div className="grid min-h-[142px] flex-1 grid-cols-[minmax(0,1fr)_82px] gap-3 sm:min-h-[190px] sm:grid-cols-[minmax(0,1fr)_112px] sm:gap-4">
                            <div className="flex min-w-0 flex-col">
                              <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-[#111827] sm:text-xl">
                                {product.title}
                              </h3>
                              <p className="mt-1 max-w-[17rem] overflow-hidden text-sm leading-5 text-[#4B5563] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:mt-3 sm:text-base sm:leading-6 sm:[-webkit-line-clamp:3]">
                                {details}
                              </p>
                              <div className="mt-auto pt-2 sm:pt-4">
                                <div className="text-lg font-bold tracking-[-0.03em] text-black sm:text-2xl">
                                  {formatPrice(product.pixPrice)}
                                </div>
                                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#667085] sm:text-sm">
                                  PIX
                                </div>
                                <div className="mt-2 whitespace-nowrap border-t border-[#E6E8EC] pt-2 text-xs font-semibold leading-tight text-[#0E2A47] sm:text-base">
                                  {formatPrice(product.cardPrice)} em até 5x
                                </div>
                              </div>
                            </div>

                            <div className="flex h-[82px] items-center justify-center self-center overflow-hidden rounded-[14px] border border-[#E6E8EC] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)] sm:h-[112px] sm:self-start sm:bg-[#FAFAFB]">
                              <div className="relative h-full w-full">
                                <Image
                                  src={product.image}
                                  alt={`${product.title} ${product.presentation}`}
                                  fill
                                  sizes="(min-width: 640px) 112px, 82px"
                                  className="object-cover transition duration-500 group-hover:scale-[1.05]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex mt-3 justify-center border-t border-[#E6E8EC] pt-3">
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/12 px-3 py-1.5 text-xs font-semibold text-[#1a9e4f] transition-colors duration-200 group-hover:bg-[#25D366]/20">
                              <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                              Comprar via WhatsApp
                            </div>
                          </div>
                        </motion.a>
                      </Reveal>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="rounded-[14px] border border-[#E5E7EB] bg-white px-6 py-12 text-center shadow-[0_10px_26px_rgba(15,23,32,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#111827]">
              Nenhum produto encontrado
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#667085]">
              Tente buscar por nome, apresentação ou linha do produto.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
