import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/madhavsingh2025/",
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: "esbuild",
    copyPublicDir: false,
    chunkSizeWarningLimit: 1600,
  },
});