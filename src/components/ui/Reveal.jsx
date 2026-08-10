import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * Fades + lifts children into view once as they cross the viewport.
 * Falls back to a plain opacity fade when reduced motion is requested.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  once = true,
  className,
  ...rest
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px 0px' }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: prefersReducedMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
