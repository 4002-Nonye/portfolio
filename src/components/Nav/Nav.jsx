import styles from './Nav.module.css';
import github from '../../assets/icon-github.svg';
import linkedin from '../../assets/icon-linkedin.svg';
import twitter from '../../assets/icons8-twitter.svg';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoText}>N</span>
      </div>

      <div className={styles.socials}>
        <ul>
          <li>
            <a 
              href='https://github.com/4002-Nonye' 
              target='_blank' 
              rel='noopener noreferrer'
              aria-label='GitHub Profile'
            >
              <img src={github} alt='github' />
            </a>
          </li>
          <li>
            <a 
              href='https://www.linkedin.com/in/chinonye-ojukwu-51020023a/' 
              target='_blank' 
              rel='noopener noreferrer'
              aria-label='LinkedIn Profile'
            >
              <img src={linkedin} alt='linkedin' />
            </a>
          </li>
          <li>
            <a 
              href='https://x.com/that_reactdev' 
              target='_blank' 
              rel='noopener noreferrer'
              aria-label='Twitter Profile'
            >
              <img src={twitter} alt='twitter' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
