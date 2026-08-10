import { scrollToSection } from '../../utils/scroll';
import { profile } from '../../data/portfolio';
import styles from './Logo.module.css';

export default function Logo({ className = '' }) {
  function handleClick(event) {
    event.preventDefault();
    scrollToSection('home');
  }

  return (
    <a href="#home" className={`${styles.logo} ${className}`} onClick={handleClick} aria-label={`${profile.name} — back to top`}>
      <span className={styles.mark} aria-hidden="true">
        {profile.initial}
      </span>
      <span className={styles.word}>{profile.name}</span>
    </a>
  );
}
