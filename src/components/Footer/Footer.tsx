```tsx
import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';

/**
 * Interface para as propriedades do componente Footer.
 */
interface FooterProps {
  companyName: string;
  year: number;
}

/**
 * Componente Footer que exibe informações de copyright e links de mídia social.
 *
 * @param {FooterProps} props - As propriedades do componente.
 * @returns {JSX.Element} O componente Footer.
 */
const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {year} {companyName}. Todos os direitos reservados.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className={styles.socialIcon} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

```css
/* Footer.module.css */

.footer {
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.copyright {
  font-size: 14px;
  color: #333;
}

.socialLinks {
  display: flex;
  gap: 10px;
}

.socialIcon {
  width: 24px;
  height: 24px;
  fill: #555;
  transition: fill 0.3s ease;
}

.socialIcon:hover {
  fill: #0077b5; /* Cor do LinkedIn */
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 10px;
  }

  .copyright {
    font-size: 12px;
  }
}
```

```svg
<!-- src/assets/linkedin.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"/>
  <path d="M7 10h2v7H7zm1-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 13.5c0-.5.4-.5.8-.5 1 0 1.5.4 1.5 1.6v3.4H16v-3.4c0-2.3-1.3-3.5-3-3.5-1.7 0-2.7 1.2-2.7 3.5v3.4H12z"/>
</svg>
```

```svg
<!-- src/assets/github.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2.247a10 10 0 0 0-3.167 19.053c.414.076.567-.183.567-.408 0-.225-.008-.977-.015-1.908-2.576.567-3.125-.613-3.369-1.453-.453-.832-.92-1.042-1.633-1.133-.008-.111-.293-.567-.669-1.111 0-.009.008-.033.008-.057.392-.267.816-.533 1.233-.831 1.216.192 2.507.904 2.877 1.453.483.758 1.225 1.033 1.942 1.111.016-.084.074-.168.131-.207-1.825-.217-3.75-1.017-3.75-4.042 0-.892.325-1.625.867-2.192-.092-.217-.375-1.033.083-2.158 0 0 .708-.225 2.317.833.675-.183 1.392-.275 2.108-.275.717 0 1.433.092 2.108.275 1.608-1.058 2.317-.833 2.317-.833.458 1.125.166 1.942.083 2.158.542.567.867 1.3.867 2.192 0 3.033-1.933 3.825-3.75 4.042.292.25.55.383.55.617 0 .442-.015 1.592-.015 1.908 0 .225.158.483.575.408A10 10 0 0 0 12 2.247z"/>
</svg>
```