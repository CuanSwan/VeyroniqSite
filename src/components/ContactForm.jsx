import { useState } from 'react';
import styles from '../styles/contact.module.css';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form className={styles['vq-form-1']} onSubmit={handleSubmit}>
      <div className={styles['vq-div-4']}>
        <label className={styles['vq-label-1']} htmlFor="name">Name</label>
        <input
          className={styles['vq-input-1']}
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles['vq-div-4']}>
        <label className={styles['vq-label-1']} htmlFor="email">Email</label>
        <input
          className={styles['vq-input-1']}
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles['vq-div-4']}>
        <label className={styles['vq-label-1']} htmlFor="business">Business</label>
        <input
          className={styles['vq-input-1']}
          id="business"
          name="business"
          type="text"
          value={form.business}
          onChange={handleChange}
        />
      </div>
      <div className={styles['vq-div-4']}>
        <label className={styles['vq-label-1']} htmlFor="message">What do you need built?</label>
        <textarea
          className={styles['vq-textarea-1']}
          id="message"
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className={styles['vq-button-1']} type="submit">
        Send enquiry
      </button>
      {sent && (
        <p className={styles['vq-p-2']}>Thanks — we will reply within one working day.</p>
      )}
    </form>
  );
}
