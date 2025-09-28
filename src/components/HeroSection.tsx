```typescript
import React from 'react';
import styles from './HeroSection.module.css';

/**
 * Interface for the HeroSection component props.
 */
interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

/**
 * HeroSection component for the landing page.
 * Displays a title, description, and a main image.
 *
 * @param {HeroSectionProps} props - The props for the HeroSection component.
 * @returns {JSX.Element} The HeroSection component.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl, altText }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={imageUrl} alt={altText} className={styles.heroImage} />
      </div>
    </section>
  );
};

export default HeroSection;
```
```css
/* src/components/HeroSection.module.css */

.heroSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f0f0f0;
}

.heroContent {
  text-align: center;
  margin-bottom: 2rem;
}

.heroTitle {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.heroDescription {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.heroImageContainer {
  width: 100%;
  max-width: 500px;
}

.heroImage {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .heroSection {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .heroContent {
    text-align: left;
    max-width: 50%;
  }

  .heroImageContainer {
    max-width: 40%;
  }
}
```