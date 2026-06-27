"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContatoContent() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-16">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="mb-4 inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Orçamento
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Vamos conversar sobre seu{" "}
              <span className="gradient-text">projeto</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Preencha o formulário abaixo e fale diretamente com a gente pelo WhatsApp.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-bold">Solicite seu orçamento</h2>
              <ContactForm />
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
