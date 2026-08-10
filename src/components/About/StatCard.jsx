import { useCountUp } from '../../hooks/useCountUp';
import styles from './About.module.css';

export default function StatCard({ stat }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div ref={ref} className={styles.statCard}>
      <p className={styles.statValue}>
        {value}
        {stat.suffix}
      </p>
      <p className={styles.statLabel}>{stat.label}</p>
    </div>
  );
}
