import type { Metadata } from "next";
import { FisioLifeSite } from "@/components/demos/fisio-life/FisioLifeSite";

export const metadata: Metadata = {
  title: {
    absolute: "FisioLife — Clínica de Fisioterapia",
  },
  description:
    "Clínica de fisioterapia com ortopedia, pilates clínico, RPG e fisioterapia esportiva. Agendamento via WhatsApp.",
  robots: { index: false, follow: false },
};

export default function FisioLifeDemoPage() {
  return <FisioLifeSite />;
}
