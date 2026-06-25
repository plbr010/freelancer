import type { Metadata } from "next";
import { SobreContent } from "@/components/pages/SobreContent";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Studio Web — agência especializada em sites profissionais que convertem visitantes em clientes.",
};

export default function SobrePage() {
  return <SobreContent />;
}
