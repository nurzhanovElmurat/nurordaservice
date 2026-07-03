import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
            Главная
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-gray-300" aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="text-gray-400 hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
