export const siteConfig = {
  name: "PageBoost",
  tagline: "Sites que geram clientes",
  description:
    "Criação de landing pages e sites profissionais que convertem visitantes em clientes. Design responsivo, SEO e entrega em até 5 dias.",
  url: "https://pageboost.com.br",
  ogImage: "/rocket.png",
  whatsapp: "5532998064217",
  whatsappMessage:
    "Olá! Vim pelo site PageBoost e gostaria de solicitar um orçamento para criação de site.",
  email: "plbrpc@gmail.com",
  phone: "+55 (32) 99806-4217",
  phoneTel: "5532998064217",
  address: "São Paulo, SP — Brasil",
  social: {
    instagram: "https://instagram.com/pageboost",
    linkedin: "https://linkedin.com/company/pageboost",
  },
};

export function getWhatsAppUrl(message?: string) {
  const text = message ?? siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const credibilityPoints = [
  { icon: "Clock", label: "Entrega em até 5 dias" },
  { icon: "RefreshCw", label: "Até 2 revisões inclusas" },
  { icon: "MessageCircle", label: "Atendimento direto pelo WhatsApp" },
  { icon: "Palette", label: "Desenvolvimento personalizado" },
] as const;
