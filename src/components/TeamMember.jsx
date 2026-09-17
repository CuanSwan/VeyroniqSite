import styles from '../styles/about.module.css';

export default function TeamMember({ name, role, image, imagePosition, bio, tagline }) {
  return (
    <article className={styles['vq-article-1']}>
      <div className={styles['vq-div-9']}>
        <img
          className={styles['vq-img-2']}
          src={image}
          alt={name}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </div>
      <div>
        <h3 className={styles['vq-member-name']}>{name}</h3>
        <h4 className={styles['vq-h1-2']}>{role}</h4>
        <hr />
        <p>{bio}</p>
        <p>
          <strong>{tagline}</strong>
        </p>
      </div>
    </article>
  );
}
