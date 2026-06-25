"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  title?: string;
  description?: string;
  className?: string;
}

export function CTA({
  title = "Pronto para ter um site que vende?",
  description = "Solicite um orçamento gratuito e descubra como podemos transformar a presença digital da sua empresa.",
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
              <Button href="/contato" size="lg">
                Solicitar orçamento gratuito
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/projetos" variant="outline" size="lg">
                Ver projetos
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
