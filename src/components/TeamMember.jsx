import styles from '../styles/about.module.css';

export default function TeamMember({ name, role, image, bio, tagline }) {
  return (
    <article className={styles['vq-article-1']}>
      <div className={styles['vq-div-9']}>
        <img className={styles['vq-img-2']} src={image} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2 className={styles['vq-h1-2']}>{role}</h2>
        <hr />
        <p>{bio}</p>
        <p>
          <strong>{tagline}</strong>
        </p>
      </div>
    </article>
  );
}
