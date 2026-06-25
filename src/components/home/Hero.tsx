"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectCardMockup } from "@/components/projects/DeviceMockup";
import { projects } from "@/data/projects";

export function Hero() {
  const featuredProject = projects[0];

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="hero-gradient absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-40" />

      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />

      <Container className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Agência de sites premium para empresas</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Sua Empresa Merece um{" "}
          <span className="gradient-text">Site que Vende</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Sites modernos, rápidos e otimizados para transformar visitantes em
          clientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/contato" size="lg">
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/projetos" variant="outline" size="lg">
            Ver projetos
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full max-w-4xl"
        >
          <div className="animate-float">
            <ProjectCardMockup project={featuredProject} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
