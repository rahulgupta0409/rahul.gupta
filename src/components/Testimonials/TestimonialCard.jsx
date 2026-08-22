import { UserIcon } from '../icons/Icons';
import styles from './Testimonials.module.css';

function QuoteIcon(props) {
  return (
    <svg viewBox="0 0 32 24" width="1em" height="1em" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M13.6 0C6.4 3.2 2 9.3 2 15.6 2 20.5 5.2 24 9.7 24c3.6 0 6.3-2.7 6.3-6.2 0-3.3-2.3-5.7-5.4-5.7-.6 0-1.2.1-1.5.2C9.9 8 12.4 4.4 16.6 1.9L13.6 0Zm16.5 0c-7.2 3.2-11.6 9.3-11.6 15.6 0 4.9 3.2 8.4 7.7 8.4 3.6 0 6.3-2.7 6.3-6.2 0-3.3-2.3-5.7-5.4-5.7-.6 0-1.2.1-1.5.2C26.4 8 28.9 4.4 33.1 1.9L30.1 0Z"
      />
    </svg>
  );
}

export default function TestimonialCard({ testimonial }) {
  const { quote, name, role, relationship, photo } = testimonial;

  return (
    <figure className={styles.card}>
      <div className={styles.cardTop}>
        <QuoteIcon className={styles.quoteMark} />
        {relationship && <span className={styles.badge}>{relationship}</span>}
      </div>

      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>

      <figcaption className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {photo ? <img src={photo} alt="" /> : <UserIcon />}
        </span>
        <span className={styles.identity}>
          <cite className={styles.name}>{name}</cite>
          <span className={styles.role} title={role}>
            {role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
