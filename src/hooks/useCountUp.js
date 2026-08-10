import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useCountUp(target, { duration = 1.4 } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, target, duration, prefersReducedMotion]);

  return { ref, value };
}
