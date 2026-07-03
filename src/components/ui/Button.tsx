import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  icon?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5",
  secondary:
    "bg-navy text-white hover:bg-navy-light hover:-translate-y-0.5 shadow-lg shadow-navy/20",
  outline:
    "border-2 border-white/25 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm",
  ghost: "text-navy hover:bg-surface-muted hover:text-accent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  icon = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-semibold tracking-wide transition-all duration-300 ease-corporate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={18} aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <ArrowRight size={18} aria-hidden="true" />}
    </button>
  );
}
