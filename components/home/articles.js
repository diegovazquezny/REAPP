import styles from '../../styles/Home.module.css';
import Article from '../home/article';

export default function Articles() {
  return (
    <div className={styles.articles}>
      <span className={styles.articles__title}>World class customer service</span>
      <span className={styles.articles__subtitle}>We promise to provide you with professional care and cool houses</span>
      <div className={styles.articles__container}>
        <Article />
        <Article />
        <Article />
      </div>    
    </div>
  )
}