import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { JSDOM } from 'jsdom';
import { seoConfig } from '../seo-config.js';

// Routes to pre-render from SEO config
const routes = Object.keys(seoConfig.pages).map(path => ({
  path,
  ...seoConfig.pages[path]
}));

// Read the base HTML template
const templatePath = join(process.cwd(), 'dist', 'index.html');
const template = readFileSync(templatePath, 'utf-8');

console.log(`🚀 Starting static site generation for ${routes.length} routes...`);

// Mock location object for routing
const createMockLocation = (path) => ({
  pathname: path,
  search: '',
  hash: '',
  href: `http://localhost${path}`,
  origin: 'http://localhost',
  protocol: 'http:',
  host: 'localhost',
  hostname: 'localhost',
  port: '',
  assign: () => { },
  replace: () => { },
  reload: () => { }
});

// Generate static HTML for each route
routes.forEach(route => {
  console.log(`📄 Generating static page for: ${route.path}`);

  // Create a fresh DOM for each route
  const routeDom = new JSDOM(template, {
    url: `http://localhost${route.path}`,
    pretendToBeVisual: true,
    resources: 'usable'
  });

  // Update meta tags for SEO
  const document = routeDom.window.document;

  // Update title
  const titleElement = document.querySelector('title');
  if (titleElement) {
    titleElement.textContent = route.title;
  }

  // Add or update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', route.description);

  // Add or update keywords meta tag
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', route.keywords);

  // Add Open Graph meta tags
  const ogTags = [
    { property: 'og:title', content: route.title },
    { property: 'og:description', content: route.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${seoConfig.baseUrl}${route.path}` },
    { property: 'og:image', content: `${seoConfig.baseUrl}${seoConfig.defaultImage}` },
    { property: 'og:site_name', content: seoConfig.siteName }
  ];

  ogTags.forEach(tag => {
    let ogElement = document.querySelector(`meta[property="${tag.property}"]`);
    if (!ogElement) {
      ogElement = document.createElement('meta');
      ogElement.setAttribute('property', tag.property);
      document.head.appendChild(ogElement);
    }
    ogElement.setAttribute('content', tag.content);
  });

  // Add Twitter Card meta tags
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: route.title },
    { name: 'twitter:description', content: route.description },
    { name: 'twitter:image', content: `${seoConfig.baseUrl}${seoConfig.defaultImage}` }
  ];

  twitterTags.forEach(tag => {
    let twitterElement = document.querySelector(`meta[name="${tag.name}"]`);
    if (!twitterElement) {
      twitterElement = document.createElement('meta');
      twitterElement.setAttribute('name', tag.name);
      document.head.appendChild(twitterElement);
    }
    twitterElement.setAttribute('content', tag.content);
  });

  // Add canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', `${seoConfig.baseUrl}${route.path}`);

  // Add structured data
  if (route.structuredData) {
    // Remove existing structured data to avoid duplicates
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    scriptTag.textContent = JSON.stringify(route.structuredData, null, 2);
    document.head.appendChild(scriptTag);
  }

  // Add additional SEO optimizations

  // Add hreflang for international SEO (if needed)
  let hreflangLink = document.querySelector('link[rel="alternate"][hreflang="en"]');
  if (!hreflangLink) {
    hreflangLink = document.createElement('link');
    hreflangLink.setAttribute('rel', 'alternate');
    hreflangLink.setAttribute('hreflang', 'en');
    document.head.appendChild(hreflangLink);
  }
  hreflangLink.setAttribute('href', `${seoConfig.baseUrl}${route.path}`);

  // Add robots meta tag optimization
  let robotsMeta = document.querySelector('meta[name="robots"]');
  if (!robotsMeta) {
    robotsMeta = document.createElement('meta');
    robotsMeta.setAttribute('name', 'robots');
    document.head.appendChild(robotsMeta);
  }
  robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  // Add theme-color for mobile browsers
  let themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (!themeColorMeta) {
    themeColorMeta = document.createElement('meta');
    themeColorMeta.setAttribute('name', 'theme-color');
    document.head.appendChild(themeColorMeta);
  }
  themeColorMeta.setAttribute('content', '#EDE8DF');

  // Add preload hints for critical resources
  const preloadHints = [
    { href: '/buildcon header.svg', as: 'image' },
    { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600&display=swap', as: 'style' }
  ];

  preloadHints.forEach(hint => {
    let existingPreload = document.querySelector(`link[rel="preload"][href="${hint.href}"]`);
    if (!existingPreload) {
      const preloadLink = document.createElement('link');
      preloadLink.setAttribute('rel', 'preload');
      preloadLink.setAttribute('href', hint.href);
      preloadLink.setAttribute('as', hint.as);
      if (hint.as === 'style') {
        preloadLink.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      }
      document.head.appendChild(preloadLink);
    }
  });

  // Get the final HTML
  const html = routeDom.serialize();

  // Determine output path
  let outputPath;
  if (route.path === '/') {
    outputPath = join(process.cwd(), 'dist', 'index.html');
  } else {
    const routePath = route.path.slice(1); // Remove leading slash
    const dirPath = join(process.cwd(), 'dist', routePath);

    // Create directory if it doesn't exist
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }

    outputPath = join(dirPath, 'index.html');
  }

  // Write the static HTML file
  writeFileSync(outputPath, html, 'utf-8');
  console.log(`✓ Generated: ${outputPath}`);
});

console.log('Static site generation completed!');