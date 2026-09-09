import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 禁用所有图片优化，直接使用原始图片
  },
};

export default nextConfig;
