import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
}

export function Logo({ className, imageClassName, showText = false }: LogoProps) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt="PageBoost — Sites que geram clientes"
        width={160}
        height={48}
        className={cn("h-9 w-auto object-contain sm:h-10", imageClassName)}
        priority
      />
      {showText && (
        <span className="sr-only">PageBoost</span>
      )}
    </Link>
  );
}
