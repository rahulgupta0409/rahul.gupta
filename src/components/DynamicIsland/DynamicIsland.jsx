import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsland } from '../../context/IslandContext';
import { useTheme } from '../../context/ThemeContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { scrollToSection } from '../../utils/scroll';
import { navLinks, socials } from '../../data/portfolio';
import {
  BriefcaseIcon,
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  FolderIcon,
  GithubIcon,
  GlobeIcon,
  HomeIcon,
  LayoutIcon,
  LeetcodeIcon,
  LinkedinIcon,
  MailIcon,
  MediumIcon,
  MoonIcon,
  QuoteIcon,
  SparkIcon,
  SubstackIcon,
  SunIcon,
  UserIcon,
} from '../icons/Icons';
import styles from './DynamicIsland.module.css';

const sectionIcons = {
  home: HomeIcon,
  about: UserIcon,
  projects: FolderIcon,
  skills: LayoutIcon,
  experience: BriefcaseIcon,
  testimonials: QuoteIcon,
  contact: MailIcon,
};

const notifyIcons = { spark: SparkIcon, moon: MoonIcon, sun: SunIcon, check: CheckIcon };
const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  website: GlobeIcon,
  medium: MediumIcon,
  substack: SubstackIcon,
  leetcode: LeetcodeIcon,
};

const springTransition = { type: 'spring', stiffness: 430, damping: 32, mass: 0.9 };

export default function DynamicIsland() {
  const { activeId, progress, mode, notification, hasIsland, expand, collapse } = useIsland();
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const closeBtnRef = useRef(null);

  const transition = prefersReducedMotion ? { duration: 0.01 } : springTransition;
  const fadeTransition = { duration: prefersReducedMotion ? 0.01 : 0.22 };

  const activeLink = navLinks.find((link) => link.id === activeId);
  const activeLabel = activeLink?.label ?? 'Home';
  const ActiveIcon = sectionIcons[activeId] ?? HomeIcon;
  const NotifyIcon = notification ? notifyIcons[notification.icon] ?? SparkIcon : SparkIcon;

  useEffect(() => {
    if (mode !== 'expanded') return undefined;

    function onKeyDown(event) {
      if (event.key === 'Escape') collapse();
    }
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) collapse();
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [mode, collapse]);

  function handleNavigate(id) {
    scrollToSection(id);
    collapse();
  }

  // Real hardware only: render nothing anywhere else (all hooks above still
  // run unconditionally, so Navbar keeps getting activeId/scrolled from the
  // same provider regardless of this).
  if (!hasIsland) return null;

  return (
    <div className={styles.stage}>
      <motion.div
        ref={rootRef}
        layout
        className={styles.island}
        data-mode={mode}
        animate={{ borderRadius: mode === 'expanded' ? 26 : 999 }}
        transition={transition}
      >
        <AnimatePresence mode="wait" initial={false}>
          {mode === 'expanded' ? (
            <motion.div
              key="expanded"
              className={styles.panel}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={transition}
              role="dialog"
              aria-modal="false"
              aria-label="Quick navigation"
            >
              <div className={styles.panelHeader}>
                <span className={styles.panelTitle}>
                  <SparkIcon aria-hidden="true" />
                  Quick actions
                </span>
                <button
                  ref={closeBtnRef}
                  type="button"
                  className={styles.closeBtn}
                  onClick={collapse}
                  aria-label="Close quick actions"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav className={styles.grid} aria-label="Jump to section">
                {navLinks.map((link) => {
                  const Icon = sectionIcons[link.id] ?? HomeIcon;
                  const isActive = link.id === activeId;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      className={`${styles.gridItem} ${isActive ? styles.gridItemActive : ''}`}
                      onClick={() => handleNavigate(link.id)}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <Icon />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </nav>

              <div className={styles.panelFooter}>
                <button type="button" className={styles.themeRow} onClick={toggleTheme}>
                  {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                  <span>{theme === 'dark' ? 'Night mode' : 'Day mode'}</span>
                </button>
                <div className={styles.socialRow}>
                  {socials.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <a
                        key={social.id}
                        href={social.href}
                        target={social.icon === 'mail' ? undefined : '_blank'}
                        rel="noreferrer"
                        aria-label={social.label}
                        className={styles.socialLink}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : mode === 'notify' && notification ? (
            <motion.div
              key="notify"
              className={styles.notify}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={transition}
              role="status"
              aria-live="polite"
            >
              <span className={styles.notifyIcon} aria-hidden="true">
                <NotifyIcon />
              </span>
              <span>{notification.message}</span>
            </motion.div>
          ) : (
            <motion.button
              key="compact"
              type="button"
              className={styles.compact}
              onClick={expand}
              aria-haspopup="dialog"
              aria-expanded={false}
              aria-label={`Open quick actions — currently viewing ${activeLabel}`}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={transition}
            >
              <span className={styles.statusDot} aria-hidden="true" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeId}
                  className={styles.compactLabel}
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={fadeTransition}
                >
                  <ActiveIcon aria-hidden="true" />
                  <span className={styles.labelText}>{activeLabel}</span>
                </motion.span>
              </AnimatePresence>
              <ChevronDownIcon className={styles.chevron} aria-hidden="true" />
            </motion.button>
          )}
        </AnimatePresence>

        <span className={styles.progressTrack} aria-hidden="true">
          <span className={styles.progressFill} style={{ transform: `scaleX(${progress})` }} />
        </span>
      </motion.div>
    </div>
  );
}
