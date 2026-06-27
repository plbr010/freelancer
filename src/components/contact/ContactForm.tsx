"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const nome = data.get("nome") as string;
    const empresa = data.get("empresa") as string;
    const telefone = data.get("telefone") as string;
    const whatsapp = (data.get("whatsapp") as string) || telefone;
    const email = data.get("email") as string;
    const mensagem = data.get("mensagem") as string;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome,
          empresa,
          telefone,
          whatsapp,
          email,
          mensagem,
          _subject: `Novo orçamento — ${empresa} | PageBoost`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      const whatsappText = [
        `*Novo orçamento — PageBoost*`,
        ``,
        `*Nome:* ${nome}`,
        `*Empresa:* ${empresa}`,
        `*Telefone:* ${telefone}`,
        `*WhatsApp:* ${whatsapp}`,
        `*E-mail:* ${email}`,
        ``,
        `*Mensagem:*`,
        mensagem,
      ].join("\n");

      window.open(
        `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappText)}`,
        "_blank"
      );
      setSubmitted(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  const whatsappFollowUp = () => {
    const text = encodeURIComponent(siteConfig.whatsappMessage);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center"
      >
        <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
        <h3 className="text-2xl font-bold">Mensagem enviada!</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Recebemos seu pedido de orçamento. Entraremos em contato em até 24 horas
          úteis pelo e-mail ou WhatsApp informados.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button onClick={whatsappFollowUp}>
            <MessageCircle className="h-4 w-4" />
            Falar agora no WhatsApp
          </Button>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Enviar outra mensagem
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-2 block text-sm font-medium">
            Nome completo *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-2 block text-sm font-medium">
            Empresa *
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefone" className="mb-2 block text-sm font-medium">
            Telefone *
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="(32) 99806-4217"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="(32) 99806-4217"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-2 block text-sm font-medium">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Conte sobre seu projeto, objetivos e prazo desejado..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Enviando...
          </span>
        ) : (
          <>
            Enviar mensagem
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        Ao enviar, você concorda em ser contatado pela {siteConfig.name} sobre
        seu projeto. Sua mensagem será enviada para {siteConfig.email}.
      </p>
    </form>
  );
}
