```typescript
// src/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

/**
 * Interface para definir as propriedades de tema.
 */
export interface ThemeProps {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  fonts: {
    main: string;
    secondary: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

/**
 * Tema padrão para a aplicação.
 */
export const defaultTheme: ThemeProps = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
    text: '#212529',
    accent: '#ffc107',
  },
  fonts: {
    main: 'Arial, sans-serif',
    secondary: 'Helvetica, sans-serif',
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

/**
 * Estilos globais para a aplicação.
 * Define a fonte padrão, reseta margens e paddings, e aplica o background.
 */
const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
```