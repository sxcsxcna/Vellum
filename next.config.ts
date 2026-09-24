/**
 * Next.js 配置。
 * - output: "export" —— 输出纯静态文件，便于部署到 Cloudflare Workers 等静态托管；
 * - images.unoptimized —— 禁用图片优化，直接使用原始图片。
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 禁用所有图片优化，直接使用原始图片
  },
};

export default nextConfig;
