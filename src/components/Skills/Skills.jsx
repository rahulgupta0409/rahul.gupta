import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { DatabaseIcon, GitBranchIcon, LayoutIcon, ServerIcon } from '../icons/Icons';
import { skillGroups } from '../../data/portfolio';
import styles from './Skills.module.css';

const iconMap = {
  layout: LayoutIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  'git-branch': GitBranchIcon,
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading id="skills-heading" title="Skills" />

        <ul className={styles.grid}>
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon] ?? LayoutIcon;
            return (
              <Reveal as="li" key={group.id} delay={index * 0.07}>
                <article className={styles.card}>
                  <div className={styles.iconBadge} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className={styles.title}>{group.title}</h3>
                  <p className={styles.blurb}>{group.blurb}</p>
                  <ul className={styles.tags} aria-label={`${group.title} skills`}>
                    {group.skills.map((skill) => (
                      <li key={skill} className={styles.tag}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
