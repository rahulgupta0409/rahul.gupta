import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { profile, socials, skillGroups, education, certifications, experience, aboutCopy, projects } from '../../data/portfolio';
import {
  ArrowRightIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  GlobeIcon,
  MediumIcon,
  SubstackIcon,
  LeetcodeIcon,
  PhoneIcon,
} from '../../components/icons/Icons';
import resumePhoto from '../../assets/images/resume-pic.png';
import devAssociateLogo from '../../assets/images/developer-associate-logo.png';
import styles from './Resume.module.css';

const githubUrl = socials.find((s) => s.id === 'github')?.href;
const linkedinUrl = socials.find((s) => s.id === 'linkedin')?.href;
const mediumUrl = socials.find((s) => s.id === 'medium')?.href;
const substackUrl = socials.find((s) => s.id === 'substack')?.href;
const leetcodeUrl = socials.find((s) => s.id === 'leetcode')?.href;
const linkedinHandle = linkedinUrl?.replace(/^https?:\/\/(www\.)?linkedin\.com\//, '').replace(/\/$/, '');
const githubHandle = githubUrl?.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '');
const mediumHandle = mediumUrl?.replace(/^https?:\/\/(www\.)?medium\.com\//, '');
const substackHandle = substackUrl?.replace(/^https?:\/\/(www\.)?substack\.com\//, '').replace(/\?.*$/, '');
const leetcodeHandle = leetcodeUrl?.replace(/^https?:\/\/(www\.)?leetcode\.com\//, '').replace(/\/$/, '');

// Derived straight from the same `experience` used on the portfolio itself —
// full bullet lists, so a fresh edit there (new job, reworded point, new
// metric) shows up here too without a second copy to keep in sync.
const resumeJobs = experience.map((job) => ({ ...job, bullets: job.points }));

// Matches the .photo rule's `object-position: 50% 15%` in Resume.module.css
const PHOTO_OBJECT_POSITION = { x: 0.5, y: 0.15 };

export default function Resume() {
  const sheetRef = useRef(null);
  const photoRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const previous = document.title;
    document.title = `${profile.name} — Resume`;
    return () => {
      document.title = previous;
    };
  }, []);

  // Rasterize the actual rendered sheet and pack it into a PDF ourselves,
  // rather than going through window.print(). Handing off to the browser's
  // native print dialog turned out to be unreliable: Chrome's own Margins/
  // Scale settings (sometimes remembered from an unrelated earlier print
  // job) silently override a CSS @page size, and Safari has long-standing
  // bugs ignoring custom page margins entirely — either way the PDF could
  // come out different from what's on screen, which defeats the point.
  // Capturing the DOM directly guarantees pixel-for-pixel WYSIWYG regardless
  // of the visitor's browser or print settings.
  async function handleDownload() {
    const sheet = sheetRef.current;
    if (!sheet || isDownloading) return;

    setIsDownloading(true);
    try {
      const scale = 2; // render at 2x for crisp text/edges in the PDF
      const sheetRect = sheet.getBoundingClientRect();
      const canvas = await html2canvas(sheet, {
        scale,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      // html2canvas rasterizes <img> content at low internal resolution
      // regardless of the `scale` option, so the headshot came out soft/
      // blurry no matter the JPEG quality. Redraw it directly from the
      // original full-resolution file, cropped/positioned to match the
      // on-screen object-fit:cover circle exactly.
      const photoEl = photoRef.current;
      if (photoEl) {
        const photoRect = photoEl.getBoundingClientRect();
        const destX = (photoRect.left - sheetRect.left) * scale;
        const destY = (photoRect.top - sheetRect.top) * scale;
        const destSize = photoRect.width * scale;

        const sourceImg = new Image();
        sourceImg.src = resumePhoto;
        await sourceImg.decode();

        const srcScale = Math.max(destSize / sourceImg.naturalWidth, destSize / sourceImg.naturalHeight);
        const cropSize = destSize / srcScale;
        const cropX = (sourceImg.naturalWidth - cropSize) * PHOTO_OBJECT_POSITION.x;
        const cropY = (sourceImg.naturalHeight - cropSize) * PHOTO_OBJECT_POSITION.y;

        const ctx = canvas.getContext('2d');
        ctx.save();
        // html2canvas leaves its own scale() transform active on this
        // context for its internal high-DPI drawing; without resetting it
        // here, our own coordinates (already in raw canvas-pixel space)
        // get scaled a second time, drawing the photo oversized and
        // offset from where it's supposed to be.
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.beginPath();
        ctx.arc(destX + destSize / 2, destY + destSize / 2, destSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(sourceImg, cropX, cropY, cropSize, cropSize, destX, destY, destSize, destSize);
        ctx.restore();
      }

      // JPEG, not PNG: this canvas is mostly a photo + gradient band, which
      // PNG's lossless compression handles badly (a first pass came out at
      // 21MB — too large for most application portals' upload limits).
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pageWidth = canvas.width / scale;
      const pageHeight = canvas.height / scale;
      const pdf = new jsPDF({ unit: 'px', format: [pageWidth, pageHeight] });
      pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);

      // The image above is a flat raster of the sheet, so none of the on-
      // screen <a> tags survive into it — overlay invisible clickable
      // regions at each link's original position so contact/project links
      // still work once the file is a PDF.
      sheet.querySelectorAll('a[href]').forEach((anchor) => {
        const rect = anchor.getBoundingClientRect();
        pdf.link(rect.left - sheetRect.left, rect.top - sheetRect.top, rect.width, rect.height, {
          url: anchor.href,
        });
      });

      pdf.save(`${profile.name.replace(/\s+/g, '_')}_Resume.pdf`);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.toolbar} ${styles.noPrint}`}>
        <Link to="/" className={styles.backLink}>
          <ArrowRightIcon className={styles.backIcon} />
          Back to portfolio
        </Link>
        <button
          type="button"
          className={styles.downloadBtn}
          onClick={handleDownload}
          disabled={isDownloading}
          aria-busy={isDownloading}
        >
          <DownloadIcon />
          {isDownloading ? 'Generating…' : 'Download PDF'}
        </button>
      </div>

      <article className={styles.sheet} ref={sheetRef}>
        <header className={styles.band}>
          <div className={styles.photoWrap}>
            <img src={resumePhoto} alt={profile.name} className={styles.photo} ref={photoRef} />
          </div>
          <div className={styles.bandText}>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.role}>{profile.role}</p>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.columns}>
            <div className={styles.colLeft}>
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Personal Profile</h2>
                <p className={styles.summary}>{aboutCopy}</p>
              </section>

              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Contact Details</h2>
                <ul className={styles.contactList}>
                  <li>
                    <MapPinIcon aria-hidden="true" />
                    <span>{profile.location}</span>
                  </li>
                  {profile.phoneHref && (
                    <li>
                      <PhoneIcon aria-hidden="true" />
                      <a href={profile.phoneHref}>{profile.phone}</a>
                    </li>
                  )}
                  <li>
                    <MailIcon aria-hidden="true" />
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  {linkedinUrl && (
                    <li>
                      <LinkedinIcon aria-hidden="true" />
                      <a href={linkedinUrl} target="_blank" rel="noreferrer">
                        linkedin.com/{linkedinHandle}
                      </a>
                    </li>
                  )}
                  {githubUrl && (
                    <li>
                      <GithubIcon aria-hidden="true" />
                      <a href={githubUrl} target="_blank" rel="noreferrer">
                        github.com/{githubHandle}
                      </a>
                    </li>
                  )}
                  {profile.websiteHref && (
                    <li>
                      <GlobeIcon aria-hidden="true" />
                      <a href={profile.websiteHref} target="_blank" rel="noreferrer">
                        {profile.websiteLabel}
                      </a>
                    </li>
                  )}
                  {mediumUrl && (
                    <li>
                      <MediumIcon aria-hidden="true" />
                      <a href={mediumUrl} target="_blank" rel="noreferrer">
                        medium.com/{mediumHandle}
                      </a>
                    </li>
                  )}
                  {substackUrl && (
                    <li>
                      <SubstackIcon aria-hidden="true" />
                      <a href={substackUrl} target="_blank" rel="noreferrer">
                        substack.com/{substackHandle}
                      </a>
                    </li>
                  )}
                  {leetcodeUrl && (
                    <li>
                      <LeetcodeIcon aria-hidden="true" />
                      <a href={leetcodeUrl} target="_blank" rel="noreferrer">
                        leetcode.com/{leetcodeHandle}
                      </a>
                    </li>
                  )}
                </ul>
              </section>

              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Skills &amp; Expertise</h2>
                {skillGroups.map((group) => (
                  <div key={group.id} className={styles.skillGroup}>
                    <p className={styles.skillGroupTitle}>{group.title}</p>
                    <p className={styles.skillList}>{group.skills.join(', ')}</p>
                  </div>
                ))}
              </section>

              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Certifications</h2>
                <ul className={styles.certList}>
                  {certifications.map((cert) => {
                    const logo = cert.id === 'aws-dva' && (
                      <img src={devAssociateLogo} alt="" className={styles.certLogo} />
                    );
                    const text = (
                      <span>
                        {cert.name}
                        {cert.issuer && <span className={styles.certIssuer}> — {cert.issuer}</span>}
                      </span>
                    );
                    return (
                      <li key={cert.id}>
                        {cert.credentialUrl ? (
                          <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className={styles.certLink}>
                            {logo}
                            {text}
                          </a>
                        ) : (
                          <>
                            {logo}
                            {text}
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>

            <div className={styles.divider} aria-hidden="true">
              <span className={styles.dividerDot} />
              <span className={styles.dividerDot} />
            </div>

            <div className={styles.colRight}>
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Education</h2>
                {education.map((item) => (
                  <div key={item.id} className={styles.eduItem}>
                    <p className={styles.eduDegree}>{item.degree}</p>
                    <p className={styles.eduSchool}>
                      {item.school} <span className={styles.eduPeriod}>· {item.period}</span>
                    </p>
                  </div>
                ))}
              </section>

              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Work Experience</h2>
                {resumeJobs.map((job) => (
                  <div key={job.id} className={styles.job}>
                    <div className={styles.jobHead}>
                      <div>
                        <p className={styles.jobRole}>{job.role}</p>
                        <p className={styles.jobCompany}>
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <p className={styles.jobPeriod}>{job.period}</p>
                    </div>
                    <ul className={styles.jobBullets}>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {projects.length > 0 && (
                <section className={styles.block}>
                  <h2 className={styles.blockTitle}>Projects</h2>
                  {projects.map((project) => (
                    <div key={project.id} className={styles.project}>
                      <div className={styles.projectHead}>
                        <p className={styles.projectTitle}>{project.title}</p>
                        {project.links?.length > 0 && (
                          <p className={styles.projectLinks}>
                            {project.links.map((link, index) => (
                              <span key={link.href}>
                                {index > 0 && ' · '}
                                <a href={link.href} target="_blank" rel="noreferrer">
                                  {link.label}
                                </a>
                              </span>
                            ))}
                          </p>
                        )}
                      </div>
                      <p className={styles.projectDescription}>{project.description}</p>
                      {project.tags?.length > 0 && (
                        <p className={styles.projectTags}>{project.tags.join(', ')}</p>
                      )}
                    </div>
                  ))}
                </section>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
