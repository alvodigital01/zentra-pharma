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
    default: "Zenthra Pharma | Sofisticacao, confianca e presenca",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Conheca a Zenthra Pharma e descubra uma marca orientada por excelencia, confianca e atendimento direto.",
  keywords: [
    "Zenthra Pharma",
    "marca pharma premium",
    "site institucional pharma",
    "apresentacao premium",
    "atendimento premium",
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
      "Uma marca orientada por excelencia, confianca e sofisticacao.",
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
    description: "Sofisticacao, confianca e presenca para uma marca de alto padrao.",
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
