"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { DemoProject } from "@/types";
import { DemoPreviewFrame } from "@/components/demos/DemoPreviewFrame";
import { cn } from "@/lib/utils";

interface DemoPreviewCardProps {
  demo: DemoProject;
  index?: number;
}

export function DemoPreviewCard({ demo, index = 0 }: DemoPreviewCardProps) {
  const content = (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="group"
  >
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500",
        demo.available
          ? "hover:border-transparent hover:shadow-2xl hover:shadow-primary/10"
          : "opacity-90"
      )}
    >
      <div className="p-4 pb-0 sm:p-5">
        <DemoPreviewFrame demo={demo} />
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span
            className="inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
            style={{
              backgroundColor: `${demo.colors.primary}15`,
              color: demo.colors.primary,
            }}
          >
            {demo.category}
          </span>
          {!demo.available && (
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              Em breve
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
            {demo.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {demo.description}
          </p>
          <p className="mt-2 text-xs font-medium text-muted-foreground">
            Objetivo: <span className="text-foreground/80">{demo.objective}</span>
          </p>
        </div>

        {demo.available ? (
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all group-hover:gap-2.5 group-hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${demo.colors.primary}, ${demo.colors.secondary})`,
            }}
          >
            Visualizar Projeto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border bg-muted px-5 py-2.5 text-sm font-medium text-muted-foreground">
            Visualizar Projeto
            <ArrowUpRight className="h-4 w-4 opacity-40" />
          </span>
        )}
      </div>
    </div>
  </motion.article>
  );

  if (demo.available) {
    return (
      <Link href={`/demos/${demo.slug}`} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
