"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { images } from "@/lib/images";
import { directions, getDirectionHref } from "@/data/directions";
import { advantages } from "@/data/services";
import { stats, whyChooseUs } from "@/data/company";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src={images.hero}
        alt="Промышленное оборудование и инженерные системы"
        fill
        priority
        className="object-cover scale-105"
        sizes="100vw"
      />
      <div className="gradient-hero absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="container-corporate relative z-10 pt-32 pb-28 md:pt-40 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-overline mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" aria-hidden="true" />
            Инжиниринговые решения
          </span>
          <h1 className="max-w-5xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
            Комплексное оснащение промышленных предприятий
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Поставки промышленного оборудования, КИПиА, лабораторных систем и инженерных
            решений для предприятий различных отраслей экономики Казахстана.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contacts" size="lg" icon>
              Получить консультацию
            </Button>
            <Button href="/catalog" size="lg" variant="outline">
              Каталог оборудования
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white md:flex"
        aria-label="Прокрутить вниз"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  );
}

export function AboutPreview() {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <AnimatedSection>
          <SectionHeader label="О компании" title="Надёжный партнёр промышленности" />
          <div className="space-y-5 leading-relaxed text-graphite-light">
            <p>
              NurOrdaService — динамично развивающаяся компания, специализирующаяся на поставках
              промышленного оборудования и реализации комплексных инженерных проектов.
            </p>
            <p>
              Мы сопровождаем проекты любой сложности — от подбора отдельных технических решений
              до комплексного оснащения производственных объектов.
            </p>
          </div>
          <Button href="/about" variant="ghost" className="mt-8 !px-0" icon>
            Подробнее о компании
          </Button>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-card-hover">
            <Image
              src={images.about}
              alt="Инженерное оборудование на производстве"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}

export function AdvantagesGrid() {
  return (
    <Section className="bg-surface-muted">
      <AnimatedSection>
        <SectionHeader
          label="Преимущества"
          title="Наши преимущества"
          description="Комплексный подход к реализации инженерных проектов любой сложности"
          centered
        />
      </AnimatedSection>
      <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item) => (
          <StaggerItem key={item}>
            <div className="card-corporate flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Check size={20} strokeWidth={2} aria-hidden="true" />
              </div>
              <span className="font-semibold text-navy">{item}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

export function DirectionsPreview() {
  const preview = directions.slice(0, 6);
  return (
    <Section>
      <AnimatedSection>
        <SectionHeader
          label="Направления"
          title="Основные направления деятельности"
          description="Широкий спектр промышленного оборудования и инженерных решений"
          centered
        />
      </AnimatedSection>
      <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((dir) => (
          <StaggerItem key={dir.slug}>
            <Card
              title={dir.title}
              description={dir.description}
              icon={dir.icon}
              href={getDirectionHref(dir)}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
      <AnimatedSection className="mt-14 text-center">
        <Button href="/directions" variant="secondary" icon>
          Все направления
        </Button>
      </AnimatedSection>
    </Section>
  );
}

export function WhyChooseUs() {
  return (
    <Section dark>
      <AnimatedSection>
        <SectionHeader
          label="Почему мы"
          title="Почему выбирают NurOrdaService"
          description="Репутация надёжного поставщика благодаря комплексному подходу"
          centered
          light
        />
      </AnimatedSection>
      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {whyChooseUs.map((item) => (
          <StaggerItem key={item.title}>
            <div className="h-full rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
              <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="leading-relaxed text-white/70">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

export function StatsSection() {
  return (
    <Section className="bg-surface-muted">
      <StaggerContainer className="grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent md:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-graphite-light md:text-base">{stat.label}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

export function CTASection() {
  return (
    <Section>
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-2xl bg-navy p-12 text-center md:p-20">
          <div className="absolute inset-0 opacity-15">
            <Image src={images.cta} alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/80" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Готовы обсудить ваш проект?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Свяжитесь с нами для консультации по подбору оборудования и инженерным решениям.
            </p>
            <Button href="/contacts" size="lg" className="mt-8" icon>
              Получить консультацию
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
