export function SolarTemplate() {
  return (
    <div className="flex h-[800px] w-[1280px] flex-col bg-white font-sans">
      <header className="flex items-center justify-between border-b border-green-100 px-10 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-lg">☀️</div>
          <span className="text-sm font-bold text-green-800">SolarTech</span>
        </div>
        <nav className="flex items-center gap-6 text-xs text-slate-600">
          <span>Soluções</span>
          <span>Cases</span>
          <span>Sobre</span>
          <span className="rounded-full bg-green-600 px-5 py-2 font-semibold text-white">Simular economia</span>
        </nav>
      </header>

      <section className="flex flex-1">
        <div className="flex w-1/2 flex-col justify-center px-10">
          <span className="mb-3 w-fit rounded-full bg-green-50 px-4 py-1 text-[11px] font-semibold text-green-700">
            ⚡ Energia limpa para seu negócio
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-900">
            Reduza até <span className="text-green-600">95%</span> da sua conta de luz
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Instalação residencial, comercial e industrial com financiamento em até 72x.
          </p>
          <div className="mt-6 flex gap-6">
            {[
              { v: "180+", l: "Instalações" },
              { v: "R$2.4M", l: "Economia gerada" },
              { v: "5 anos", l: "Garantia" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-lg font-bold text-green-600">{s.v}</p>
                <p className="text-[10px] text-slate-400">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-1/2 items-center justify-center bg-green-50 p-8">
          <div className="w-full max-w-sm rounded-2xl border border-green-200 bg-white p-6 shadow-xl">
            <p className="text-sm font-bold text-green-800">☀️ Calculadora Solar</p>
            <p className="mt-1 text-[10px] text-slate-400">Descubra sua economia em 30 segundos</p>
            <div className="mt-4 space-y-3">
              <div>
                <label className="text-[10px] text-slate-500">Valor da conta (R$)</label>
                <div className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">850,00</div>
              </div>
              <div>
                <label className="text-[10px] text-slate-500">Tipo de imóvel</label>
                <div className="mt-1 flex gap-2">
                  {["Residencial", "Comercial"].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-lg px-3 py-1.5 text-[10px] ${i === 0 ? "bg-green-600 text-white" : "bg-slate-100 text-slate-600"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-green-600 p-4 text-center text-white">
              <p className="text-[10px] opacity-80">Economia estimada</p>
              <p className="text-2xl font-bold">R$ 1.840/mês</p>
            </div>
            <button className="mt-3 w-full rounded-lg bg-green-700 py-2.5 text-xs font-semibold text-white">
              Solicitar orçamento gratuito
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
