import type { Metadata } from "next";
import { OliveiraAdvocaciaSite } from "@/components/demos/oliveira-advocacia/OliveiraAdvocaciaSite";

export const metadata: Metadata = {
  title: {
    absolute: "Oliveira Advocacia — Direito Empresarial",
  },
  description:
    "Escritório de advocacia empresarial em São Paulo. Direito tributário, trabalhista, recuperação judicial e compliance LGPD.",
  robots: { index: false, follow: false },
};

export default function OliveiraAdvocaciaDemoPage() {
  return <OliveiraAdvocaciaSite />;
}
