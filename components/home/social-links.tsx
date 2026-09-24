/**
 * 社交链接图标列表：以纯 SVG 路径绘制，颜色跟随主题（currentColor）。
 */
import { socialLinks } from "@/lib/site";

// 图标通用样式：圆角、悬停高亮、按压内阴影
const iconClassName =
  "size-8 rounded-xl text-muted transition-all duration-300 ease-in-out hover:bg-icon-hover active:shadow-press sm:size-[3em]";

export function SocialLinks() {
  return (
    <div className="mt-3 flex w-full items-center justify-center gap-3 py-2 sm:mt-0 sm:h-[4em] sm:gap-0 sm:p-[2em]">
      {socialLinks.map((item) => (
        <svg
          key={item.id}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={item.viewBox}
          className={iconClassName}
          aria-label={item.label}
          role="img"
        >
          <path fill="currentColor" d={item.path} />
        </svg>
      ))}
    </div>
  );
}
