```typescript
import styled from 'styled-components';

/**
 * Estilos para o componente Footer.
 */
export const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.7rem;
  }
`;

/**
 * Estilos para a seção de direitos autorais.
 */
export const Copyright = styled.p`
  margin: 0;
`;
```