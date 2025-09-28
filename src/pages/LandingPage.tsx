```typescript
// src/pages/LandingPage.tsx
import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css'; // Using CSS Modules
import { ContentService } from '../services/ContentService';

/**
 * Interface for the Landing Page data fetched from the backend.
 */
interface LandingPageData {
  title: string;
  subtitle: string;
  heroImage: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  callToActionText: string;
  callToActionLink: string;
}

/**
 * LandingPage Component.
 *
 * Fetches and displays the landing page content from the backend.
 */
const LandingPage: React.FC = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPageData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Fetches landing page data from the ContentService.
     */
    const fetchLandingPageData = async () => {
      try {
        const data = await ContentService.getLandingPageData();
        setLandingPageData(data);
        setIsLoading(false);
      } catch (err: any) {
        setError('Failed to load landing page data.');
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchLandingPageData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!landingPageData) {
    return <div>No data available.</div>;
  }

  return (
    <div className={styles.landingPage}>
      <header className={styles.heroSection} style={{ backgroundImage: `url(${landingPageData.heroImage})` }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{landingPageData.title}</h1>
          <p className={styles.heroSubtitle}>{landingPageData.subtitle}</p>
          <a href={landingPageData.callToActionLink} className={styles.ctaButton}>
            {landingPageData.callToActionText}
          </a>
        </div>
      </header>

      <section className={styles.featuresSection}>
        <h2>Key Features</h2>
        <div className={styles.featuresGrid}>
          {landingPageData.features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <img src={feature.icon} alt={`${feature.title} Icon`} className={styles.featureIcon} aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
```