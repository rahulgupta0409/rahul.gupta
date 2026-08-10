import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { MoonIcon, SunIcon } from '../icons/Icons';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
      aria-pressed={isDark}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className={styles.iconWrap}
          initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
