```typescript
import styles from './Header.module.css';
import React from 'react';

interface HeaderProps {
  /**
   * The title of the header.
   */
  title: string;
}

/**
 * A header component with navigation links and a logo.
 *
 * @param {HeaderProps} props - The component props.
 * @returns {JSX.Element} The Header component.
 */
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          {title}
        </a>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```
```typescript
/* Header.module.css */
.header {
  background-color: #f0f0f0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.5rem;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav li {
  margin-left: 1rem;
}

.nav a {
  text-decoration: none;
  color: #555;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav a:hover {
  background-color: #ddd;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav ul {
    margin-top: 1rem;
    flex-direction: column;
  }

  .nav li {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }
}
```
