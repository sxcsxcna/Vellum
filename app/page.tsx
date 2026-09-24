/**
 * 首页路由：展示一个仿 macOS 窗口的个人主页，
 * 左侧为头像 + 导航，右侧为自我介绍。
 */
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
