"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { companyInfo } from "@/lib/metadata";
import { useToast } from "@/components/ui/Toast";

const footerLinks = {
  company: [
    { name: "О компании", href: "/about" },
    { name: "Направления", href: "/directions" },
    { name: "Преимущества", href: "/advantages" },
    { name: "Контакты", href: "/contacts" },
  ],
  catalog: [
    { name: "Каталог оборудования", href: "/catalog" },
    { name: "Отрасли", href: "/industries" },
    { name: "Международные поставки", href: "/international" },
    { name: "Услуги", href: "/services" },
  ],
  legal: [
    { name: "Политика конфиденциальности", href: "/privacy" },
  ],
};

export function Footer() {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Введите корректный email", "error");
      return;
    }
    showToast("Спасибо за подписку!");
    setEmail("");
  }

  return (
    <footer className="gradient-navy text-white" role="contentinfo">
      <div className="container-corporate section-padding !pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Комплексные поставки промышленного оборудования и инженерных решений
              для предприятий Республики Казахстан.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                aria-label="Социальные сети"
              >
                <Globe size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Компания
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Каталог
              </h3>
              <ul className="space-y-3">
                {footerLinks.catalog.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Контакты
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s|[()]/g, "")}`}
                    className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    <Phone size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {companyInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {companyInfo.address}
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Быстрая связь
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Email для подписки"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                <Send size={16} aria-hidden="true" />
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} NurOrdaService. Все права защищены.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 transition-colors hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
            <span className="text-xs text-white/40">Республика Казахстан</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
