```typescript
import styles from './HeroSection.module.css';
import React from 'react';

/**
 * Interface for the HeroSection component props.
 */
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

/**
 * HeroSection component displays the main title, subtitle, and call-to-action button.
 * @param {HeroSectionProps} props - The component props.
 * @returns {JSX.Element} The HeroSection component.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, onCtaClick }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <button className={styles.heroCta} onClick={onCtaClick}>
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
```
```typescript
/* HeroSection.module.css */

.hero {
  background-color: #f0f0f0;
  padding: 4rem 2rem;
  text-align: center;
}

.heroContent {
  max-width: 800px;
  margin: 0 auto;
}

.heroTitle {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.heroSubtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}

.heroCta {
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.heroCta:hover {
  background-color: #0056b3;
}

/* Responsive design */
@media (max-width: 768px) {
  .heroTitle {
    font-size: 2.5rem;
  }

  .heroSubtitle {
    font-size: 1.2rem;
  }
}
```
