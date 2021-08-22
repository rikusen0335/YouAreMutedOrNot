import { defineConfig } from 'vite'
import { resolve } from 'path'
import preactRefresh from '@prefresh/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  plugins: [preactRefresh()],
  esbuild: {
    jsxFactory: 'h'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
