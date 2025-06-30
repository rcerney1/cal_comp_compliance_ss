import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', 
  plugins: [react()],
  server: {
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
})
