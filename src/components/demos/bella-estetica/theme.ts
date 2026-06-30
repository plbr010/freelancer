import { siteConfig } from "@/lib/site";

export const BELLA_THEME = {
  primary: "#B8956A",
  secondary: "#8B6914",
  accent: "#F5E6D3",
  background: "#FAF7F2",
  dark: "#3D2B1F",
} as const;

export function bellaWhatsApp(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const BELLA_WHATSAPP_DEFAULT =
  "Olá! Vi o site da Bella Estética e gostaria de agendar uma avaliação.";
