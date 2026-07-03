import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-gray-200/80", className)}
      aria-hidden="true"
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="card-corporate overflow-hidden">
      <Skeleton className="aspect-[16/10] rounded-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="section-padding container-corporate space-y-8">
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-6 w-2/3" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
