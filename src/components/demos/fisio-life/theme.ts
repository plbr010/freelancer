import { siteConfig } from "@/lib/site";

export const FISIO_THEME = {
  primary: "#059669",
  secondary: "#047857",
  accent: "#D1FAE5",
  background: "#F8FFFE",
  dark: "#064E3B",
} as const;

export function fisioWhatsApp(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const FISIO_WHATSAPP_DEFAULT =
  "Olá! Vi o site da FisioLife e gostaria de agendar uma avaliação.";
