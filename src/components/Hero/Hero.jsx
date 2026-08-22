import Profile from '../Profile/Profile';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import { ArrowRightIcon, ChevronDownIcon, MailIcon, CertBadgeIcon } from '../icons/Icons';
import { profile, certifications } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scroll';
import { useTypewriter } from '../../hooks/useTypewriter';
import styles from './Hero.module.css';

export default function Hero() {
  const typedRole = useTypewriter(profile.role, { speed: 65, startDelay: 550 });
  const awsCert = certifications.find((c) => c.id === 'aws-dva');

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

          <Reveal as="p" className={styles.role} delay={0.12} aria-label={profile.role}>
            <span aria-hidden="true">{typedRole}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </Reveal>

          <div className={styles.badgeRow}>
            <Reveal as="div" className={styles.locationBadge} delay={0.15}>
              <span className={styles.locationDot} aria-hidden="true" />
              <span className={styles.flag} aria-hidden="true">
                🇧🇪
              </span>
              <span>{profile.location}</span>
            </Reveal>

            {awsCert && (
              <Reveal as="div" className={styles.certBadge} delay={0.18}>
                <CertBadgeIcon className={styles.certIcon} aria-hidden="true" />
                <span>{awsCert.name}</span>
              </Reveal>
            )}
          </div>

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
