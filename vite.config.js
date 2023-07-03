import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import eslintPlugin from "@nabla/vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      eslintOptions: {
        cache: false
      }
    })
  ],
  server: {
    open: true
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      }
    }
  }
})