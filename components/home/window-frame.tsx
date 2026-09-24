import type { ReactNode } from "react";
import { WindowControls } from "@/components/home/window-controls";

export function WindowFrame({ children }: { children: ReactNode }) {
  return (
    <main className="box-border flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-xl bg-surface shadow-lg transition-colors duration-300 sm:h-[min(90dvh,920px)] sm:max-h-230 sm:w-[min(100%,1100px)] sm:flex-none lg:h-[57%] lg:w-[clamp(640px,86vw,1200px)]">
      <div className="flex h-12 shrink-0 items-center px-1 sm:px-2.5">
        <WindowControls />
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-4 sm:p-5 lg:flex-row lg:overflow-hidden">
        {children}
      </div>
    </main>
  );
}
