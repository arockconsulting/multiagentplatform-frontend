```typescript
import { css } from '@emotion/react';

/**
 * Styles for the Header component.
 */
export const headerStyles = css`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

/**
 * Styles for the logo container.
 */
export const logoContainerStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

/**
 * Styles for the navigation links.
 */
export const navStyles = css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;

    li {
      a {
        text-decoration: none;
        color: #333;
        font-weight: 500;

        &:hover {
          color: #007bff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
`;
```