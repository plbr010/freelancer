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
  featured?: boolean;
}

export function DemoPreviewCard({
  demo,
  index = 0,
  featured = false,
}: DemoPreviewCardProps) {
  const content = (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500",
          demo.available
            ? "hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/15"
            : "opacity-90"
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${demo.colors.primary}08, ${demo.colors.secondary}12)`,
          }}
        />

        <div className={cn("relative p-5 pb-0 sm:p-6", featured && "sm:p-7")}>
          <div className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <DemoPreviewFrame
              demo={demo}
              className={cn(featured && "aspect-[16/9]")}
            />
          </div>
        </div>

        <div className={cn("relative space-y-5 p-5 sm:p-6", featured && "sm:p-7 sm:pt-5")}>
          <div className="flex items-center justify-between gap-2">
            <span
              className="inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: `${demo.colors.primary}15`,
                color: demo.colors.primary,
              }}
            >
              {demo.category}
            </span>
            {!demo.available && (
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-[10px] text-muted-foreground">
                <Clock className="h-3 w-3" />
                Em breve
              </span>
            )}
          </div>

          <div>
            <h3
              className={cn(
                "font-bold tracking-tight transition-colors group-hover:text-primary",
                featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              )}
            >
              {demo.name}
            </h3>
            <p
              className={cn(
                "mt-3 leading-relaxed text-muted-foreground",
                featured ? "text-base" : "text-sm"
              )}
            >
              {demo.description}
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              Objetivo:{" "}
              <span className="text-foreground/80">{demo.objective}</span>
            </p>
          </div>

          {demo.available ? (
            <span
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3 group-hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${demo.colors.primary}, ${demo.colors.secondary})`,
              }}
            >
              Visualizar Projeto
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-muted px-6 py-3 text-sm font-medium text-muted-foreground">
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
