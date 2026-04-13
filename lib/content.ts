export const siteConfig = {
  name: "Zenthra Pharma",
  url: "https://zenthrapharma.com.br",
  email: "contato@zenthrapharma.com.br",
  location: "Atendimento digital com estrutura nacional",
  whatsappDisplay: "(11) 99999-9999",
  whatsappNumber:
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999").replace(/\D/g, "") ||
    "5511999999999",
  defaultWhatsAppMessage: "Olá, quero conhecer a estrutura da Zenthra Pharma.",
};

export function createWhatsAppUrl(message = siteConfig.defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = createWhatsAppUrl();

export const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Estrutura", href: "/#como-funciona" },
  { label: "FAQ", href: "/#faq" },
];

export const trustBadges = [
  "Identidade premium",
  "Estrutura profissional",
  "Design responsivo",
];

export const aboutHighlights = [
  {
    label: "Apresentacao",
    title: "Imagem institucional com leitura limpa e segura.",
    description:
      "Cada bloco foi redesenhado para reforcar credibilidade, organizacao e alto padrao visual.",
  },
  {
    label: "Consistencia",
    title: "Paleta, tipografia e espacamento trabalhando na mesma direcao.",
    description:
      "O site foi ajustado para parecer mais pharma, mais internacional e menos proximo de uma landing genérica.",
  },
  {
    label: "Percepcao",
    title: "Uma presenca premium ja no primeiro scroll.",
    description:
      "Hero, produtos e CTA final agora priorizam impacto visual com menos ruido e mais confianca.",
  },
];

export const performanceLines = [
  {
    icon: "weight",
    title: "Controle de peso",
    description:
      "Soluções posicionadas para quem busca organização, constância e uma narrativa mais estratégica de evolução.",
  },
  {
    icon: "performance",
    title: "Performance corporal",
    description:
      "Uma frente criada para comunicar energia, foco e construção de rotina com leitura premium e direta.",
  },
  {
    icon: "composition",
    title: "Definição e composição",
    description:
      "Card para reforçar objetivo visual, percepção de refinamento e clareza sobre transformações mais específicas.",
  },
  {
    icon: "wellbeing",
    title: "Bem-estar e rotina",
    description:
      "Abordagem mais equilibrada para sustentar constância, conveniência e sensação de acompanhamento próximo.",
  },
] as const;

export const products = [
  {
    category: "Apresentacao institucional",
    name: "Zenthra Lean",
    description:
      "Card desenhado para destacar imagem, nome e proposta com leitura direta e acabamento premium.",
    accentClassName: "bg-[#E9EEF5]",
  },
  {
    category: "Linha performance",
    name: "Zenthra Core",
    description:
      "Estrutura elegante para apresentacao de produtos com foco em credibilidade e organizacao visual.",
    accentClassName: "bg-[#EDF2F8]",
  },
  {
    category: "Composicao visual",
    name: "Zenthra Shape",
    description:
      "Espaco preparado para imagens reais, com proporcao refinada e informacao suficiente sem excesso.",
    accentClassName: "bg-[#F1F4F9]",
  },
  {
    category: "Rotina e bem-estar",
    name: "Zenthra Balance",
    description:
      "Uma apresentacao clara, sofisticada e pronta para receber novos ativos visuais da marca.",
    accentClassName: "bg-[#F4F6FA]",
  },
];

export const howItWorksSteps = [
  {
    number: 1,
    icon: "contact",
    title: "Contato",
    description:
      "O lead entra pelo WhatsApp com um CTA forte, sem fricção e com promessa de atendimento direto.",
  },
  {
    number: 2,
    icon: "objective",
    title: "Entendimento do objetivo",
    description:
      "A conversa aprofunda contexto, expectativa e momento do usuário para tornar o fluxo realmente consultivo.",
  },
  {
    number: 3,
    icon: "direction",
    title: "Direcionamento personalizado",
    description:
      "Com base no objetivo, a comunicação avança com mais precisão, confiança e percepção de exclusividade.",
  },
  {
    number: 4,
    icon: "followup",
    title: "Acompanhamento",
    description:
      "A experiência continua com proximidade, reforçando valor percebido, cuidado e consistência de marca.",
  },
] as const;

export const differentials = [
  {
    icon: "premium",
    title: "Apresentacao premium",
    description:
      "Visual limpo, proporcao elegante e acabamento mais coerente com uma marca pharma.",
  },
  {
    icon: "structure",
    title: "Estrutura profissional",
    description:
      "Hierarquia clara, seções objetivas e leitura organizada do hero ao rodape.",
  },
  {
    icon: "direct",
    title: "Atendimento direto",
    description:
      "CTAs posicionados com naturalidade para conduzir o interesse ao WhatsApp sem agressividade.",
  },
  {
    icon: "optimized",
    title: "Experiencia organizada",
    description:
      "Fluxo enxuto, responsivo e desenhado para manter confianca em qualquer tela.",
  },
] as const;

export const proofMetrics = [
  {
    value: "4 blocos",
    label: "Estrutura enxuta",
    description: "Uma narrativa mais objetiva, com menos excesso e leitura mais precisa.",
  },
  {
    value: "Visual limpo",
    label: "Paleta revista",
    description: "Navy, branco e cinzas suaves assumem a identidade do site com mais sobriedade.",
  },
  {
    value: "WhatsApp",
    label: "Conversao direta",
    description: "A jornada foi organizada para levar o usuario ao contato com mais naturalidade.",
  },
];

export const testimonials = [
  {
    name: "Percepcao de marca",
    role: "Leitura institucional",
    quote:
      "A apresentacao transmite mais confianca, mais ordem visual e uma assinatura muito mais proxima do universo pharma.",
  },
  {
    name: "Experiencia do usuario",
    role: "Fluxo de contato",
    quote:
      "A navegacao ficou mais clara, mais objetiva e muito menos carregada do que a versao anterior.",
  },
];

export const faqs = [
  {
    question: "O site foi pensado para venda direta?",
    answer:
      "Nao. A proposta e institucional. O foco esta em apresentar a marca e conduzir o interesse para um contato via WhatsApp.",
  },
  {
    question: "A experiencia ficou otimizada para mobile?",
    answer:
      "Sim. Hero, cards, tipografia e espacamentos foram ajustados para manter leitura premium tambem no celular.",
  },
  {
    question: "Os cards de produto aceitam imagens reais depois?",
    answer:
      "Sim. A area visual foi deixada preparada para substituir os placeholders por fotos oficiais sem refazer o layout.",
  },
];
