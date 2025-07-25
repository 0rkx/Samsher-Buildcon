import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { seoConfig } from '../seo-config.js';

// This script generates optimized social share images
// For now, it creates HTML templates that can be converted to images

const generateSocialImageHTML = (title, description, imagePath = null) => {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            width: 1200px;
            height: 630px;
            background: linear-gradient(135deg, #EDE8DF 0%, #F5F1E8 100%);
            font-family: 'Poppins', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .background-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.05;
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="%23000"><circle cx="30" cy="30" r="2"/></g></svg>');
        }
        
        .logo {
            position: absolute;
            top: 40px;
            left: 60px;
            height: 60px;
            width: auto;
        }
        
        .content {
            text-align: center;
            max-width: 900px;
            padding: 0 60px;
            z-index: 2;
        }
        
        .title {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            font-weight: 700;
            color: #1F2937;
            margin: 0 0 20px 0;
            line-height: 1.2;
        }
        
        .description {
            font-size: 24px;
            color: #4B5563;
            margin: 0;
            line-height: 1.4;
            font-weight: 400;
        }
        
        .brand {
            position: absolute;
            bottom: 40px;
            right: 60px;
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            color: #6B7280;
            font-weight: 700;
        }
        
        .accent {
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg, #F59E0B, #EAB308);
            border-radius: 50%;
            transform: translate(100px, -100px);
            opacity: 0.1;
        }
    </style>
</head>
<body>
    <div class="background-pattern"></div>
    <div class="accent"></div>
    
    <div class="content">
        <h1 class="title">${title}</h1>
        <p class="description">${description}</p>
    </div>
    
    <div class="brand">SAMSHER BUILDCON</div>
</body>
</html>`;
};

const generateSocialImages = () => {
  console.log('🎨 Generating social share image templates...');
  
  const outputDir = join(process.cwd(), 'public', 'images', 'social');
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  
  // Generate for each page
  Object.entries(seoConfig.pages).forEach(([path, config]) => {
    const filename = path === '/' ? 'home' : path.slice(1).replace('/', '-');
    const htmlContent = generateSocialImageHTML(config.title, config.description);
    
    writeFileSync(join(outputDir, `${filename}-og.html`), htmlContent);
    console.log(`✓ Generated social image template: ${filename}-og.html`);
  });
  
  // Generate a README with instructions
  const readmeContent = `# Social Share Images

This directory contains HTML templates for generating social share images.

## Converting to Images

To convert these HTML templates to actual images, you can use tools like:

1. **Puppeteer** (Node.js):
   \`\`\`bash
   npm install puppeteer
   \`\`\`

2. **Playwright** (Node.js):
   \`\`\`bash
   npm install playwright
   \`\`\`

3. **Online tools**:
   - htmlcsstoimage.com
   - bannerbear.com
   - placid.app

## Recommended Image Specifications

- **Open Graph**: 1200x630px
- **Twitter Card**: 1200x600px
- **LinkedIn**: 1200x627px
- **Facebook**: 1200x630px

## Usage

1. Open the HTML file in a browser
2. Set viewport to 1200x630
3. Take screenshot or use automation tools
4. Save as JPG/PNG with high quality
5. Optimize file size (aim for <300KB)

## File Naming Convention

- home-og.html → samsher-buildcon-og.jpg
- hse-policy-og.html → hse-policy-og.jpg
`;

  writeFileSync(join(outputDir, 'README.md'), readmeContent);
  console.log('✓ Generated README with instructions');
  
  console.log('\n📝 Next steps:');
  console.log('1. Convert HTML templates to images using Puppeteer or online tools');
  console.log('2. Save images as JPG/PNG in public/images/ directory');
  console.log('3. Update seo-config.js with actual image paths');
  console.log('4. Test social sharing on Facebook, Twitter, LinkedIn');
};

generateSocialImages();