import TeamMember from '../components/TeamMember.jsx';
import FaqItem from '../components/FaqItem.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import team from '../data/team.js';
import aboutFaqs from '../data/aboutFaqs.js';
import styles from '../styles/about.module.css';

export default function About() {
  usePageMeta(
    'About Veyroniq | Custom Software Studio & Team',
    "Veyroniq Software Studio was founded in London in 2020. Meet the team behind our custom B2B SaaS products and business applications, and find answers to frequently asked questions about our business software."
  );

  return (
    <main className="vq-main-1">
      <div>
        <section>
          <div className={styles['vq-div-3']}>
            <div className={styles['vq-div-4']}>
              <div className={styles['vq-div-5']}>
                <h1 className={styles['vq-h1-1']}>
                  We started small. We're building something that matters.
                </h1>
                <p className={styles['vq-p-1']}>
                  Veyroniq Software Studio was founded in London in 2020 with
                  a simple belief: Great software should make people's work
                  better, not harder. Today, our team of six specialist
                  developers designs, builds, deploys and maintains custom
                  B2B SaaS products and business applications. But behind
                  every line of code is a person, a business, and a problem
                  worth solving.
                  <span className={styles['vq-span-3']}>
                    {' '}
                    We don't just build software. We build possibilities
                  </span>
                </p>
              </div>
            </div>
            <div className={styles['vq-div-6']}>
              <img alt="The Veyroniq studio" className={styles['vq-img-1']} src="images/team.png" />
              <div className={styles['vq-div-7']}></div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles['vq-div-8']}>
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
      <section className={styles['vq-faq']}>
        <FaqSchema faqs={aboutFaqs} />
        <h3 className={styles['vq-faq-label']}>Frequently asked questions</h3>
        <h2 className={styles['vq-h1-3']}>
          Frequently Asked Questions About Our Business Software
        </h2>
        <div className={styles['vq-faq-list']}>
          {aboutFaqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </main>
  );
}
