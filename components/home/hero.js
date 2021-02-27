import styles from "../../styles/Home.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroHeader}>
        <span className={styles.heroHeader__title}>WELCOME TO DALLAS</span>
        <span className={styles.heroHeader__subtitle}>
          YOUR DREAM HOME AWAITS
        </span>
        <button className={styles.heroButton}>VIEW LISTINGS</button>
      </div>
    </div>
  );
}
