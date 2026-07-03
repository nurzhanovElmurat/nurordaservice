"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { companyInfo } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "О компании", href: "/about" },
  { name: "Направления", href: "/directions" },
  { name: "Каталог", href: "/catalog" },
  { name: "Отрасли", href: "/industries" },
  { name: "Международные поставки", href: "/international" },
  { name: "Услуги", href: "/services" },
  { name: "Контакты", href: "/contacts" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-corporate",
        solid
          ? "bg-white/90 py-3 shadow-header backdrop-blur-xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-corporate">
        <div className="flex items-center justify-between gap-3 xl:gap-4">
          <Logo variant={solid ? "dark" : "light"} className="shrink-0" />

          <nav className="hidden min-w-0 flex-1 xl:flex items-center justify-center gap-0.5" aria-label="Основная навигация">
            {navigation.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
                    solid
                      ? active
                        ? "text-accent"
                        : "text-graphite hover:text-navy"
                      : active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  )}
                >
                  {item.name}
                  {active && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full",
                        solid ? "bg-accent" : "bg-white"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex shrink-0 items-center gap-4 xl:gap-5">
            <a
              href={`tel:${companyInfo.phone.replace(/\s|[()]/g, "")}`}
              className={cn(
                "flex shrink-0 items-center gap-2 text-sm font-medium whitespace-nowrap transition-colors duration-300",
                solid ? "text-navy hover:text-accent" : "text-white/90 hover:text-white"
              )}
            >
              <Phone size={15} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
              <span className="hidden xl:inline whitespace-nowrap">{companyInfo.phone}</span>
            </a>
            <Button href="/contacts" size="sm" variant={solid ? "primary" : "outline"} className="shrink-0">
              Консультация
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "xl:hidden rounded-lg p-2.5 transition-colors",
              solid ? "text-navy hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "xl:hidden fixed inset-0 z-40 bg-navy transition-all duration-500 ease-corporate",
          isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24">
          <nav className="flex flex-col" aria-label="Мобильная навигация">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "border-b border-white/10 py-4 text-lg font-medium transition-colors",
                    active ? "text-accent" : "text-white hover:text-accent"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto space-y-4 pt-8">
            <a
              href={`tel:${companyInfo.phone.replace(/\s|[()]/g, "")}`}
              className="flex items-center gap-2 whitespace-nowrap text-white"
            >
              <Phone size={18} aria-hidden="true" />
              {companyInfo.phone}
            </a>
            <Button href="/contacts" className="w-full" onClick={() => setIsOpen(false)}>
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
