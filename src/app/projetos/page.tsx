import type { Metadata } from "next";
import { ProjetosContent } from "@/components/projects/ProjetosContent";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Conheça nosso portfólio de sites profissionais para clínicas, imobiliárias, academias e empresas de diversos segmentos.",
};

export default function ProjetosPage() {
  return <ProjetosContent />;
}
