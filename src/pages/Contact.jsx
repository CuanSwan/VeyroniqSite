import ContactForm from '../components/ContactForm.jsx';
import contactFaqs from '../data/contactFaqs.js';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <main className="vq-main-1">
      <div>
        <section>
          <div className={styles['vq-div-3']}>
            <p className={styles['vq-p-1']}>Contact</p>
            <h1 className={styles['vq-h1-1']}>
              Tell us about the <span className={styles['vq-span-3']}>job</span>.
            </h1>
            <ContactForm />
          </div>
        </section>
      </div>
      <div className={styles['vq-div-5']}>
        {contactFaqs.map((faq) => (
          <div className={styles['vq-div-6']} key={faq.question}>
            <p className={styles['vq-p-3']}>{faq.question}</p>
            <p className={styles['vq-p-4']}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
