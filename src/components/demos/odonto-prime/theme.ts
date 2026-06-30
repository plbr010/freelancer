import { siteConfig } from "@/lib/site";

export const ODONTO_THEME = {
  primary: "#0EA5E9",
  secondary: "#0284C7",
  accent: "#E0F2FE",
  dark: "#0F172A",
} as const;

export function odontoWhatsApp(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const ODONTO_WHATSAPP_DEFAULT =
  "Olá! Vi o site da Odonto Prime e gostaria de agendar uma consulta.";
