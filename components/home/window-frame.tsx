import type { ReactNode } from "react";
import { WindowControls } from "@/components/home/window-controls";

export function WindowFrame({ children }: { children: ReactNode }) {
  return (
    <main className="box-border h-[57%] w-[clamp(300px,50vw,1200px)] overflow-hidden rounded-xl bg-surface shadow-lg transition-colors duration-300">
      <div className="flex h-12 items-center px-2.5">
        <WindowControls />
      </div>
      <div className="flex h-[calc(100%-48px)] overflow-hidden p-5">{children}</div>
    </main>
  );
}
