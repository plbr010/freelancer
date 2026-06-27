import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  textClassName?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-base",
  md: "text-lg sm:text-xl",
  lg: "text-2xl sm:text-3xl",
};

export function Logo({
  className,
  textClassName,
  size = "md",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group transition-opacity hover:opacity-90", className)}
    >
      <span
        className={cn(
          "font-bold italic leading-none tracking-tight",
          sizes[size],
          textClassName
        )}
      >
        <span className="text-foreground">Page</span>
        <span className="text-[#1DA1F2]">Boost</span>
      </span>
    </Link>
  );
}
