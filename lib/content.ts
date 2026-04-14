export const siteConfig = {
  name: "Zenthra Pharma",
  url: "https://zenthrapharma.com.br",
  email: "contato@zenthrapharma.com.br",
  location: "Atendimento digital em todo o Brasil",
  whatsappDisplay: "(11) 99999-9999",
  whatsappNumber:
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999").replace(/\D/g, "") ||
    "5511999999999",
  defaultWhatsAppMessage: "Ola, gostaria de conhecer a Zenthra Pharma.",
};

export function createWhatsAppUrl(message = siteConfig.defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = createWhatsAppUrl();

export const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Atendimento", href: "/#como-funciona" },
  { label: "FAQ", href: "/#faq" },
];

export const trustBadges = [
  "Confianca",
  "Sofisticacao",
  "Atendimento direto",
];

export const aboutHighlights = [
  {
    label: "Identidade",
    title: "Presenca visual marcada por elegancia e confianca.",
    description:
      "Uma comunicacao institucional desenhada para transmitir seriedade, clareza e alto padrao.",
  },
  {
    label: "Consistencia",
    title: "Linguagem visual coerente em cada ponto de contato.",
    description:
      "Tipografia, paleta e composicao trabalham em harmonia para fortalecer a identidade da marca.",
  },
  {
    label: "Percepcao",
    title: "Uma experiencia que valoriza a marca desde o primeiro olhar.",
    description:
      "Cada secao foi pensada para ampliar a percepcao de qualidade, proximidade e credibilidade.",
  },
];

export const performanceLines = [
  {
    icon: "weight",
    title: "Controle de peso",
    description:
      "Solucoes desenvolvidas para quem busca leveza, constancia e uma rotina orientada a resultados.",
  },
  {
    icon: "performance",
    title: "Performance corporal",
    description:
      "Uma linha pensada para acompanhar objetivos de energia, constancia e performance com equilibrio.",
  },
  {
    icon: "composition",
    title: "Definicao e composicao",
    description:
      "Propostas voltadas para quem valoriza definicao, cuidado estetico e evolucao com clareza.",
  },
  {
    icon: "wellbeing",
    title: "Bem-estar e rotina",
    description:
      "Uma abordagem equilibrada para promover conforto, praticidade e harmonia no dia a dia.",
  },
] as const;

export const products = [
  {
    category: "Controle de peso",
    name: "Zenthra Lean",
    description:
      "Uma linha voltada para quem busca leveza, equilibrio e uma rotina orientada a resultados consistentes.",
    accentClassName: "bg-[#E9EEF5]",
    images: ["/products/zenthra-lean/foto1.jpeg", "/products/zenthra-lean/foto2.jpeg"],
  },
  {
    category: "Linha performance",
    name: "Zenthra Core",
    description:
      "Desenvolvido para acompanhar intensidade, foco e performance com uma proposta clara e contemporanea.",
    accentClassName: "bg-[#EDF2F8]",
    images: ["/products/zenthra-core/foto1.jpeg", "/products/zenthra-core/foto2.jpeg"],
  },
  {
    category: "Definicao corporal",
    name: "Zenthra Shape",
    description:
      "Uma proposta direcionada para quem valoriza definicao, cuidado estetico e bem-estar em cada etapa.",
    accentClassName: "bg-[#F1F4F9]",
    images: ["/products/zenthra-shape/foto1.jpeg", "/products/zenthra-shape/foto2.jpeg"],
  },
  {
    category: "Rotina e bem-estar",
    name: "Zenthra Balance",
    description:
      "Uma linha voltada ao equilibrio, ao bem-estar e a uma rotina mais leve.",
    accentClassName: "bg-[#F4F6FA]",
    images: ["/products/zenthra-balance/foto1.jpeg", "/products/zenthra-balance/foto2.jpeg"],
  },
];

export const howItWorksSteps = [
  {
    number: 1,
    icon: "contact",
    title: "Contato",
    description:
      "O primeiro contato acontece de forma simples e direta, pelo canal mais conveniente para voce.",
  },
  {
    number: 2,
    icon: "objective",
    title: "Entendimento do objetivo",
    description:
      "Nossa equipe entende sua necessidade para orientar cada conversa com mais clareza e precisao.",
  },
  {
    number: 3,
    icon: "direction",
    title: "Direcionamento personalizado",
    description:
      "Com base no seu perfil e objetivo, apresentamos a linha mais adequada com atencao individualizada.",
  },
  {
    number: 4,
    icon: "followup",
    title: "Acompanhamento",
    description:
      "Seguimos presentes com atencao, cuidado e proximidade em cada etapa.",
  },
] as const;

export const differentials = [
  {
    icon: "premium",
    title: "Identidade premium",
    description:
      "Uma presenca visual sofisticada, pensada para refletir exclusividade e alto padrao.",
  },
  {
    icon: "structure",
    title: "Confianca institucional",
    description:
      "Uma comunicacao clara e segura, alinhada a uma marca que valoriza credibilidade em cada detalhe.",
  },
  {
    icon: "direct",
    title: "Atendimento direto",
    description:
      "Um canal proximo e acessivel para esclarecer duvidas e apresentar a marca com agilidade.",
  },
  {
    icon: "optimized",
    title: "Experiencia responsiva",
    description:
      "Uma navegacao fluida e elegante, preparada para manter qualidade e clareza em qualquer dispositivo.",
  },
] as const;

export const proofMetrics = [
  {
    value: "Atendimento direto",
    label: "Canal dedicado",
    description: "Uma experiencia mais proxima para apresentar a marca com agilidade e clareza.",
  },
  {
    value: "Identidade premium",
    label: "Presenca marcante",
    description: "Uma comunicacao visual elegante e segura para refletir o posicionamento da marca.",
  },
  {
    value: "Experiencia fluida",
    label: "Navegacao responsiva",
    description: "Conteudo organizado para oferecer clareza, conforto e consistencia em qualquer tela.",
  },
];

export const testimonials = [
  {
    name: "Confianca",
    role: "Credibilidade",
    quote:
      "Uma comunicacao clara e sofisticada fortalece a relacao com quem busca qualidade e credibilidade.",
  },
  {
    name: "Proximidade",
    role: "Atendimento direto",
    quote:
      "Cada contato reforca uma experiencia mais leve, intuitiva e acolhedora.",
  },
];

export const faqs = [
  {
    question: "A Zenthra Pharma realiza atendimento pelo WhatsApp?",
    answer:
      "Sim. O WhatsApp e o principal canal de atendimento para apresentar a marca, esclarecer duvidas e orientar cada necessidade.",
  },
  {
    question: "Posso entrar em contato de qualquer lugar do Brasil?",
    answer:
      "Sim. O atendimento e realizado de forma digital, com praticidade e conveniencia para clientes em todo o Brasil.",
  },
  {
    question: "Como funciona o atendimento da marca?",
    answer:
      "O processo comeca pelo contato direto, segue com o entendimento da sua necessidade e evolui com orientacao personalizada.",
  },
];
