"use client";

import { ToastProvider } from "@/components/ui/Toast";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { ScrollToTop } from "@/components/ui/AnimatedSection";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <LoadingScreen />
      <ScrollProgress />
      {children}
      <ScrollToTop />
      <CookieBanner />
    </ToastProvider>
  );
}
