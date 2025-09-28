```typescript
// src/components/Footer.styles.ts
import styled from 'styled-components';

/**
 * Estilos para o componente Footer.
 */
export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const FooterSection = styled.div`
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ContactInfo = styled.div`
  p {
    margin: 5px 0;
  }
`;

export const UsefulLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 5px 0;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyright = styled.p`
  margin-top: 15px;
  font-size: 0.7rem;
`;
```
```typescript
// src/components/Footer.tsx
import React from 'react';
import * as S from './Footer.styles';

/**
 * Interface para as propriedades do componente Footer.
 */
interface FooterProps {
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  usefulLinks: { text: string; href: string }[];
}

/**
 * Componente Footer que exibe informações de contato, links úteis e copyright.
 *
 * @param {FooterProps} props - As propriedades do componente.
 * @returns {JSX.Element} O componente Footer.
 */
const Footer: React.FC<FooterProps> = ({ companyName, contactEmail, contactPhone, usefulLinks }) => {
  return (
    <S.FooterContainer>
      <S.FooterSection>
        <h3>Contato</h3>
        <S.ContactInfo>
          <p>Empresa: {companyName}</p>
          <p>Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          <p>Telefone: {contactPhone}</p>
        </S.ContactInfo>
      </S.FooterSection>

      <S.FooterSection>
        <h3>Links Úteis</h3>
        <S.UsefulLinks>
          {usefulLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </S.UsefulLinks>
      </S.FooterSection>

      <S.Copyright>&copy; {new Date().getFullYear()} {companyName}. Todos os direitos reservados.</S.Copyright>
    </S.FooterContainer>
  );
};

export default Footer;
```