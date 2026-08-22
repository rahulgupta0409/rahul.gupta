import { useEffect, useRef, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import TestimonialCard from './TestimonialCard';
import { socials, testimonials } from '../../data/portfolio';
import { ArrowRightIcon } from '../icons/Icons';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const trackRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return undefined;

    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  if (!testimonials.length) return null;

  const linkedinUrl = socials.find((social) => social.id === 'linkedin')?.href;
  const showNav = testimonials.length > 3;

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(`.${styles.slide}`);
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          id="testimonials-heading"
          title="Testimonials"
          action={linkedinUrl ? { label: 'View on LinkedIn', href: linkedinUrl, external: true } : undefined}
        />

        <ul className={styles.track} ref={trackRef}>
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" className={styles.slide} key={testimonial.id} delay={index * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </ul>

        {showNav && (
          <div className={styles.navRow}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              aria-label="Show previous testimonial"
            >
              <ArrowRightIcon className={styles.navIconPrev} />
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              aria-label="Show next testimonial"
            >
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
