import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // For GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})