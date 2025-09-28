```typescript
import styles from './TestimonialsSection.module.css';
import React from 'react';

/**
 * Interface for the Testimonial component props.
 */
interface TestimonialProps {
  /**
   * The name of the person giving the testimonial.
   */
  name: string;
  /**
   * The role or title of the person giving the testimonial.
   */
  title: string;
  /**
   * The testimonial text.
   */
  testimonial: string;
  /**
   * The URL of the person's image.
   */
  imageUrl: string;
}

/**
 * Testimonial component to display a single testimonial.
 *
 * @param {TestimonialProps} props - The props for the Testimonial component.
 * @returns {JSX.Element} - The rendered Testimonial component.
 */
const Testimonial: React.FC<TestimonialProps> = ({ name, title, testimonial, imageUrl }) => {
  return (
    <div className={styles.testimonial}>
      <img src={imageUrl} alt={name} className={styles.testimonialImage} />
      <div className={styles.testimonialContent}>
        <p className={styles.testimonialText}>"{testimonial}"</p>
        <div className={styles.testimonialAuthor}>
          <p className={styles.authorName}>{name}</p>
          <p className={styles.authorTitle}>{title}</p>
        </div>
      </div>
    </div>
  );
};


/**
 * Interface for the TestimonialsSection component props.
 */
interface TestimonialsSectionProps {
  /**
   * An array of testimonial objects.
   */
  testimonials: TestimonialProps[];
}


/**
 * TestimonialsSection component to display a list of testimonials.
 *
 * @param {TestimonialsSectionProps} props - The props for the TestimonialsSection component.
 * @returns {JSX.Element} - The rendered TestimonialsSection component.
 */
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className={styles.testimonialsSection}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
```
```typescript
/* stylelint-disable dublicate-selectors */
.testimonialsSection {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.testimonialsSection h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.testimonialsContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
}

.testimonialImage {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
}

.testimonialContent {
  text-align: center;
}

.testimonialText {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
}

.testimonialAuthor {
  font-style: italic;
}

.authorName {
  font-weight: bold;
  color: #333;
}

.authorTitle {
  color: #777;
}

@media (min-width: 768px) {
  .testimonialsContainer {
    flex-direction: row;
    justify-content: space-around;
  }

  .testimonial {
    width: 45%;
    max-width: 400px;
  }
}

@media (min-width: 1200px) {
  .testimonial {
    width: 30%;
  }
}
```