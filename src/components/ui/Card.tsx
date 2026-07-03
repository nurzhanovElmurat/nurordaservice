import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: string;
  image?: string;
  benefits?: string[];
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  description,
  href,
  icon,
  image,
  benefits,
  className,
  children,
}: CardProps) {
  const Icon = icon ? getIcon(icon) : null;

  const content = (
    <>
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-corporate group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          {Icon && (
            <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/95 text-accent shadow-card backdrop-blur-sm">
              <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
            </div>
          )}
        </div>
      )}
      <div className={cn("p-6 md:p-8", !image && "pt-8")}>
        {!image && Icon && (
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-glow">
            <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
          </div>
        )}
        <h3 className="mb-3 text-xl font-bold text-navy transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-graphite-light">{description}</p>
        {benefits && benefits.length > 0 && (
          <ul className="mt-4 space-y-2">
            {benefits.slice(0, 3).map((b) => (
              <li key={b} className="flex items-center gap-2 text-xs text-graphite-light">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        )}
        {children}
        {href && (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3">
            Подробнее
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );

  const classes = cn(
    "group card-corporate block h-full overflow-hidden",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
