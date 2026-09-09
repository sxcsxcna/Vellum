export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "vellum-theme";

/** 在 hydration 之前执行，避免暗色模式下首屏闪白。 */
export const themeInitScript = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // 隐私模式等环境下 localStorage 不可用，忽略即可
  }
}

export function closePage() {
  window.close();
  // 非脚本打开的标签页浏览器不允许 close()，退回到空白页
  window.setTimeout(() => {
    if (!window.closed) {
      window.location.replace("about:blank");
    }
  }, 100);
}
