export function LegalTemplate() {
  return (
    <div className="flex h-[800px] w-[1280px] flex-col bg-[#F8FAFC] font-sans">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-10 py-5">
        <div>
          <p className="text-sm font-bold text-slate-800">Mendes & Oliveira</p>
          <p className="text-[10px] tracking-widest text-red-800">ADVOCACIA EMPRESARIAL</p>
        </div>
        <nav className="flex items-center gap-6 text-xs text-slate-600">
          <span>Áreas de Atuação</span>
          <span>Equipe</span>
          <span>Publicações</span>
          <span className="bg-slate-800 px-5 py-2 text-white">Consulta</span>
        </nav>
      </header>

      <section className="flex flex-1">
        <div className="flex w-3/5 flex-col justify-center bg-slate-800 px-10 text-white">
          <p className="text-[11px] font-medium tracking-widest text-red-400">SÃO PAULO · DESDE 2008</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight">
            Assessoria jurídica<br />estratégica para<br />empresas
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Protegemos seu negócio com soluções em direito empresarial, tributário, trabalhista e compliance LGPD.
          </p>
          <button className="mt-6 w-fit border border-red-700 bg-red-800 px-6 py-3 text-xs font-semibold">
            Agendar consulta →
          </button>
        </div>

        <div className="flex w-2/5 flex-col justify-center gap-3 bg-white p-8">
          <p className="text-xs font-bold text-slate-800">Áreas de Atuação</p>
          {[
            { area: "Direito Empresarial", desc: "Contratos e governança" },
            { area: "Recuperação Judicial", desc: "Reestruturação de dívidas" },
            { area: "Compliance LGPD", desc: "Adequação e auditoria" },
            { area: "Direito Tributário", desc: "Planejamento fiscal" },
          ].map((item) => (
            <div key={item.area} className="flex items-center gap-3 rounded-lg border border-slate-100 p-3 hover:border-red-200">
              <div className="h-8 w-1 rounded-full bg-red-800" />
              <div>
                <p className="text-xs font-semibold text-slate-800">{item.area}</p>
                <p className="text-[10px] text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex items-center justify-between border-t border-slate-200 bg-white px-10 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-300" />
          <div>
            <p className="text-[10px] font-semibold text-slate-700">Dr. Ricardo Mendes</p>
            <p className="text-[9px] text-slate-400">Sócio-fundador · OAB/SP 123.456</p>
          </div>
        </div>
        <p className="text-[10px] text-slate-400">12 artigos no Google · Top 3 em recuperação judicial</p>
      </footer>
    </div>
  );
}
