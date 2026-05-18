"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import {
  catalogProducts,
  createProductWhatsAppMessage,
  createWhatsAppUrl,
  extractDosage,
  navLinks,
  productSectionDetails,
  whatsappUrl,
} from "@/lib/content";

const productTabs = [
  "Tizerpatida",
  "Retatrutida",
  "Glow Blend",
  "GHK-Cu",
  "Semax",
  "Klow",
  "Tesamorelin",
  "MOSTc",
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

type CatalogProduct = (typeof catalogProducts)[number];

function isProductTab(value: string): value is ProductTab {
  return productTabs.some((tab) => tab === value);
}

function getProductSection(product: CatalogProduct): ProductTab {
  return product.section && isProductTab(product.section)
    ? product.section
    : getProductFamily(product.title);
}

function getUnitsLabel(product: CatalogProduct) {
  return product.units ?? "Ampola única";
}

function getUnitsBadgeClassName(units: string) {
  return units.toLowerCase().includes("4 ampolas")
    ? "bg-[#EEF2FF] text-[#4F46E5]"
    : "bg-[#ECFDF3] text-[#16803D]";
}

function splitProductTitle(title: string) {
  const match = title.match(/^([A-Za-zÀ-ÿ]+)\s+(.+)$/);

  if (!match) {
    return { family: title };
  }

  return {
    family: match[1],
    name: match[2],
  };
}

function getProductBrand(product: CatalogProduct) {
  const titleSplit = splitProductTitle(product.title);

  return titleSplit.name ?? titleSplit.family ?? product.family ?? product.title;
}

function getProductDose(product: CatalogProduct) {
  return extractDosage(product.presentation) ?? product.presentation;
}

function AmpouleIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} shrink-0`} aria-hidden="true">
      <path d="M9 2h6" />
      <path d="M10 2v5l-3 4v8a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-8l-3-4V2" />
      <path d="M8 13h8" />
    </svg>
  );
}

function UnitsIcon({ units }: { units: string }) {
  const normalizedUnits = units.toLowerCase();

  if (normalizedUnits.includes("caneta")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 shrink-0" aria-hidden="true">
        <path d="M16 3l5 5L8 21H3v-5L16 3z" />
        <path d="M14 5l5 5" />
      </svg>
    );
  }

  if (normalizedUnits.includes("ampola unica") || normalizedUnits.includes("ampola única")) {
    return <AmpouleIcon />;
  }

  if (normalizedUnits.includes("4 ampolas")) {
    return (
      <span className="flex items-center -space-x-1" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, index) => (
          <AmpouleIcon key={index} className="h-3 w-3" />
        ))}
      </span>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 shrink-0" aria-hidden="true"><path d="M5 8h14M5 8a2 2 0 1 0 0-4h-.5M5 8l-.5 12h15L19 8M19 8a2 2 0 1 0 0-4h-.5M9 12v4m6-4v4" /></svg>
  );
}

function ProductGrid({ products, indexOffset }: { products: readonly CatalogProduct[]; indexOffset: number }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = products.map((p) => ({ src: p.image, alt: `${p.title} ${p.presentation}` }));
  const hasBenefitText = products.some((product) => product.benefit);

  return (
    <>
      <div
        className={`mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-5 ${
          hasBenefitText
            ? "lg:grid-cols-2 2xl:grid-cols-3"
            : "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        }`}
      >
        {products.map((product, index) => {
          const details = product.badge ?? product.presentation;
          const installments = product.cardInstallments ?? 5;
          const cardPaymentLabel = product.cardInstallmentPrice
            ? `${installments}x de ${formatPrice(product.cardInstallmentPrice)}`
            : `${formatPrice(product.cardPrice)} em até ${installments}x`;
          const units = getUnitsLabel(product);
          const titleSplit = splitProductTitle(product.title);
          const familyLabel = titleSplit.name ? titleSplit.family : product.family;
          const brandName = titleSplit.name ?? titleSplit.family;

          return (
            <Reveal
              key={`${product.title}-${product.presentation}`}
              delay={0.05 + (indexOffset + index) * 0.02}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
                className="flex h-full flex-col rounded-[14px] border border-[#EEF0F3] bg-white p-3 text-left shadow-[0_10px_26px_rgba(15,23,32,0.06)] transition hover:border-[#DDE2E8] hover:shadow-[0_16px_34px_rgba(15,23,32,0.1)] sm:p-5"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_82px] gap-3 sm:grid-cols-[minmax(0,1fr)_112px] sm:gap-4">
                  <div className="flex min-w-0 flex-col">
                    <h3 className="leading-snug">
                      {familyLabel ? (
                        <>
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9BA8B5]">
                            {familyLabel}
                          </span>
                          <span className="block text-lg font-bold tracking-[-0.03em] text-[#111827] sm:text-[22px]">
                            {brandName}
                          </span>
                        </>
                      ) : (
                        <span className="block text-lg font-bold tracking-[-0.03em] text-[#111827] sm:text-[22px]">
                          {brandName}
                        </span>
                      )}
                    </h3>
                    {units && (
                      <span className={`mt-1.5 inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${getUnitsBadgeClassName(units)}`}>
                        <UnitsIcon units={units} />
                        {units}
                      </span>
                    )}
                    <p className="mt-1 max-w-[17rem] text-sm font-semibold leading-5 text-[#334155] sm:mt-3 sm:text-base sm:leading-6 lg:max-w-none">
                      {details}
                    </p>
                    {product.benefit ? (
                      <p className="mt-2 max-w-[18rem] text-xs leading-5 text-[#5B6575] sm:text-sm sm:leading-6 lg:max-w-none">
                        {product.benefit}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Ver imagem de ${product.title}`}
                    className="group/img relative flex h-[82px] cursor-zoom-in items-center justify-center self-center overflow-hidden rounded-[14px] border border-[#E6E8EC] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)] sm:h-[112px] sm:self-start sm:bg-[#FAFAFB]"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={product.image}
                        alt={`${product.title} ${product.presentation}`}
                        fill
                        sizes="(min-width: 640px) 112px, 82px"
                        className="object-cover transition duration-500 group-hover/img:scale-[1.07]"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center rounded-[14px] bg-black/0 transition duration-200 group-hover/img:bg-black/10">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 opacity-0 drop-shadow-md transition duration-200 group-hover/img:opacity-100" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </button>
                </div>

                <div className="mt-3 w-full pt-1 text-center sm:mt-4">
                  <div className="inline-flex items-center justify-center gap-2 text-lg font-bold tracking-[-0.03em] text-black sm:text-2xl">
                    <PixIcon className="h-5 w-5 text-[#4DB6AC] sm:h-6 sm:w-6" />
                    {formatPrice(product.pixPrice)}
                  </div>
                  <div className="mx-auto mt-2 w-fit whitespace-nowrap rounded-full bg-[#F4F7FB] px-3 py-1.5 text-xs font-semibold leading-tight text-[#0E2A47] sm:text-base">
                    {cardPaymentLabel}
                  </div>
                </div>

                <div className="mt-3 flex justify-center border-t border-[#E6E8EC] pt-3">
                  <a
                    href={createWhatsAppUrl(
                      createProductWhatsAppMessage(product.title, extractDosage(product.presentation)),
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/12 px-3 py-1.5 text-xs font-semibold text-[#1a9e4f] transition-colors duration-200 hover:bg-[#25D366]/25"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                    Comprar via WhatsApp
                  </a>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 4, scrollToZoom: true }}
        styles={{ root: { "--yarl__color_backdrop": "rgba(0,0,0,0.88)" } }}
      />
    </>
  );
}

function ProductSectionDetail({ tab }: { tab: ProductTab }) {
  const details = productSectionDetails[tab];

  if (!details) {
    return null;
  }

  return (
    <Reveal>
      <div className="mt-6 rounded-[14px] border border-[#E6E8EC] bg-white p-5 shadow-[0_10px_26px_rgba(15,23,32,0.05)] sm:mt-8 sm:p-7 lg:p-8">
        <div className="max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#667085]">
            Detalhes do peptídeo
          </span>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-2xl">
            {details.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#5B6575] sm:text-base sm:leading-8">
            {details.description}
          </p>
        </div>

        <div className="mt-6 border-t border-[#E8ECF1] pt-5">
          <div className="text-sm font-semibold text-[#0E2A47] sm:text-base">
            Principais benefícios associados:
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:gap-4">
            {details.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 rounded-[12px] bg-[#F8F9FB] px-4 py-3 text-sm leading-6 text-[#4B5563] sm:text-base"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#153B63]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {details.closing ? (
          <p className="mt-5 text-sm leading-7 text-[#5B6575] sm:text-base sm:leading-8">
            {details.closing}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8.5l3 3L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProductSectionDetailV2({ tab }: { tab: ProductTab }) {
  const details = productSectionDetails[tab];

  if (!details) {
    return null;
  }

  const hasPreamble = !!(details.description || details.paragraphs?.length);
  const hasSections = !!(details.sections?.length);

  return (
    <Reveal>
      <div className="mt-6 overflow-hidden rounded-[20px] border border-[#D8E2EF] bg-white shadow-[0_20px_48px_rgba(15,23,32,0.08)] sm:mt-8">

        {/* Header gradient */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0A1E33] via-[#0E2A47] to-[#153B63] px-6 py-6 sm:px-8 sm:py-7">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute right-0 top-0 h-40 w-40 -translate-y-8 translate-x-8 rounded-full bg-white/5 blur-2xl" />
          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4DB6AC]" aria-hidden="true" />
                Peptídeo
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl lg:text-[1.65rem]">
                {details.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 lg:p-8">

          {/* Description paragraphs */}
          {hasPreamble && (
            <div className="max-w-5xl space-y-4 border-b border-[#EBF0F7] pb-6">
              {details.description && (
                <p className="text-[15px] leading-7 text-[#374151] sm:text-base sm:leading-8">
                  {details.description}
                </p>
              )}
              {details.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-7 text-[#374151] sm:text-base sm:leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Sections */}
          {hasSections && (
            <div className={`grid gap-4 lg:grid-cols-2 ${hasPreamble ? "mt-6" : ""}`}>
              {details.sections!.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[14px] border border-[#E4EAF4] bg-[#F6F8FC] p-4 sm:p-5"
                >
                  <h4 className="flex items-center gap-2.5 text-sm font-semibold text-[#0E2A47] sm:text-base">
                    <span className="h-[18px] w-[3px] rounded-full bg-[#153B63]" aria-hidden="true" />
                    {section.title}
                  </h4>
                  {section.description ? (
                    <p className="mt-3 text-sm leading-6 text-[#5B6575] sm:leading-7">
                      {section.description}
                    </p>
                  ) : null}
                  {section.items?.length ? (
                    <ul className="mt-3 space-y-2.5">
                      {section.items.map((item) => (
                        <li
                          key={`${item.title ?? "item"}-${item.description}`}
                          className="flex gap-2.5 text-sm leading-6 text-[#4B5563]"
                        >
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#153B63]" />
                          <span>
                            {item.title ? (
                              <strong className="font-semibold text-[#111827]">
                                {item.title}:{" "}
                              </strong>
                            ) : null}
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          )}

          {/* Benefits */}
          <div className={hasPreamble || hasSections ? "mt-6 border-t border-[#EBF0F7] pt-6" : ""}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#667085]">
              {details.benefitsTitle ?? "Principais benefícios associados"}
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {details.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-[10px] border border-[#E4EAF4] bg-[#F6F8FC] px-4 py-3 text-sm leading-6 text-[#374151]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#153B63]/10">
                    <CheckIcon className="h-3 w-3 text-[#153B63]" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {details.closing ? (
            <p className="mt-6 border-t border-[#EBF0F7] pt-5 text-sm leading-7 text-[#5B6575] sm:text-base sm:leading-8">
              {details.closing}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
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

function PixIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 4.25c7.15 0 12.55 2.6 17.9 7.95l18.25 18.25H77.7c-8.2 0-14.05 2.45-19.8 8.2l-4.75 4.75c-1.75 1.75-4.55 1.75-6.3 0l-4.75-4.75c-5.75-5.75-11.6-8.2-19.8-8.2h-8.45L32.1 12.2C37.45 6.85 42.85 4.25 50 4.25Z"
        fill="currentColor"
      />
      <path
        d="M10.5 34.4h11.85c7.1 0 11.55 1.85 16.55 6.85L45.2 47.5c2.65 2.65 6.95 2.65 9.6 0l6.3-6.25c5-5 9.45-6.85 16.55-6.85H89.5l3.2 3.2c9.95 9.95 9.95 24.85 0 34.8l-3.2 3.2H77.65c-7.1 0-11.55-1.85-16.55-6.85l-6.3-6.25c-2.65-2.65-6.95-2.65-9.6 0l-6.3 6.25c-5 5-9.45 6.85-16.55 6.85H10.5l-3.2-3.2c-9.95-9.95-9.95-24.85 0-34.8l3.2-3.2Z"
        fill="currentColor"
      />
      <path
        d="M13.85 79.55h8.45c8.2 0 14.05-2.45 19.8-8.2l4.75-4.75c1.75-1.75 4.55-1.75 6.3 0l4.75 4.75c5.75 5.75 11.6 8.2 19.8 8.2h8.45L67.9 87.8c-5.35 5.35-10.75 7.95-17.9 7.95s-12.55-2.6-17.9-7.95L13.85 79.55Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#0A1E33]/55 backdrop-blur-[3px]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-50 flex w-[min(360px,92vw)] flex-col overflow-hidden bg-white shadow-[-24px_0_72px_rgba(10,30,51,0.18)]"
          >
            {/* Topo */}
            <div className="flex items-center justify-between border-b border-[#E8ECF1] px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F6FA] text-[#667085] transition hover:bg-[#E8ECF1] hover:text-[#0E2A47]"
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-1 flex-col gap-1 p-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + index * 0.06, type: "spring", stiffness: 320, damping: 30 }}
                  className="group flex items-center justify-between rounded-[14px] px-4 py-4 text-[15px] font-medium text-[#0E2A47] transition hover:bg-[#F4F6FA]"
                >
                  <span>{link.label}</span>
                  <span className="flex items-center gap-2 text-[#C5CDD8] transition group-hover:text-[#153B63]">
                    <span className="font-mono text-[11px] tracking-widest">0{index + 1}</span>
                    <ArrowRightIcon />
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* CTA bottom */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="p-4"
            >
              <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0A1E33] to-[#153B63] p-5">
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    Atendimento direto
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-[-0.02em] text-white">
                    Pronto para fazer seu pedido?
                  </h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-[#0E2A47] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:bg-[#F0F4FA]"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function CatalogSection() {
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDose, setSelectedDose] = useState("");
  const [selectedUnits, setSelectedUnits] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = normalizeSearch(query.trim());

  const filterOptions = useMemo(() => {
    const visibleProducts = catalogProducts.filter((product) => isVisibleProduct(product.title));
    const brands = new Set<string>();
    const doses = new Set<string>();
    const units = new Set<string>();

    visibleProducts.forEach((product) => {
      brands.add(getProductBrand(product));
      doses.add(getProductDose(product));
      units.add(getUnitsLabel(product));
    });

    const sortLabels = (values: Set<string>) =>
      Array.from(values).sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));

    return {
      brands: sortLabels(brands),
      doses: sortLabels(doses),
      units: sortLabels(units),
    };
  }, []);

  const hasActiveFilters = Boolean(selectedBrand || selectedDose || selectedUnits);

  function clearFilters() {
    setSelectedBrand("");
    setSelectedDose("");
    setSelectedUnits("");
  }

  const groupedProducts = useMemo(() => {
    return productTabs
      .map((tab) => {
        const filtered = catalogProducts.filter((product) => {
          if (!isVisibleProduct(product.title)) return false;
          const belongsToTab = getProductSection(product) === tab;
          const searchableContent = normalizeSearch(
            `${product.title} ${product.presentation} ${getUnitsLabel(product)} ${product.badge ?? ""} ${product.benefit ?? ""}`,
          );
          const matchesSearch = !normalizedQuery || searchableContent.includes(normalizedQuery);
          const matchesBrand = !selectedBrand || getProductBrand(product) === selectedBrand;
          const matchesDose = !selectedDose || getProductDose(product) === selectedDose;
          const matchesUnits = !selectedUnits || getUnitsLabel(product) === selectedUnits;

          return belongsToTab && matchesSearch && matchesBrand && matchesDose && matchesUnits;
        });

        const boxes = filtered.filter((p) => !p.ampola);
        const ampolas = filtered.filter((p) => p.ampola);

        return { tab, boxes, ampolas };
      })
      .filter((group) => group.boxes.length > 0 || group.ampolas.length > 0);
  }, [normalizedQuery, selectedBrand, selectedDose, selectedUnits]);

  function handleTabClick(tab: ProductTab) {
    document.getElementById(sectionId(tab))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
    <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
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
                ref={searchInputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar produtos..."
                className="h-12 w-full rounded-full border border-[#C9D2DE] bg-white px-10 text-sm text-[#111827] outline-none transition placeholder:text-[#8A94A3] focus:border-[#153B63] focus:ring-4 focus:ring-[#153B63]/10 sm:h-14 sm:px-12 sm:text-base"
              />
            </label>

            <div className="flex justify-end gap-2 sm:gap-3 lg:justify-end">
              <button
                type="button"
                onClick={() => searchInputRef.current?.focus()}
                className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#0E2A47] text-white shadow-[0_12px_24px_rgba(14,42,71,0.18)] transition hover:-translate-y-0.5 hover:bg-[#153B63] sm:h-12 sm:w-12 lg:inline-flex"
                aria-label="Buscar"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
              {/* Hamburger — mobile only */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0E2A47] text-white shadow-[0_12px_24px_rgba(14,42,71,0.18)] transition hover:-translate-y-0.5 hover:bg-[#153B63] lg:hidden sm:h-12 sm:w-12"
              >
                <span className="flex flex-col items-end gap-[5px]" aria-hidden="true">
                  <span className="h-[1.5px] w-5 rounded-full bg-white" />
                  <span className="h-[1.5px] w-3.5 rounded-full bg-white" />
                  <span className="h-[1.5px] w-2 rounded-full bg-white" />
                </span>
              </button>
              {/* WhatsApp */}
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

          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-[minmax(150px,1fr)_minmax(150px,1fr)_minmax(170px,1fr)_auto]">
            <label className="relative">
              <span className="sr-only">Filtrar por marca</span>
              <select
                value={selectedBrand}
                onChange={(event) => setSelectedBrand(event.target.value)}
                className="h-11 w-full appearance-none rounded-full border border-[#D6DDE7] bg-white px-4 pr-9 text-sm font-medium text-[#334155] outline-none transition focus:border-[#153B63] focus:ring-4 focus:ring-[#153B63]/10"
              >
                <option value="">Todas as marcas</option>
                {filterOptions.brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7A8491]">
                v
              </span>
            </label>

            <label className="relative">
              <span className="sr-only">Filtrar por dosagem</span>
              <select
                value={selectedDose}
                onChange={(event) => setSelectedDose(event.target.value)}
                className="h-11 w-full appearance-none rounded-full border border-[#D6DDE7] bg-white px-4 pr-9 text-sm font-medium text-[#334155] outline-none transition focus:border-[#153B63] focus:ring-4 focus:ring-[#153B63]/10"
              >
                <option value="">Todas as dosagens</option>
                {filterOptions.doses.map((dose) => (
                  <option key={dose} value={dose}>
                    {dose}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7A8491]">
                v
              </span>
            </label>

            <label className="relative sm:col-span-2 lg:col-span-1">
              <span className="sr-only">Filtrar por apresentação</span>
              <select
                value={selectedUnits}
                onChange={(event) => setSelectedUnits(event.target.value)}
                className="h-11 w-full appearance-none rounded-full border border-[#D6DDE7] bg-white px-4 pr-9 text-sm font-medium text-[#334155] outline-none transition focus:border-[#153B63] focus:ring-4 focus:ring-[#153B63]/10"
              >
                <option value="">Selecione a apresentação</option>
                {filterOptions.units.map((units) => (
                  <option key={units} value={units}>
                    {units}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7A8491]">
                v
              </span>
            </label>

            {hasActiveFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="h-11 rounded-full border border-[#D6DDE7] bg-[#F7F9FC] px-4 text-sm font-semibold text-[#0E2A47] transition hover:border-[#153B63] hover:bg-white sm:col-span-1"
              >
                Limpar filtros
              </button>
            ) : null}
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

                <ProductGrid products={group.boxes} indexOffset={0} />
                <ProductSectionDetailV2 tab={group.tab} />

                {group.ampolas.length > 0 && (
                  <div className="mt-8 sm:mt-10">
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-[#E8ECF1]" />
                      <span className="rounded-full border border-[#E0E4EC] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
                        Ampolas Avulsas
                      </span>
                      <div className="h-px flex-1 bg-[#E8ECF1]" />
                    </div>
                    <ProductGrid products={group.ampolas} indexOffset={group.boxes.length} />
                  </div>
                )}
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
    </>
  );
}
