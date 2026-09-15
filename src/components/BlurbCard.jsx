import Icon from './Icon.jsx';
import styles from '../styles/home.module.css';

export default function BlurbCard({ title, text, icon }) {
  return (
    <div className={styles['blurb-card']}>
      <div className={styles['blurb-icon']}>
        <Icon type={icon} />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
