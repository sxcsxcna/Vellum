import type { ReactNode } from "react";
import Link from "next/link";

const navItemClassName =
  "relative my-1 flex h-[15%] w-[60%] items-center justify-center overflow-hidden rounded-xl bg-nav text-center text-ink transition-all duration-300 ease-in-out hover:bg-nav-hover active:shadow-press";

type NavButtonProps = {
  href?: string;
  children: ReactNode;
};

export function NavButton({ href, children }: NavButtonProps) {
  if (href) {
    return (
      <Link href={href} className={navItemClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={navItemClassName}>
      {children}
    </button>
  );
}
