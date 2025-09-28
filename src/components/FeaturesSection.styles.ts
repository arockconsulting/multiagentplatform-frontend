```typescript
import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const FeatureCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;
```
```typescript
import React from 'react';
import * as S from './FeaturesSection.styles';
import { FaReact, FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

/**
 * Interface for a single feature item.
 */
interface Feature {
  icon: React.ComponentType;
  title: string;
  description: string;
}

/**
 * Interface for the FeaturesSection component props.
 */
interface FeaturesSectionProps {
  features: Feature[];
}

/**
 * FeaturesSection Component: Displays key features of the product.
 *
 * @param {FeaturesSectionProps} props - The props for the FeaturesSection component.
 * @returns {JSX.Element} - The rendered FeaturesSection component.
 */
const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <S.Section id="features">
      <S.Container>
        <S.Title>Key Features</S.Title>
        <S.FeaturesGrid>
          {features.map((feature, index) => (
            <S.FeatureCard key={index}>
              <S.FeatureIcon>
                <feature.icon />
              </S.FeatureIcon>
              <S.FeatureTitle>{feature.title}</S.FeatureTitle>
              <S.FeatureDescription>{feature.description}</S.FeatureDescription>
            </S.FeatureCard>
          ))}
        </S.FeaturesGrid>
      </S.Container>
    </S.Section>
  );
};

/**
 * Default Features Data
 */
const defaultFeatures: Feature[] = [
  {
    icon: FaReact,
    title: 'React Powered',
    description: 'Built with the latest React standards for optimal performance and maintainability.',
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'Well-documented and easy-to-understand codebase for seamless integration and customization.',
  },
  {
    icon: FaMobileAlt,
    title: 'Responsive Design',
    description: 'Fully responsive layout that adapts to any screen size, providing a consistent user experience.',
  },
  {
    icon: FaPalette,
    title: 'Customizable Themes',
    description: 'Easily customizable themes and styles to match your brand identity and preferences.',
  },
];

/**
 * FeaturesSection with Default Data.  Can be used as a standalone component.
 */
export const FeaturesSectionWithDefaults: React.FC = () => {
  return <FeaturesSection features={defaultFeatures} />;
};

export default FeaturesSection;
```