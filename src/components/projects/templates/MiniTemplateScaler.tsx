"use client";

import { useEffect, useRef, useState } from "react";

const BASE_WIDTH = 1280;
const BASE_HEIGHT = 800;

interface MiniTemplateScalerProps {
  children: React.ReactNode;
}

export function MiniTemplateScaler({ children }: MiniTemplateScalerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      setScale(Math.min(w / BASE_WIDTH, h / BASE_HEIGHT));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-white">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
