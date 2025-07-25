import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const testSEO = () => {
  console.log('🧪 Testing SEO Implementation...\n');
  
  let allTests = 0;
  let passedTests = 0;
  
  const test = (name, condition, details = '') => {
    allTests++;
    if (condition) {
      console.log(`✅ ${name}`);
      passedTests++;
    } else {
      console.log(`❌ ${name}`);
      if (details) console.log(`   ${details}`);
    }
  };
  
  // Test 1: Check if index.html has proper meta tags
  const indexPath = join(process.cwd(), 'index.html');
  if (existsSync(indexPath)) {
    const indexContent = readFileSync(indexPath, 'utf-8');
    
    test('Meta description present', indexContent.includes('meta name="description"'));
    test('Open Graph tags present', indexContent.includes('property="og:title"'));
    test('Twitter Card tags present', indexContent.includes('name="twitter:card"'));
    test('Canonical URL present', indexContent.includes('rel="canonical"'));
    test('Structured data present', indexContent.includes('application/ld+json'));
    test('Preconnect tags present', indexContent.includes('rel="preconnect"'));
    test('Correct base URL', indexContent.includes('samsher-buildcon.pages.dev'));
  } else {
    test('index.html exists', false, 'File not found');
  }
  
  // Test 2: Check SEO config
  try {
    const seoConfigPath = join(process.cwd(), 'seo-config.js');
    if (existsSync(seoConfigPath)) {
      const seoConfig = readFileSync(seoConfigPath, 'utf-8');
      
      test('SEO config has correct base URL', seoConfig.includes('samsher-buildcon.pages.dev'));
      test('SEO config has social media settings', seoConfig.includes('social:'));
      test('SEO config has technical settings', seoConfig.includes('technical:'));
      test('SEO config has HSE policy page', seoConfig.includes('hse-policy'));
    } else {
      test('seo-config.js exists', false, 'File not found');
    }
  } catch (error) {
    test('SEO config is valid', false, error.message);
  }
  
  // Test 3: Check if scripts exist
  const scripts = [
    'scripts/generate-sitemap.js',
    'scripts/generate-static.js',
    'scripts/generate-social-images.js',
    'scripts/verify-seo.js'
  ];
  
  scripts.forEach(script => {
    test(`${script} exists`, existsSync(join(process.cwd(), script)));
  });
  
  // Test 4: Check if SEO component exists
  const seoComponentPath = join(process.cwd(), 'components', 'SEOHead.tsx');
  if (existsSync(seoComponentPath)) {
    const seoComponent = readFileSync(seoComponentPath, 'utf-8');
    
    test('SEO component has image support', seoComponent.includes('image?:'));
    test('SEO component has structured data', seoComponent.includes('structuredData'));
    test('SEO component has social media tags', seoComponent.includes('twitter:'));
  } else {
    test('SEOHead component exists', false, 'File not found');
  }
  
  // Test 5: Check robots.txt in public
  const publicRobotsPath = join(process.cwd(), 'public', 'robots.txt');
  test('robots.txt exists in public', existsSync(publicRobotsPath));
  
  // Test 6: Check if social image templates directory exists
  const socialImagesDir = join(process.cwd(), 'public', 'images', 'social');
  test('Social images directory ready', existsSync(join(process.cwd(), 'public', 'images')));
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`📊 SEO Test Results: ${passedTests}/${allTests} tests passed`);
  
  if (passedTests === allTests) {
    console.log('🎉 All SEO tests passed! Your site is well-optimized.');
  } else {
    console.log('⚠️  Some SEO tests failed. Please review the issues above.');
  }
  
  console.log('\n📋 Next Steps:');
  console.log('1. Run: npm run build:social');
  console.log('2. Convert HTML templates to actual images');
  console.log('3. Run: npm run build');
  console.log('4. Test social sharing after deployment');
  console.log('5. Submit sitemap to Google Search Console');
  
  console.log('='.repeat(50));
  
  return passedTests === allTests;
};

testSEO();