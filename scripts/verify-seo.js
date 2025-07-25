import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { seoConfig } from '../seo-config.js';

const verifySSG = () => {
  console.log('🔍 Verifying SSG and SEO optimization...\n');
  
  const distPath = join(process.cwd(), 'dist');
  let allPassed = true;
  
  // Check if dist directory exists
  if (!existsSync(distPath)) {
    console.error('❌ dist directory not found. Run npm run build first.');
    return false;
  }
  
  // Verify each route has been generated
  const routes = Object.keys(seoConfig.pages);
  
  routes.forEach(route => {
    const filePath = route === '/' 
      ? join(distPath, 'index.html')
      : join(distPath, route.slice(1), 'index.html');
    
    if (existsSync(filePath)) {
      console.log(`✅ ${route} -> ${filePath.replace(process.cwd(), '.')}`);
      
      // Verify SEO content
      const content = readFileSync(filePath, 'utf-8');
      const pageConfig = seoConfig.pages[route];
      
      // Check title
      if (content.includes(pageConfig.title)) {
        console.log(`   ✅ Title: "${pageConfig.title}"`);
      } else {
        console.log(`   ❌ Title missing or incorrect`);
        allPassed = false;
      }
      
      // Check meta description
      if (content.includes(pageConfig.description)) {
        console.log(`   ✅ Description: "${pageConfig.description.substring(0, 50)}..."`);
      } else {
        console.log(`   ❌ Description missing or incorrect`);
        allPassed = false;
      }
      
      // Check structured data
      if (pageConfig.structuredData && content.includes('application/ld+json')) {
        console.log(`   ✅ Structured data present`);
      } else {
        console.log(`   ❌ Structured data missing`);
        allPassed = false;
      }
      
    } else {
      console.log(`❌ ${route} -> File not found: ${filePath}`);
      allPassed = false;
    }
    console.log('');
  });
  
  // Check sitemap
  const sitemapPath = join(distPath, 'sitemap.xml');
  if (existsSync(sitemapPath)) {
    console.log('✅ Sitemap generated: dist/sitemap.xml');
  } else {
    console.log('❌ Sitemap missing');
    allPassed = false;
  }
  
  // Check robots.txt
  const robotsPath = join(distPath, 'robots.txt');
  if (existsSync(robotsPath)) {
    console.log('✅ Robots.txt present: dist/robots.txt');
  } else {
    console.log('❌ Robots.txt missing');
    allPassed = false;
  }
  
  console.log('\n' + '='.repeat(50));
  if (allPassed) {
    console.log('🎉 All SEO checks passed! Your site is optimized for search engines.');
  } else {
    console.log('⚠️  Some SEO checks failed. Please review the issues above.');
  }
  console.log('='.repeat(50));
  
  return allPassed;
};

verifySSG();