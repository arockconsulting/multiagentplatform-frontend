```typescript
// src/App.tsx
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

/**
 * Global Styles using Styled Components
 */
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
`;

/**
 * Styled Component for the main App container
 */
const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

/**
 * Styled Component for the App header
 */
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

/**
 * Styled Component for the App link
 */
const AppLink = styled.a`
  color: #61dafb;
`;

/**
 * Interface for the App component's props (currently empty)
 */
interface AppProps {}

/**
 * Main App Component
 * @returns JSX.Element - The rendered App component
 */
const App: React.FC<AppProps> = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AppHeader>
          <h1>
            Welcome to React with TypeScript and Styled Components!
          </h1>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppContainer>
    </>
  );
};

export default App;
```