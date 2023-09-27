import React from 'react';
import styles from './Constructor.module.css'

function Constructor() {
  return (
    <div className={styles.block}>
      <pre>
        1&nbsp;&nbsp;class <b>Person</b>
        {' {'}
      </pre>

      <pre>2&nbsp;&nbsp;&nbsp;&nbsp;constructor(){' {'}</pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = &quot;
        <b>the engine</b>&quot;;
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skills = [&quot;
        <b>Tailwind css</b>&quot;, &quot;<b>React js</b>&quot;];{' '}
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.hobbies = &quot;
        <b>Playing tennis</b>&quot;;{' '}
      </pre>
      <pre>
        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = new
        Date().getFullYear() - 2004;
      </pre>
      <pre>6&nbsp;&nbsp;&nbsp;&nbsp; {'}'} </pre>
      <pre>7&nbsp; {'}'}</pre>
    </div>
  );
}

export default Constructor;
