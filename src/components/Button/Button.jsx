import React from 'react';
import styles from './Button.module.css';

function Button({ children, variant }) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`}>{children}</button>
  );
}

export default Button;
