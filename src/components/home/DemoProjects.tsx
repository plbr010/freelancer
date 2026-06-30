"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DemoPreviewCard } from "@/components/demos/DemoPreviewCard";
import { demoProjects } from "@/data/demos";

export function DemoProjects() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Templates"
          title="Templates e Projetos Demonstrativos"
          description="Exemplos de sites profissionais que podemos desenvolver para clínicas, consultórios, empresas e profissionais liberais."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {demoProjects.map((demo, i) => (
            <DemoPreviewCard key={demo.slug} demo={demo} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
