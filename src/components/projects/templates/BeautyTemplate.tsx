export function BeautyTemplate() {
  return (
    <div className="flex h-[800px] w-[1280px] flex-col bg-[#FAF7F2] font-sans">
      <header className="flex items-center justify-between px-10 py-5">
        <p className="text-lg font-light tracking-[0.3em] text-stone-700">BELLA</p>
        <nav className="flex items-center gap-8 text-[11px] font-medium tracking-wider text-stone-500">
          <span>PROCEDIMENTOS</span>
          <span>CLÍNICA</span>
          <span>RESULTADOS</span>
          <span className="border border-amber-700/40 px-5 py-2 text-amber-800">AGENDAR</span>
        </nav>
      </header>

      <section className="relative flex flex-1 items-center overflow-hidden px-10">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#F5E6D3] to-transparent" />
        <div className="relative z-10 max-w-lg">
          <p className="text-[11px] font-medium tracking-[0.2em] text-amber-700">ESTÉTICA AVANÇADA</p>
          <h1 className="mt-3 text-[44px] font-light leading-tight text-stone-800">
            Beleza que<br />
            <em className="font-serif not-italic text-amber-700">transcende</em>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-stone-500">
            Harmonização facial, bioestimuladores e tratamentos premium com os melhores especialistas de Curitiba.
          </p>
          <button className="mt-6 border border-amber-700 bg-amber-700 px-8 py-3 text-xs font-medium tracking-widest text-white">
            AVALIAÇÃO GRATUITA
          </button>
        </div>
        <div className="absolute right-10 top-1/2 z-10 -translate-y-1/2">
          <div className="h-72 w-56 overflow-hidden rounded-t-full rounded-b-2xl bg-gradient-to-b from-[#E8D5C0] to-[#D4A574] shadow-2xl" />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-px bg-stone-200">
        {[
          { t: "Harmonização Facial", p: "R$ 1.200" },
          { t: "Bioestimuladores", p: "R$ 2.800" },
          { t: "Skinbooster", p: "R$ 890" },
        ].map((item) => (
          <div key={item.t} className="bg-[#FAF7F2] p-6 text-center">
            <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-gradient-to-br from-[#F5E6D3] to-[#D4A574]/40" />
            <p className="text-xs font-medium text-stone-700">{item.t}</p>
            <p className="mt-1 text-[10px] text-amber-700">{item.p}</p>
          </div>
        ))}
      </section>

      <footer className="flex items-center justify-between bg-stone-800 px-10 py-4">
        <p className="text-[10px] tracking-widest text-stone-400">BELLA ESTÉTICA AVANÇADA</p>
        <p className="text-[10px] text-amber-600">★★★★★ 4.9 · 800+ avaliações</p>
      </footer>
    </div>
  );
}
