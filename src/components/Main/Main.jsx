import styles from './Main.module.css';
import Button from '../Button/Button';

import Constructor from '../Constructor/Constructor';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import resume from '../../assets/NONYE-RESUME.pdf';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <main className={styles.main}>

      <div className={styles.header}>
        <div className={styles.intro}>
          <h1>
            Hello, I am
            <br />
            <span className={styles.name}>OJ NONYE</span>
          </h1>

          <p className={styles.introText}>
            I am a full-stack developer. I build complete web applications that
            solve real problems.
          </p>

          <a
            href={resume}
            download="Chinonye_Ojukwu_Resume.pdf"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="download">Download Resume</Button>
          </a>
        </div>

        <Constructor />
      </div>

      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Main;
