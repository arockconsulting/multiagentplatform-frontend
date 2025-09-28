```typescript
// src/components/HeroSection/HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.css';

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
 * HeroSection Component: Displays the main hero section of the landing page.
 * Includes a title, subtitle, and a call-to-action button.
 *
 * @param {HeroSectionProps} props - The component props.
 * @returns {JSX.Element} The HeroSection component.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, onCtaClick }) => {
  return (
    <section className={styles.heroSection}>
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