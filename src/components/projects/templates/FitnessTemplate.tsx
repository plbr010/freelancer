export function FitnessTemplate() {
  return (
    <div className="flex h-[800px] w-[1280px] flex-col bg-zinc-950 font-sans text-white">
      <header className="flex items-center justify-between px-10 py-5">
        <p className="text-xl font-black italic tracking-tighter text-red-500">
          FIT<span className="text-white">ZONE</span>
        </p>
        <nav className="flex items-center gap-6 text-[11px] font-bold tracking-wider text-zinc-400">
          <span>PLANOS</span>
          <span>AULAS</span>
          <span>ESTRUTURA</span>
          <span className="bg-red-600 px-5 py-2 text-white">MATRICULE-SE</span>
        </nav>
      </header>

      <section className="relative flex flex-1 items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-transparent" />
        <div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-red-900/20 to-transparent" />
        <div className="relative z-10 px-10">
          <p className="text-xs font-bold tracking-[0.3em] text-red-500">PERFORMANCE · BELO HORIZONTE</p>
          <h1 className="mt-3 text-5xl font-black uppercase leading-none tracking-tight">
            Supere<br />seus limites
          </h1>
          <p className="mt-4 max-w-xs text-sm text-zinc-400">
            Academia premium com estrutura completa, personal trainers e +40 modalidades.
          </p>
          <button className="mt-6 bg-red-600 px-8 py-3 text-sm font-black tracking-wider">
            COMECE AGORA — 1º MÊS R$49
          </button>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4 px-10 py-6">
        {[
          { plan: "BASIC", price: "R$99", feat: ["Musculação", "Aeróbico"] },
          { plan: "PRO", price: "R$149", feat: ["Tudo do Basic", "+ Crossfit", "+ Spinning"], hot: true },
          { plan: "ELITE", price: "R$199", feat: ["Tudo do Pro", "Personal 2x"] },
        ].map((p) => (
          <div
            key={p.plan}
            className={`rounded-xl p-5 ${p.hot ? "border-2 border-red-500 bg-red-500/10" : "bg-zinc-900"}`}
          >
            {p.hot && (
              <span className="mb-2 inline-block rounded bg-red-500 px-2 py-0.5 text-[9px] font-bold">
                MAIS POPULAR
              </span>
            )}
            <p className="text-xs font-bold text-zinc-500">{p.plan}</p>
            <p className="text-2xl font-black text-red-500">{p.price}<span className="text-xs text-zinc-500">/mês</span></p>
            <ul className="mt-3 space-y-1">
              {p.feat.map((f) => (
                <li key={f} className="text-[10px] text-zinc-400">✓ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <footer className="flex items-center justify-between border-t border-zinc-800 px-10 py-3">
        <p className="text-[10px] text-zinc-600">FitZone Performance © 2025</p>
        <p className="text-[10px] font-bold text-red-500">55% matrículas online</p>
      </footer>
    </div>
  );
}
