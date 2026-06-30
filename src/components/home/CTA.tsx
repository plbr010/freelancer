"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/site";

interface CTAProps {
  title?: string;
  description?: string;
  className?: string;
}

export function CTA({
  title = "Pronto para ter um site profissional que gera mais contatos?",
  description = "Solicite um orçamento sem compromisso e receba uma proposta personalizada.",
  className,
}: CTAProps) {
  return (
    <section className={className}>
      <Container className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border p-8 text-center sm:p-16"
        >
          <div className="absolute inset-0 gradient-bg opacity-10" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={getWhatsAppUrl()} external size="lg">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
              <Button href="/contato" variant="outline" size="lg">
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
