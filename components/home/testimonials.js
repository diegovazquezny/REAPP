import styles from "../../styles/Home.module.css";
import { useEffect, useState } from 'react';

export default function Hero() {
  const [testimonial, setTestimonial] = useState({});
  const [fetched, setFetched] = useState(false);
  const spaces = '\xa0'.repeat(3);
  const rating = '⭐'.repeat(testimonial.rating) + spaces + 'Highly recommended';
  
  'ProReviews:proreviewresults'

  useEffect(() => {
    if (!fetched) {
      fetch('/api/testimonials')
        .then(res => res.json())
        .then(data => {
          const review = data.data['ProReviews:proreviewresults'].response.result.proReviews.review[0];
          setTestimonial(state => {
            const newState = {...state};
            newState.description = review.description;
            newState.reviewer = review.reviewer;
            newState.rating = review.rating;
            newState.reviewDate = review.reviewDate;
            newState.reviewURL = review.reviewURL;
            return newState;
          })
          setFetched(true);
        })
        .catch(err => console.log(err));
    }
  });
  
  return (
    <div className={styles.testimonials}>
      <div>
        <div className={styles.testimonials__quotes}>
          “
        </div>
      </div>
      <h2 className={styles.testimonials__title}>Testimonial</h2>
      {fetched 
        ?
          <>
            <div className={styles.testimonials__rating}>{rating}</div>      
            <p className={styles.testimonials__description}>{testimonial.description}</p>
            <a href={testimonial.reviewURL} className={styles.testimonials__reviewer}>{'-' + testimonial.reviewer}</a>
            <p className={styles.testimonials__reviewDate}>{testimonial.reviewDate}</p>
          </>
        : null
      }
      <div>
        <div className={styles.testimonials__bottom_quotes}>
          ”
        </div> 
      </div>
    </div>
  );
}
