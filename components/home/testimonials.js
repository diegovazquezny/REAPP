import styles from "../../styles/Home.module.css";

const rating = '***** Highly likely to recommend';

const review = `
  Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit, sed do eiusmod tempor incididunt 
  ut labore et dolore magna aliqua. Ut enim ad 
  minim veniam, quis nostrud exercitation ullamco 
  laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate 
  velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id 
  est laborum.
`;

const reviewer = 'John Doe';


export default function Hero() {
  return (
    <div className={styles.testimonials}>
      <span className={styles.testimonials__quotes}>
        "
      </span>
      <h2 className={styles.testimonials__title}>Testimonials</h2>
      <div className={styles.testimonials__rating}>{rating}</div>      
      <p className={styles.testimonials__review}>{review}</p>
      <p className={styles.testimonials__reviewer}>{reviewer}</p>
      <span className={styles.testimonials__quotes}>
        "
      </span> 
    </div>
  );
}
