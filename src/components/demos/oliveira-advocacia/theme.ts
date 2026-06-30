import { siteConfig } from "@/lib/site";

export const OLIVEIRA_THEME = {
  primary: "#1E293B",
  secondary: "#7F1D1D",
  accent: "#F1F5F9",
  background: "#FAFAFA",
  gold: "#C9A96E",
} as const;

export function oliveiraWhatsApp(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const OLIVEIRA_WHATSAPP_DEFAULT =
  "Olá! Vi o site do escritório Oliveira Advocacia e gostaria de agendar uma consulta.";
