/**
 * 仿 macOS 窗口的「交通灯」控制按钮：红 = 关闭页面、黄 = 浅色、绿 = 暗色。
 */
"use client";

import { applyTheme, closePage } from "@/lib/theme";

// 三个控制按钮的定义：标签、颜色与点击行为
const controls = [
  {
    label: "关闭页面",
    className: "bg-traffic-red",
    onClick: closePage,
  },
  {
    label: "切换为浅色模式",
    className: "bg-traffic-yellow",
    onClick: () => applyTheme("light"),
  },
  {
    label: "切换为暗色模式",
    className: "bg-traffic-green",
    onClick: () => applyTheme("dark"),
  },
] as const;

export function WindowControls() {
  return (
    <div className="flex h-full items-center">
      {controls.map((control) => (
        <button
          key={control.label}
          type="button"
          title={control.label}
          aria-label={control.label}
          onClick={control.onClick}
          className="flex size-11 items-center justify-center sm:mx-1 sm:size-auto sm:p-2.5"
        >
          <span
            className={`block size-3.75 rounded-full shadow-md transition-transform duration-200 hover:scale-110 active:scale-95 ${control.className}`}
          />
        </button>
      ))}
    </div>
  );
}
