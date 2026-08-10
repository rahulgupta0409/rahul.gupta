import { useEffect, useRef, useState } from 'react';

/**
 * Tracks which section is currently "active" while scrolling, plus overall
 * scroll progress (0-1) and whether the page has scrolled past a threshold.
 * Drives the Navbar active link, and the Dynamic Island's contextual label.
 */
export function useActiveSection(ids, { offset = 120 } = {}) {
  const [activeId, setActiveId] = useState(ids[0]);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    function measure() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0);
      setScrolled(scrollTop > 8);

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      }
      setActiveId(current);
      ticking.current = false;
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(measure);
      }
    }

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')]);

  return { activeId, progress, scrolled };
}
