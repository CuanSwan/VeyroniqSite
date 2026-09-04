import styles from '../styles/home.module.css';

export default function BlurbCard({ title, text }) {
  return (
    <div className={styles['blurb-card']}>
      <div className={styles['blurb-icon']}></div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
