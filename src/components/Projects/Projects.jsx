import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { projects, socials } from '../../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  if (!projects.length) return null;

  const githubUrl = socials.find((social) => social.id === 'github')?.href ?? '#';

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeading
          id="projects-heading"
          title="Featured Projects"
          action={{ label: 'View All Projects', href: githubUrl, external: true }}
        />

        <ul className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal as="li" key={project.id} delay={index * 0.08}>
              <article className={styles.card}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.tags} aria-label={`Technologies used in ${project.title}`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
