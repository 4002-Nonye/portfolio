import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectOne from '../../assets/project-1.png';
import projectTwo from '../../assets/project-2.png';
import projectThree from '../../assets/project-3.png';
import projectFour from '../../assets/project-4.png';
import projectFive from '../../assets/project-5.png';
import projectSix from '../../assets/project-6.png';

const projectDetails = [
  {
    title: 'MovieBox',
    src: projectOne,
    alt: 'img',
    repoUrl: 'https://github.com/4002-Nonye/moviebox',
    liveUrl: 'https://moviebox-rose.vercel.app/',
    languages: 'React js and CSS modules',
  },
  {
    title: 'Rest countries API',
    src: projectTwo,
    alt: 'img',
    repoUrl: 'https://github.com/4002-Nonye/REST-COUNTRIES-API',
    liveUrl: 'https://rest-countries-api-alpha-rose.vercel.app/',
    languages: 'React js and CSS modules',
  },
  {
    title: 'Dictionary web app',
    src: projectFour,
    alt: 'img',
    repoUrl: 'https://github.com/4002-Nonye/Dictionary-web-app',
    liveUrl: 'https://dictionary-web-app-psi.vercel.app/',
    languages: 'React js and Tailwind css',
  },
  {
    title: 'Ecommerce product page',
    src: projectThree,
    alt: 'img',
    repoUrl: 'https://github.com/4002-Nonye/Ecommerce-product-page-main',
    liveUrl: 'https://4002-nonye.github.io/Ecommerce-product-page-main/',
    languages: 'javaScript,   jQuery and Vanilla css',
  },

  {
    title: 'Tip calculator',
    src: projectFive,
    alt: 'img',
    repoUrl: 'https://github.com/4002-Nonye/Tip-calculator-app',
    liveUrl: 'https://4002-nonye.github.io/Tip-calculator-app/',
    languages: 'javaScript and Vanilla css',
  },
  {
    title: 'Coding Bootcamp Testimonials',
    src: projectSix,
    alt: 'img',
    repoUrl:
      'https://github.com/4002-Nonye/Coding-Bootcamp-Testimonials-Slider',
    liveUrl:
      'https://coding-bootcamp-testimonials-slider-seven-omega.vercel.app/',
    languages: 'React js and Vanilla css',
  },
];

function Projects() {
  return (
    <section className={styles.project}>
      <h2>Projects</h2>
      <div className={styles.underline} />

      <div className={styles.wrapper}>
        {projectDetails.map((project, i) => (
          <ProjectCard
            key={i}
            src={project.src}
            alt={project.alt}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
            title={project.title}
            languages={project.languages}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
