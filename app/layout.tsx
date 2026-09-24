/**
 * 根布局：定义应用的 HTML 骨架、全局字体、主题初始化脚本与 SEO 元数据。
 * 所有路由页面都会嵌套在此布局中渲染。
 */
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// 加载 Geist 无衬线字体，暴露为 CSS 变量 --font-geist-sans 供全局使用
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 加载 Geist Mono 等宽字体
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO 元数据，内容来自 lib/site.ts 的集中配置
export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

// 视口与浏览器主题色（随系统浅色 / 暗色模式切换）
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1d22" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-page font-sans text-muted transition-colors duration-300"
      >
        {/* 在 hydration 前注入主题脚本，避免暗色模式下首屏闪白 */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
