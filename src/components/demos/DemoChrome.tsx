import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function DemoChrome() {
  return (
    <div className="sticky top-0 z-[100] flex items-center justify-between border-b border-white/10 bg-slate-950/90 px-4 py-2.5 text-xs backdrop-blur-md sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-medium text-slate-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Voltar ao PageBoost
      </Link>
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
        Projeto Demonstrativo
      </span>
    </div>
  );
}
