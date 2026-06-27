import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  rocketClassName?: string;
  textClassName?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { rocket: "h-7 w-7", text: "text-base" },
  md: { rocket: "h-9 w-9 sm:h-10 sm:w-10", text: "text-lg sm:text-xl" },
  lg: { rocket: "h-12 w-12 sm:h-14 sm:w-14", text: "text-2xl sm:text-3xl" },
};

export function Logo({
  className,
  rocketClassName,
  textClassName,
  size = "md",
}: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2 transition-opacity hover:opacity-90", className)}
    >
      <Image
        src="/rocket.png"
        alt=""
        width={56}
        height={56}
        className={cn(s.rocket, "w-auto object-contain", rocketClassName)}
        priority
      />
      <span
        className={cn(
          "font-bold italic leading-none tracking-tight",
          s.text,
          textClassName
        )}
      >
        <span className="text-foreground">Page</span>
        <span className="text-[#1DA1F2]">Boost</span>
      </span>
    </Link>
  );
}
