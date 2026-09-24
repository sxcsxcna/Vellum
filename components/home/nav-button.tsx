/**
 * 导航按钮：传入 href 时渲染为 Link 客户端路由跳转，否则渲染为普通按钮。
 */
import type { ReactNode } from "react";
import Link from "next/link";

// 按钮通用样式：浅色半透明底 + 悬停加深 + 按压内阴影
const navItemClassName =
  "relative my-1 flex min-h-11 w-[min(80%,16rem)] items-center justify-center overflow-hidden rounded-xl bg-nav text-center text-ink transition-all duration-300 ease-in-out hover:bg-nav-hover active:shadow-press lg:w-[60%]";

type NavButtonProps = {
  href?: string;
  children: ReactNode;
};

export function NavButton({ href, children }: NavButtonProps) {
  // 有链接目标时用 Link 实现客户端路由跳转
  if (href) {
    return (
      <Link href={href} className={navItemClassName}>
        {children}
      </Link>
    );
  }

  // 无链接时（如占位菜单项）渲染为普通按钮
  return (
    <button type="button" className={navItemClassName}>
      {children}
    </button>
  );
}
