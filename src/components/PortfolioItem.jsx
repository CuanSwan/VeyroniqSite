import FaqItem from './FaqItem.jsx';
import styles from '../styles/portfolio.module.css';

export default function PortfolioItem({ image, title, description, scale, infrastructure, faqs }) {
  return (
    <article className={styles['vq-article-1']}>
      <div className={styles['vq-div-5']}>
        <div className={styles['vq-div-6']}>
          <img alt={title} className={styles['vq-img-1']} src={image} />
        </div>
      </div>
      <div className={styles['vq-div-7']}>
        <h2 className={styles['vq-h2-1']}>
          <span className={styles['vq-span-3']}>{title}</span>
        </h2>
        {description && <p className={styles['vq-p-2']}>{description}</p>}
        <p className={styles['vq-p-3']}>{scale}</p>
        <p className={styles['vq-p-3']}>{infrastructure}</p>
        {faqs && faqs.length > 0 && (
          <div className={styles['vq-faq-list']}>
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
