import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import attendly from '../../assets/attendly-preview.png';
import smartNotes from '../../assets/smart-note-taker-preview.png';
import devlinks from '../../assets/devlinks-preview.png';


const projectDetails = [
  {
    title: 'Attendly - QR Attendance Management',
    description: 'Full-stack attendance system eliminating 100+ sheets of paper waste per semester. Features multi-role authentication, real-time session tracking, and automated eligibility calculations. Built to scale to 1,000+ students with optimized MongoDB queries (<200ms).',
    src: attendly,
    alt: 'Attendly Dashboard',
    repoUrl: 'https://github.com/4002-Nonye/attendly',
    liveUrl: 'https://attendly-oi6i.onrender.com/',
    languages: 'React, Node.js, MongoDB, Express, JWT Auth, QR Codes',
  },
  {
    title: 'Smart Note Taker - AI-Powered Notes App',
    description: 'Intelligent note-taking app with AI-powered tag generation and advanced search. Features dark mode, keyboard shortcuts for accessibility, and real-time sync. Built with modern React patterns and MongoDB for persistent storage.',
    src: smartNotes,
    alt: 'Smart Note Taker',
    repoUrl: 'https://github.com/4002-Nonye/Note-Taking-Web-App',
    liveUrl: 'https://note-taking-web-app-955k.onrender.com/',
    languages: 'React, Node.js, MongoDB, AI Integration',
  },
  {
    title: 'DevLinks - Link Sharing Platform',
    description: 'Link-in-bio platform for developers with drag-and-drop link reordering and live mobile preview. Users create shareable profiles with custom styling. Built with Supabase for real-time database and authentication.',
    src: devlinks,
    alt: 'DevLinks App',
    repoUrl: 'https://github.com/4002-Nonye/devlinks',
    liveUrl: 'https://devlinks-gules.vercel.app/',
    languages: 'React, Supabase, Drag & Drop, Authentication',
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
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;