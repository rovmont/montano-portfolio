/** Prefix a site path with Astro's configured `base` (for GitHub Pages). */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}/${path.replace(/^\//, "")}`;
}

/** Normalize a pathname for active-link comparisons. */
export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "") || "/";
}
