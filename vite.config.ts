// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    // ...,
  ],
})