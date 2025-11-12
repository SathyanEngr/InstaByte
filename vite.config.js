import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: false, // 🚫 disable server-side rendering build
    outDir: 'dist', // default output
    target: 'esnext', // ensure it's browser friendly
  },
  base: '/InstaByte/',
  ssr: {
    noExternal: true, // ensures SSR build isn't attempted
  }
})
