```typescript
// src/components/Footer.tsx

import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  companyName: string;
  year: number;
}

/**
 * Footer component for the landing page.
 * Includes company name and copyright year.
 * Implements accessibility features for screen readers and keyboard navigation.
 */
const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.container}>
        <p className={styles.copyright} aria-label="Copyright information">
          &copy; {year} {companyName}. All rights reserved.
        </p>
        <nav aria-label="Footer Navigation">
          <ul className={styles.footerNav}>
            <li>
              <a href="/privacy" className={styles.footerLink} aria-label="Privacy Policy" tabIndex={0}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className={styles.footerLink} aria-label="Terms of Service" tabIndex={0}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.footerLink} aria-label="Contact Us" tabIndex={0}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
```