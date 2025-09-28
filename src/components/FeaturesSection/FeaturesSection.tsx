```tsx
import React from 'react';
import styles from './FeaturesSection.module.css';

interface Feature {
  /** The title of the feature. */
  title: string;
  /** A brief description of the feature. */
  description: string;
  /** An icon or image representing the feature.  Can be a URL or a component. */
  icon: React.ReactNode;
}

interface FeaturesSectionProps {
  /** Array of feature objects to display. */
  features: Feature[];
}

/**
 * A section component to showcase key features of the product or service.
 */
const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

```css
/* src/components/FeaturesSection/FeaturesSection.module.css */

.featuresSection {
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.sectionTitle {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.featuresGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.featureIcon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.featureTitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.featureDescription {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sectionTitle {
    font-size: 2rem;
  }

  .feature {
    padding: 1.5rem;
  }

  .featureIcon {
    font-size: 2.5rem;
  }

  .featureTitle {
    font-size: 1.25rem;
  }
}
```