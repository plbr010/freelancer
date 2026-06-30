"use client";

import { motion } from "framer-motion";
import {
  Clock,
  RefreshCw,
  MessageCircle,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { credibilityPoints } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  RefreshCw,
  MessageCircle,
  Palette,
};

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credibilityPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold leading-snug sm:text-base">
                  {point.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
