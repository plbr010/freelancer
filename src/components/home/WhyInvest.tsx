"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Search,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyInvest } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Shield,
  Search,
  Zap,
};

export function WhyInvest() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Por que investir"
          title="Por que investir em um site profissional?"
          description="Seu site é o vendedor que nunca dorme. Veja o que um site premium pode fazer pela sua empresa."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyInvest.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
