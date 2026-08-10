export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector('[data-navbar]');
  const offset = (header?.offsetHeight ?? 0) + 16;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}
