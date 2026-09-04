import { useState } from 'react';
import styles from '../styles/home.module.css';

export default function FaqItem({ question }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.question}>
      <span>{question}</span>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? '^' : '<'}
      </button>
    </div>
  );
}
