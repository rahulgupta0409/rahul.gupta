import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { CloudIcon, DatabaseIcon, GitBranchIcon, LayoutIcon, ServerIcon, SparkIcon } from '../icons/Icons';
import { skillGroups } from '../../data/portfolio';
import styles from './Skills.module.css';

const iconMap = {
  layout: LayoutIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  'git-branch': GitBranchIcon,
  cloud: CloudIcon,
};

const VISIBLE_SKILLS_LIMIT = 6;

function SkillCard({ group, Icon, delay, state }) {
  const [expanded, setExpanded] = useState(false);
  const forceFull = state === 'focused';
  const showAll = forceFull || expanded;
  const hiddenCount = group.skills.length - VISIBLE_SKILLS_LIMIT;
  const hasOverflow = !forceFull && hiddenCount > 0;
  const visibleSkills = showAll ? group.skills : group.skills.slice(0, VISIBLE_SKILLS_LIMIT);

  return (
    <Reveal as="li" delay={delay} className={styles.cardWrap}>
      <article className={styles.card} data-state={state}>
        <div className={styles.cardHead}>
          <div className={styles.iconBadge} aria-hidden="true">
            <Icon />
          </div>
          <span className={styles.count}>{group.skills.length} skills</span>
        </div>
        <h3 className={styles.title}>{group.title}</h3>
        {/* <p className={styles.blurb}>{group.blurb}</p> */}
        <ul className={styles.tags} aria-label={`${group.title} skills`}>
          {visibleSkills.map((skill) => (
            <li key={skill} className={styles.tag}>
              {skill}
            </li>
          ))}
          {hasOverflow && (
            <li>
              <button
                type="button"
                className={styles.toggle}
                aria-expanded={expanded}
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? 'Show less' : `+${hiddenCount} more`}
              </button>
            </li>
          )}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Skills() {
  const [focus, setFocus] = useState('all');
  const prefersReducedMotion = usePrefersReducedMotion();

  const totalSkills = useMemo(
    () => skillGroups.reduce((sum, group) => sum + group.skills.length, 0),
    []
  );

  const tabs = useMemo(
    () => [
      { id: 'all', title: 'All', icon: 'spark', count: totalSkills },
      ...skillGroups.map((group) => ({
        id: group.id,
        title: group.title,
        icon: group.icon,
        count: group.skills.length,
      })),
    ],
    [totalSkills]
  );

  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading id="skills-heading" title="Skills" />

        <div className={styles.tabs} role="tablist" aria-label="Filter skills by focus area">
          {tabs.map((tab) => {
            const TabIcon = iconMap[tab.icon] ?? SparkIcon;
            const isActive = focus === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={styles.tab}
                onClick={() => setFocus(tab.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="skillTabIndicator"
                    className={styles.tabIndicator}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className={styles.tabContent}>
                  <TabIcon />
                  {tab.title}
                  <span className={styles.tabCount}>{tab.count}</span>
                </span>
              </button>
            );
          })}
        </div>

        <ul className={styles.grid}>
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon] ?? LayoutIcon;
            const state = focus === 'all' ? 'neutral' : focus === group.id ? 'focused' : 'dimmed';
            return (
              <SkillCard key={group.id} group={group} Icon={Icon} delay={index * 0.07} state={state} />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
