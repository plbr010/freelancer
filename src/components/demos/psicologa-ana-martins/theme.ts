import { siteConfig } from "@/lib/site";

export const ANA_THEME = {
  primary: "#7C3AED",
  secondary: "#5B21B6",
  accent: "#EDE9FE",
  background: "#FDFCFF",
  warm: "#F5F3FF",
  dark: "#2E1065",
} as const;

export function anaWhatsApp(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const ANA_WHATSAPP_DEFAULT =
  "Olá! Vi o site da Psicóloga Ana Martins e gostaria de agendar uma sessão.";
