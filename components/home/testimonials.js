import styles from "../../styles/Home.module.css";
import { useEffect, useState } from 'react';

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
  const spaces = '\xa0'.repeat(3);
  const rating = '⭐'.repeat(testimonial.rating) + spaces + 'Highly recommended';
  
  'ProReviews:proreviewresults'

  useEffect(() => {
    if (!fetched) {
      fetch('/api/testimonials')
        .then(res => res.json())
        .then(data => {
          const review = data.data['ProReviews:proreviewresults'].response.result.proReviews.review[0];
          console.log('rrr ===>', review)
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
          console.log('test =>', testimonial);
        })
        .catch(err => console.log(err));
    }
  })
  console.log(fetched);
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
