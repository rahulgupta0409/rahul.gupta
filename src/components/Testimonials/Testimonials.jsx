import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import TestimonialCard from './TestimonialCard';
import { socials, testimonials } from '../../data/portfolio';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  if (!testimonials.length) return null;

  const linkedinUrl = socials.find((social) => social.id === 'linkedin')?.href;

  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          id="testimonials-heading"
          title="Testimonials"
          action={linkedinUrl ? { label: 'View on LinkedIn', href: linkedinUrl, external: true } : undefined}
        />

        <ul className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.id} delay={index * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
