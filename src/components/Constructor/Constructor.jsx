import styles from './Constructor.module.css'

function Constructor() {
  return (
    <div className={styles.block}>
      <pre>
        1&nbsp;&nbsp;const <b>developer</b> = {'{'}
      </pre>

      <pre>
        2&nbsp;&nbsp;&nbsp;&nbsp;name: &quot;<b>Chinonye Ojukwu</b>&quot;,
      </pre>
      
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;role: &quot;<b>Full-Stack Developer</b>&quot;,
      </pre>
      
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;skills: {'{'}
      </pre>
      
      <pre>
        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;frontend: [&quot;<b>React</b>&quot;, &quot;<b>JavaScript</b>&quot;, &quot;<b>Tailwind CSS</b>&quot;],
      </pre>
      
      <pre>
        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backend: [&quot;<b>Node.js</b>&quot;, &quot;<b>Express</b>&quot;, &quot;<b>MongoDB</b>&quot;],
      </pre>
      
      <pre>
        7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tools: [&quot;<b>Git</b>&quot;, &quot;<b>JWT Auth</b>&quot;, &quot;<b>REST APIs</b>&quot;]
      </pre>
      
      <pre>
        8&nbsp;&nbsp;&nbsp;&nbsp;{'}'},
      </pre>
      
      <pre>
        9&nbsp;&nbsp;&nbsp;&nbsp;currentFocus: &quot;<b>Building production apps that scale</b>&quot;
      </pre>
      
      <pre>10&nbsp;{'};'}</pre>
    </div>
  );
}

export default Constructor;