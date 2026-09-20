import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  centered?: boolean;
};

export function PageShell({ children, className, centered = false }: PageShellProps) {
  return (
    <div
      className={cn(
        "page-enter min-h-dvh w-full overflow-x-hidden",
        centered &&
          "flex items-stretch justify-start px-3 py-3 sm:items-center sm:justify-center sm:px-4 sm:py-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
