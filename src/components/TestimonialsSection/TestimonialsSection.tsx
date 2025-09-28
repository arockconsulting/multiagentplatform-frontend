```typescript
import React from 'react';
import styles from './TestimonialsSection.module.css';

interface Testimonial {
  /** The author of the testimonial. */
  author: string;
  /** The role/title of the author. */
  title: string;
  /** The testimonial text. */
  text: string;
  /** URL to the author's image. */
  image: string;
}

interface TestimonialsSectionProps {
  /** Array of testimonial objects to display. */
  testimonials: Testimonial[];
}

/**
 * A section component to display customer testimonials.
 *
 * @param {TestimonialsSectionProps} props - The component props.
 * @returns {JSX.Element} The TestimonialsSection component.
 */
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className={styles.testimonialsSection}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <img src={testimonial.image} alt={testimonial.author} className={styles.testimonialImage} />
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>{testimonial.author}</p>
                <p className={styles.authorTitle}>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
```