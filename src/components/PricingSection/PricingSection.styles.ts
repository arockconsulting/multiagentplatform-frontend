```typescript
import styles from './PricingSection.module.scss';

/**
 * Interface para as propriedades do componente PricingSection.
 */
interface PricingSectionProps {
  /**
   * Título principal da seção de preços.
   */
  title: string;
  /**
   * Subtítulo ou descrição da seção de preços.
   */
  subtitle: string;
  /**
   * Lista de planos de preços a serem exibidos.
   */
  pricingPlans: PricingPlan[];
}

/**
 * Interface para um plano de preços individual.
 */
interface PricingPlan {
  /**
   * Nome do plano (e.g., "Básico", "Premium").
   */
  name: string;
  /**
   * Preço do plano.
   */
  price: number;
  /**
   * Moeda do preço.
   */
  currency: string;
  /**
   * Frequência de cobrança (e.g., "por mês").
   */
  frequency: string;
  /**
   * Lista de recursos incluídos no plano.
   */
  features: string[];
  /**
   * Indica se este é o plano recomendado.
   */
  isRecommended?: boolean;
  /**
   * Texto do botão para assinar o plano.
   */
  ctaText: string;
}

export type { PricingSectionProps, PricingPlan };

export const pricingSectionStyles = styles;
```
```typescript
import React from 'react';
import { PricingSectionProps, PricingPlan, pricingSectionStyles } from './PricingSection.styles';

/**
 * Componente para exibir uma seção de preços com diferentes planos.
 *
 * @param {PricingSectionProps} props - As propriedades do componente.
 * @returns {JSX.Element} A seção de preços renderizada.
 */
const PricingSection: React.FC<PricingSectionProps> = ({ title, subtitle, pricingPlans }) => {
  return (
    <section className={pricingSectionStyles.pricingSection}>
      <div className={pricingSectionStyles.pricingSectionHeader}>
        <h2 className={pricingSectionStyles.pricingSectionTitle}>{title}</h2>
        <p className={pricingSectionStyles.pricingSectionSubtitle}>{subtitle}</p>
      </div>
      <div className={pricingSectionStyles.pricingSectionPlans}>
        {pricingPlans.map((plan) => (
          <PricingPlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
};

/**
 * Interface para as propriedades do componente PricingPlanCard.
 */
interface PricingPlanCardProps {
  /**
   * O plano de preços a ser exibido no cartão.
   */
  plan: PricingPlan;
}

/**
 * Componente para exibir um cartão individual de plano de preços.
 *
 * @param {PricingPlanCardProps} props - As propriedades do componente.
 * @returns {JSX.Element} O cartão de plano de preços renderizado.
 */
const PricingPlanCard: React.FC<PricingPlanCardProps> = ({ plan }) => {
  return (
    <div className={`${pricingSectionStyles.pricingPlanCard} ${plan.isRecommended ? pricingSectionStyles.pricingPlanCardRecommended : ''}`}>
      <h3 className={pricingSectionStyles.pricingPlanName}>{plan.name}</h3>
      <div className={pricingSectionStyles.pricingPlanPrice}>
        <span className={pricingSectionStyles.pricingPlanCurrency}>{plan.currency}</span>
        {plan.price}
        <span className={pricingSectionStyles.pricingPlanFrequency}>/{plan.frequency}</span>
      </div>
      <ul className={pricingSectionStyles.pricingPlanFeatures}>
        {plan.features.map((feature, index) => (
          <li key={index} className={pricingSectionStyles.pricingPlanFeature}>{feature}</li>
        ))}
      </ul>
      <button className={pricingSectionStyles.pricingPlanButton}>{plan.ctaText}</button>
    </div>
  );
};

export default PricingSection;
```
```scss
.pricingSection {
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 20px;
  }
}

.pricingSectionHeader {
  margin-bottom: 30px;
}

.pricingSectionTitle {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.pricingSectionSubtitle {
  font-size: 1.1rem;
  color: #777;
}

.pricingSectionPlans {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

.pricingPlanCard {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
  }
}

.pricingPlanCardRecommended {
  border: 2px solid #007bff;
}

.pricingPlanName {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.pricingPlanPrice {
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 15px;
}

.pricingPlanCurrency {
  font-size: 1rem;
  margin-right: 5px;
}

.pricingPlanFrequency {
  font-size: 1rem;
  color: #777;
}

.pricingPlanFeatures {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.pricingPlanFeature {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  color: #555;

  &:last-child {
    border-bottom: none;
  }
}

.pricingPlanButton {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
}
```
```typescript
declare module '*.module.scss' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
}
```