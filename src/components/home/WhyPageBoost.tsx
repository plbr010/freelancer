"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  MessageCircle,
  Zap,
  Search,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyPageBoost } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Smartphone,
  MessageCircle,
  Zap,
  Search,
  Target,
};

export function WhyPageBoost() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a PageBoost?"
          description="Tudo o que você precisa para ter um site profissional que gera contatos — sem complicação."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPageBoost.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute top-0 right-0 h-28 w-28 translate-x-6 -translate-y-6 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
