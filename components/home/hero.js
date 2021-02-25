import styles from "../../styles/Home.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.heroHeader}>
        <span className={styles.heroHeader__title}>WELCOME TO AUSTIN</span>
        <span className={styles.heroHeader__subtitle}>
          Residential Sales in the Greater Austin Region
        </span>
      </div>
    </div>
  );
}
