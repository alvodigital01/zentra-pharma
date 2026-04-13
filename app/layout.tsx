import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/content";

import "./globals.css";

const heading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Zenthra Pharma | Presenca institucional premium com padrao pharma",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Site institucional da Zenthra Pharma com identidade premium, apresentacao organizada e geracao de leads via WhatsApp.",
  keywords: [
    "Zenthra Pharma",
    "marca pharma premium",
    "site institucional pharma",
    "apresentacao premium",
    "estrutura profissional",
    "WhatsApp",
  ],
  applicationName: siteConfig.name,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Zenthra Pharma",
    description:
      "Uma presenca digital premium, criada para transmitir credibilidade, organizacao e alto padrao visual.",
    images: [
      {
        url: "/og-zhentra.svg",
        width: 1200,
        height: 630,
        alt: "Zenthra Pharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenthra Pharma",
    description: "Excelencia, confianca e apresentacao premium para uma marca pharma.",
    images: ["/og-zhentra.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${heading.variable} ${body.variable} bg-[#F5F7FB] font-body text-[#0F1720] antialiased`}
      >
        <Header />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
