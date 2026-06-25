import { Check, Clock, Package, RefreshCw } from "lucide-react";
import { projectDeliverables, projectPackage } from "@/data/deliverables";

interface ProjectDeliverablesProps {
  accentColor?: string;
  compact?: boolean;
}

export function ProjectDeliverables({
  accentColor = "var(--primary)",
  compact = false,
}: ProjectDeliverablesProps) {
  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider sm:text-xs"
          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
        >
          <Package className="h-3 w-3" />
          {projectPackage.name}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] text-muted-foreground">
          <Clock className="h-3 w-3" />
          {projectPackage.delivery}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] text-muted-foreground">
          <RefreshCw className="h-3 w-3" />
          {projectPackage.revisions}
        </span>
      </div>

      <ul className={`grid gap-1.5 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        {projectDeliverables.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-foreground/80 sm:text-sm">
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              <Check className="h-2.5 w-2.5" style={{ color: accentColor }} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
