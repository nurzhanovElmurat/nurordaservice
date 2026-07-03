import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = "dark", className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="NurOrdaService — на главную"
    >
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-accent shadow-glow transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.svg"
          alt=""
          width={28}
          height={28}
          className="brightness-0 invert"
          aria-hidden="true"
        />
      </div>
      {showText && (
        <div className="hidden sm:block">
          <span
            className={cn(
              "block text-lg font-bold tracking-tight transition-colors",
              variant === "light" ? "text-white" : "text-navy"
            )}
          >
            NurOrdaService
          </span>
          <span
            className={cn(
              "block text-[10px] font-medium uppercase tracking-[0.25em]",
              variant === "light" ? "text-white/60" : "text-graphite-light"
            )}
          >
            Industrial Solutions
          </span>
        </div>
      )}
    </Link>
  );
}
