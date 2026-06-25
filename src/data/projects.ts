import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "clinica-odontologica-premium",
    name: "Clínica Sorriso Premium",
    category: "Saúde & Odontologia",
    tagline: "Transformando sorrisos em experiências digitais memoráveis",
    description:
      "Site institucional premium para clínica odontológica de alto padrão em São Paulo, com agendamento online, galeria de tratamentos e SEO local para captação de pacientes particulares.",
    problem:
      "A clínica possuía um site desatualizado de 2016, sem responsividade, com tempo de carregamento superior a 8 segundos e zero integração com agendamento. Perdia pacientes para concorrentes com presença digital moderna.",
    solution:
      "Desenvolvemos uma experiência digital sofisticada com design clean, galeria de tratamentos, depoimentos em vídeo, chat integrado e fluxo de agendamento em 3 cliques. SEO local otimizado para 'dentista zona sul SP'.",
    result:
      "Em 90 dias, a clínica registrou aumento de 340% nos agendamentos online e redução de 65% nas ligações para dúvidas básicas, liberando a equipe para atendimento presencial.",
    caseStudy:
      "A Clínica Sorriso Premium atendia 80% dos pacientes por indicação, mas perdia leads jovens que pesquisavam no Google antes de ligar. Após o lançamento, o site passou a ser o segundo maior canal de captação — à frente do Instagram. O fluxo de agendamento reduziu o abandono de 72% para 18%, e a clínica expandiu para um segundo consultório em 6 meses.",
    benefits: [
      "Agendamento online 24/7",
      "Galeria de antes e depois",
      "SEO local otimizado",
      "Integração WhatsApp Business",
      "Blog para autoridade médica",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    expectedResults: [
      { label: "Agendamentos online", value: "+340%" },
      { label: "Tempo de carregamento", value: "0.8s" },
      { label: "Taxa de conversão", value: "+180%" },
      { label: "Posição Google", value: "Top 3" },
    ],
    highlightMetric: { label: "Agendamentos online", value: "+340%" },
    colors: {
      primary: "#0EA5E9",
      secondary: "#0284C7",
      accent: "#E0F2FE",
      gradient: "from-sky-500 to-cyan-400",
    },
    mockupLayout: "dental",
    domain: "sorrisopremium.com.br",
    featured: true,
    year: "2025",
    client: "Clínica Sorriso Premium",
  },
  {
    slug: "clinica-estetica",
    name: "Bella Estética Avançada",
    category: "Estética & Bem-estar",
    tagline: "Elegância digital para uma clínica de referência",
    description:
      "Presença digital sofisticada para clínica de estética avançada em Curitiba, com catálogo de procedimentos premium, landing pages por tratamento e captação de clientes de alto ticket.",
    problem:
      "A clínica investia fortemente em Instagram mas não convertia seguidores em clientes. O site antigo não transmitia o padrão premium dos procedimentos e não apresentava preços ou pacotes de forma clara.",
    solution:
      "Criamos uma experiência visual luxuosa com paleta dourada e neutra, catálogo interativo de procedimentos, calculadora de pacotes e landing pages específicas para cada tratamento com remarketing integrado.",
    result:
      "A clínica passou a receber em média 45 leads qualificados por semana via site, com ticket médio 60% superior ao canal Instagram anterior.",
    caseStudy:
      "Antes do projeto, 90% das conversões vinham de DM no Instagram — um processo manual e imprevisível. Com landing pages dedicadas para harmonização facial e bioestimuladores, a Bella passou a captar leads mesmo fora do horário comercial. Em 4 meses, o ROI do site superou todo investimento em mídia paga do ano anterior.",
    benefits: [
      "Catálogo interativo de procedimentos",
      "Landing pages por tratamento",
      "Design premium e sofisticado",
      "Captação de leads qualificados",
      "Remarketing integrado",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Analytics"],
    expectedResults: [
      { label: "Leads semanais", value: "45+" },
      { label: "Ticket médio", value: "+60%" },
      { label: "Taxa de rejeição", value: "-42%" },
      { label: "ROI em 6 meses", value: "8.5x" },
    ],
    highlightMetric: { label: "Leads qualificados/semana", value: "45+" },
    colors: {
      primary: "#B8956A",
      secondary: "#8B6914",
      accent: "#F5E6D3",
      gradient: "from-amber-700 to-yellow-300",
    },
    mockupLayout: "beauty",
    domain: "bellaestetica.com.br",
    featured: true,
    year: "2025",
    client: "Bella Estética Avançada",
  },
  {
    slug: "imobiliaria-luxo",
    name: "Prime Imóveis Luxo",
    category: "Imobiliário de Luxo",
    tagline: "Imóveis exclusivos merecem uma vitrine à altura",
    description:
      "Portal digital premium para imobiliária especializada em imóveis de alto padrão no Rio de Janeiro, com filtros avançados, tours virtuais 360° e área exclusiva para corretores.",
    problem:
      "A imobiliária dependia exclusivamente de portais genéricos que cobravam altas comissões e não transmitiam a exclusividade dos imóveis. O site próprio era uma lista simples sem filtros ou experiência imersiva.",
    solution:
      "Desenvolvemos um portal imobiliário de luxo com galeria full-screen, filtros inteligentes, mapa interativo, tours 360° e área exclusiva para corretores com CRM integrado.",
    result:
      "70% das vendas passaram a ser originadas pelo site próprio, eliminando dependência de portais e aumentando margem de lucro em 35%.",
    caseStudy:
      "Um apartamento de R$ 4,2M em Ipanema ficou 8 meses em portal genérico sem visitas qualificadas. Após migração para o site Prime com tour 360° e storytelling do imóvel, recebeu 3 propostas em 21 dias. O novo portal reduziu o custo de aquisição por lead de R$ 890 para R$ 210.",
    benefits: [
      "Galeria imersiva full-screen",
      "Filtros avançados de busca",
      "Tours virtuais 360°",
      "Mapa interativo de bairros",
      "CRM para corretores",
    ],
    technologies: ["Next.js", "TypeScript", "Mapbox", "Tailwind CSS", "Sanity CMS"],
    expectedResults: [
      { label: "Vendas pelo site", value: "70%" },
      { label: "Margem de lucro", value: "+35%" },
      { label: "Tempo na página", value: "4m 30s" },
      { label: "Imóveis cadastrados", value: "120+" },
    ],
    highlightMetric: { label: "Vendas originadas no site", value: "70%" },
    colors: {
      primary: "#1E3A5F",
      secondary: "#0F2440",
      accent: "#C9A96E",
      gradient: "from-slate-900 to-amber-700",
    },
    mockupLayout: "realestate",
    domain: "primeimoveis.com.br",
    featured: true,
    year: "2024",
    client: "Prime Imóveis Luxo",
  },
  {
    slug: "academia-moderna",
    name: "FitZone Performance",
    category: "Fitness & Academia",
    tagline: "Energia e performance em cada pixel",
    description:
      "Site dinâmico para academia premium em Belo Horizonte, com comparativo de planos, grade de aulas em tempo real e matrícula online com checkout integrado.",
    problem:
      "A academia tinha alta rotatividade na recepção com perguntas sobre planos e horários. O site não mostrava a estrutura moderna da academia e não permitia matrícula online.",
    solution:
      "Criamos um site energético com vídeo hero da academia, comparativo de planos interativo, grade de aulas em tempo real e checkout de matrícula com primeiro mês promocional.",
    result:
      "Matrículas online representam agora 55% das novas adesões, com redução de 80% no tempo de atendimento na recepção para novos alunos.",
    caseStudy:
      "Na Black Friday de 2024, a FitZone lançou uma campanha com landing page dedicada e checkout em 2 etapas. Em 72 horas, realizou 87 matrículas online — número que antes levava 3 semanas pelo balcão. A grade de aulas integrada reduziu em 60% as ligações perguntando horários de spinning e crossfit.",
    benefits: [
      "Matrícula online 24/7",
      "Grade de aulas interativa",
      "Comparativo de planos",
      "Vídeo hero imersivo",
      "Integração com app de treinos",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Framer Motion"],
    expectedResults: [
      { label: "Matrículas online", value: "55%" },
      { label: "Novos alunos/mês", value: "+120" },
      { label: "Tempo recepção", value: "-80%" },
      { label: "NPS digital", value: "92" },
    ],
    highlightMetric: { label: "Matrículas via site", value: "55%" },
    colors: {
      primary: "#EF4444",
      secondary: "#991B1B",
      accent: "#FBBF24",
      gradient: "from-red-600 to-orange-500",
    },
    mockupLayout: "fitness",
    domain: "fitzoneperformance.com.br",
    featured: false,
    year: "2025",
    client: "FitZone Performance",
  },
  {
    slug: "energia-solar",
    name: "SolarTech Energia",
    category: "Energia Solar",
    tagline: "Energia limpa, presença digital poderosa",
    description:
      "Site institucional e landing pages para empresa de energia solar em Campinas, com calculadora de economia interativa, cases por segmento e funil de qualificação de leads B2B e B2C.",
    problem:
      "A empresa recebia muitas ligações de curiosos sem perfil de compra. Não havia ferramenta para o cliente estimar economia e o site não transmitia credibilidade técnica necessária para investimentos altos.",
    solution:
      "Desenvolvemos site com calculadora solar interativa, cases de instalação por segmento (residencial, comercial, industrial), certificações em destaque e funil de qualificação de leads automatizado.",
    result:
      "Leads qualificados aumentaram 250% e o ciclo de vendas reduziu de 45 para 28 dias graças à educação prévia do cliente via site.",
    caseStudy:
      "A calculadora solar virou o principal ativo de vendas: 68% dos leads chegam já sabendo o payback estimado e o tamanho do sistema ideal. Isso permitiu que a equipe comercial focasse em fechamento, não em educação básica. Um case industrial de R$ 1,8M foi fechado após o cliente usar a calculadora e baixar o relatório PDF automaticamente.",
    benefits: [
      "Calculadora de economia solar",
      "Cases por segmento",
      "Qualificação automática de leads",
      "Blog técnico para SEO",
      "Área do cliente",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "HubSpot", "Framer Motion"],
    expectedResults: [
      { label: "Leads qualificados", value: "+250%" },
      { label: "Ciclo de vendas", value: "-38%" },
      { label: "Economia calculada", value: "R$ 2.4M" },
      { label: "Instalações/ano", value: "180+" },
    ],
    highlightMetric: { label: "Leads qualificados", value: "+250%" },
    colors: {
      primary: "#16A34A",
      secondary: "#14532D",
      accent: "#DCFCE7",
      gradient: "from-green-600 to-emerald-400",
    },
    mockupLayout: "solar",
    domain: "solartech.com.br",
    featured: false,
    year: "2024",
    client: "SolarTech Energia",
  },
  {
    slug: "escritorio-advocacia",
    name: "Mendes & Oliveira Advocacia",
    category: "Advocacia & Direito",
    tagline: "Autoridade jurídica que inspira confiança",
    description:
      "Site institucional para escritório boutique de advocacia empresarial em São Paulo, com áreas de atuação detalhadas, blog jurídico e formulário de consulta com triagem inteligente.",
    problem:
      "O escritório dependia 100% de indicações e não aparecia em buscas por 'advogado empresarial SP'. O site antigo era um PDF disfarçado de página — sem credibilidade, sem SEO e sem captação de novos clientes.",
    solution:
      "Criamos uma presença digital sóbria e autoritativa com biografias dos sócios, artigos jurídicos otimizados para SEO, depoimentos de clientes corporativos e formulário de consulta com triagem por área do direito.",
    result:
      "O escritório passou a receber 25 consultas qualificadas por mês via site, com 40% convertendo em contratos de assessoria jurídica recorrente.",
    caseStudy:
      "Em 5 meses, o blog jurídico posicionou 12 artigos na primeira página do Google para termos como 'recuperação judicial' e 'compliance LGPD'. Um CEO de startup encontrou o escritório via Google, agendou consulta pelo site e fechou contrato de assessoria mensal de R$ 12.000 — o maior cliente captado fora de indicação na história do escritório.",
    benefits: [
      "SEO para termos jurídicos",
      "Blog de autoridade",
      "Triagem inteligente de consultas",
      "Design sóbrio e confiável",
      "Depoimentos corporativos",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful", "Vercel"],
    expectedResults: [
      { label: "Consultas/mês", value: "25+" },
      { label: "Conversão em contrato", value: "40%" },
      { label: "Artigos no Google", value: "12" },
      { label: "Ticket assessoria", value: "R$ 12k" },
    ],
    highlightMetric: { label: "Consultas qualificadas/mês", value: "25+" },
    colors: {
      primary: "#1E293B",
      secondary: "#7F1D1D",
      accent: "#F1F5F9",
      gradient: "from-slate-800 to-red-900",
    },
    mockupLayout: "legal",
    domain: "mendesoliveira.adv.br",
    featured: false,
    year: "2025",
    client: "Mendes & Oliveira Advocacia",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectCategories(): string[] {
  return [...new Set(projects.map((p) => p.category))];
}
