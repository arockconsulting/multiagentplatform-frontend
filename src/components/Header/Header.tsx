```typescript
// src/components/Header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

/**
 * Interface for the Header component props.
 */
interface HeaderProps {
  /**
   * The title of the landing page.
   */
  title: string;
}

/**
 * Header component for the landing page.
 *
 * @param {HeaderProps} props - The props for the Header component.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {title}
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/features" className={styles.navLink}>
                Features
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/pricing" className={styles.navLink}>
                Pricing
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

```css
/* src/components/Header/Header.module.css */
.header {
  background-color: #f0f0f0;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav {
  display: flex;
  align-items: center;
}

.navList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.navItem {
  margin-left: 1rem;
}

.navLink {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navLink:hover {
  color: #007bff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    margin-top: 1rem;
  }

  .navList {
    flex-direction: column;
    align-items: flex-start;
  }

  .navItem {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
```