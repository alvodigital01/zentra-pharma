export const siteConfig = {
  name: "Zenthra Pharma",
  url: "https://zenthrapharma.com.br",
  email: "contato@zenthrapharma.com.br",
  location: "Atendimento e entregas para todo o Brasil",
  whatsappDisplay: "+55 43 9677-6474",
  whatsappNumber:
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "554396776474").replace(/\D/g, "") ||
    "554396776474",
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
    category: "Controle de apetite",
    name: "Retatrutide",
    description:
      "A retatrutida é uma molécula de ação tripla sobre os receptores de GLP-1, GIP e glucagon, desenvolvida para atuar no controle metabólico. Em estudos clínicos, tem demonstrado potencial para promover redução de peso, melhora do controle glicêmico e benefícios em marcadores cardiometabólico.",
    accentClassName: "bg-[#E9EEF5]",
    images: ["/reta.png"],
  },
  {
    category: "Controle de apetite",
    name: "Tizerpatide",
    description:
      "A tirzepatida é um fármaco de ação dual sobre os receptores de GIP e GLP-1, desenvolvido para atuar no controle metabólico. Em contexto clínico, destaca-se por seu potencial na melhora do controle glicêmico, no manejo do peso corporal e no apoio a uma abordagem terapêutica mais completa.",
    accentClassName: "bg-[#EDF2F8]",
    images: ["/tizerpatide.png", "/tg.png", "/tirzec151.png", "/tirzec150.png", "/lipoless.png"],
  },
  {
    category: "Poderoso peptidio",
    name: "Glow Blend",
    description:
      "O Glow Blend é uma formulação peptídica com BPC-157, TB-500 e GHK-Cu, desenvolvida com foco em suporte a processos de reparo tecidual e regeneração cutânea. Seus componentes são associados à cicatrização, remodelação da matriz extracelular, manutenção da qualidade da pele e apoio ao cuidado integrativo.",
    accentClassName: "bg-[#F1F4F9]",
    images: ["/glow.png"],
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
      "O atendimento começa de forma simples e direta, por um canal rápido e conveniente para você.",
  },
  {
    number: 2,
    icon: "objective",
    title: "Alinhamento do pedido",
    description:
      "Entendemos sua necessidade com clareza para orientar o pedido com atenção e organização.",
  },
  {
    number: 3,
    icon: "direction",
    title: "Confirmação e preparo",
    description:
      "Após a confirmação, organizamos tudo com discrição e cuidado para manter uma experiência segura e profissional.",
  },
  {
    number: 4,
    icon: "followup",
    title: "Entrega",
    description:
      "Realizamos entregas para todo o Brasil, com praticidade, discrição e atenção em cada pedido.",
  },
] as const;

export const differentials = [
  {
    icon: "premium",
    title: "Procedência confiável",
    description:
      "Trabalhamos com produtos selecionados, apresentação cuidadosa e foco em confiança em cada detalhe.",
  },
  {
    icon: "structure",
    title: "Qualidade e segurança",
    description:
      "Nossa operação prioriza organização, clareza nas informações e um padrão visual alinhado ao setor farmacêutico.",
  },
  {
    icon: "direct",
    title: "Atendimento especializado",
    description:
      "Oferecemos um atendimento próximo e ágil para orientar, esclarecer dúvidas e facilitar sua experiência.",
  },
  {
    icon: "optimized",
    title: "Envio discreto e eficiente",
    description:
      "Cuidamos do processo com agilidade, discrição e atenção para garantir mais comodidade no seu pedido.",
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
    question: "Vocês realizam entrega?",
    answer:
      "Sim. Realizamos entregas para todo o Brasil, com praticidade, discrição e atenção ao atendimento.",
  },
  {
    question: "Como posso tirar dúvidas antes de fazer o pedido?",
    answer:
      "Você pode entrar em contato pelo canal de atendimento para esclarecer dúvidas e receber orientações de forma rápida e objetiva.",
  },
  {
    question: "Os produtos são apresentados com discrição?",
    answer:
      "Sim. Priorizamos uma experiência discreta, organizada e alinhada a um atendimento profissional.",
  },
  {
    question: "O atendimento é personalizado?",
    answer:
      "Sim. Buscamos entender cada necessidade com atenção para conduzir o atendimento com mais clareza e cuidado.",
  },
];
