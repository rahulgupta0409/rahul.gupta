import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { experience } from '../../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading id="experience-heading" title="Experience" />

        <ol className={styles.timeline}>
          {experience.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 0.09} className={styles.item}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.dot} />
              </div>

              <div className={styles.content}>
                <div className={styles.headRow}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.summary}>{item.summary}</p>
                <ul className={styles.points}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
