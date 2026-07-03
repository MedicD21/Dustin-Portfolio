/**
 * Prefix an internal path with the site's base path (needed while
 * the site lives at github.io/Dustin-Portfolio). Use for every
 * internal href: url('/projects') → '/Dustin-Portfolio/projects'.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
