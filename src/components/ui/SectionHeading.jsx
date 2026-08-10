import { ArrowRightIcon } from '../icons/Icons';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ id, eyebrow, title, action, align = 'left' }) {
  return (
    <div className={`${styles.wrap} ${align === 'center' ? styles.center : ''}`}>
      <div>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 id={id} className={styles.title}>
          {title}
          <span className={styles.dot} aria-hidden="true" />
        </h2>
      </div>
      {action && (
        <a
          className={styles.action}
          href={action.href}
          onClick={action.onClick}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noreferrer' : undefined}
        >
          {action.label}
          <ArrowRightIcon />
        </a>
      )}
    </div>
  );
}
