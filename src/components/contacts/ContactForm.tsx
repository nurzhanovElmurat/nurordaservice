"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/lib/metadata";
import { useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Введите имя";
  if (!data.phone.trim() || data.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Введите корректный телефон";
  if (!data.message.trim()) errors.message = "Введите сообщение";
  return errors;
}

export function ContactForm() {
  const router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast("Проверьте правильность заполнения формы", "error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/contacts/thank-you");
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Форма обратной связи" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
          Ваше имя <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="input-corporate"
          placeholder="Иван Иванов"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
            Телефон <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="input-corporate"
            placeholder="+7 (___) ___-__-__"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input-corporate"
            placeholder="email@company.kz"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-navy">
          Компания
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="input-corporate"
          placeholder="Название организации"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
          Сообщение <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="input-corporate resize-none"
          placeholder="Опишите ваш запрос или техническое задание..."
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.message}</p>
        )}
      </div>
      <Button type="submit" size="lg" disabled={loading} icon>
        {loading ? "Отправка..." : "Отправить заявку"}
      </Button>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="heading-display mb-6 text-lg">Контактная информация</h3>
        <ul className="space-y-5">
          <li>
            <a
              href={`tel:${companyInfo.phone.replace(/\s|[()]/g, "")}`}
              className="group flex items-start gap-4 transition-colors hover:text-accent"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Phone size={18} aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xs text-graphite-light">Телефон</span>
                <span className="font-semibold text-navy whitespace-nowrap">{companyInfo.phone}</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${companyInfo.email}`}
              className="group flex items-start gap-4 transition-colors hover:text-accent"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Mail size={18} aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xs text-graphite-light">Email</span>
                <span className="font-semibold text-navy">{companyInfo.email}</span>
              </div>
            </a>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <MapPin size={18} aria-hidden="true" />
            </div>
            <div>
              <span className="block text-xs text-graphite-light">Адрес</span>
              <span className="font-semibold text-navy">{companyInfo.address}</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Clock size={18} aria-hidden="true" />
            </div>
            <div>
              <span className="block text-xs text-graphite-light">Режим работы</span>
              <span className="font-semibold text-navy">Пн — Пт: 9:00 — 18:00</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function MapEmbed() {
  return (
    <div className="relative h-80 overflow-hidden rounded-xl border border-gray-100 shadow-card md:h-[28rem]">
      <iframe
        title="NurOrdaService на карте — Астана"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.0!2d71.4301!3d51.1283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzQxLjkiTiA3McKwMjUnNDguNCJF!5e0!3m2!1sru!2skz!4v1"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
