```typescript
// src/App.tsx
import React from 'react';
import styled from 'styled-components';

/**
 * Interface for the App component props.
 */
interface AppProps {
  /**
   * A greeting message.
   */
  greeting?: string;
}

/**
 * Main container for the application.
 */
const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: sans-serif;
`;

/**
 * Heading for the landing page.
 */
const AppHeader = styled.h1`
  color: #333;
`;

/**
 * Paragraph describing the landing page.
 */
const AppParagraph = styled.p`
  color: #666;
  line-height: 1.6;
`;

/**
 * A styled button component.
 */
const StyledButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #3e8e41;
  }
`;


/**
 * The main App component.
 * @param {AppProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
const App: React.FC<AppProps> = ({ greeting = 'Welcome' }) => {
  return (
    <AppContainer>
      <AppHeader>{greeting} to My Awesome Landing Page</AppHeader>
      <AppParagraph>
        This is a simple landing page built with React, TypeScript, and Styled Components.
        Feel free to explore and customize it!
      </AppParagraph>
      <StyledButton>Learn More</StyledButton>
    </AppContainer>
  );
};

export default App;
```