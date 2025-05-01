import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // ✅ Ensures relative paths in index.html
  plugins: [react()],
  server: {
    allowedHosts: true
  },
  build: {
    outDir: 'dist', // ✅ still good
  },
})
