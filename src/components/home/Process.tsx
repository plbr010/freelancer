"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <SectionHeading
          eyebrow="Processo"
          title="Como trabalhamos"
          description="Um processo transparente e colaborativo, do primeiro contato à entrega do seu site."
        />

        <div className="relative">
          <div className="absolute top-8 right-0 left-0 hidden h-0.5 bg-border lg:block" />

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-2xl font-bold shadow-lg">
                  <span className="gradient-text">{step.step}</span>
                </div>
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
