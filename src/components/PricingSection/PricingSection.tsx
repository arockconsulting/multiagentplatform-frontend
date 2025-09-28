```tsx
import React from 'react';
import styles from './PricingSection.module.css';

interface PricingPlan {
  title: string;
  price: number;
  currency: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

/**
 * PricingSection Component: Displays different pricing plans.
 *
 * @param {PricingSectionProps} props - The component props.
 * @returns {JSX.Element} The rendered PricingSection component.
 */
const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  return (
    <section className={styles.pricingSection} aria-labelledby="pricing-section-title">
      <h2 id="pricing-section-title" className={styles.sectionTitle}>
        Pricing Plans
      </h2>
      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div key={index} className={`${styles.pricingPlan} ${plan.isPopular ? styles.popularPlan : ''}`}>
            <h3 className={styles.planTitle}>{plan.title}</h3>
            <div className={styles.price}>
              {plan.currency}
              {plan.price}
            </div>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
            <a href={plan.buttonLink} className={styles.button}>
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
```
```css
/* PricingSection.module.css */

.pricingSection {
  padding: 40px;
  background-color: #f9f9f9;
  text-align: center;
}

.sectionTitle {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
}

.plansContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.pricingPlan {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;
}

.pricingPlan:hover {
  transform: translateY(-5px);
}

.popularPlan {
  border: 2px solid #007bff;
}

.planTitle {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
}

.featuresList {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.featureItem {
  margin-bottom: 10px;
  color: #555;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .plansContainer {
    flex-direction: column;
    align-items: center;
  }

  .pricingPlan {
    width: 100%;
    max-width: 400px;
  }
}
```