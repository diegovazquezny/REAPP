import styles from "../../styles/Home.module.css";
import { useEffect, useState } from 'react';

const rating = '⭐⭐⭐⭐⭐ Highly likely to recommend';
const REVIEW = `
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

console.log(process.env.NEXT_PUBLIC_ID);
console.log(process.env.ID);

export default function Hero() {
  const [testimonial, setTestimonial] = useState({});
  const [fetched, setFetched] = useState(false);

  'ProReviews:proreviewresults'

  useEffect(() => {
    if (!fetched) {
      fetch('/api/testimonials')
        .then(res => res.json())
        .then(data => {
          const review = data.data['ProReviews:proreviewresults'].response.result.proReviews.review[1];
          setTestimonial(state => {
            const newState = {...state};
            newState.description = review.description;
            newState.reviewer = review.reviewer;
            newState.rating = review.rating;
            newState.reviewDate = review.reviewDate;
            newState.reviewURL = review.reviewURL;
            return newState;
          })
          console.log(testimonial);
        })
        .catch(err => console.log(err));
    }
  })

  return (
    <div className={styles.testimonials}>
      <div>
        <div className={styles.testimonials__quotes}>
          “
        </div>
      </div>
      <h2 className={styles.testimonials__title}>Testimonials</h2>
      <div className={styles.testimonials__rating}>{rating}</div>      
      <p className={styles.testimonials__review}>{REVIEW}</p>
      <p className={styles.testimonials__reviewer}>{reviewer}</p>
      <div>
        <div className={styles.testimonials__quotes}>
        ”
        </div> 

      </div>
    </div>
  );
}
