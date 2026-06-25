export function RealEstateTemplate() {
  return (
    <div className="flex h-[800px] w-[1280px] flex-col bg-[#0A1628] font-sans text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-10 py-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-amber-500 to-amber-700" />
          <span className="text-sm font-bold tracking-wider">PRIME IMÓVEIS</span>
        </div>
        <nav className="flex items-center gap-6 text-[11px] text-white/60">
          <span>Imóveis</span>
          <span>Bairros</span>
          <span>Sobre</span>
          <span className="rounded bg-amber-600 px-4 py-2 text-white">Contato</span>
        </nav>
      </header>

      <section className="px-10 py-8">
        <h1 className="text-3xl font-light">
          Imóveis <span className="font-bold text-amber-500">exclusivos</span>
        </h1>
        <p className="mt-2 text-sm text-white/50">Alto padrão no Rio de Janeiro</p>
        <div className="mt-5 flex gap-2">
          {["Localização", "Preço", "Quartos", "Buscar →"].map((f, i) => (
            <div
              key={f}
              className={`rounded-lg px-4 py-2.5 text-xs ${
                i === 3 ? "bg-amber-600 font-semibold text-white" : "bg-white/10 text-white/70"
              }`}
            >
              {f}
            </div>
          ))}
        </div>
      </section>

      <section className="grid flex-1 grid-cols-3 gap-4 px-10 pb-6">
        {[
          { loc: "Ipanema", price: "R$ 4.2M", beds: "4 suítes", area: "280m²", grad: "from-slate-600 to-slate-800" },
          { loc: "Leblon", price: "R$ 2.8M", beds: "3 suítes", area: "195m²", grad: "from-slate-700 to-slate-900" },
          { loc: "Barra", price: "R$ 3.5M", beds: "5 suítes", area: "340m²", grad: "from-amber-900/40 to-slate-800" },
        ].map((p) => (
          <div key={p.loc} className="overflow-hidden rounded-2xl bg-white/5">
            <div className={`relative h-36 bg-gradient-to-br ${p.grad}`}>
              <span className="absolute left-3 top-3 rounded bg-amber-600 px-2 py-1 text-[10px] font-bold">
                EXCLUSIVO
              </span>
              <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2 py-1 text-[9px]">
                Tour 360°
              </span>
            </div>
            <div className="p-4">
              <p className="text-lg font-bold text-amber-500">{p.price}</p>
              <p className="text-sm font-medium">{p.loc}</p>
              <p className="mt-1 text-[10px] text-white/40">
                {p.beds} · {p.area}
              </p>
            </div>
          </div>
        ))}
      </section>

      <footer className="flex items-center justify-between border-t border-white/10 px-10 py-3">
        <p className="text-[10px] text-white/30">CRECI 12345-J · Prime Imóveis Luxo</p>
        <div className="flex gap-4 text-[10px] text-white/40">
          <span>120+ imóveis</span>
          <span>·</span>
          <span>70% vendas pelo site</span>
        </div>
      </footer>
    </div>
  );
}
