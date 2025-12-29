/* eslint-disable react/prop-types */
import styles from './ProjectCard.module.css';

function ProjectCard({
  src,
  alt,
  repoUrl,
  liveUrl,
  title,
  description,
  languages,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={src} alt={alt} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {/* Bottom anchored */}
        <p className={styles.tech}>{languages}</p>

        <div className={styles.links}>
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.liveBtn}
          >
            View Live
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.codeBtn}
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
