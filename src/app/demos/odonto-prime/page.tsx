import type { Metadata } from "next";
import { OdontoPrimeSite } from "@/components/demos/odonto-prime/OdontoPrimeSite";

export const metadata: Metadata = {
  title: {
    absolute: "Odonto Prime — Clínica Odontológica",
  },
  description:
    "Clínica odontológica premium com implantes, clareamento, ortodontia invisível e agendamento via WhatsApp.",
  robots: { index: false, follow: false },
};

export default function OdontoPrimeDemoPage() {
  return <OdontoPrimeSite />;
}
