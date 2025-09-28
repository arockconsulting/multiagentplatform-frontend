```typescript
import styled from 'styled-components';

/**
 * Estilos para a seção de Features.
 */
export const FeaturesSectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }

  @media (min-width: 1200px) {
    padding: 8rem 6rem;
  }
`;

/**
 * Estilos para o título da seção de Features.
 */
export const FeaturesSectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

/**
 * Estilos para o grid de Features.
 */
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

/**
 * Estilos para um único Feature.
 */
export const FeatureItem = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

/**
 * Estilos para o ícone do Feature.
 */
export const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

/**
 * Estilos para o título do Feature.
 */
export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

/**
 * Estilos para a descrição do Feature.
 */
export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;
```