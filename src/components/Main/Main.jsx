import React from 'react';
import styles from './Main.module.css';
import Button from '../Button/Button';
import bgRect from '../../assets/bg-rect.svg';
import Constructor from '../Constructor/Constructor';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';


function Main() {
  return (
    <main className={styles.main}>
      <img src={bgRect} alt='bg-image' className={styles.bg} />
      <div className={styles.header}>
        {' '}
        <div className={styles.intro}>
          <h1>
            Hello, I am
            <br />
            <span className={styles.name}>OJ NONYE</span>
          </h1>{' '}
          <p className={styles.introText}>
            I am a frontend developer. I build user interfaces!
          </p>
          <Button variant='download'>Download Resume</Button>
        </div>
        <Constructor />
      </div>
      <Projects />
      <Contact />
      
    </main>
  );
}

export default Main;
