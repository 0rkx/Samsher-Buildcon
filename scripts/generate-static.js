import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { JSDOM } from 'jsdom';
import { seoConfig } from '../seo-config.js';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerApp } from './ssr-app.js';

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

  // Render React app server-side for this route
  console.log(`🔄 Rendering React components for: ${route.path}`);
  
  try {
    const appHtml = renderToString(React.createElement(ServerApp, { pathname: route.path }));
    
    // Find the root div and inject the rendered HTML
    const rootDiv = document.querySelector('#root');
    if (rootDiv) {
      rootDiv.innerHTML = appHtml;
      console.log(`✓ Injected ${appHtml.length} characters of rendered HTML`);
    } else {
      console.warn(`⚠️  No #root element found for ${route.path}`);
    }
  } catch (error) {
    console.error(`❌ Error rendering React app for ${route.path}:`, error.message);
  }

  // Add inline CSS for critical styles to prevent FOUC
  const criticalCSS = `
    <style>
      /* Critical CSS for immediate rendering */
      body { 
        margin: 0; 
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background-color: #EDE8DF;
        color: #1f2937;
        line-height: 1.6;
      }
      .font-playfair { font-family: 'Playfair Display', serif; }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
      .fixed { position: fixed; }
      .relative { position: relative; }
      .absolute { position: absolute; }
      .top-0 { top: 0; }
      .left-0 { left: 0; }
      .right-0 { right: 0; }
      .z-50 { z-index: 50; }
      .z-10 { z-index: 10; }
      .bg-white { background-color: white; }
      .bg-gray-50 { background-color: #f9fafb; }
      .bg-gray-900 { background-color: #111827; }
      .text-white { color: white; }
      .text-gray-900 { color: #111827; }
      .text-gray-700 { color: #374151; }
      .text-gray-600 { color: #4b5563; }
      .text-center { text-align: center; }
      .flex { display: flex; }
      .grid { display: grid; }
      .hidden { display: none; }
      .min-h-screen { min-height: 100vh; }
      .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
      .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .mb-8 { margin-bottom: 2rem; }
      .mb-12 { margin-bottom: 3rem; }
      .mb-16 { margin-bottom: 4rem; }
      .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
      .text-5xl { font-size: 3rem; line-height: 1; }
      .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
      .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
      .font-bold { font-weight: 700; }
      .font-semibold { font-weight: 600; }
      .rounded-lg { border-radius: 0.5rem; }
      .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
      .transition-all { transition: all 0.3s; }
      .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
      .items-center { align-items: center; }
      .justify-center { justify-content: center; }
      .justify-between { justify-content: space-between; }
      .space-x-3 > * + * { margin-left: 0.75rem; }
      .space-x-8 > * + * { margin-left: 2rem; }
      .space-y-2 > * + * { margin-top: 0.5rem; }
      .max-w-4xl { max-width: 56rem; }
      .max-w-3xl { max-width: 48rem; }
      .max-w-2xl { max-width: 42rem; }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .leading-relaxed { line-height: 1.625; }
      @media (min-width: 768px) {
        .md\\:text-7xl { font-size: 4.5rem; line-height: 1; }
        .md\\:text-5xl { font-size: 3rem; line-height: 1; }
        .md\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .md\\:flex { display: flex; }
        .hidden.md\\:flex { display: flex; }
      }
      @media (min-width: 1024px) {
        .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      }
      .gap-8 { gap: 2rem; }
      .gap-12 { gap: 3rem; }
      .p-6 { padding: 1.5rem; }
      .pt-24 { padding-top: 6rem; }
      .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
      .from-cream { --tw-gradient-from: #EDE8DF; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(237, 232, 223, 0)); }
      .to-amber-50 { --tw-gradient-to: #fffbeb; }
      .bg-amber-600 { background-color: #d97706; }
      .hover\\:bg-amber-700:hover { background-color: #b45309; }
      .border-2 { border-width: 2px; }
      .border-amber-600 { border-color: #d97706; }
      .text-amber-600 { color: #d97706; }
      .hover\\:bg-amber-600:hover { background-color: #d97706; }
      .hover\\:text-white:hover { color: white; }
      .border-t { border-top-width: 1px; }
      .border-gray-700 { border-color: #374151; }
      .text-gray-300 { color: #d1d5db; }
      .text-gray-400 { color: #9ca3af; }
      .mt-8 { margin-top: 2rem; }
      .pt-8 { padding-top: 2rem; }
      .overflow-hidden { overflow: hidden; }
      .overflow-x-hidden { overflow-x: hidden; }
      .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
      .opacity-20 { opacity: 0.2; }
      .bg-cover { background-size: cover; }
      .bg-center { background-position: center; }
      .h-14 { height: 3.5rem; }
      .w-auto { width: auto; }
      .w-full { width: 100%; }
      .h-auto { height: auto; }
      .prose { color: #374151; max-width: 65ch; }
      .prose-lg { font-size: 1.125rem; line-height: 1.7777778; }
      .max-w-none { max-width: none; }
    </style>
  `;
  
  // Insert critical CSS into head
  document.head.insertAdjacentHTML('beforeend', criticalCSS);

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