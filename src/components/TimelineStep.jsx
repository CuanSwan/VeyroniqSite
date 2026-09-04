import styles from '../styles/home.module.css';

export default function TimelineStep({ number, title, text }) {
  return (
    <div>
      <span className={styles.number}>{number}</span>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}
