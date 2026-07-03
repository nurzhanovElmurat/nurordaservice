"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-surface-muted">
      <div className="container-corporate text-center">
        <h1 className="heading-display text-3xl">Произошла ошибка</h1>
        <p className="mx-auto mt-4 max-w-md text-graphite-light">
          Что-то пошло не так. Попробуйте обновить страницу или вернитесь на главную.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={reset}>Попробовать снова</Button>
          <Button href="/" variant="secondary">На главную</Button>
        </div>
      </div>
    </section>
  );
}
