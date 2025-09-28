```tsx
// src/components/HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

/**
 * HeroSection Component: A prominent section at the top of the landing page.
 *
 * @param {HeroSectionProps} props - The props for the HeroSection component.
 * @returns {JSX.Element} The rendered HeroSection component.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <a
          href={ctaLink}
          className={styles.heroCta}
          aria-label={`Learn more about ${title}`}
          role="button"
          tabIndex={0}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
```