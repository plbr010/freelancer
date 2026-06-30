"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Check,
  Gavel,
  MessageCircle,
  Scale,
  Send,
  Shield,
  Users,
} from "lucide-react";
import { DemoChrome } from "@/components/demos/DemoChrome";
import {
  OLIVEIRA_THEME,
  OLIVEIRA_WHATSAPP_DEFAULT,
  oliveiraWhatsApp,
} from "@/components/demos/oliveira-advocacia/theme";

const practiceAreas = [
  {
    icon: Building2,
    title: "Direito Empresarial",
    desc: "Contratos societários, governança corporativa, fusões e aquisições para empresas de todos os portes.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    desc: "Assessoria preventiva e contenciosa para empregadores e empregados em demandas trabalhistas.",
  },
  {
    icon: Scale,
    title: "Direito Tributário",
    desc: "Planejamento fiscal, defesa em autuações e recuperação de créditos tributários.",
  },
  {
    icon: Shield,
    title: "Compliance & LGPD",
    desc: "Adequação à Lei Geral de Proteção de Dados e programas de compliance empresarial.",
  },
  {
    icon: Gavel,
    title: "Recuperação Judicial",
    desc: "Reestruturação de dívidas e planos de recuperação para empresas em crise financeira.",
  },
  {
    icon: Users,
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, indenizações e resolução de conflitos patrimoniais.",
  },
];

const team = [
  {
    name: "Dr. Ricardo Oliveira",
    role: "Sócio-fundador",
    area: "Direito Empresarial",
    oab: "OAB/SP 234.567",
    initials: "RO",
  },
  {
    name: "Dra. Fernanda Lima",
    role: "Sócia",
    area: "Direito Tributário",
    oab: "OAB/SP 198.432",
    initials: "FL",
  },
  {
    name: "Dr. André Mendes",
    role: "Sócio",
    area: "Recuperação Judicial",
    oab: "OAB/SP 176.890",
    initials: "AM",
  },
];

const cases = [
  {
    title: "Recuperação de empresa do setor industrial",
    result: "R$ 12M em dívidas reestruturadas",
    area: "Recuperação Judicial",
  },
  {
    title: "Defesa tributária para grupo empresarial",
    result: "Economia de R$ 2.4M em autuações",
    area: "Direito Tributário",
  },
  {
    title: "Adequação LGPD para fintech",
    result: "100% conformidade em 90 dias",
    area: "Compliance & LGPD",
  },
];

const differentials = [
  {
    icon: Award,
    title: "20+ anos de experiência",
    desc: "Histórico sólido em direito empresarial e consultivo de alto nível.",
  },
  {
    icon: Users,
    title: "Atendimento personalizado",
    desc: "Cada cliente recebe um advogado dedicado e acesso direto aos sócios.",
  },
  {
    icon: Shield,
    title: "Sigilo absoluto",
    desc: "Ética e confidencialidade em todas as relações com clientes.",
  },
  {
    icon: Briefcase,
    title: "Visão estratégica",
    desc: "Soluções jurídicas alinhadas aos objetivos de negócio do cliente.",
  },
];

function WhatsAppBtn({
  children,
  className,
  style,
  message = OLIVEIRA_WHATSAPP_DEFAULT,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  message?: string;
}) {
  return (
    <a
      href={oliveiraWhatsApp(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}

export function OliveiraAdvocaciaSite() {
  const [formLoading, setFormLoading] = useState(false);

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);

    const data = new FormData(e.currentTarget);
    const nome = data.get("nome") as string;
    const empresa = data.get("empresa") as string;
    const email = data.get("email") as string;
    const area = data.get("area") as string;
    const mensagem = data.get("mensagem") as string;

    const text = [
      `*Consulta — Oliveira Advocacia*`,
      ``,
      `*Nome:* ${nome}`,
      `*Empresa:* ${empresa}`,
      `*E-mail:* ${email}`,
      `*Área de interesse:* ${area}`,
      ``,
      `*Mensagem:*`,
      mensagem,
    ].join("\n");

    window.location.href = oliveiraWhatsApp(text);
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: OLIVEIRA_THEME.background, color: OLIVEIRA_THEME.primary }}
    >
      <DemoChrome />

      {/* Navbar */}
      <header
        className="sticky top-[41px] z-50 border-b backdrop-blur-md"
        style={{ borderColor: "#E2E8F0", backgroundColor: "rgba(255,255,255,0.92)" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="#inicio" className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-900">
              Oliveira <span style={{ color: OLIVEIRA_THEME.secondary }}>Advocacia</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
              Direito Empresarial
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#areas" className="transition-colors hover:text-slate-900">Áreas</a>
            <a href="#equipe" className="transition-colors hover:text-slate-900">Equipe</a>
            <a href="#casos" className="transition-colors hover:text-slate-900">Casos</a>
            <a href="#contato" className="transition-colors hover:text-slate-900">Contato</a>
          </nav>

          <WhatsAppBtn
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: OLIVEIRA_THEME.secondary }}
          >
            Consulta
          </WhatsAppBtn>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: OLIVEIRA_THEME.primary }}>
        <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, ${OLIVEIRA_THEME.gold}40, transparent)` }} />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: OLIVEIRA_THEME.gold }}
            >
              São Paulo · Desde 2004
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Assessoria jurídica estratégica para empresas
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Protegemos seu negócio com soluções em direito empresarial, tributário,
              trabalhista e compliance. Mais de 20 anos de excelência jurídica.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <WhatsAppBtn
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: OLIVEIRA_THEME.secondary }}
              >
                Agendar consulta
                <ArrowRight className="h-4 w-4" />
              </WhatsAppBtn>
              <a
                href="#areas"
                className="inline-flex items-center gap-2 border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Áreas de atuação
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {[
                { v: "500+", l: "Clientes ativos" },
                { v: "20+", l: "Anos" },
                { v: "98%", l: "Taxa de sucesso" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-bold" style={{ color: OLIVEIRA_THEME.gold }}>{s.v}</p>
                  <p className="text-xs text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section id="areas" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Áreas de Atuação</h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-500">
              Soluções jurídicas completas para empresas e profissionais
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: OLIVEIRA_THEME.secondary }}
                  />
                  <div>
                    <area.icon className="mb-3 h-5 w-5 text-slate-700" />
                    <h3 className="font-bold text-slate-900">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{area.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-20" style={{ backgroundColor: OLIVEIRA_THEME.accent }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nossa Equipe</h2>
            <p className="mt-3 text-slate-500">Sócios com expertise reconhecida no mercado</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 text-center shadow-sm"
              >
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center text-xl font-bold text-white"
                  style={{ backgroundColor: OLIVEIRA_THEME.primary }}
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: OLIVEIRA_THEME.secondary }}>{member.role}</p>
                <p className="mt-1 text-xs text-slate-500">{member.area}</p>
                <p className="mt-2 text-[10px] text-slate-400">{member.oab}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <item.icon className="mx-auto h-7 w-7" style={{ color: OLIVEIRA_THEME.secondary }} />
                <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos atendidos */}
      <section id="casos" className="py-20" style={{ backgroundColor: OLIVEIRA_THEME.primary }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Casos Atendidos</h2>
            <p className="mt-3 text-slate-400">Resultados que demonstram nossa capacidade</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: OLIVEIRA_THEME.gold }}
                >
                  {c.area}
                </span>
                <h3 className="mt-3 font-semibold text-white">{c.title}</h3>
                <p className="mt-3 text-lg font-bold" style={{ color: OLIVEIRA_THEME.gold }}>{c.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de contato */}
      <section id="contato" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Solicite uma consulta
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas
                úteis para entender sua demanda jurídica.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Primeira consulta sem compromisso",
                  "Atendimento presencial e online",
                  "Sigilo profissional garantido",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="h-4 w-4" style={{ color: OLIVEIRA_THEME.secondary }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleContact}
              className="space-y-4 border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Nome completo *
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
                  placeholder="Nome da empresa"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Área de interesse *
                </label>
                <select
                  id="area"
                  name="area"
                  required
                  className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
                >
                  <option value="">Selecione uma área</option>
                  {practiceAreas.map((a) => (
                    <option key={a.title} value={a.title}>{a.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  className="w-full resize-none border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
                  placeholder="Descreva brevemente sua demanda jurídica..."
                />
              </div>
              <button
                type="submit"
                disabled={formLoading}
                className="inline-flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-8"
                style={{ backgroundColor: OLIVEIRA_THEME.secondary }}
              >
                {formLoading ? "Redirecionando..." : "Enviar mensagem"}
                <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-slate-400">
                Ao enviar, você será redirecionado para o WhatsApp do escritório.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16" style={{ backgroundColor: OLIVEIRA_THEME.accent }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Precisa de assessoria jurídica agora?
            </h2>
            <p className="mt-3 text-slate-500">
              Fale diretamente com nossa equipe pelo WhatsApp.
            </p>
            <WhatsAppBtn
              className="mt-6 inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: OLIVEIRA_THEME.primary }}
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </WhatsAppBtn>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10" style={{ backgroundColor: OLIVEIRA_THEME.primary }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div>
            <p className="text-sm font-bold text-white">Oliveira Advocacia</p>
            <p className="text-[10px] text-slate-400">Direito Empresarial · São Paulo</p>
          </div>
          <p className="text-xs text-slate-400">
            Av. Faria Lima, 3000 — Itaim Bibi, São Paulo
          </p>
          <p className="text-xs text-slate-500">© 2025 Oliveira Advocacia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
