export const siteConfig = {
  name: "Zenthra Pharma",
  url: "https://www.zenthrapharma.com",
  email: "contato@zenthrapharma.com",
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

export function extractDosage(presentation: string): string | undefined {
  const parts = presentation.split("|");
  return parts.length > 1 ? parts[parts.length - 1].trim() : undefined;
}

export function createProductWhatsAppMessage(productName: string, details?: string) {
  const productLabel = details ? `${productName} ${details}` : productName;

  return `Olá, tenho interesse em ${productLabel} e gostaria de consultar a disponibilidade.`;
}

export const whatsappUrl = createWhatsAppUrl();

export const navLinks = [
  { label: "Catálogo", href: "/#catalogo" },
  { label: "Atendimento", href: "/#como-funciona" },
  { label: "Entrega", href: "/#entrega" },
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
    name: "Retatrutida",
    description:
      "A retatrutida é uma molécula de ação tripla sobre os receptores de GLP-1, GIP e glucagon, desenvolvida para atuar no controle metabólico. Em estudos clínicos, tem demonstrado potencial para promover redução de peso, melhora do controle glicêmico e benefícios em marcadores cardiometabólico.",
    accentClassName: "bg-[#E9EEF5]",
    images: [
      "/retratutide-veltrane-10mg-ml.jpg",
      "/retratutidenexxus-40mg.jpg",
      "/retratutideusa-40mg-2ml.jpg",
    ],
  },
  {
    category: "Controle de apetite",
    name: "Tizerpatida",
    description:
      "A tirzepatida é um fármaco de ação dual sobre os receptores de GIP e GLP-1, desenvolvido para atuar no controle metabólico. Em contexto clínico, destaca-se por seu potencial na melhora do controle glicêmico, no manejo do peso corporal e no apoio a uma abordagem terapêutica mais completa.",
    accentClassName: "bg-[#EDF2F8]",
    images: [
      "/tirzec-15mg-o.5ml.jpg",
      "/tg15mg-0,5ml.jpg",
      "/tirzepatide-veltrane-10mg-ml.jpg",
      "/lipoless=15mg-0,5ml.jpg",
      "/tirzec4-15mg-0,5ml.jpg",
      "/lipoland-15mg-0,5ml.jpg",
      "/tirzec2-15mg-o.5ml.jpg",
    ],
  },
  {
    category: "Poderoso peptídeo",
    name: "Glow Blend",
    description:
      "O Glow Blend é uma formulação peptídica com BPC-157, TB-500 e GHK-Cu, desenvolvida com foco em suporte a processos de reparo tecidual e regeneração cutânea. Seus componentes são associados à cicatrização, remodelação da matriz extracelular, manutenção da qualidade da pele e apoio ao cuidado integrativo.",
    accentClassName: "bg-[#F1F4F9]",
    images: ["/glowblend.jpg"],
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

export const catalogProducts: ReadonlyArray<{
  title: string;
  presentation: string;
  badge?: string;
  units?: string;
  pixPrice: number;
  cardPrice: number;
  cardInstallments?: number;
  image: string;
  ampola?: boolean;
}> = [
  {
    title: "Tizerpatida Veltrane",
    presentation: "GIP + GLP-1 | 60mg",
    pixPrice: 980,
    cardPrice: 1170,
    image: "/tirzepatide-veltrane-10mg-ml.jpg",
  },
  {
    title: "Tizerpatida USA Pep",
    presentation: "GIP + GLP-1 | 60mg",
    pixPrice: 860,
    cardPrice: 960,
    image: "/tizerpatide-60mg-3ml.jpg",
  },
  {
    title: "Tizerpatida Tirzec",
    presentation: "GIP + GLP-1 | 60mg",
    units: "Ampola única",
    pixPrice: 970,
    cardPrice: 1130,
    image: "/tirzec-15mg-o.5ml.jpg",
  },
  {
    title: "Tizerpatida Tirzec",
    presentation: "GIP + GLP-1 | 60mg",
    units: "4 ampolas",
    pixPrice: 1100,
    cardPrice: 1170,
    image: "/tirzec4.png",
  },
  {
    title: "Tizerpatida Slimex",
    presentation: "GIP + GLP-1 | 60mg",
    units: "4 ampolas",
    pixPrice: 1000,
    cardPrice: 1170,
    image: "/slimex.png",
  },
  {
    title: "Retatrutida Veltrane",
    presentation: "GLP-1 + GIP + Glucagon | 60mg",
    pixPrice: 950,
    cardPrice: 1100,
    image: "/retratutide-veltrane-10mg-ml.jpg",
  },
  {
    title: "Retatrutida Veltrane",
    presentation: "GLP-1 + GIP + Glucagon | 90mg",
    pixPrice: 1000,
    cardPrice: 1130,
    image: "/vetrane90mg.png",
  },
  {
    title: "Retatrutida USA Pep",
    presentation: "GLP-1 + GIP + Glucagon | 40mg",
    pixPrice: 930,
    cardPrice: 980,
    image: "/retratutideusa-40mg-2ml.jpg",
  },
  {
    title: "Retatrutida Synedica",
    presentation: "GLP-1 + GIP + Glucagon | 40mg",
    pixPrice: 1200,
    cardPrice: 1250,
    image: "/synedica.png",
  },
  {
    title: "Retatrutida Nexus",
    presentation: "GLP-1 + GIP + Glucagon",
    pixPrice: 1200,
    cardPrice: 1250,
    image: "/retratutidenexxus-40mg.jpg",
  },
  {
    title: "Tizerpatida TG",
    presentation: "GIP + GLP-1 | 60mg",
    units: "4 ampolas",
    pixPrice: 1200,
    cardPrice: 1250,
    image: "/tg15mg-0,5ml.jpg",
  },
  {
    title: "Caneta GLOW",
    presentation: "GHK-Cu + BPC-157 + TB-500",
    units: "Caneta",
    pixPrice: 800,
    cardPrice: 900,
    image: "/glowblend.jpg",
  },
  {
    title: "Tizerpatida Lipoless",
    presentation: "GIP + GLP-1 | 60mg",
    units: "4 ampolas",
    pixPrice: 1100,
    cardPrice: 1200,
    image: "/lipoless=15mg-0,5ml.jpg",
  },
  {
    title: "Tizerpatida Lipoland",
    presentation: "GIP + GLP-1 | 60mg",
    units: "4 ampolas",
    pixPrice: 1230,
    cardPrice: 1270,
    image: "/lipoland-15mg-0,5ml.jpg",
  },
  {
    title: "Tizerpatida TG",
    presentation: "GIP + GLP-1 | 15mg",
    pixPrice: 370,
    cardPrice: 385,
    cardInstallments: 2,
    image: "/tgun.png",
    ampola: true,
  },
  {
    title: "Tizerpatida Lipolass",
    presentation: "GIP + GLP-1 | 15mg",
    pixPrice: 340,
    cardPrice: 355,
    cardInstallments: 2,
    image: "/lipolessun.png",
    ampola: true,
  },
  {
    title: "Tizerpatida Tirzec",
    presentation: "GIP + GLP-1 | 15mg",
    pixPrice: 350,
    cardPrice: 365,
    cardInstallments: 2,
    image: "/tirzecun.png",
    ampola: true,
  },
  {
    title: "Tizerpatida Slimex",
    presentation: "GIP + GLP-1 | 15mg",
    pixPrice: 333,
    cardPrice: 343,
    cardInstallments: 2,
    image: "/slimexun.png",
    ampola: true,
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
    question: "Como faço meu pedido?",
    answer:
      "Pelo WhatsApp. Você escolhe o produto no catálogo, entra em contato, confirmamos a disponibilidade e as formas de pagamento, e enviamos assim que o pagamento for confirmado. O processo é rápido, direto e sem burocracia.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos PIX, com o melhor preço, e cartão de crédito em até 5x para caixas completas, ou em até 2x para ampolas avulsas. O pagamento é confirmado antes do envio do pedido.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "Após a confirmação do pagamento, o pedido é enviado com código de rastreio. O prazo médio é de 2 a 7 dias úteis, variando conforme a região do Brasil.",
  },
  {
    question: "A embalagem chega de forma discreta?",
    answer:
      "Sim. As encomendas são enviadas sem qualquer identificação do conteúdo na embalagem externa. Sua privacidade é uma prioridade em cada etapa do processo.",
  },
  {
    question: "Posso comprar uma ampola avulsa antes da caixa completa?",
    answer:
      "Sim. Temos ampolas avulsas disponíveis das linhas Tirzec, Slimex, TG e Lipolass, uma ótima opção para quem quer conhecer o produto antes de adquirir a caixa com 4 ampolas. Os valores estão disponíveis no catálogo.",
  },
  {
    question: "Os produtos precisam de refrigeração?",
    answer:
      "Sim. Os peptídeos devem ser mantidos entre 2°C e 8°C para preservar a integridade. Orientamos sobre o armazenamento correto no momento do pedido e durante o transporte utilizamos embalagem adequada.",
  },
  {
    question: "Qual a diferença entre Tizerpatida, Retatrutida e Glow Blend?",
    answer:
      "A Tizerpatida age nos receptores GIP e GLP-1. A Retatrutida adiciona o receptor de Glucagon, ampliando o mecanismo de ação. O Glow Blend é uma linha diferente, voltada para recuperação e bem-estar, com composição à base de GHK-Cu, BPC-157 e TB-500. Para mais detalhes sobre cada linha, fale com nossa equipe pelo WhatsApp.",
  },
  {
    question: "E se eu tiver algum problema após o recebimento?",
    answer:
      "Nosso atendimento continua depois da entrega. Se houver qualquer problema com o produto recebido, seja com a embalagem, prazo de validade ou qualidade, entre em contato pelo WhatsApp e resolveremos de forma rápida e direta.",
  },
];
