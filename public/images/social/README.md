# Social Share Images

This directory contains HTML templates for generating social share images.

## Converting to Images

To convert these HTML templates to actual images, you can use tools like:

1. **Puppeteer** (Node.js):
   ```bash
   npm install puppeteer
   ```

2. **Playwright** (Node.js):
   ```bash
   npm install playwright
   ```

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
