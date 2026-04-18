"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { navLinks, whatsappUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Container className="pt-4">
          <div
            className={cn(
              "rounded-full border px-4 py-3 transition-all duration-300 sm:px-5",
              scrolled
                ? "border-[#D9E1EC] bg-white/92 shadow-soft backdrop-blur-xl"
                : "border-[#D9E1EC]/80 bg-white/76 backdrop-blur-xl",
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <Logo />

              <nav className="hidden items-center gap-8 lg:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-[#5B6575] transition hover:text-[#0E2A47]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex">
                <CtaButton href={whatsappUrl} className="px-5 py-3">
                  Falar no WhatsApp
                </CtaButton>
              </div>

              <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="button-pulse button-pulse-surface inline-flex h-11 w-11 items-center justify-center rounded-full text-[#0E2A47] transition lg:hidden"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#F5F7FB]/94 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex h-full flex-col justify-center gap-8 pt-24">
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                className="rounded-[32px] border border-[#D9E1EC] bg-white p-6 shadow-medium"
              >
                <div className="space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl border border-[#D9E1EC] bg-[#FAFBFD] px-4 py-4 text-base font-medium text-[#0E2A47] transition hover:bg-white"
                      >
                        {link.label}
                        <span className="text-[#5B6575]">0{index + 1}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <CtaButton href={whatsappUrl} className="w-full justify-center">
                    Falar no WhatsApp
                  </CtaButton>
                </div>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
