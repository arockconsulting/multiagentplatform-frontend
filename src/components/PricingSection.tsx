```typescript
import React from 'react';
import styles from './PricingSection.module.css';

interface PricingPlan {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

/**
 * PricingSection Component: Displays pricing plans with features and a call to action.
 *
 * @param {PricingSectionProps} props - The props object containing the pricing plans.
 * @returns {JSX.Element} - The rendered PricingSection component.
 */
const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  return (
    <section className={styles.pricingSection}>
      <h2>Pricing Plans</h2>
      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div key={index} className={`${styles.plan} ${plan.isPopular ? styles.popularPlan : ''}`}>
            <h3>{plan.title}</h3>
            <div className={styles.price}>${plan.price}/mo</div>
            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
```
```css
/* src/components/PricingSection.module.css */

.pricingSection {
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;
}

.plansContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.plan {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.plan:hover {
  transform: translateY(-5px);
}

.popularPlan {
  border: 2px solid #007bff;
}

.plan h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
}

.plan ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.plan li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.plan li:last-child {
  border-bottom: none;
}

.ctaButton {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.ctaButton:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .plansContainer {
    flex-direction: column;
    align-items: center;
  }

  .plan {
    width: 100%;
    max-width: 400px;
  }
}
```