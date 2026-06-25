import type { Metadata } from "next";
import { ContatoContent } from "@/components/pages/ContatoContent";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite um orçamento gratuito para criação de site profissional. Resposta em até 24 horas úteis.",
};

export default function ContatoPage() {
  return <ContatoContent />;
}
