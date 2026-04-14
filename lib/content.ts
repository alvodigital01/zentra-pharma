export const siteConfig = {
  name: "Zenthra Pharma",
  url: "https://zenthrapharma.com.br",
  email: "contato@zenthrapharma.com.br",
  location: "Atendimento digital em todo o Brasil",
  whatsappDisplay: "(11) 99999-9999",
  whatsappNumber:
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999").replace(/\D/g, "") ||
    "5511999999999",
  defaultWhatsAppMessage: "Olá, gostaria de conhecer a Zenthra Pharma.",
};

export function createWhatsAppUrl(message = siteConfig.defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = createWhatsAppUrl();

export const navLinks = [
  { label: "Produtos", href: "/#produtos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Atendimento", href: "/#como-funciona" },
  { label: "FAQ", href: "/#faq" },
];

export const trustBadges = [
  "Confiança",
  "Sofisticação",
  "Atendimento direto",
];

export const aboutHighlights = [
  {
    label: "Identidade",
    title: "Presença visual marcada por elegância e confiança.",
    description:
      "Uma comunicação institucional desenhada para transmitir seriedade, clareza e alto padrão.",
  },
  {
    label: "Consistência",
    title: "Linguagem visual coerente em cada ponto de contato.",
    description:
      "Tipografia, paleta e composição trabalham em harmonia para fortalecer a identidade da marca.",
  },
  {
    label: "Percepção",
    title: "Uma experiência que valoriza a marca desde o primeiro olhar.",
    description:
      "Cada seção foi pensada para ampliar a percepção de qualidade, proximidade e credibilidade.",
  },
];

export const performanceLines = [
  {
    icon: "weight",
    title: "Controle de peso",
    description:
      "Soluções desenvolvidas para quem busca leveza, constância e uma rotina orientada a resultados.",
  },
  {
    icon: "performance",
    title: "Performance corporal",
    description:
      "Uma linha pensada para acompanhar objetivos de energia, constância e performance com equilíbrio.",
  },
  {
    icon: "composition",
    title: "Definição e composição",
    description:
      "Propostas voltadas para quem valoriza definição, cuidado estético e evolução com clareza.",
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
      "Uma linha voltada para quem busca leveza, equilíbrio e uma rotina orientada a resultados consistentes.",
    accentClassName: "bg-[#E9EEF5]",
    images: ["/reta.jpeg"],
  },
  {
    category: "Linha performance",
    name: "Zenthra Core",
    description:
      "Desenvolvido para acompanhar intensidade, foco e performance com uma proposta clara e contemporânea.",
    accentClassName: "bg-[#EDF2F8]",
    images: ["/products/zenthra-core/foto1.jpeg", "/products/zenthra-core/foto2.jpeg"],
  },
  {
    category: "Definição corporal",
    name: "Zenthra Shape",
    description:
      "Uma proposta direcionada para quem valoriza definição, cuidado estético e bem-estar em cada etapa.",
    accentClassName: "bg-[#F1F4F9]",
    images: ["/products/zenthra-shape/foto1.jpeg", "/products/zenthra-shape/foto2.jpeg"],
  },
  {
    category: "Rotina e bem-estar",
    name: "Zenthra Balance",
    description:
      "Uma linha voltada ao equilíbrio, ao bem-estar e a uma rotina mais leve.",
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
      "O primeiro contato acontece de forma simples e direta, pelo canal mais conveniente para você.",
  },
  {
    number: 2,
    icon: "objective",
    title: "Entendimento do objetivo",
    description:
      "Nossa equipe entende sua necessidade para orientar cada conversa com mais clareza e precisão.",
  },
  {
    number: 3,
    icon: "direction",
    title: "Direcionamento personalizado",
    description:
      "Com base no seu perfil e objetivo, apresentamos a linha mais adequada com atenção individualizada.",
  },
  {
    number: 4,
    icon: "followup",
    title: "Acompanhamento",
    description:
      "Seguimos presentes com atenção, cuidado e proximidade em cada etapa.",
  },
] as const;

export const differentials = [
  {
    icon: "premium",
    title: "Identidade premium",
    description:
      "Uma presença visual sofisticada, pensada para refletir exclusividade e alto padrão.",
  },
  {
    icon: "structure",
    title: "Confiança institucional",
    description:
      "Uma comunicação clara e segura, alinhada a uma marca que valoriza credibilidade em cada detalhe.",
  },
  {
    icon: "direct",
    title: "Atendimento direto",
    description:
      "Um canal próximo e acessível para esclarecer dúvidas e apresentar a marca com agilidade.",
  },
  {
    icon: "optimized",
    title: "Experiência responsiva",
    description:
      "Uma navegação fluida e elegante, preparada para manter qualidade e clareza em qualquer dispositivo.",
  },
] as const;

export const proofMetrics = [
  {
    value: "Atendimento direto",
    label: "Canal dedicado",
    description: "Uma experiência mais próxima para apresentar a marca com agilidade e clareza.",
  },
  {
    value: "Identidade premium",
    label: "Presença marcante",
    description: "Uma comunicação visual elegante e segura para refletir o posicionamento da marca.",
  },
  {
    value: "Experiência fluida",
    label: "Navegação responsiva",
    description: "Conteúdo organizado para oferecer clareza, conforto e consistência em qualquer tela.",
  },
];

export const testimonials = [
  {
    name: "Confiança",
    role: "Credibilidade",
    quote:
      "Uma comunicação clara e sofisticada fortalece a relação com quem busca qualidade e credibilidade.",
  },
  {
    name: "Proximidade",
    role: "Atendimento direto",
    quote:
      "Cada contato reforça uma experiência mais leve, intuitiva e acolhedora.",
  },
];

export const faqs = [
  {
    question: "A Zenthra Pharma realiza atendimento pelo WhatsApp?",
    answer:
      "Sim. O WhatsApp é o principal canal de atendimento para apresentar a marca, esclarecer dúvidas e orientar cada necessidade.",
  },
  {
    question: "Posso entrar em contato de qualquer lugar do Brasil?",
    answer:
      "Sim. O atendimento é realizado de forma digital, com praticidade e conveniência para clientes em todo o Brasil.",
  },
  {
    question: "Como funciona o atendimento da marca?",
    answer:
      "O processo começa pelo contato direto, segue com o entendimento da sua necessidade e evolui com orientação personalizada.",
  },
];
