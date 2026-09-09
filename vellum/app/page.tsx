import { PageShell } from "@/components/ui/page-shell";
import { WindowFrame } from "@/components/home/window-frame";
import { ProfilePanel } from "@/components/home/profile-panel";
import { IntroPanel } from "@/components/home/intro-panel";

export default function Home() {
  return (
    <PageShell centered>
      <WindowFrame>
        <ProfilePanel />
        <IntroPanel />
      </WindowFrame>
    </PageShell>
  );
}
