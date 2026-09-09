import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { AboutHero } from "@/components/about/about-hero";
import { aboutContent, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${aboutContent.name} · ${site.englishName}`,
  description: site.description,
};

export default function About() {
  return (
    <PageShell className="bg-linear-to-r from-about-from to-about-to">
      <AboutHero />
    </PageShell>
  );
}
