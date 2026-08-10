import { UserIcon } from '../icons/Icons';
import styles from './Testimonials.module.css';

export default function TestimonialCard({ testimonial }) {
  const { quote, name, role, relationship, photo } = testimonial;

  return (
    <figure className={styles.card}>
      {relationship && <span className={styles.badge}>{relationship}</span>}

      <blockquote className={styles.quote}>
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>

      <figcaption className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {photo ? <img src={photo} alt="" /> : <UserIcon />}
        </span>
        <span className={styles.identity}>
          <cite className={styles.name}>{name}</cite>
          <span className={styles.role}>{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
