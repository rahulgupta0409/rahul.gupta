import Logo from '../ui/Logo';
import SocialLinks from '../ui/SocialLinks';
import { ArrowUpIcon } from '../icons/Icons';
import { navLinks } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scroll';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>Building scalable, efficient, and user-friendly software.</p>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <div className={styles.bottom}>
          <p>© {year} Rahul Gupta. All rights reserved.</p>
          <button type="button" className={styles.toTop} onClick={() => scrollToSection('home')}>
            Back to top
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
