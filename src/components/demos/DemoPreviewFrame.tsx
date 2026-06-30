import type { DemoProject } from "@/types";
import { cn } from "@/lib/utils";

function DentalPreview({ demo }: { demo: DemoProject }) {
  const { colors } = demo;
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <div className="flex items-center justify-between border-b border-sky-100 px-4 py-2">
        <div className="h-2 w-12 rounded" style={{ backgroundColor: colors.primary }} />
        <div className="rounded-full px-3 py-0.5 text-[8px] text-white" style={{ backgroundColor: colors.primary }}>
          Agendar
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center p-4" style={{ backgroundColor: colors.accent }}>
        <div className="text-[10px] font-bold text-slate-800">{demo.name}</div>
        <div className="mt-1 h-2 w-3/4 rounded bg-slate-800/80" />
        <div className="mt-1 h-1.5 w-1/2 rounded bg-slate-400/60" />
        <div
          className="mt-3 inline-block w-fit rounded-full px-3 py-1 text-[8px] font-semibold text-white"
          style={{ backgroundColor: colors.primary }}
        >
          Agendar consulta
        </div>
        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {["Implantes", "Lentes", "Clareamento"].map((t) => (
            <div key={t} className="rounded-lg bg-white p-2 shadow-sm">
              <div className="h-4 rounded" style={{ backgroundColor: `${colors.primary}25` }} />
              <div className="mt-1 text-[6px] text-slate-500">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BeautyPreview({ demo }: { demo: DemoProject }) {
  const { colors } = demo;
  return (
    <div className="flex h-full flex-col bg-[#FAF7F2] font-sans">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-[9px] font-light tracking-[0.2em] text-stone-600">BELLA</div>
        <div className="border px-2 py-0.5 text-[7px]" style={{ borderColor: colors.primary, color: colors.primary }}>
          AGENDAR
        </div>
      </div>
      <div className="flex flex-1 items-center px-4" style={{ backgroundColor: colors.accent }}>
        <div>
          <div className="h-2 w-24 rounded bg-stone-700/70" />
          <div className="mt-2 h-1.5 w-16 rounded" style={{ backgroundColor: colors.primary }} />
        </div>
      </div>
    </div>
  );
}

function PsychologyPreview({ demo }: { demo: DemoProject }) {
  const { colors } = demo;
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <div className="px-4 py-3">
        <div className="h-2 w-20 rounded" style={{ backgroundColor: colors.primary }} />
      </div>
      <div className="flex flex-1 flex-col justify-center px-4" style={{ backgroundColor: colors.accent }}>
        <div className="h-2 w-3/4 rounded bg-violet-900/70" />
        <div className="mt-2 h-1.5 w-1/2 rounded bg-violet-400/50" />
        <div className="mt-3 rounded-lg bg-white p-2 shadow-sm">
          <div className="text-[7px] text-violet-700">Terapia individual</div>
        </div>
      </div>
    </div>
  );
}

function PhysioPreview({ demo }: { demo: DemoProject }) {
  const { colors } = demo;
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <div
        className="px-4 py-4"
        style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
      >
        <div className="h-2.5 w-2/3 rounded bg-white/90" />
        <div className="mt-2 h-1.5 w-1/2 rounded bg-white/60" />
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {["Pilates", "RPG"].map((t) => (
          <div key={t} className="rounded-lg border p-2 text-[7px] text-slate-600">{t}</div>
        ))}
      </div>
    </div>
  );
}

function LegalPreview({ demo }: { demo: DemoProject }) {
  const { colors } = demo;
  return (
    <div className="flex h-full flex-col font-sans" style={{ backgroundColor: colors.accent }}>
      <div className="px-4 py-3" style={{ backgroundColor: colors.primary }}>
        <div className="h-2 w-24 rounded bg-white/90" />
      </div>
      <div className="grid grid-cols-2 gap-1.5 p-3">
        {["Empresarial", "Trabalhista"].map((a) => (
          <div key={a} className="rounded border bg-white p-2 text-[7px] text-slate-700">{a}</div>
        ))}
      </div>
    </div>
  );
}

const previews = {
  dental: DentalPreview,
  beauty: BeautyPreview,
  psychology: PsychologyPreview,
  physio: PhysioPreview,
  legal: LegalPreview,
};

export function DemoPreviewFrame({
  demo,
  className,
}: {
  demo: DemoProject;
  className?: string;
}) {
  const Preview = previews[demo.previewType];

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-card shadow-inner",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${demo.colors.primary}, ${demo.colors.secondary})`,
        }}
      />
      <div className="absolute inset-2 overflow-hidden rounded-lg border border-border/40 bg-background shadow-sm">
        <Preview demo={demo} />
      </div>
    </div>
  );
}
