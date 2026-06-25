"use client";

import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { MiniTemplateScaler, MiniSiteTemplate } from "@/components/projects/templates";

interface DeviceMockupProps {
  project: Project;
  device: "desktop" | "tablet" | "mobile";
  className?: string;
}

function BrowserChrome({ project }: { project: Project }) {
  return (
    <div
      className="relative z-10 flex shrink-0 items-center gap-1.5 px-3 py-2"
      style={{ backgroundColor: project.colors.primary }}
    >
      <div className="flex gap-1">
        <div className="h-2 w-2 rounded-full bg-white/30" />
        <div className="h-2 w-2 rounded-full bg-white/30" />
        <div className="h-2 w-2 rounded-full bg-white/30" />
      </div>
      <div className="mx-auto flex flex-1 items-center justify-center gap-1.5 rounded-md bg-white/15 px-3 py-0.5">
        <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="truncate text-[7px] text-white/90 sm:text-[9px]">
          {project.domain}
        </span>
      </div>
    </div>
  );
}

function MockupContent({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <BrowserChrome project={project} />
      <div className="relative min-h-0 flex-1">
        <MiniTemplateScaler>
          <MiniSiteTemplate layout={project.mockupLayout} />
        </MiniTemplateScaler>
      </div>
    </div>
  );
}

export function DeviceMockup({ project, device, className }: DeviceMockupProps) {
  const sizes = {
    desktop: "w-full aspect-[16/10]",
    tablet: "w-48 aspect-[3/4]",
    mobile: "w-24 aspect-[9/19]",
  };

  const borders = {
    desktop: "rounded-xl border-4 border-foreground/10 shadow-2xl",
    tablet: "rounded-2xl border-4 border-foreground/10 shadow-xl",
    mobile: "rounded-[1.5rem] border-4 border-foreground/10 shadow-xl",
  };

  return (
    <div className={cn(sizes[device], borders[device], "overflow-hidden bg-card", className)}>
      <MockupContent project={project} />
    </div>
  );
}

export function ProjectMockupShowcase({ project }: { project: Project }) {
  return (
    <div className="relative flex items-end justify-center gap-4 py-8">
      <div className="hidden sm:block">
        <DeviceMockup project={project} device="desktop" className="w-80 lg:w-96" />
      </div>
      <div className="hidden md:block -mb-4">
        <DeviceMockup project={project} device="tablet" />
      </div>
      <div className="-mb-8">
        <DeviceMockup project={project} device="mobile" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-30 blur-3xl"
        style={{ background: `linear-gradient(135deg, ${project.colors.primary}, ${project.colors.secondary})` }}
      />
    </div>
  );
}

export function ProjectCardMockup({ project }: { project: Project }) {
  return (
    <div className="group/mockup relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
      <div
        className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
        style={{
          background: `linear-gradient(135deg, ${project.colors.primary}, ${project.colors.secondary})`,
        }}
      />
      <div className="absolute inset-2 overflow-hidden rounded-xl border border-border/60 bg-background shadow-inner transition-transform duration-500 group-hover:scale-[1.01] sm:inset-3">
        <MockupContent project={project} />
      </div>
      <div
        className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between rounded-lg px-2.5 py-1.5 backdrop-blur-md sm:bottom-3 sm:left-3 sm:right-3 sm:px-3 sm:py-2"
        style={{ backgroundColor: `${project.colors.primary}E6` }}
      >
        <span className="text-[9px] font-bold text-white sm:text-[11px]">
          {project.highlightMetric.value}
        </span>
        <span className="text-[8px] text-white/85 sm:text-[10px]">
          {project.highlightMetric.label}
        </span>
      </div>
    </div>
  );
}
