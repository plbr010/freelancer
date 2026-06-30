"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  Heart,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { DemoChrome } from "@/components/demos/DemoChrome";
import {
  ANA_THEME,
  ANA_WHATSAPP_DEFAULT,
  anaWhatsApp,
} from "@/components/demos/psicologa-ana-martins/theme";

const specialties = [
  {
    icon: Heart,
    title: "Ansiedade e Estresse",
    desc: "Estratégias para lidar com preocupações, crises de ansiedade e sobrecarga emocional no dia a dia.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    desc: "Terapia de casal e orientação para vínculos mais saudáveis, comunicação e resolução de conflitos.",
  },
  {
    icon: Brain,
    title: "Autoestima",
    desc: "Fortalecimento da identidade, autoconfiança e desenvolvimento pessoal com acolhimento.",
  },
  {
    icon: Shield,
    title: "Depressão",
    desc: "Acompanhamento clínico para recuperação emocional com técnicas baseadas em evidências.",
  },
  {
    icon: Sparkles,
    title: "Transições de Vida",
    desc: "Apoio em mudanças profissionais, luto, maternidade e novos ciclos da vida.",
  },
  {
    icon: Heart,
    title: "Terapia Online",
    desc: "Sessões por videochamada com a mesma qualidade e sigilo do atendimento presencial.",
  },
];

const approachPoints = [
  {
    title: "Terapia Cognitivo-Comportamental",
    desc: "Foco em identificar padrões de pensamento e comportamento para mudanças duradouras.",
  },
  {
    title: "Escuta ativa e acolhimento",
    desc: "Um espaço seguro, sem julgamentos, onde você pode se expressar com liberdade.",
  },
  {
    title: "Plano terapêutico individual",
    desc: "Cada paciente recebe um plano personalizado de acordo com suas necessidades e objetivos.",
  },
];

const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira consulta é um momento de acolhimento e entrevista inicial. Conversamos sobre suas demandas, histórico e expectativas para definirmos juntos o caminho terapêutico.",
  },
  {
    q: "As sessões são presenciais ou online?",
    a: "Ofereço ambas as modalidades. O atendimento online tem a mesma eficácia e sigilo, ideal para quem tem agenda corrida ou mora em outras cidades.",
  },
  {
    q: "Qual a duração e frequência das sessões?",
    a: "Cada sessão dura 50 minutos. A frequência recomendada é semanal, mas pode ser ajustada conforme a necessidade de cada paciente.",
  },
  {
    q: "O atendimento é sigiloso?",
    a: "Sim. O sigilo profissional é garantido pelo Código de Ética do Psicólogo. Tudo o que é compartilhado nas sessões é estritamente confidencial.",
  },
];

function WhatsAppBtn({
  children,
  className,
  style,
  message = ANA_WHATSAPP_DEFAULT,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  message?: string;
}) {
  return (
    <a
      href={anaWhatsApp(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}

export function PsicologaAnaMartinsSite() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: ANA_THEME.background, color: ANA_THEME.dark }}
    >
      <DemoChrome />

      {/* Navbar */}
      <header
        className="sticky top-[41px] z-50 border-b backdrop-blur-md"
        style={{ borderColor: `${ANA_THEME.primary}15`, backgroundColor: `${ANA_THEME.background}E8` }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="#inicio" className="flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: ANA_THEME.primary }}
            >
              AM
            </div>
            <div>
              <p className="text-sm font-semibold text-violet-950">Ana Martins</p>
              <p className="text-[10px] text-violet-500">Psicóloga · CRP 06/12345</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-violet-700/70 md:flex">
            <a href="#sobre" className="transition-colors hover:text-violet-700">Sobre</a>
            <a href="#especialidades" className="transition-colors hover:text-violet-700">Especialidades</a>
            <a href="#abordagem" className="transition-colors hover:text-violet-700">Abordagem</a>
            <a href="#faq" className="transition-colors hover:text-violet-700">FAQ</a>
          </nav>

          <WhatsAppBtn
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-md transition-transform hover:scale-105"
            style={{ backgroundColor: ANA_THEME.primary }}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Agendar</span>
          </WhatsAppBtn>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 20% 50%, ${ANA_THEME.accent}, transparent 55%), radial-gradient(ellipse at 80% 20%, ${ANA_THEME.warm}, transparent 50%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium"
              style={{ backgroundColor: ANA_THEME.accent, color: ANA_THEME.secondary }}
            >
              <Heart className="h-3.5 w-3.5" />
              Um espaço seguro para você
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-violet-950 sm:text-5xl">
              Cuidar da mente é um ato de{" "}
              <span style={{ color: ANA_THEME.primary }}>coragem</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-violet-700/60">
              Psicóloga clínica especializada em ansiedade, relacionamentos e
              desenvolvimento pessoal. Atendimento presencial e online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppBtn
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: ANA_THEME.primary }}
              >
                Agendar sessão
                <ArrowRight className="h-4 w-4" />
              </WhatsAppBtn>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-7 py-3.5 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-50"
              >
                Conhecer a Ana
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div
              className="relative h-80 w-72 overflow-hidden rounded-[2rem] shadow-2xl sm:h-96 sm:w-80"
              style={{ background: `linear-gradient(160deg, ${ANA_THEME.accent}, ${ANA_THEME.primary}30)` }}
            >
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div
                  className="mb-4 flex h-24 w-24 items-center justify-center rounded-full text-2xl font-semibold text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${ANA_THEME.primary}, ${ANA_THEME.secondary})` }}
                >
                  AM
                </div>
                <p className="text-lg font-semibold text-violet-900">Ana Martins</p>
                <p className="mt-1 text-sm text-violet-600">Psicóloga Clínica</p>
                <p className="mt-4 text-xs text-violet-500">CRP 06/12345 · São Paulo</p>
              </div>
            </div>
            <div
              className="absolute -bottom-3 -right-2 rounded-2xl bg-white p-4 shadow-xl"
            >
              <p className="text-xs font-semibold text-violet-900">Primeira sessão</p>
              <p className="text-[10px] text-violet-500">Acolhimento e escuta</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20" style={{ backgroundColor: ANA_THEME.warm }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: ANA_THEME.primary }}>
                Sobre mim
              </span>
              <h2 className="mt-2 text-3xl font-semibold text-violet-950 sm:text-4xl">
                Olá, sou a Ana Martins
              </h2>
              <div className="mt-6 space-y-4 text-violet-700/70 leading-relaxed">
                <p>
                  Sou psicóloga clínica formada pela USP, com especialização em
                  Terapia Cognitivo-Comportamental e mais de 10 anos de experiência
                  em atendimento adulto e adolescente.
                </p>
                <p>
                  Acredito que cada pessoa carrega uma história única. Meu trabalho
                  é oferecer um espaço de acolhimento genuíno, onde você se sinta
                  à vontade para explorar suas emoções e encontrar caminhos para o
                  bem-estar.
                </p>
                <p>
                  Atendo presencialmente em São Paulo e online para todo o Brasil,
                  com horários flexíveis que se adaptam à sua rotina.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { v: "10+", l: "Anos de experiência" },
                { v: "1.200+", l: "Pacientes atendidos" },
                { v: "4.9★", l: "Avaliação" },
                { v: "100%", l: "Sigilo garantido" },
              ].map((stat, i) => (
                <div
                  key={stat.l}
                  className="rounded-2xl bg-white p-5 text-center shadow-sm"
                >
                  <p className="text-2xl font-bold" style={{ color: ANA_THEME.primary }}>{stat.v}</p>
                  <p className="mt-1 text-xs text-violet-600/60">{stat.l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-violet-950 sm:text-4xl">Especialidades</h2>
            <p className="mx-auto mt-3 max-w-lg text-violet-700/60">
              Áreas de atuação para te ajudar em diferentes momentos da vida
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-violet-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: ANA_THEME.accent }}
                >
                  <item.icon className="h-5 w-5" style={{ color: ANA_THEME.primary }} />
                </div>
                <h3 className="mt-4 font-semibold text-violet-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-violet-700/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Abordagem terapêutica */}
      <section id="abordagem" className="py-20" style={{ backgroundColor: ANA_THEME.accent }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-violet-950 sm:text-4xl">
              Abordagem Terapêutica
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-violet-700/70">
              Como conduzo o processo terapêutico com cada paciente
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {approachPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div
                  className="mb-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: ANA_THEME.primary }}
                >
                  {i + 1}
                </div>
                <h3 className="font-semibold text-violet-950">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-violet-700/60">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-semibold text-violet-950 sm:text-4xl">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl border border-violet-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-violet-950"
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-violet-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-violet-50 px-5 py-4 text-sm leading-relaxed text-violet-700/60">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agendamento / CTA */}
      <section id="agendamento" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 text-center sm:p-14"
            style={{
              background: `linear-gradient(135deg, ${ANA_THEME.primary}, ${ANA_THEME.secondary})`,
            }}
          >
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Pronto para dar o primeiro passo?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-violet-100">
              Agende sua sessão pelo WhatsApp. Respondo em até 24 horas com
              horários disponíveis e valores.
            </p>
            <WhatsAppBtn className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold shadow-xl transition-transform hover:scale-105" style={{ color: ANA_THEME.secondary }}>
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </WhatsAppBtn>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-violet-100">
              {["Presencial ou online", "Sigilo absoluto", "Horários flexíveis"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-violet-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: ANA_THEME.primary }}
            >
              AM
            </div>
            <div>
              <p className="text-sm font-semibold text-violet-950">Ana Martins</p>
              <p className="text-[10px] text-violet-500">CRP 06/12345</p>
            </div>
          </div>
          <p className="text-xs text-violet-500">
            Rua Augusta, 1200 — Consolação, São Paulo · Seg–Sex 8h–20h
          </p>
          <p className="text-xs text-violet-400">© 2025 Ana Martins Psicologia</p>
        </div>
      </footer>
    </div>
  );
}
