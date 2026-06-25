export function DentalTemplate() {
  return (
    <div className="flex h-[800px] w-[1280px] flex-col bg-white font-sans">
      {/* Nav */}
      <header className="flex items-center justify-between border-b border-sky-100 px-10 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-lg font-bold text-white">
            S
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Sorriso Premium</p>
            <p className="text-[10px] text-sky-500">Odontologia de Excelência</p>
          </div>
        </div>
        <nav className="flex items-center gap-8 text-xs font-medium text-slate-600">
          <span>Início</span>
          <span>Tratamentos</span>
          <span>Equipe</span>
          <span>Depoimentos</span>
          <span className="rounded-full bg-sky-500 px-5 py-2 text-white">Agendar</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex flex-1 overflow-hidden">
        <div className="flex w-1/2 flex-col justify-center px-12">
          <span className="mb-3 inline-block w-fit rounded-full bg-sky-50 px-4 py-1 text-[11px] font-semibold text-sky-600">
            ✦ Clínica Premium · Zona Sul SP
          </span>
          <h1 className="text-[42px] font-bold leading-tight text-slate-900">
            Seu sorriso<br />
            <span className="text-sky-500">merece o melhor</span>
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
            Implantes, lentes de contato e harmonização com tecnologia de ponta e atendimento humanizado.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200">
              Agendar consulta
            </button>
            <button className="rounded-full border border-slate-200 px-7 py-3 text-sm font-medium text-slate-600">
              Ver tratamentos
            </button>
          </div>
          <div className="mt-8 flex gap-8">
            {[
              { v: "2.400+", l: "Pacientes" },
              { v: "15+", l: "Anos" },
              { v: "4.9★", l: "Avaliação" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-xl font-bold text-sky-600">{s.v}</p>
                <p className="text-[10px] text-slate-400">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-1/2">
          <div className="absolute inset-4 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 to-cyan-50">
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold text-slate-800">Antes & Depois</p>
              <div className="mt-2 flex gap-2">
                <div className="h-16 flex-1 rounded-lg bg-slate-200" />
                <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-sky-300 to-cyan-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="border-t border-sky-50 bg-sky-50/50 px-10 py-6">
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: "🦷", t: "Implantes", d: "A partir de R$ 2.900" },
            { icon: "✨", t: "Lentes", d: "Resultado imediato" },
            { icon: "💎", t: "Clareamento", d: "Até 8 tons mais claro" },
            { icon: "😁", t: "Ortodontia", d: "Alinhadores invisíveis" },
          ].map((item) => (
            <div key={item.t} className="rounded-2xl bg-white p-4 shadow-sm">
              <span className="text-2xl">{item.icon}</span>
              <p className="mt-2 text-sm font-bold text-slate-800">{item.t}</p>
              <p className="text-[10px] text-slate-400">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
