```typescript
import styles from './Footer.module.css';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';

/**
 * Interface for the Footer component props.  Currently empty as no props are passed.
 */
interface FooterProps {}

/**
 * Footer component for the landing page.
 *
 * Contains copyright information and links to social media profiles.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
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
```typescript
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
  color: #555;
}

.socialLinks {
  display: flex;
  gap: 15px;
}

.socialIcon {
  width: 24px;
  height: 24px;
  fill: #555;
  transition: fill 0.3s ease;
}

.socialIcon:hover {
  fill: #333;
}

/* Responsive design */
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
```typescript
// src/assets/linkedin.svg
// Place holder for LinkedIn Icon SVG content
export const ReactComponent = () => (<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764.966 0 1.75.79 1.75 1.764 0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.479v6.756z"/></svg>);

```
```typescript
// src/assets/github.svg
// Place holder for GitHub Icon SVG content
export const ReactComponent = () => (<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.219 1.839 1.219 1.07 1.822 2.807 1.292 3.491.981.103-.753.418-1.292.766-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.021.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>);
```