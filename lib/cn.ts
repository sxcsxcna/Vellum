/**
 * 类名拼接工具：过滤掉 falsy 值（false / null / undefined）后用空格连接，
 * 便于根据条件灵活组合 className。
 */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
