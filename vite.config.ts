import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/blended-TS-React/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})