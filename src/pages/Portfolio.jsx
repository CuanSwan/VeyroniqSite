import PortfolioItem from '../components/PortfolioItem.jsx';
import portfolioItems from '../data/portfolioItems.js';
import styles from '../styles/portfolio.module.css';

export default function Portfolio() {
  return (
    <main className="vq-main-1">
      <div>
        <section>
          <div className={styles['vq-div-3']}>
            <p className={styles['vq-p-1']}>Portfolio</p>
            <h1 className={styles['vq-h1-1']}>
              <span className={styles['vq-span-3']}>Products</span> we built and still run.
            </h1>
          </div>
        </section>
        <section>
          <div className={styles['vq-div-4']}>
            {portfolioItems.map((item) => (
              <PortfolioItem key={item.title} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
