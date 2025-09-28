```typescript
import styled from 'styled-components';

/**
 * HeroSectionWrapper: Wrapper para a seção Hero, contendo a imagem de fundo e o conteúdo.
 */
export const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/hero-background.jpg'); // Substitua pelo caminho da sua imagem
  background-size: cover;
  background-position: center;
  color: white;

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

/**
 * HeroContent: Contém o texto e os botões da seção Hero.
 */
export const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;
  z-index: 1;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

/**
 * ButtonContainer: Contêiner para os botões.
 */
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

/**
 * HeroButton: Estilo base para os botões.
 */
export const HeroButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

/**
 * PrimaryButton: Estilo para o botão primário.
 */
export const PrimaryButton = styled(HeroButton)`
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

/**
 * SecondaryButton: Estilo para o botão secundário.
 */
export const SecondaryButton = styled(HeroButton)`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
```