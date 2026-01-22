import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Use esbuild for minification (faster and built-in)
    minify: 'esbuild',
    cssMinify: true,
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
        }
      }
    },
    // Target modern browsers for smaller bundle
    target: 'esnext',
    // Enable source maps for debugging in production
    sourcemap: false,
  }
})
