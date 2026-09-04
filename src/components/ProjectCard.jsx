import styles from '../styles/home.module.css';

export default function ProjectCard({ name, subtitle, text }) {
  return (
    <div className={styles.card}>
      <div className={styles['card-icon']}></div>
      <h1 className={styles['card-heading']}>{name}</h1>
      <h4 className={styles['card-sub']}>{subtitle}</h4>
      <p className={styles['card-text']}>{text}</p>
      <a className={styles['card-link']} href="#">
        Explore {name} -&gt;
      </a>
    </div>
  );
}
