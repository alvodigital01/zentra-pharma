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
  family?: string;
  presentation: string;
  badge?: string;
  benefit?: string;
  units?: string;
  pixPrice: number;
  cardPrice: number;
  cardInstallments?: number;
  cardInstallmentPrice?: number;
  image: string;
  ampola?: boolean;
  section?: string;
}> = [
  {
    title: "Tizerpatida Veltrane",
    presentation: "GIP + GLP-1 | 60mg",
    pixPrice: 980,
    cardPrice: 1170,
    image: "/tirzepatide-veltrane-10mg-ml.png",
  },
  {
    title: "Tizerpatida USA Pep",
    presentation: "GIP + GLP-1 | 60mg",
    pixPrice: 860,
    cardPrice: 960,
    image: "/usapep.png",
  },
  {
    title: "Tizerpatida Tirzec",
    presentation: "GIP + GLP-1 | 60mg",
    units: "Ampola única",
    pixPrice: 970,
    cardPrice: 1130,
    image: "/tirzex1.png",
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
    image: "/slimex1.png",
  },
  {
    title: "Retatrutida Veltrane",
    presentation: "GLP-1 + GIP + Glucagon | 60mg",
    pixPrice: 950,
    cardPrice: 1100,
    image: "/retatrutida60mg.png",
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
    image: "/usapep.png",
  },
  {
    title: "Retatrutida Synedica",
    presentation: "GLP-1 + GIP + Glucagon | 40mg",
    pixPrice: 1200,
    cardPrice: 1250,
    image: "/synedica1.png",
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
    image: "/blend.png",
  },
  {
    title: "GHK-Cu",
    family: "Peptídeo",
    presentation: "GHK-Cu | 10mg",
    units: "Ampola única",
    pixPrice: 475,
    cardPrice: 504.4,
    cardInstallments: 5,
    cardInstallmentPrice: 100.88,
    image: "/ghk-cu.png",
    section: "GHK-Cu",
  },
  {
    title: "Semax",
    family: "Peptídeo",
    presentation: "Semax | 10mg",
    units: "Ampola única",
    pixPrice: 520,
    cardPrice: 570.2,
    cardInstallments: 5,
    cardInstallmentPrice: 114.04,
    image: "/semax.png",
    section: "Semax",
  },
  {
    title: "Klow",
    family: "Blend",
    presentation: "GHK + KPV + TB | 80mg",
    units: "Ampola única",
    pixPrice: 680,
    cardPrice: 745.6,
    cardInstallments: 5,
    cardInstallmentPrice: 149.12,
    image: "/klow.png",
    section: "Klow",
  },
  {
    title: "Tesamorelin",
    family: "Peptídeo",
    presentation: "Tesamorelin | 10mg",
    units: "Ampola única",
    pixPrice: 550,
    cardPrice: 603.05,
    cardInstallments: 5,
    cardInstallmentPrice: 120.61,
    image: "/tesamorelin.png",
    section: "Tesamorelin",
  },
  {
    title: "MOSTc",
    family: "Peptídeo",
    presentation: "MOSTc | 10mg",
    units: "Ampola única",
    pixPrice: 570,
    cardPrice: 635.95,
    cardInstallments: 5,
    cardInstallmentPrice: 127.19,
    image: "/most.png",
    section: "MOSTc",
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
    title: "Tizerpatida Lipoless",
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

const legacyProductSectionDetails: Partial<Record<string, {
  title: string;
  description: string;
  benefits: string[];
  closing?: string;
}>> = {
  Tesamorelin: {
    title: "O que é Tesamorelin?",
    description:
      "O peptídeo Tesamorelin é um análogo sintético do hormônio liberador do crescimento (GHRH), desenvolvido para estimular a produção natural do hormônio do crescimento (GH) pelo organismo. Sua ação está relacionada principalmente à melhora da composição corporal, redução de gordura visceral e suporte metabólico.",
    benefits: [
      "Auxílio na redução de gordura abdominal visceral",
      "Estímulo fisiológico da liberação de GH e IGF-1",
      "Suporte ao metabolismo lipídico e energético",
      "Potencial melhora da definição corporal e composição física",
      "Preservação da massa magra durante protocolos de emagrecimento",
      "Contribuição para recuperação muscular e desempenho físico",
      "Potencial ação anti-aging e suporte à vitalidade",
    ],
  },
};

export const productSectionDetails: Partial<Record<string, {
  title: string;
  description?: string;
  paragraphs?: string[];
  benefitsTitle?: string;
  benefits: string[];
  sections?: {
    title: string;
    description?: string;
    items?: {
      title?: string;
      description: string;
    }[];
  }[];
  closing?: string;
}>> = {
  "Glow Blend": {
    title: "Caneta Glow",
    paragraphs: [
      "A Caneta Glow foi desenvolvida com uma combinação estratégica de peptídeos bioativos voltados para regeneração celular, rejuvenescimento da pele e recuperação tecidual avançada. Sua fórmula reúne ativos de alta performance que atuam de dentro para fora, promovendo melhora estética e funcional do organismo.",
    ],
    benefitsTitle: "Para que serve?",
    benefits: [
      "Estímulo intenso de colágeno e elastina",
      "Melhora da firmeza, textura e luminosidade da pele",
      "Auxílio na redução de linhas finas e sinais de envelhecimento",
      "Ação reparadora e regenerativa tecidual",
      "Suporte à cicatrização e recuperação celular",
      "Auxílio na saúde capilar e fortalecimento dos fios",
      "Potente ação antioxidante e anti-inflamatória",
      "Contribuição para recuperação muscular e bem-estar geral",
    ],
    sections: [
      {
        title: "Composição",
        items: [
          { description: "GHK-Cu 50 mg" },
          { description: "BPC-157 10 mg" },
          { description: "TB-500 10 mg" },
        ],
      },
      {
        title: "Diferenciais da fórmula",
        items: [
          {
            title: "GHK-Cu",
            description:
              "Peptídeo associado ao rejuvenescimento celular, estímulo de colágeno, melhora da qualidade da pele e ação antioxidante.",
          },
          {
            title: "BPC-157",
            description:
              "Conhecido pelo potencial regenerativo, auxiliando na recuperação de tecidos, processos inflamatórios e cicatrização.",
          },
          {
            title: "TB-500",
            description:
              "Peptídeo amplamente utilizado para suporte regenerativo e recuperação muscular, promovendo reparação celular e melhora da recuperação do organismo.",
          },
        ],
      },
      {
        title: "Resultado esperado",
        description:
          "Uma pele com aparência mais saudável, firme, viçosa e revitalizada, associada ao suporte regenerativo sistêmico promovido pela combinação exclusiva dos peptídeos.",
      },
    ],
  },
  "GHK-Cu": {
    title: "O que é GHK-Cu?",
    paragraphs: [
      "O peptídeo GHK-Cu é um peptídeo naturalmente presente no organismo, reconhecido por sua potente ação regeneradora, antioxidante e reparadora. Associado ao cobre em sua estrutura molecular, o GHK-Cu atua estimulando processos de renovação celular, produção de colágeno e recuperação tecidual, sendo amplamente utilizado em protocolos de estética avançada, rejuvenescimento e longevidade.",
      "Sua ação multifuncional auxilia na saúde da pele, cabelos e tecidos conjuntivos, promovendo melhora da qualidade cutânea, elasticidade e regeneração celular.",
    ],
    benefitsTitle: "Principais benefícios do GHK-Cu",
    benefits: [
      "Estímulo da produção de colágeno e elastina",
      "Auxílio na regeneração e cicatrização tecidual",
      "Potente ação antioxidante e anti-aging",
      "Melhora da firmeza, textura e elasticidade da pele",
      "Suporte ao fortalecimento capilar e crescimento dos fios",
      "Auxílio na recuperação de tecidos, tendões e articulações",
      "Contribuição para renovação celular e saúde cutânea",
      "Potencial proteção contra estresse oxidativo e envelhecimento precoce",
    ],
  },
  Semax: {
    title: "O que é Semax?",
    paragraphs: [
      "O peptídeo Semax é um peptídeo sintético derivado do ACTH, desenvolvido para atuar diretamente no sistema nervoso central. Reconhecido por sua ação neuroprotetora e neuromoduladora, o Semax vem sendo utilizado em protocolos voltados para suporte cognitivo, desempenho mental, foco, memória e equilíbrio neurológico.",
      "Sua atuação ocorre principalmente em regiões cerebrais relacionadas à memória, aprendizado, concentração e resposta ao estresse, auxiliando na comunicação entre neurotransmissores e promovendo suporte à saúde cerebral.",
    ],
    benefitsTitle: "Principais benefícios do Semax",
    benefits: [
      "Auxílio no foco, concentração e clareza mental",
      "Suporte à memória e capacidade de aprendizado",
      "Potencial melhora do desempenho cognitivo e produtividade",
      "Ação neuroprotetora contra estresse oxidativo cerebral",
      "Auxílio no equilíbrio emocional e redução da fadiga mental",
      "Suporte à recuperação neurológica e função cerebral",
      "Potencial melhora da disposição mental e motivação",
      "Contribuição para saúde cerebral e desempenho intelectual",
    ],
    sections: [
      {
        title: "Como o Semax atua no organismo",
        description:
          "O Semax age modulando importantes neurotransmissores cerebrais, como dopamina e serotonina, além de estimular fatores neurotróficos relacionados à proteção e regeneração neuronal. Sua ação contribui para melhora da atividade cerebral, adaptação ao estresse mental e suporte da função cognitiva.",
      },
      {
        title: "Áreas de atuação do Semax",
        description:
          "O Semax atua principalmente no sistema nervoso central, especialmente em áreas cerebrais relacionadas à cognição, memória, aprendizado, atenção e controle emocional. Sua ação neurobiológica promove suporte ao funcionamento cerebral saudável e à proteção neuronal.",
      },
    ],
  },
  Klow: {
    title: "O que é KLOW?",
    paragraphs: [
      "O peptídeo KLOW é um blend avançado composto por quatro peptídeos bioativos: BPC-157, TB-500, GHK-Cu e KPV. Sua formulação foi desenvolvida para atuar de forma integrada em regeneração tecidual, recuperação muscular, modulação inflamatória e rejuvenescimento celular.",
      "A combinação desses ativos promove suporte amplo aos processos de reparação do organismo, sendo utilizada em protocolos voltados para performance, recuperação física, estética avançada e longevidade.",
    ],
    benefitsTitle: "Principais benefícios associados ao KLOW",
    benefits: [
      "Auxílio na recuperação muscular e articular",
      "Suporte à regeneração de tecidos e cicatrização",
      "Potencial ação anti-inflamatória avançada",
      "Estímulo da produção de colágeno e renovação celular",
      "Auxílio na recuperação pós-treino e pós-procedimentos",
      "Contribuição para saúde da pele, cabelos e tecidos conjuntivos",
      "Potencial melhora da mobilidade e conforto articular",
      "Suporte à longevidade e recuperação celular",
    ],
    sections: [
      {
        title: "Composição do Blend KLOW e ação de cada peptídeo",
        items: [
          {
            title: "BPC-157",
            description:
              "Peptídeo reconhecido pelo suporte à regeneração tecidual e recuperação muscular. Atua auxiliando processos de cicatrização, integridade intestinal, recuperação de tendões, ligamentos e tecidos lesionados.",
          },
          {
            title: "TB-500",
            description:
              "Peptídeo relacionado à recuperação muscular e mobilidade. Possui ação voltada para regeneração celular, auxílio na recuperação pós-lesão e melhora da flexibilidade e reparação tecidual.",
          },
          {
            title: "GHK-Cu",
            description:
              "Peptídeo associado ao rejuvenescimento celular e estímulo de colágeno. Auxilia na qualidade da pele, elasticidade cutânea, regeneração tecidual e saúde capilar, além de apresentar ação antioxidante.",
          },
          {
            title: "KPV",
            description:
              "Peptídeo com potencial ação anti-inflamatória e imunomoduladora. Atua auxiliando o equilíbrio inflamatório do organismo e promovendo suporte à recuperação celular e bem-estar sistêmico.",
          },
        ],
      },
    ],
  },
  Tesamorelin: {
    title: "O que é Tesamorelin?",
    description:
      "O peptídeo Tesamorelin é um análogo sintético do hormônio liberador do crescimento (GHRH), desenvolvido para estimular a produção natural do hormônio do crescimento (GH) pelo organismo. Sua ação está relacionada principalmente à melhora da composição corporal, redução de gordura visceral e suporte metabólico.",
    benefitsTitle: "Principais benefícios associados:",
    benefits: [
      "Auxílio na redução de gordura abdominal visceral",
      "Estímulo fisiológico da liberação de GH e IGF-1",
      "Suporte ao metabolismo lipídico e energético",
      "Potencial melhora da definição corporal e composição física",
      "Preservação da massa magra durante protocolos de emagrecimento",
      "Contribuição para recuperação muscular e desempenho físico",
      "Potencial ação anti-aging e suporte à vitalidade",
    ],
  },
  MOSTc: {
    title: "O que é MOTS-c?",
    description:
      "O peptídeo MOTS-c é um peptídeo derivado das mitocôndrias, reconhecido por sua atuação no metabolismo energético celular e no suporte à saúde metabólica. Sua ação está relacionada à otimização da função mitocondrial, promovendo melhor utilização de energia pelo organismo e contribuindo para performance física, composição corporal e longevidade saudável.",
    benefitsTitle: "Principais benefícios associados ao MOTS-c",
    benefits: [
      "Auxílio na otimização do metabolismo energético",
      "Suporte à queima de gordura e melhora da composição corporal",
      "Potencial melhora da sensibilidade à insulina",
      "Estímulo da função mitocondrial e produção de energia celular",
      "Contribuição para aumento da resistência física e recuperação muscular",
      "Suporte à saúde metabólica e controle energético",
      "Potencial ação anti-aging relacionada à longevidade celular",
      "Auxílio na redução do estresse oxidativo e inflamação celular",
    ],
  },
};

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
      "Sim. Temos ampolas avulsas disponíveis das linhas Tirzec, Slimex, TG e Lipoless, uma ótima opção para quem quer conhecer o produto antes de adquirir a caixa com 4 ampolas. Os valores estão disponíveis no catálogo.",
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
