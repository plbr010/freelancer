import type { Service, ProcessStep } from "@/types";

export const services: Service[] = [
  {
    icon: "Rocket",
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão para campanhas, lançamentos e captação de leads com design persuasivo e alta performance.",
    features: ["Copywriting persuasivo", "A/B testing ready", "Integração com ads", "Analytics configurado"],
  },
  {
    icon: "Building2",
    title: "Sites Institucionais",
    description:
      "Presença digital completa que transmite autoridade, credibilidade e profissionalismo para sua empresa.",
    features: ["Design exclusivo", "SEO otimizado", "Multi-páginas", "Blog integrado"],
  },
  {
    icon: "Heart",
    title: "Sites para Clínicas",
    description:
      "Soluções especializadas para clínicas médicas, odontológicas e de estética com foco em agendamento e conversão.",
    features: ["Agendamento online", "Galeria de tratamentos", "SEO local", "LGPD compliant"],
  },
  {
    icon: "Home",
    title: "Sites para Imobiliárias",
    description:
      "Portais imobiliários com filtros avançados, galerias imersivas e integração com CRM para corretores.",
    features: ["Busca avançada", "Tours virtuais", "Mapa interativo", "CRM integrado"],
  },
  {
    icon: "MapPin",
    title: "Sites para Empresas Locais",
    description:
      "Presença digital forte para negócios locais que querem dominar sua região no Google e converter visitantes.",
    features: ["Google Meu Negócio", "SEO local", "WhatsApp integrado", "Avaliações em destaque"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Conversa Inicial",
    description:
      "Entendemos seu negócio, objetivos, público-alvo e referências visuais em uma reunião de 30 minutos.",
  },
  {
    step: 2,
    title: "Planejamento",
    description:
      "Definimos estrutura, funcionalidades, cronograma e apresentamos a proposta visual do seu site.",
  },
  {
    step: 3,
    title: "Desenvolvimento",
    description:
      "Codificamos seu site com as melhores tecnologias, priorizando performance, SEO e experiência do usuário.",
  },
  {
    step: 4,
    title: "Aprovação",
    description:
      "Você revisa cada detalhe em ambiente de testes. Fazemos ajustes até sua total satisfação.",
  },
  {
    step: 5,
    title: "Entrega",
    description:
      "Publicamos seu site, configuramos domínio, analytics e treinamos sua equipe para usar o painel.",
  },
];

export const whyInvest = [
  {
    icon: "TrendingUp",
    title: "Mais Clientes",
    description:
      "Um site profissional converte visitantes em clientes 24 horas por dia, 7 dias por semana, sem depender de indicações.",
  },
  {
    icon: "Shield",
    title: "Credibilidade",
    description:
      "75% dos consumidores julgam a credibilidade de uma empresa pelo design do site. Primeira impressão importa.",
  },
  {
    icon: "Search",
    title: "Visibilidade no Google",
    description:
      "Sites otimizados aparecem nas buscas locais. Seus clientes te encontram exatamente quando precisam.",
  },
  {
    icon: "Zap",
    title: "Vantagem Competitiva",
    description:
      "Enquanto concorrentes usam templates genéricos, você se destaca com uma presença digital única e memorável.",
  },
];
