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
        "page-enter min-h-dvh w-full",
        centered && "flex items-center justify-center overflow-x-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}
