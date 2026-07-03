"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("nos-cookies");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("nos-cookies", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Уведомление об использовании cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 p-4 shadow-header backdrop-blur-md md:p-6"
    >
      <div className="container-corporate flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-graphite-light">
          Мы используем файлы cookie для улучшения работы сайта и анализа трафика.
          Продолжая использовать сайт, вы соглашаетесь с{" "}
          <Link href="/privacy" className="font-medium text-accent hover:underline">
            политикой конфиденциальности
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={accept}
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Принять
          </button>
          <button
            onClick={() => setVisible(false)}
            className="rounded-lg p-2 text-graphite-light transition-colors hover:bg-gray-100"
            aria-label="Закрыть"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
