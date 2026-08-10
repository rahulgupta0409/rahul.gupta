import Profile from '../Profile/Profile';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import { ArrowRightIcon, ChevronDownIcon, MailIcon } from '../icons/Icons';
import { profile } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scroll';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.eyebrow}>
            {profile.greeting}
          </Reveal>

          <Reveal as="h1" className={styles.name} delay={0.06}>
            {profile.name}
          </Reveal>

          <Reveal as="p" className={styles.role} delay={0.12}>
            {profile.role}
          </Reveal>

          <Reveal as="p" className={styles.bio} delay={0.18}>
            {profile.bio}
          </Reveal>

          <Reveal className={styles.ctas} delay={0.24}>
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon />}
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<MailIcon />}
              iconPosition="left"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('contact');
              }}
            >
              Get In Touch
            </Button>
          </Reveal>

          <Reveal delay={0.3}>
            <SocialLinks className={styles.socials} />
          </Reveal>
        </div>

        <Profile />
      </div>

      <button
        type="button"
        className={styles.scrollCue}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
      >
        <span>Scroll to explore</span>
        <ChevronDownIcon />
      </button>
    </section>
  );
}
