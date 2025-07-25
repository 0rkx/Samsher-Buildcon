import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom']
            },
            // Optimize for static hosting and SEO
            assetFileNames: 'assets/[name]-[hash][extname]',
            chunkFileNames: 'assets/[name]-[hash].js',
            entryFileNames: 'assets/[name]-[hash].js'
          }
        },
        minify: 'terser',
        cssMinify: true,
        // Generate source maps for debugging (disabled for production)
        sourcemap: false,
        // Optimize chunk size for better loading performance
        chunkSizeWarningLimit: 1000,
        // Ensure assets are properly handled for SSG
        assetsDir: 'assets',
        // Enable CSS code splitting for better performance
        cssCodeSplit: true
      },
      server: {
        historyApiFallback: true
      },
      // Optimize for production
      esbuild: {
        drop: mode === 'production' ? ['console', 'debugger'] : []
      }
    };
});
