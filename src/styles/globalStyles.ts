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
    primary: string;
    secondary: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

/**
 * Tema padrão da aplicação.
 */
export const defaultTheme: ThemeProps = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
    text: '#343a40',
    accent: '#ffc107',
  },
  fonts: {
    primary: 'Arial, sans-serif',
    secondary: 'Helvetica, sans-serif',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};

/**
 * Estilos globais da aplicação.
 * Define fontes, cores e reset de estilos.
 */
const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
  /* Reseta estilos padrões do navegador */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Estilos gerais */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
```