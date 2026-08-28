import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { ArrowUpRightIcon } from '../icons/Icons';
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
                {project.logo && (
                  <img className={styles.logo} src={project.logo} alt="" aria-hidden="true" />
                )}
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                {project.tags?.length > 0 && (
                  <ul className={styles.tags} aria-label={`Technologies used in ${project.title}`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
                {project.links?.length > 0 && (
                  <div className={styles.links}>
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        className={styles.link}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                        <ArrowUpRightIcon />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
