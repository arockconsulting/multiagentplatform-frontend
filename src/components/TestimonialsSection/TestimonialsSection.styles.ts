```typescript
import styles from './TestimonialsSection.module.css';
import React from 'react';

/**
 * Interface for the testimonial data.
 */
interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  image: string;
  alt: string;
}

/**
 * Interface for the TestimonialsSection component props.
 */
interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

/**
 * TestimonialsSection Component: Displays a section with customer testimonials.
 *
 * @param {TestimonialsSectionProps} props - The component props.
 * @returns {JSX.Element}
 */
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className={styles.testimonialsSection} aria-label="Customer Testimonials">
      <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className={styles.testimonialImage}
            />
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>"{testimonial.testimonial}"</p>
              <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>{testimonial.name}</p>
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
```typescript
.testimonialsSection {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.sectionTitle {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.testimonialsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.testimonialCard {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: left;
}

.testimonialImage {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
}

.testimonialContent {
  margin-left: 0;
}

.testimonialText {
  font-size: 1rem;
  line-height: 1.4;
  color: #555;
  margin-bottom: 1rem;
}

.testimonialAuthor {
  margin-top: 1rem;
}

.authorName {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.25rem;
}

.authorTitle {
  font-size: 0.875rem;
  color: #777;
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonialsContainer {
    flex-direction: column;
    align-items: center;
  }

  .testimonialCard {
    width: 90%;
  }
}
```