import styles from '../../styles/Home.module.css';

export default function Article() {
  
  const text = `
    Browse our website to gain helpful advice that 
    will assist you in your home buying, selling, 
    or leasing decisions.
  `;
  
  return (
    <div className={styles.article}>
      <div className={styles.article__dummy__pic}></div>
      <span className={styles.article__subtitle}>FIRST STEP</span>
      <span className={styles.article__title}>Helpful Advice</span>
      <span className={styles.article__text}>{text}</span>
    </div>
  )
}