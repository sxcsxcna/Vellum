/**
 * 主题管理：浅色 / 暗色切换与初始化脚本，以及「关闭页面」工具函数。
 */
export type Theme = "light" | "dark";

// localStorage 中保存主题的键名
export const THEME_STORAGE_KEY = "vellum-theme";

/** 在 hydration 之前执行，避免暗色模式下首屏闪白。 */
export const themeInitScript = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

// 切换暗色类并持久化到 localStorage
export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // 隐私模式等环境下 localStorage 不可用，忽略即可
  }
}

// 关闭当前标签页；浏览器不允许脚本关闭非脚本打开的页面时退回到空白页
export function closePage() {
  window.close();
  // 非脚本打开的标签页浏览器不允许 close()，退回到空白页
  window.setTimeout(() => {
    if (!window.closed) {
      window.location.replace("about:blank");
    }
  }, 100);
}
