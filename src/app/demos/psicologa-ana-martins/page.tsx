import type { Metadata } from "next";
import { PsicologaAnaMartinsSite } from "@/components/demos/psicologa-ana-martins/PsicologaAnaMartinsSite";

export const metadata: Metadata = {
  title: {
    absolute: "Psicóloga Ana Martins — Terapia Clínica",
  },
  description:
    "Psicóloga clínica especializada em ansiedade, relacionamentos e autoestima. Atendimento presencial e online em São Paulo.",
  robots: { index: false, follow: false },
};

export default function PsicologaAnaMartinsDemoPage() {
  return <PsicologaAnaMartinsSite />;
}
