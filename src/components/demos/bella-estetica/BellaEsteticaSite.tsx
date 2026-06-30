"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Gem,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { DemoChrome } from "@/components/demos/DemoChrome";
import {
  BELLA_THEME,
  BELLA_WHATSAPP_DEFAULT,
  bellaWhatsApp,
} from "@/components/demos/bella-estetica/theme";

const procedures = [
  {
    title: "Harmonização Facial",
    desc: "Equilíbrio e proporção com técnicas avançadas para realçar sua beleza natural.",
    price: "A partir de R$ 1.200",
    featured: true,
  },
  {
    title: "Botox",
    desc: "Suavização de linhas de expressão com aplicação precisa e resultado natural.",
    price: "A partir de R$ 890",
    featured: true,
  },
  {
    title: "Limpeza de Pele",
    desc: "Protocolo profundo com extração, peeling e máscara revitalizante.",
    price: "A partir de R$ 280",
    featured: true,
  },
  {
    title: "Bioestimuladores",
    desc: "Estímulo de colágeno para firmeza e rejuvenescimento gradual da pele.",
    price: "A partir de R$ 2.800",
    featured: false,
  },
  {
    title: "Skinbooster",
    desc: "Hidratação profunda com ácido hialurônico para viço e luminosidade.",
    price: "A partir de R$ 890",
    featured: false,
  },
  {
    title: "Preenchimento Labial",
    desc: "Volume e contorno labial com resultados harmoniosos e naturais.",
    price: "A partir de R$ 1.100",
    featured: false,
  },
];

const gallery = [
  { label: "Harmonização", tone: "from-amber-100 to-rose-100" },
  { label: "Botox", tone: "from-stone-200 to-amber-50" },
  { label: "Limpeza de Pele", tone: "from-rose-50 to-amber-100" },
  { label: "Bioestimulador", tone: "from-amber-50 to-stone-100" },
  { label: "Skinbooster", tone: "from-rose-100 to-stone-50" },
  { label: "Preenchimento", tone: "from-stone-100 to-amber-100" },
];

const testimonials = [
  {
    name: "Fernanda A.",
    text: "A harmonização ficou perfeita — natural e elegante. A clínica transmite luxo do momento em que você entra.",
    rating: 5,
  },
  {
    name: "Luciana M.",
    text: "Fiz botox e limpeza de pele. Atendimento impecável e resultado que todos notaram, sem exageros.",
    rating: 5,
  },
  {
    name: "Beatriz R.",
    text: "Agendei pelo WhatsApp e fui recebida com todo cuidado. A Bella Estética é referência em Curitiba.",
    rating: 5,
  },
];

function WhatsAppBtn({
  children,
  className,
  style,
  message = BELLA_WHATSAPP_DEFAULT,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  message?: string;
}) {
  return (
    <a
      href={bellaWhatsApp(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}

export function BellaEsteticaSite() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: BELLA_THEME.background, color: BELLA_THEME.dark }}
    >
      <DemoChrome />

      {/* Navbar */}
      <header
        className="sticky top-[41px] z-50 border-b backdrop-blur-md"
        style={{ borderColor: `${BELLA_THEME.primary}20`, backgroundColor: `${BELLA_THEME.background}E6` }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="#inicio" className="flex flex-col">
            <span
              className="text-lg font-light tracking-[0.35em]"
              style={{ color: BELLA_THEME.dark }}
            >
              BELLA
            </span>
            <span className="text-[9px] tracking-[0.2em]" style={{ color: BELLA_THEME.primary }}>
              ESTÉTICA AVANÇADA
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-stone-500 md:flex">
            <a href="#procedimentos" className="transition-colors hover:text-amber-800">Procedimentos</a>
            <a href="#galeria" className="transition-colors hover:text-amber-800">Galeria</a>
            <a href="#depoimentos" className="transition-colors hover:text-amber-800">Depoimentos</a>
          </nav>

          <WhatsAppBtn
            className="inline-flex items-center gap-2 border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all hover:scale-105"
            style={{ borderColor: BELLA_THEME.primary, color: BELLA_THEME.primary }}
          >
            Agendar
          </WhatsAppBtn>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(ellipse at 70% 20%, ${BELLA_THEME.accent}, transparent 55%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.25em]"
              style={{ color: BELLA_THEME.primary }}
            >
              Estética Avançada · Curitiba
            </span>
            <h1 className="text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              Beleza que
              <br />
              <em className="not-italic font-normal" style={{ color: BELLA_THEME.primary }}>
                transcende
              </em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone-500">
              Harmonização facial, botox e tratamentos premium com os melhores
              especialistas em um ambiente de sofisticação e cuidado.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <WhatsAppBtn
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: BELLA_THEME.primary }}
              >
                Avaliação gratuita
                <ArrowRight className="h-4 w-4" />
              </WhatsAppBtn>
              <a
                href="#procedimentos"
                className="inline-flex items-center gap-2 border border-stone-300 px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-stone-600 transition-colors hover:border-amber-700/40 hover:text-amber-800"
              >
                Ver procedimentos
              </a>
            </div>
            <div className="mt-12 flex gap-10 border-t pt-8" style={{ borderColor: `${BELLA_THEME.primary}25` }}>
              {[
                { v: "800+", l: "Clientes" },
                { v: "4.9", l: "Avaliação" },
                { v: "12+", l: "Procedimentos" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-light" style={{ color: BELLA_THEME.primary }}>{s.v}</p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              className="relative h-[420px] w-72 overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-2xl sm:h-[480px] sm:w-80"
              style={{
                background: `linear-gradient(180deg, ${BELLA_THEME.accent}, ${BELLA_THEME.primary}40)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
              <div className="absolute bottom-8 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur">
                <Gem className="h-5 w-5" style={{ color: BELLA_THEME.primary }} />
                <p className="mt-2 text-sm font-medium text-stone-800">Experiência premium</p>
                <p className="text-xs text-stone-500">Ambiente exclusivo para seu bem-estar</p>
              </div>
            </div>
            <div
              className="absolute -left-2 top-12 rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-white shadow-lg"
              style={{ backgroundColor: BELLA_THEME.secondary }}
            >
              <Sparkles className="mr-1 inline h-3 w-3" />
              Destaque 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured procedures */}
      <section id="procedimentos" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs uppercase tracking-[0.25em]" style={{ color: BELLA_THEME.primary }}>
              Tratamentos
            </span>
            <h2 className="mt-3 text-3xl font-light sm:text-4xl">Procedimentos em destaque</h2>
            <p className="mx-auto mt-4 max-w-lg text-stone-500">
              Protocolos personalizados com tecnologia de ponta e resultados naturais.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {procedures.filter((p) => p.featured).map((proc, i) => (
              <motion.div
                key={proc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: `${BELLA_THEME.primary}20` }}
              >
                <div
                  className="mb-6 h-1 w-12"
                  style={{ backgroundColor: BELLA_THEME.primary }}
                />
                <h3 className="text-xl font-medium text-stone-800">{proc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">{proc.desc}</p>
                <p className="mt-5 text-sm font-medium" style={{ color: BELLA_THEME.primary }}>
                  {proc.price}
                </p>
                <WhatsAppBtn
                  message={`Olá! Tenho interesse em ${proc.title} na Bella Estética.`}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider transition-all group-hover:gap-2"
                  style={{ color: BELLA_THEME.secondary }}
                >
                  Agendar <ArrowRight className="h-3.5 w-3.5" />
                </WhatsAppBtn>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {procedures.filter((p) => !p.featured).map((proc, i) => (
              <motion.div
                key={proc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border bg-white/60 p-5"
                style={{ borderColor: `${BELLA_THEME.primary}15` }}
              >
                <h3 className="font-medium text-stone-800">{proc.title}</h3>
                <p className="mt-1 text-xs text-stone-500">{proc.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-20" style={{ backgroundColor: BELLA_THEME.accent }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-light sm:text-4xl">Galeria de resultados</h2>
            <p className="mt-3 text-stone-500">Transformações que revelam a melhor versão de você</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br ${item.tone} shadow-sm transition-transform duration-500 hover:scale-[1.02]`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-stone-700">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience strip */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Avaliação personalizada", desc: "Plano exclusivo para suas necessidades" },
              { title: "Produtos premium", desc: "Marcas internacionais certificadas" },
              { title: "Ambiente exclusivo", desc: "Conforto e privacidade em cada detalhe" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <Check className="mx-auto h-5 w-5" style={{ color: BELLA_THEME.primary }} />
                <h3 className="mt-3 font-medium text-stone-800">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20" style={{ backgroundColor: BELLA_THEME.dark }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-light text-white sm:text-4xl">Depoimentos</h2>
            <p className="mt-3 text-stone-400">A opinião de quem confia na Bella</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-stone-300">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium text-white">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light sm:text-4xl">
              Sua melhor versão começa aqui
            </h2>
            <p className="mx-auto mt-4 max-w-md text-stone-500">
              Agende sua avaliação gratuita pelo WhatsApp. Nossa equipe responde em minutos.
            </p>
            <WhatsAppBtn
              className="mt-10 inline-flex items-center gap-3 px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:scale-105"
              style={{ backgroundColor: BELLA_THEME.primary }}
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </WhatsAppBtn>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider text-stone-400">
              {["Avaliação gratuita", "Sem compromisso", "Atendimento exclusivo"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5" style={{ color: BELLA_THEME.primary }} />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-10"
        style={{ borderColor: `${BELLA_THEME.primary}20` }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div>
            <p className="text-sm font-light tracking-[0.3em]">BELLA</p>
            <p className="text-[10px] tracking-widest text-stone-400">ESTÉTICA AVANÇADA</p>
          </div>
          <p className="text-xs text-stone-400">
            Rua das Flores, 450 — Batel, Curitiba · Seg–Sáb 9h–20h
          </p>
          <p className="text-xs text-stone-400">© 2025 Bella Estética</p>
        </div>
      </footer>
    </div>
  );
}
