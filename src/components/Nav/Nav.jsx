import React from 'react';
import styles from './Nav.module.css';
import logo from '../../assets/logo.svg';
import github from '../../assets/icon-github.svg';
import linkedin from '../../assets/icon-linkedin.svg';
import twitter from '../../assets/icons8-twitter.svg';
import fe from '../../assets/icon-frontend-mentor.svg';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
      </div>

      <div className={styles.socials}>
        <ul>
          <li>
            <a href='https://github.com/4002-Nonye'>
              {' '}
              <img src={github} alt='github' />
            </a>
          </li>
          <li>
            <a href='https://www.frontendmentor.io/profile/4002-Nonye'>
              {' '}
              <img src={fe} alt='Frontend mentor' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/ojukwu-chinonye-51020023a/'>
              {' '}
              <img src={linkedin} alt='linkedin' />
            </a>
          </li>
          <li>
            <a href='https://x.com/that_reactdev'>
              {' '}
              <img src={twitter} alt='twitter' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
