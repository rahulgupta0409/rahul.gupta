import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { MenuIcon, CloseIcon } from '../icons/Icons';
import { navLinks } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scroll';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useIsland } from '../../context/IslandContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { activeId, scrolled, hasIsland } = useIsland();
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function handleNavigate(id) {
    // Close first: useLockBodyScroll holds document.body at overflow:hidden
    // while the menu is open, which silently blocks window.scrollTo if it
    // fires in the same tick. Deferring the scroll a beat lets that effect's
    // cleanup restore scrolling before we ask the page to move.
    setOpen(false);
    window.setTimeout(() => scrollToSection(id), 0);
  }

  return (
    <header data-navbar className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner} ${hasIsland ? styles.withIsland : ''}`}>
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle className={styles.desktopOnly} />
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            className={styles.backdrop}
            aria-label="Dismiss menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className={styles.mobilePanel}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className={styles.mobileList}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`${styles.mobileLink} ${activeId === link.id ? styles.active : ''}`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.mobileFooter}>
              <span className={styles.mobileFooterLabel}>Appearance</span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
