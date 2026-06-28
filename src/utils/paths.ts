export function sitePath(path = "") {
  const base = import.meta.env.BASE_URL || "/";
  if (!path || path === "/") return base;
  if (path.startsWith("#")) return path;
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
