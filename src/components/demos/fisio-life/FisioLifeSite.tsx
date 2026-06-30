"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  Clock,
  Heart,
  MessageCircle,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { DemoChrome } from "@/components/demos/DemoChrome";
import {
  FISIO_THEME,
  FISIO_WHATSAPP_DEFAULT,
  fisioWhatsApp,
} from "@/components/demos/fisio-life/theme";

const treatments = [
  {
    icon: Activity,
    title: "Fisioterapia Ortopédica",
    desc: "Recuperação de lesões musculares, articulares e pós-operatório com protocolos personalizados.",
  },
  {
    icon: Heart,
    title: "Pilates Clínico",
    desc: "Fortalecimento, postura e reabilitação com exercícios adaptados à sua condição física.",
  },
  {
    icon: Stethoscope,
    title: "RPG",
    desc: "Reeducação Postural Global para correção de desvios e alívio de dores crônicas.",
  },
  {
    icon: Shield,
    title: "Fisioterapia Esportiva",
    desc: "Prevenção e tratamento de lesões para atletas amadores e profissionais.",
  },
  {
    icon: Users,
    title: "Fisioterapia Geriátrica",
    desc: "Manutenção da mobilidade, equilíbrio e qualidade de vida na terceira idade.",
  },
  {
    icon: Activity,
    title: "Terapia Manual",
    desc: "Técnicas manuais para liberação miofascial, mobilização articular e redução de dor.",
  },
];

const team = [
  {
    name: "Dr. Pedro Almeida",
    role: "Fisioterapeuta Ortopédico",
    cref: "CREFITO-3 12345-F",
    initials: "PA",
  },
  {
    name: "Dra. Mariana Costa",
    role: "Especialista em RPG",
    cref: "CREFITO-3 23456-F",
    initials: "MC",
  },
  {
    name: "Dr. Lucas Ferreira",
    role: "Fisioterapia Esportiva",
    cref: "CREFITO-3 34567-F",
    initials: "LF",
  },
];

const differentials = [
  {
    icon: Award,
    title: "Equipe especializada",
    desc: "Profissionais com pós-graduação e atualização constante em novas técnicas.",
  },
  {
    icon: Stethoscope,
    title: "Avaliação completa",
    desc: "Diagnóstico funcional detalhado antes de iniciar qualquer protocolo de tratamento.",
  },
  {
    icon: Clock,
    title: "Horários flexíveis",
    desc: "Atendimento de segunda a sábado, com opções pela manhã, tarde e noite.",
  },
  {
    icon: Shield,
    title: "Estrutura moderna",
    desc: "Equipamentos de última geração e salas amplas para reabilitação completa.",
  },
];

const faqs = [
  {
    q: "Preciso de encaminhamento médico?",
    a: "Não é obrigatório. Você pode agendar diretamente uma avaliação fisioterapêutica. Caso tenha encaminhamento, traga na primeira consulta.",
  },
  {
    q: "Quantas sessões vou precisar?",
    a: "Depende do quadro clínico. Após a avaliação inicial, montamos um plano com número estimado de sessões e frequência ideal.",
  },
  {
    q: "Vocês aceitam convênios?",
    a: "Sim, trabalhamos com os principais convênios de saúde. Consulte nossa equipe para verificar a cobertura do seu plano.",
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "A avaliação dura cerca de 50 minutos. Fazemos anamnese, testes funcionais e já iniciamos o tratamento quando indicado.",
  },
];

function WhatsAppBtn({
  children,
  className,
  style,
  message = FISIO_WHATSAPP_DEFAULT,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  message?: string;
}) {
  return (
    <a
      href={fisioWhatsApp(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}

export function FisioLifeSite() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: FISIO_THEME.background, color: FISIO_THEME.dark }}
    >
      <DemoChrome />

      {/* Navbar */}
      <header
        className="sticky top-[41px] z-50 border-b backdrop-blur-md"
        style={{ borderColor: `${FISIO_THEME.primary}20`, backgroundColor: `${FISIO_THEME.background}E8` }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="#inicio" className="flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
              style={{ backgroundColor: FISIO_THEME.primary }}
            >
              FL
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-950">FisioLife</p>
              <p className="text-[10px] font-medium text-emerald-600">Fisioterapia & Reabilitação</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-emerald-800/60 md:flex">
            <a href="#tratamentos" className="transition-colors hover:text-emerald-700">Tratamentos</a>
            <a href="#equipe" className="transition-colors hover:text-emerald-700">Equipe</a>
            <a href="#diferenciais" className="transition-colors hover:text-emerald-700">Diferenciais</a>
            <a href="#faq" className="transition-colors hover:text-emerald-700">FAQ</a>
          </nav>

          <WhatsAppBtn
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
            style={{ backgroundColor: FISIO_THEME.primary }}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Agendar</span>
          </WhatsAppBtn>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(ellipse at 70% 30%, ${FISIO_THEME.accent}, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold"
              style={{ backgroundColor: FISIO_THEME.accent, color: FISIO_THEME.secondary }}
            >
              <Activity className="h-3.5 w-3.5" />
              Reabilitação com excelência
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-emerald-950 sm:text-5xl">
              Recupere sua{" "}
              <span style={{ color: FISIO_THEME.primary }}>mobilidade</span> e qualidade de vida
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-emerald-800/60">
              Clínica de fisioterapia com tratamentos personalizados, equipe
              especializada e estrutura completa para sua recuperação.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppBtn
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: FISIO_THEME.primary }}
              >
                Agendar avaliação
                <ArrowRight className="h-4 w-4" />
              </WhatsAppBtn>
              <a
                href="#tratamentos"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
              >
                Ver tratamentos
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-emerald-100 pt-8">
              {[
                { v: "5.000+", l: "Pacientes" },
                { v: "12+", l: "Anos" },
                { v: "4.9★", l: "Avaliação" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-bold" style={{ color: FISIO_THEME.primary }}>{s.v}</p>
                  <p className="text-xs text-emerald-700/50">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div
              className="overflow-hidden rounded-3xl shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${FISIO_THEME.primary}, ${FISIO_THEME.secondary})` }}
            >
              <div className="aspect-[4/3] p-8">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-100">Clínica completa</p>
                    <p className="mt-1 text-2xl font-bold text-white">Reabilitação integral</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Ortopedia", "Pilates", "RPG", "Esportiva"].map((t) => (
                      <div key={t} className="rounded-xl bg-white/15 px-3 py-2 text-center text-xs font-medium text-white backdrop-blur">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs font-bold text-emerald-900">Avaliação gratuita</p>
              <p className="text-[10px] text-emerald-600">Primeira consulta sem compromisso</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="py-20" style={{ backgroundColor: FISIO_THEME.accent }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">Tratamentos</h2>
            <p className="mx-auto mt-3 max-w-lg text-emerald-800/60">
              Protocolos especializados para cada necessidade de reabilitação
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: FISIO_THEME.accent }}
                >
                  <t.icon className="h-5 w-5" style={{ color: FISIO_THEME.primary }} />
                </div>
                <h3 className="mt-4 font-bold text-emerald-950">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-800/60">{t.desc}</p>
                <WhatsAppBtn
                  message={`Olá! Tenho interesse em ${t.title} na FisioLife.`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: FISIO_THEME.primary }}
                >
                  Agendar <ArrowRight className="h-3.5 w-3.5" />
                </WhatsAppBtn>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">Nossa Equipe</h2>
            <p className="mt-3 text-emerald-800/60">Profissionais qualificados e dedicados à sua recuperação</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-xl font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${FISIO_THEME.primary}, ${FISIO_THEME.secondary})` }}
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 font-bold text-emerald-950">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: FISIO_THEME.primary }}>{member.role}</p>
                <p className="mt-1 text-xs text-emerald-700/50">{member.cref}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20" style={{ backgroundColor: "#F0FDF4" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">Diferenciais</h2>
            <p className="mt-3 text-emerald-800/60">Por que escolher a FisioLife</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <item.icon className="mx-auto h-8 w-8" style={{ color: FISIO_THEME.primary }} />
                <h3 className="mt-4 font-bold text-emerald-950">{item.title}</h3>
                <p className="mt-2 text-sm text-emerald-800/60">{item.desc}</p>
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
            <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">Perguntas Frequentes</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl border border-emerald-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-emerald-950"
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-emerald-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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
                      <p className="border-t border-emerald-50 px-5 py-4 text-sm leading-relaxed text-emerald-800/60">
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

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 text-center sm:p-12"
            style={{
              background: `linear-gradient(135deg, ${FISIO_THEME.primary}, ${FISIO_THEME.secondary})`,
            }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Comece sua recuperação hoje
            </h2>
            <p className="mx-auto mt-4 max-w-md text-emerald-100">
              Agende sua avaliação gratuita pelo WhatsApp. Nossa equipe responde rapidamente.
            </p>
            <WhatsAppBtn className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold shadow-xl transition-transform hover:scale-105" style={{ color: FISIO_THEME.secondary }}>
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </WhatsAppBtn>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-emerald-100">
              {["Avaliação gratuita", "Convênios aceitos", "Sem fila de espera"].map((item) => (
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
      <footer className="border-t border-emerald-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
              style={{ backgroundColor: FISIO_THEME.primary }}
            >
              FL
            </div>
            <span className="font-bold text-emerald-950">FisioLife</span>
          </div>
          <p className="text-xs text-emerald-700/50">
            Av. Brasil, 2500 — Funcionários, Belo Horizonte · Seg–Sáb 7h–21h
          </p>
          <p className="text-xs text-emerald-700/50">© 2025 FisioLife Fisioterapia</p>
        </div>
      </footer>
    </div>
  );
}
