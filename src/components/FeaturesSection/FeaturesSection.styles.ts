```typescript
import styles from './FeaturesSection.module.scss';

interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * FeatureItem component for displaying a single feature.
 * @param {FeatureItemProps} props - The props for the FeatureItem component.
 * @returns {JSX.Element}
 */
const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

interface FeaturesSectionProps {
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

/**
 * FeaturesSection component to showcase key features.
 * @param {FeaturesSectionProps} props - The props for the FeaturesSection component.
 * @returns {JSX.Element}
 */
const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
```
```typescript
// src/components/FeaturesSection/FeaturesSection.module.scss
.featuresSection {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.featuresContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.sectionTitle {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.featuresGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.featureItem {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.featureIcon {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 20px;
}

.featureTitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.featureDescription {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .featuresGrid {
    grid-template-columns: 1fr;
  }

  .featureItem {
    text-align: left;
  }
}
```
