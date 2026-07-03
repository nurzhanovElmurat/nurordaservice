import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-surface-muted">
      <div className="container-corporate text-center">
        <p
          className="select-none text-[10rem] font-bold leading-none text-accent/10 md:text-[14rem]"
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="heading-display -mt-16 text-3xl md:text-4xl">Страница не найдена</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-graphite-light">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/" icon>На главную</Button>
          <Button href="/contacts" variant="secondary">Связаться с нами</Button>
        </div>
      </div>
    </section>
  );
}
