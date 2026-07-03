import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark ? "gradient-navy text-white" : "bg-surface",
        className
      )}
    >
      <div className="container-corporate">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ label, title, description, centered, light }: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 md:mb-20", centered && "mx-auto max-w-3xl text-center")}>
      {label && <span className="label-overline mb-4 block">{label}</span>}
      <h2
        className={cn(
          "heading-display text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            light ? "text-white/70" : "text-graphite-light"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-navy pt-36 pb-24 md:pt-44 md:pb-32">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/80 to-navy" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="container-corporate relative">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
