import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import BlurbCard from '../components/BlurbCard.jsx';
import TimelineStep from '../components/TimelineStep.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import projects from '../data/projects.js';
import { blurbCards, timelineSteps } from '../data/homeContent.js';
import styles from '../styles/home.module.css';

export default function Home() {
  usePageMeta(
    'Veyroniq | Custom Software & SaaS for Growing Businesses',
    'Veyroniq builds custom B2B SaaS products and business software, including workforce scheduling, invoicing, retail inventory and appointment booking, for growing businesses in hospitality, trades, retail and services.'
  );

  return (
    <main>
      {/* Hero section */}
      <div className={styles.hero}>
        <div className={styles['hero-content']}>
          <div className={styles['hero-text']}>
            <h3>CUSTOM SOFTWARE & SAAS</h3>
            <h1>
              Software built for the <span>shop,</span> not the boardroom.
            </h1>
            <p>
              Veyroniq builds custom software and SaaS solutions for growing
              businesses, replacing the spreadsheets, manual processes and
              disconnected systems that slow your business down.
            </p>
          </div>
          <div>
            <Link to="/contact" className={styles['project-button']}>
              Start a project
            </Link>
            <Link to="/portfolio" className={styles['explore-button']}>
              Explore our products
            </Link>
          </div>
        </div>
        <div className={styles['hero-image']}>
          <img src="images/hero-dashboard.png" alt="Veyroniq software dashboard" />
        </div>
      </div>

      {/* Projects banner */}
      <div className={styles['portfolio-banner']}>
        <div className={styles['portfolio-header']}>
          <h3>Our software solutions</h3>
          <h1>Software built around real business problems</h1>
          <p>
            From managing teams and collection payments to tracking inventory
            and booking customers, our software solutions are designed to
            simplify the everyday operations that keep businesses moving.
          </p>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>

      {/* Blurb and mission statement */}
      <div className={styles.blurb}>
        <div className={styles['blurb-hero']}>
          <h3>Why businesses choose Veyroniq</h3>
          <h1>Practical software.</h1>
          <h1>Real impact.</h1>
          <p>
            We don't just build software, we solve problems. Our solutions
            help businesses save time, reduce manual work and get the clarity
            they need to grow.
          </p>
        </div>
        {blurbCards.map((card) => (
          <BlurbCard key={card.title} {...card} />
        ))}
      </div>

      {/* Timeline section */}
      <div className={styles.timeline}>
        <h3>Our process</h3>
        <h1>A simple, proven way to build software.</h1>
        <div className={styles.tracker}>
          {timelineSteps.map((step) => (
            <TimelineStep key={step.number} {...step} />
          ))}
        </div>
      </div>

      <div className={styles['call-to-action']}>
        <span></span>
        <div>
          <h1>Have a business problem that software could solve?</h1>
          <p>Let's build something that makes your business better</p>
        </div>
        <a href="/contact">Let's talk -&gt;</a>
      </div>
    </main>
  );
}
