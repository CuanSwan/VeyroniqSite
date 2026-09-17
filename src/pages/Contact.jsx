import ContactForm from '../components/ContactForm.jsx';
import FaqItem from '../components/FaqItem.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import contactFaqs from '../data/contactFaqs.js';
import styles from '../styles/contact.module.css';

export default function Contact() {
  usePageMeta(
    'Contact Veyroniq | Start a Software Project',
    'Get in touch with Veyroniq to discuss a custom software or SaaS project for your business, and find answers to common questions about working with us.'
  );

  return (
    <main className="vq-main-1">
      <FaqSchema faqs={contactFaqs} />
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
      <section className={styles['vq-faq']}>
        <h3 className={styles['vq-faq-label']}>Frequently asked questions</h3>
        <h2 className={styles['vq-h1-2']}>Everything you need to know.</h2>
        <div className={styles['vq-faq-list']}>
          {contactFaqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </main>
  );
}
