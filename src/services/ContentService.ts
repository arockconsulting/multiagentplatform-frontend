```typescript
// src/services/ContentService.ts

/**
 * @file ContentService.ts
 * @description This file contains the ContentService class, which is responsible for fetching content data from the backend.
 */

/**
 * @interface LandingPageData
 * @description Interface for the landing page data.
 */
export interface LandingPageData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  features: Feature[];
  testimonials: Testimonial[];
  callToAction: CallToAction;
}

/**
 * @interface Feature
 * @description Interface for a feature item.
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/**
 * @interface Testimonial
 * @description Interface for a testimonial item.
 */
export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  image: string;
}

/**
 * @interface CallToAction
 * @description Interface for the call to action section.
 */
export interface CallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

/**
 * @class ContentService
 * @description This class provides methods for fetching content data from the backend.
 */
class ContentService {
  private baseUrl: string;

  /**
   * @constructor
   * @param {string} baseUrl - The base URL of the backend API.
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * @method getLandingPageData
   * @description Fetches the landing page data from the backend.
   * @returns {Promise<LandingPageData>} A promise that resolves to the landing page data.
   * @throws {Error} If the request fails.
   */
  async getLandingPageData(): Promise<LandingPageData> {
    try {
      const response = await fetch(`${this.baseUrl}/landing-page`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: LandingPageData = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching landing page data:", error);
      throw error;
    }
  }
}

export default ContentService;
```