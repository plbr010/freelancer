"use client";

import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Heart,
  Lightbulb,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/home/CTA";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Cada pixel, cada linha de código é pensada para converter visitantes em clientes.",
  },
  {
    icon: Zap,
    title: "Performance Máxima",
    description:
      "Sites que carregam em menos de 1 segundo. Velocidade é conversão.",
  },
  {
    icon: Heart,
    title: "Paixão pelo Detalhe",
    description:
      "Microinterações, animações suaves e design impecável em cada projeto.",
  },
  {
    icon: Users,
    title: "Parceria Real",
    description:
      "Trabalhamos lado a lado com você, do briefing à entrega e além.",
  },
];

const skills = [
  "Next.js & React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "SEO Técnico",
  "UI/UX Design",
  "Performance Web",
  "Integrações API",
];

export function SobreContent() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Sobre nós
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Transformamos empresas com{" "}
              <span className="gradient-text">sites que vendem</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Somos uma agência especializada em criar presença digital premium
              para empresas que querem se destacar, converter mais e crescer de
              forma sustentável.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">Nossa História</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Studio Web nasceu da frustração de ver empresas excelentes
                  perdendo clientes por causa de sites amadores. Percebemos que
                  muitos negócios investem em produto, equipe e estrutura, mas
                  negligenciam o canal digital mais importante: o site.
                </p>
                <p>
                  Com mais de 50 projetos entregues, desenvolvemos uma metodologia
                  que combina design premium, tecnologia de ponta e estratégia de
                  conversão. Cada site que criamos é uma máquina de gerar
                  oportunidades de negócio.
                </p>
                <p>
                  Não somos apenas desenvolvedores — somos parceiros estratégicos
                  que entendem que um site profissional é o melhor investimento
                  que uma empresa pode fazer.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl gradient-bg shadow-2xl shadow-primary/30">
                    <Code2 className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-5xl font-bold gradient-text">50+</p>
                  <p className="mt-2 text-muted-foreground">Projetos entregues</p>
                  <div className="mt-8 flex gap-8">
                    <div>
                      <p className="text-2xl font-bold">95%</p>
                      <p className="text-xs text-muted-foreground">Satisfação</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">5+</p>
                      <p className="text-xs text-muted-foreground">Anos exp.</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">24h</p>
                      <p className="text-xs text-muted-foreground">Resposta</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 py-20">
        <Container>
          <SectionHeading
            eyebrow="Valores"
            title="O que nos move"
            description="Princípios que guiam cada projeto que entregamos."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                align="left"
                eyebrow="Expertise"
                title="Tecnologias que usamos"
                description="Stack moderna para sites rápidos, seguros e escaláveis."
              />
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: Lightbulb,
                  title: "Estratégia antes do código",
                  text: "Entendemos seu negócio antes de abrir o editor.",
                },
                {
                  icon: Award,
                  title: "Qualidade premium",
                  text: "Padrão de agência internacional, preço justo no Brasil.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <CTA
        title="Vamos criar algo incrível juntos?"
        description="Conte sobre seu projeto e receba uma proposta personalizada em até 24 horas."
      />
    </>
  );
}
