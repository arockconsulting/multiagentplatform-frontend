```typescript
// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

/**
 * GlobalStyle: Define estilos globais para a aplicação, como reset de CSS e fontes.
 */
const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Fontes e cores globais */
  body {
    font-family: sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }
`;

/**
 * Root component to render the application.
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
```
```typescript
// src/App.tsx

import React from 'react';
import styled from 'styled-components';

/**
 * AppContainer: Styled component para o container principal da aplicação.
 */
const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

/**
 * Title: Styled component para o título principal da página.
 */
const Title = styled.h1`
  font-size: 2.5em;
  color: #007bff;
`;

/**
 * Description: Styled component para a descrição da página.
 */
const Description = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;

/**
 * App: Componente principal da aplicação.
 * @returns JSX.Element
 */
function App(): JSX.Element {
  return (
    <AppContainer>
      <Title>Bem-vindo à Landing Page!</Title>
      <Description>Este é um exemplo de landing page com React, TypeScript e Styled Components.</Description>
    </AppContainer>
  );
}

export default App;
```
```typescript
// src/react-app-env.d.ts

/// <reference types="react-scripts" />
```
```typescript
//tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```
```json
// package.json
{
  "name": "landing-page",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.34",
    "@types/react": "^18.2.7",
    "@types/react-dom": "^18.2.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.11",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/styled-components": "^5.1.26"
  }
}
```