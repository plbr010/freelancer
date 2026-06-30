import type { Metadata } from "next";
import { BellaEsteticaSite } from "@/components/demos/bella-estetica/BellaEsteticaSite";

export const metadata: Metadata = {
  title: {
    absolute: "Bella Estética — Clínica de Estética Avançada",
  },
  description:
    "Clínica de estética premium com harmonização facial, botox, limpeza de pele e agendamento via WhatsApp.",
  robots: { index: false, follow: false },
};

export default function BellaEsteticaDemoPage() {
  return <BellaEsteticaSite />;
}
