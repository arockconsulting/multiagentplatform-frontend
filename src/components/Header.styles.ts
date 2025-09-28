```typescript
// src/components/Header.styles.ts
import styled from 'styled-components';

/**
 * Header container.
 */
export const HeaderContainer = styled.header`
  background-color: #f0f0f0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

/**
 * Logo container.
 */
export const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

/**
 * Navigation list.
 */
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

/**
 * Navigation item.
 */
export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #555;
    font-weight: 500;

    &:hover {
      color: #007bff;
    }
  }
`;

/**
 * Action button.
 */
export const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;
```
```typescript
// src/components/Header.tsx
import React from 'react';
import * as S from './Header.styles';

/**
 * Header Props interface.
 */
interface HeaderProps {
  logo: string;
  navItems: { id: string; label: string; href: string }[];
  actionButtonLabel: string;
  onActionClick: () => void;
}

/**
 * Header component for the landing page.
 * @param {HeaderProps} props - The props for the Header component.
 * @returns {JSX.Element} The Header component.
 */
const Header: React.FC<HeaderProps> = ({ logo, navItems, actionButtonLabel, onActionClick }) => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>{logo}</S.LogoContainer>
      <nav>
        <S.NavList>
          {navItems.map((item) => (
            <S.NavItem key={item.id}>
              <a href={item.href}>{item.label}</a>
            </S.NavItem>
          ))}
        </S.NavList>
      </nav>
      <S.ActionButton onClick={onActionClick}>{actionButtonLabel}</S.ActionButton>
    </S.HeaderContainer>
  );
};

export default Header;
```
```typescript
// src/types/index.ts

export interface NavItem {
    id: string;
    label: string;
    href: string;
}
```
```typescript
// src/App.tsx
import React from 'react';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import { NavItem } from './types';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'features', label: 'Features', href: '/features' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

function App() {
  const handleActionClick = () => {
    alert('Action button clicked!');
  };

  return (
    <>
      <GlobalStyle />
      <Header
        logo="My Awesome App"
        navItems={navItems}
        actionButtonLabel="Get Started"
        onActionClick={handleActionClick}
      />
      <main>
        <h1>Welcome to my awesome app!</h1>
      </main>
    </>
  );
}

export default App;
```