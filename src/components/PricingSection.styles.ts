```typescript
import styled from 'styled-components';

/**
 * Estilos para a seção de preços.
 */
export const PricingSectionContainer = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

/**
 * Estilos para o título da seção de preços.
 */
export const PricingSectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

/**
 * Estilos para o container dos planos de preços.
 */
export const PricingPlansContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

/**
 * Estilos para um único plano de preços.
 */
export const PricingPlanCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

/**
 * Estilos para o título do plano de preços.
 */
export const PricingPlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

/**
 * Estilos para o preço do plano.
 */
export const PricingPlanPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
`;

/**
 * Estilos para a lista de recursos do plano.
 */
export const PricingPlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

/**
 * Estilos para um único recurso do plano.
 */
export const PricingPlanFeature = styled.li`
  margin-bottom: 0.5rem;
  color: #555;
`;

/**
 * Estilos para o botão de ação do plano.
 */
export const PricingPlanButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;
```