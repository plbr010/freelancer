"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { DemoChrome } from "@/components/demos/DemoChrome";
import {
  ODONTO_THEME,
  ODONTO_WHATSAPP_DEFAULT,
  odontoWhatsApp,
} from "@/components/demos/odonto-prime/theme";

const services = [
  {
    icon: "✨",
    title: "Clareamento Dental",
    desc: "Tecnologia a laser com resultados visíveis em uma sessão. Até 8 tons mais claro com segurança.",
    price: "A partir de R$ 890",
  },
  {
    icon: "🦷",
    title: "Implantes Dentários",
    desc: "Reposição definitiva com titânio de alta precisão e cicatrização acelerada.",
    price: "A partir de R$ 2.900",
  },
  {
    icon: "😁",
    title: "Ortodontia Invisível",
    desc: "Alinhadores transparentes personalizados para adultos e adolescentes.",
    price: "Parcelas a partir de R$ 390",
  },
  {
    icon: "💎",
    title: "Lentes de Contato",
    desc: "Harmonização do sorriso com lentes ultrafinas e resultado natural.",
    price: "Sob avaliação",
  },
  {
    icon: "🛡️",
    title: "Periodontia",
    desc: "Tratamento de gengivas e prevenção de doenças periodontais.",
    price: "A partir de R$ 450",
  },
  {
    icon: "👶",
    title: "Odontopediatria",
    desc: "Atendimento lúdico e humanizado para crianças em ambiente acolhedor.",
    price: "A partir de R$ 180",
  },
];

const team = [
  {
    name: "Dra. Camila Rocha",
    role: "Implantodontista",
    cro: "CRO-SP 98.432",
    initials: "CR",
  },
  {
    name: "Dr. Rafael Mendes",
    role: "Ortodontista",
    cro: "CRO-SP 87.210",
    initials: "RM",
  },
  {
    name: "Dra. Juliana Freitas",
    role: "Estética Dental",
    cro: "CRO-SP 91.567",
    initials: "JF",
  },
];

const beforeAfter = [
  { label: "Clareamento", improvement: "8 tons mais claro" },
  { label: "Lentes de contato", improvement: "Sorriso harmonizado" },
  { label: "Ortodontia", improvement: "Alinhamento completo" },
];

const testimonials = [
  {
    name: "Mariana S.",
    text: "Fiz clareamento e lentes na Odonto Prime. O atendimento foi impecável e o resultado superou minhas expectativas.",
    rating: 5,
  },
  {
    name: "Carlos E.",
    text: "Coloquei implantes após anos sem sorrir. A equipe me explicou cada etapa com paciência. Recomendo demais.",
    rating: 5,
  },
  {
    name: "Patrícia L.",
    text: "Agendei pelo WhatsApp em 2 minutos. Consultório moderno, pontual e sem dor. Virou minha clínica de confiança.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Como funciona o agendamento?",
    a: "Basta clicar em qualquer botão de agendamento e falar conosco pelo WhatsApp. Nossa equipe confirma o melhor horário em minutos.",
  },
  {
    q: "Vocês aceitam convênios?",
    a: "Trabalhamos com os principais convênios odontológicos. Consulte nossa equipe para verificar a cobertura do seu plano.",
  },
  {
    q: "O clareamento dói?",
    a: "Utilizamos tecnologia a laser de última geração que minimiza a sensibilidade. A maioria dos pacientes não sente desconforto.",
  },
  {
    q: "Quanto tempo dura um implante?",
    a: "O procedimento completo leva de 3 a 6 meses, dependendo da necessidade de enxerto ósseo. Fazemos acompanhamento em todas as etapas.",
  },
];

function WhatsAppBtn({
  children,
  className,
  style,
  message = ODONTO_WHATSAPP_DEFAULT,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  message?: string;
}) {
  return (
    <a
      href={odontoWhatsApp(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}

export function OdontoPrimeSite() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <DemoChrome />

      {/* Navbar */}
      <header className="sticky top-[41px] z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="#inicio" className="flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white shadow-lg"
              style={{ backgroundColor: ODONTO_THEME.primary }}
            >
              O
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Odonto Prime</p>
              <p className="text-[10px] font-medium" style={{ color: ODONTO_THEME.primary }}>
                Odontologia de Excelência
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#servicos" className="transition-colors hover:text-sky-600">Serviços</a>
            <a href="#equipe" className="transition-colors hover:text-sky-600">Equipe</a>
            <a href="#resultados" className="transition-colors hover:text-sky-600">Resultados</a>
            <a href="#depoimentos" className="transition-colors hover:text-sky-600">Depoimentos</a>
            <a href="#faq" className="transition-colors hover:text-sky-600">FAQ</a>
          </nav>

          <WhatsAppBtn
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: ODONTO_THEME.primary }}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Agendar</span>
          </WhatsAppBtn>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at top right, ${ODONTO_THEME.accent}, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold"
              style={{ backgroundColor: ODONTO_THEME.accent, color: ODONTO_THEME.secondary }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Clínica Premium · São Paulo
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Seu sorriso{" "}
              <span style={{ color: ODONTO_THEME.primary }}>merece o melhor</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-500">
              Implantes, clareamento, ortodontia invisível e estética dental com
              tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppBtn
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: ODONTO_THEME.primary }}
              >
                Agendar pelo WhatsApp
                <ArrowRight className="h-4 w-4" />
              </WhatsAppBtn>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50"
              >
                Ver tratamentos
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              {[
                { icon: Users, v: "3.200+", l: "Pacientes" },
                { icon: Award, v: "18+", l: "Anos" },
                { icon: Star, v: "4.9", l: "Avaliação" },
              ].map((s) => (
                <div key={s.l}>
                  <s.icon className="mb-1 h-5 w-5" style={{ color: ODONTO_THEME.primary }} />
                  <p className="text-2xl font-bold" style={{ color: ODONTO_THEME.primary }}>{s.v}</p>
                  <p className="text-xs text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div
              className="overflow-hidden rounded-3xl shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${ODONTO_THEME.accent}, white)` }}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-sky-100 via-cyan-50 to-white p-8">
                <div className="flex h-full flex-col justify-end">
                  <div className="rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
                    <p className="text-sm font-bold text-slate-800">Antes & Depois</p>
                    <p className="mt-1 text-xs text-slate-500">Resultados reais de pacientes</p>
                    <div className="mt-4 flex gap-3">
                      <div className="flex-1 rounded-xl bg-slate-200 p-3 text-center text-[10px] text-slate-500">
                        Antes
                      </div>
                      <div
                        className="flex-1 rounded-xl p-3 text-center text-[10px] font-semibold text-white"
                        style={{ background: `linear-gradient(135deg, ${ODONTO_THEME.primary}, ${ODONTO_THEME.secondary})` }}
                      >
                        Depois
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-xs font-bold text-slate-800">Agendamento rápido</p>
                  <p className="text-[10px] text-slate-400">Via WhatsApp em 2 min</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20" style={{ backgroundColor: ODONTO_THEME.accent }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: ODONTO_THEME.primary }}>
              Tratamentos
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Serviços que transformam sorrisos
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              Do clareamento aos implantes, oferecemos soluções completas com tecnologia de ponta.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                <p className="mt-4 text-sm font-semibold" style={{ color: ODONTO_THEME.primary }}>
                  {s.price}
                </p>
                <WhatsAppBtn
                  message={`Olá! Tenho interesse em ${s.title} na Odonto Prime.`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:gap-2"
                  style={{ color: ODONTO_THEME.secondary }}
                >
                  Agendar avaliação <ArrowRight className="h-3.5 w-3.5" />
                </WhatsAppBtn>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Por que escolher a Odonto Prime?
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Combinamos expertise clínica, tecnologia avançada e um ambiente
                pensado para sua comodidade e segurança.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Shield, t: "Biossegurança total", d: "Protocolos rigorosos de esterilização" },
                { icon: Clock, t: "Pontualidade", d: "Respeitamos seu tempo com agendamento inteligente" },
                { icon: Award, t: "Especialistas", d: "Equipe com pós-graduação e experiência" },
                { icon: Sparkles, t: "Tecnologia", d: "Scanner 3D, laser e sedação consciente" },
              ].map((item, i) => (
                <motion.div
                  key={item.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-sky-100 bg-white p-5"
                >
                  <item.icon className="h-6 w-6" style={{ color: ODONTO_THEME.primary }} />
                  <p className="mt-3 font-semibold text-slate-900">{item.t}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nossa Equipe</h2>
            <p className="mt-3 text-slate-500">Especialistas dedicados ao seu sorriso</p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
              >
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-xl font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${ODONTO_THEME.primary}, ${ODONTO_THEME.secondary})` }}
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: ODONTO_THEME.primary }}>{member.role}</p>
                <p className="mt-1 text-xs text-slate-400">{member.cro}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section id="resultados" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Antes & Depois</h2>
            <p className="mt-3 text-slate-500">Transformações que falam por si</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {beforeAfter.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="grid grid-cols-2">
                  <div className="flex aspect-square items-center justify-center bg-slate-200 text-xs text-slate-500">
                    Antes
                  </div>
                  <div
                    className="flex aspect-square items-center justify-center text-xs font-semibold text-white"
                    style={{ background: `linear-gradient(135deg, ${ODONTO_THEME.primary}, ${ODONTO_THEME.secondary})` }}
                  >
                    Depois
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-500">{item.improvement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20" style={{ backgroundColor: ODONTO_THEME.accent }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">O que dizem nossos pacientes</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{t.name}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Perguntas Frequentes</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-900"
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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
                      <p className="border-t border-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-500">
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

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 text-center sm:p-12"
            style={{
              background: `linear-gradient(135deg, ${ODONTO_THEME.primary}, ${ODONTO_THEME.secondary})`,
            }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sky-100">
              Agende sua avaliação gratuita agora pelo WhatsApp. Nossa equipe responde em minutos.
            </p>
            <WhatsAppBtn
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold shadow-xl transition-transform hover:scale-105"
              style={{ color: ODONTO_THEME.secondary }}
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </WhatsAppBtn>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-sky-100">
              {["Avaliação gratuita", "Sem compromisso", "Resposta rápida"].map((item) => (
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
      <footer className="border-t border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: ODONTO_THEME.primary }}
            >
              O
            </div>
            <span className="font-bold text-slate-800">Odonto Prime</span>
          </div>
          <p className="text-xs text-slate-400">
            Av. Paulista, 1000 — São Paulo, SP · Seg–Sex 8h–19h
          </p>
          <p className="text-xs text-slate-400">© 2025 Odonto Prime. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
