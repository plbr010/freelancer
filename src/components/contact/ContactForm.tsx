"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const nome = data.get("nome") as string;
    const empresa = data.get("empresa") as string;
    const whatsapp = data.get("whatsapp") as string;
    const email = data.get("email") as string;
    const mensagem = data.get("mensagem") as string;

    const whatsappText = [
      `*Novo orçamento — PageBoost*`,
      ``,
      `*Nome:* ${nome}`,
      `*Empresa:* ${empresa}`,
      `*WhatsApp:* ${whatsapp}`,
      `*E-mail:* ${email}`,
      ``,
      `*Mensagem:*`,
      mensagem,
    ].join("\n");

    window.location.href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappText)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium">
            WhatsApp *
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Seu WhatsApp com DDD"
          />
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
            Redirecionando...
          </span>
        ) : (
          <>
            Enviar mensagem
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        Ao clicar em enviar, você será redirecionado para o WhatsApp da {siteConfig.name}.
      </p>
    </form>
  );
}
