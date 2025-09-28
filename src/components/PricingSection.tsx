```typescript
// src/components/PricingSection.tsx
import React from 'react';
import styles from './PricingSection.module.css';

interface PricingTierProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

/**
 * PricingTier Component: Displays a single pricing tier with its features.
 * @param {PricingTierProps} props - The props for the PricingTier component.
 * @returns {JSX.Element}
 */
const PricingTier: React.FC<PricingTierProps> = ({ title, price, features, isPopular }) => {
  return (
    <div className={`${styles.pricingTier} ${isPopular ? styles.popular : ''}`} aria-labelledby={`${title}-title`}>
      <h3 id={`${title}-title`} className={styles.tierTitle}>{title} {isPopular && <span className={styles.popularBadge}>Popular</span>}</h3>
      <div className={styles.price}>
        {price}
      </div>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
      <button className={styles.selectButton} aria-label={`Select the ${title} plan`}>Select</button>
    </div>
  );
};


interface PricingSectionProps {
  tiers: PricingTierProps[];
}

/**
 * PricingSection Component: Displays different pricing tiers.
 * @param {PricingSectionProps} props - The props for the PricingSection component.
 * @returns {JSX.Element}
 */
const PricingSection: React.FC<PricingSectionProps> = ({ tiers }) => {
  return (
    <section className={styles.pricingSection}>
      <h2>Pricing</h2>
      <div className={styles.tiersContainer}>
        {tiers.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
```

```typescript
// src/components/PricingSection.module.css
.pricingSection {
  padding: 2rem;
  text-align: center;
}

.tiersContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.pricingTier {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;
  text-align: left;
  transition: transform 0.3s ease;
}

.pricingTier:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.popular {
  border-color: #007bff;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
}

.tierTitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.popularBadge {
  background-color: #007bff;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.featuresList {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.featureItem {
  margin-bottom: 0.5rem;
}

.selectButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
}

.selectButton:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .tiersContainer {
    flex-direction: column;
    align-items: center;
  }

  .pricingTier {
    width: 90%;
  }
}
```