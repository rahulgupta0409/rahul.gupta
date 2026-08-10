import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import StatCard from './StatCard';
import { aboutCopy, stats } from '../../data/portfolio';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading id="about-heading" title="About Me" />

        <div className={styles.grid}>
          <Reveal as="p" className={styles.copy}>
            {aboutCopy}
          </Reveal>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <Reveal key={stat.id} delay={index * 0.09}>
                <StatCard stat={stat} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
