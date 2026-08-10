import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { profile, stats } from '../../data/portfolio';
import dayPhoto from '../../assets/images/profile-day.jpg';
import nightPhoto from '../../assets/images/profile-night.jpg';
import styles from './Profile.module.css';

export default function Profile() {
  const { isDark } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const experienceStat = stats.find((s) => s.id === 'years');

  return (
    <motion.div
      className={styles.wrap}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, x: 24 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : 0.15 }}
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.frame} role="img" aria-label={`Portrait of ${profile.name} at his desk, ${isDark ? 'night' : 'day'} mode`}>
        <img
          src={dayPhoto}
          alt=""
          aria-hidden="true"
          className={`${styles.photo} ${!isDark ? styles.visible : ''}`}
          width={1023}
          height={766}
          fetchPriority="high"
        />
        <img
          src={nightPhoto}
          alt=""
          aria-hidden="true"
          className={`${styles.photo} ${isDark ? styles.visible : ''}`}
          width={1023}
          height={766}
        />
        <div className={styles.frameShade} aria-hidden="true" />
      </div>

      {experienceStat && (
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <div>
            <p className={styles.badgeValue}>
              {experienceStat.value}
              {experienceStat.suffix}
            </p>
            <p className={styles.badgeLabel}>{experienceStat.label}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
