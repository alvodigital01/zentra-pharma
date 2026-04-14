import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { navLinks, siteConfig, whatsappUrl } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#0F1720] pb-10 pt-14 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.55fr_0.55fr_0.8fr]">
          <div>
            <Logo light fillMark />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              Zenthra Pharma. Qualidade, confiança e excelência em cada detalhe.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/38">Navegação</div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/38">Institucional</div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <Link href="/politica-de-privacidade" className="transition hover:text-white">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="transition hover:text-white">
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/38">Contato</div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          Copyright {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
