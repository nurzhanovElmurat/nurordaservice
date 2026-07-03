"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Truck, FileCheck, Building2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    icon: Factory,
    title: "Завод в Китае",
    description: "Прямое взаимодействие с производителями",
  },
  {
    icon: ShieldCheck,
    title: "Контроль качества",
    description: "Заводские испытания и проверка комплектности",
  },
  {
    icon: Truck,
    title: "Логистика",
    description: "Мультимодальные международные перевозки",
  },
  {
    icon: FileCheck,
    title: "Таможенное оформление",
    description: "Полное документальное сопровождение",
  },
  {
    icon: Building2,
    title: "Поставка заказчику",
    description: "Доставка до объекта и ввод в эксплуатацию",
  },
];

export function SupplyChainInfographic() {
  return (
    <AnimatedSection>
      <div className="relative mx-auto max-w-5xl">
        {/* Desktop horizontal */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between gap-2">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-1 flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-white shadow-card"
                >
                  <step.icon className="text-accent" size={32} strokeWidth={1.5} aria-hidden="true" />
                </motion.div>
                <div className="mt-5 text-center">
                  <h3 className="text-sm font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-graphite-light">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <svg
                    className="absolute left-[calc(50%+48px)] top-10 w-[calc(100%-96px)] text-accent/40"
                    height="2"
                    aria-hidden="true"
                  >
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="flex flex-col gap-0 lg:hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-white shadow-card">
                  <step.icon className="text-accent" size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                {i < steps.length - 1 && (
                  <div className="my-2 h-8 w-0.5 bg-accent/30" aria-hidden="true" />
                )}
              </div>
              <div className="pb-8 pt-2">
                <h3 className="font-bold text-navy">{step.title}</h3>
                <p className="mt-1 text-sm text-graphite-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
