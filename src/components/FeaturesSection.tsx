```tsx
// src/components/FeaturesSection.tsx
import React from 'react';
import styles from './FeaturesSection.module.css';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesSectionProps {
  features: Feature[];
}

/**
 * FeaturesSection Component: Displays a section highlighting key features.
 * Implements accessibility features for better user experience.
 *
 * @param {FeaturesSectionProps} props - The component's props.
 * @returns {JSX.Element} The rendered FeaturesSection component.
 */
const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Key Features</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <div
            key={feature.id}
            className={styles.featureItem}
            aria-labelledby={`feature-title-${feature.id}`}
            tabIndex={0}
          >
            <span className={styles.featureIcon} aria-hidden="true">
              {feature.icon}
            </span>
            <h3 id={`feature-title-${feature.id}`} className={styles.featureTitle}>
              {feature.title}
            </h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
```