import fs from 'fs';
import path from 'path';
import { seoConfig } from '../seo-config.js';

const baseUrl = seoConfig.baseUrl;

// Generate routes from SEO config with enhanced metadata
const routes = Object.keys(seoConfig.pages).map(path => {
  const pageConfig = seoConfig.pages[path];
  return {
    path,
    priority: path === '/' ? '1.0' : '0.8',
    changefreq: path === '/' ? 'weekly' : path === '/hse-policy' ? 'yearly' : 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  };
});

const generateSitemap = () => {
  console.log(`🗺️  Generating sitemap for ${routes.length} routes...`);
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${routes.map(route => {
  let urlEntry = `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>`;
    
  // Add image sitemap data for pages with images
  if (route.path === '/') {
    urlEntry += `
    <image:image>
      <image:loc>${baseUrl}/buildcon%20header.svg</image:loc>
      <image:title>Samsher Buildcon Logo</image:title>
      <image:caption>Samsher Buildcon - Premier Construction Services</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/images/samsher-buildcon-og.jpg</image:loc>
      <image:title>Samsher Buildcon Social Share Image</image:title>
      <image:caption>Leading construction company providing quality building services</image:caption>
    </image:image>`;
  }
  
  if (route.path === '/hse-policy') {
    urlEntry += `
    <image:image>
      <image:loc>${baseUrl}/images/glenov-brankovic-DWp5nUqTn6E-unsplash-scaled.jpg</image:loc>
      <image:title>Construction Safety Worker</image:title>
      <image:caption>Worker ensuring safety protocols in construction</image:caption>
    </image:image>`;
  }
  
  urlEntry += `
  </url>`;
  return urlEntry;
}).join('\n')}
</urlset>`;

  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }

  fs.writeFileSync('dist/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated: dist/sitemap.xml');
  
  // Also generate a robots.txt in dist if it doesn't exist
  const robotsTxtPath = 'dist/robots.txt';
  if (!fs.existsSync(robotsTxtPath)) {
    const robotsTxt = `# Robots.txt for Samsher Buildcon
# Generated automatically - do not edit manually

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/

# Allow important crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (in seconds)
Crawl-delay: 1

# Host directive (preferred domain)
Host: ${baseUrl}`;
    
    fs.writeFileSync(robotsTxtPath, robotsTxt);
    console.log('✅ Robots.txt generated: dist/robots.txt');
  }
};

generateSitemap();