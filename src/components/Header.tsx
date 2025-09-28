```typescript
// src/components/Header.tsx
import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  /**
   * The application name to display in the header.
   */
  appName: string;
  /**
   * Navigation links to display in the header.
   */
  navLinks: { text: string; href: string }[];
  /**
   * Text for the action button.
   */
  actionButtonText: string;
  /**
   * Callback function for when the action button is clicked.
   */
  onActionButtonClick: () => void;
}

/**
 * Header component for the landing page.
 * Displays the logo, navigation links, and an action button.
 */
const Header: React.FC<HeaderProps> = ({
  appName,
  navLinks,
  actionButtonText,
  onActionButtonClick,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/" aria-label="Go to homepage">
          {appName}
        </a>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.text} className={styles.navItem}>
              <a href={link.href} className={styles.navLink}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.action}>
        <button className={styles.actionButton} onClick={onActionButtonClick}>
          {actionButtonText}
        </button>
      </div>
    </header>
  );
};

export default Header;
```
```css
/* src/components/Header.module.css */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f0f0f0;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.navigation {
  flex-grow: 1;
  text-align: center;
}

.navList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block; /* Ensure the list takes only the space it needs */
}

.navItem {
  display: inline;
  margin: 0 1rem;
}

.navLink {
  text-decoration: none;
  color: #555;
  font-weight: 500;
}

.actionButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.actionButton:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: stretch;
  }

  .logo {
    text-align: center;
    margin-bottom: 1rem;
  }

  .navigation {
    text-align: center;
    margin-bottom: 1rem;
  }

  .navList {
    display: block; /* Stack the list items */
  }

  .navItem {
    display: block; /* Stack the list items */
    margin: 0.5rem 0;
  }

  .action {
    text-align: center;
  }
}
```