/**
 * 「关于我」页面路由：顶部 hero + 兴趣故事列表。
 */
import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStories } from "@/components/about/about-stories";
import { aboutContent, site } from "@/lib/site";

// 该页面的标题由姓名与英文名组合而成
export const metadata: Metadata = {
  title: `${aboutContent.name} · ${site.englishName}`,
  description: site.description,
};

export default function About() {
  return (
    <PageShell>
      <AboutHero />
      <AboutStories />
    </PageShell>
  );
}
