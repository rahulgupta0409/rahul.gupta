import { GithubIcon, LinkedinIcon, MailIcon } from '../icons/Icons';
import { socials } from '../../data/portfolio';
import styles from './SocialLinks.module.css';

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: MailIcon };

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <li key={social.id}>
            <a
              href={social.href}
              target={social.icon === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
              className={styles.link}
              aria-label={social.label}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
