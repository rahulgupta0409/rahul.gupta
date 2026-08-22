import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { experience } from '../../data/portfolio';
import toyotaLogo from '../../assets/images/toyota-motors-europe.webp';
import firstGroupLogo from '../../assets/images/first-group-america.png';
import aerialTelecomLogo from '../../assets/images/aerial-telecom.png';
import { MapPinIcon } from '../icons/Icons';
import styles from './Experience.module.css';

const COMPANY_LOGOS = {
  'infosys-analyst': toyotaLogo,
  'infosys-sse': firstGroupLogo,
  'aerial-telecom': aerialTelecomLogo,
};

export default function Experience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading id="experience-heading" title="Experience" />

        <ol className={styles.timeline}>
          {experience.map((item, index) => {
            const logo = COMPANY_LOGOS[item.id];

            return (
              <Reveal as="li" key={item.id} delay={index * 0.09} className={styles.item}>
                <div className={styles.marker} aria-hidden="true">
                  <span className={styles.dot} />
                </div>

                <div className={styles.content}>
                  <div className={styles.headRow}>
                    <h3 className={styles.role}>{item.role}</h3>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  {item.location && (
                    <p className={styles.location}>
                      <MapPinIcon aria-hidden="true" />
                      {item.location}
                    </p>
                  )}
                  <div className={styles.companyRow}>
                    {logo && <img src={logo} alt="" className={styles.companyLogo} aria-hidden="true" />}
                    <p className={styles.company}>{item.company}</p>
                  </div>
                  <p className={styles.summary}>{item.summary}</p>
                  <ul className={styles.points}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
