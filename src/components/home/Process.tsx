"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Layout,
  Code,
  CheckCircle,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

const stepIcons: LucideIcon[] = [
  MessageCircle,
  Layout,
  Code,
  CheckCircle,
  Rocket,
];

export function Process() {
  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <SectionHeading
          eyebrow="Como Funciona"
          title="Seu site pronto em poucos passos"
          description="Um processo simples e transparente, do primeiro contato à publicação do seu site."
        />

        <div className="relative">
          <div className="absolute top-10 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative text-center"
                >
                  <div className="relative z-10 mx-auto mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10">
                    <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full gradient-bg text-xs font-bold text-white shadow-md">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mb-2 font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
