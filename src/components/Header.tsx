```typescript
// src/components/Header.tsx
import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  /**
   * The title of the header.
   */
  title: string;
  /**
   * An optional className to apply custom styles.
   */
  className?: string;
}

/**
 * A functional component representing the header of the landing page.
 * It includes accessibility features for keyboard navigation and screen readers.
 *
 * @param {HeaderProps} props - The component's props.
 * @returns {JSX.Element} The rendered header element.
 */
const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
    <header className={`${styles.header} ${className || ''}`} role="banner">
      <h1 className={styles.title} aria-level={1}>
        {title}
      </h1>
      <nav className={styles.nav} aria-label="Main Navigation">
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink} aria-label="Go to About section" tabIndex={0}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#services" className={styles.navLink} aria-label="Go to Services section" tabIndex={0}>
              Services
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink} aria-label="Go to Contact section" tabIndex={0}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```