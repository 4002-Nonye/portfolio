/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, alt, repoUrl, liveUrl, title,languages }) {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} />

      <div className={styles.overlay}>
        <p className={styles.overlayText}>
          <a href={repoUrl} target='_blank' rel='noreferrer'>
            View code
          </a>
          <a href={liveUrl} target='_blank' rel='noreferrer'>
            View live site
          </a>
        </p>
      </div>

      <p className={styles.title}>{title}</p>
      <p className={styles.lang}>{languages}</p>
    </div>
  );
}

export default ProjectCard;
