import React, { useEffect } from 'react';
import { seoConfig } from '../seo-config.js';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  path?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords, 
  image,
  imageAlt,
  path = '/',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false
}) => {
  useEffect(() => {
    const pageConfig = seoConfig.pages[path];
    const finalTitle = title || pageConfig?.title || seoConfig.defaultTitle;
    const finalDescription = description || pageConfig?.description || seoConfig.defaultDescription;
    const finalKeywords = keywords || pageConfig?.keywords || '';
    const finalImage = image || seoConfig.defaultImage;
    const finalImageAlt = imageAlt || seoConfig.defaultImageAlt || finalTitle;
    const fullImageUrl = finalImage.startsWith('http') ? finalImage : `${seoConfig.baseUrl}${finalImage}`;

    // Update document title
    document.title = finalTitle;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string, attribute: string = 'content') => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        } else if (selector.includes('name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', finalDescription);
    updateMetaTag('meta[name="keywords"]', finalKeywords);
    updateMetaTag('meta[name="author"]', author || seoConfig.siteName);
    
    // Robots meta tag
    const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    updateMetaTag('meta[name="robots"]', robotsContent);

    // Language and locale
    updateMetaTag('meta[http-equiv="content-language"]', seoConfig.language || 'en', 'content');
    
    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', finalTitle);
    updateMetaTag('meta[property="og:description"]', finalDescription);
    updateMetaTag('meta[property="og:type"]', type);
    updateMetaTag('meta[property="og:url"]', `${seoConfig.baseUrl}${path}`);
    updateMetaTag('meta[property="og:image"]', fullImageUrl);
    updateMetaTag('meta[property="og:image:alt"]', finalImageAlt);
    updateMetaTag('meta[property="og:image:width"]', '1200');
    updateMetaTag('meta[property="og:image:height"]', '630');
    updateMetaTag('meta[property="og:site_name"]', seoConfig.siteName);
    updateMetaTag('meta[property="og:locale"]', seoConfig.locale || 'en_US');

    // Article-specific Open Graph tags
    if (type === 'article') {
      if (publishedTime) updateMetaTag('meta[property="article:published_time"]', publishedTime);
      if (modifiedTime) updateMetaTag('meta[property="article:modified_time"]', modifiedTime);
      if (author) updateMetaTag('meta[property="article:author"]', author);
    }

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', finalTitle);
    updateMetaTag('meta[name="twitter:description"]', finalDescription);
    updateMetaTag('meta[name="twitter:image"]', fullImageUrl);
    updateMetaTag('meta[name="twitter:image:alt"]', finalImageAlt);
    
    if (seoConfig.twitterHandle) {
      updateMetaTag('meta[name="twitter:site"]', seoConfig.twitterHandle);
      updateMetaTag('meta[name="twitter:creator"]', seoConfig.twitterHandle);
    }

    // Additional social media tags
    updateMetaTag('meta[property="fb:app_id"]', ''); // Add Facebook App ID if available
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${seoConfig.baseUrl}${path}`);

    // Add alternate language links (hreflang)
    let hreflang = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', 'en');
      document.head.appendChild(hreflang);
    }
    hreflang.setAttribute('href', `${seoConfig.baseUrl}${path}`);

    // Add structured data if available
    if (pageConfig?.structuredData) {
      // Remove existing structured data to avoid duplicates
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());
      
      const scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.textContent = JSON.stringify(pageConfig.structuredData, null, 2);
      document.head.appendChild(scriptTag);
    }

    // Performance optimizations
    if (seoConfig.technical?.enablePreconnect) {
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cdn.tailwindcss.com'
      ];
      
      preconnectDomains.forEach(domain => {
        let preconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
        if (!preconnect) {
          preconnect = document.createElement('link');
          preconnect.setAttribute('rel', 'preconnect');
          preconnect.setAttribute('href', domain);
          if (domain.includes('gstatic')) {
            preconnect.setAttribute('crossorigin', '');
          }
          document.head.appendChild(preconnect);
        }
      });
    }

  }, [title, description, keywords, image, imageAlt, path, type, publishedTime, modifiedTime, author, noIndex]);

  return null; // This component doesn't render anything
};

export default SEOHead;