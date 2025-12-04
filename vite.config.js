import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/qr-generator/',
  server: {
    port: 9090,
    open: true
  }
})
