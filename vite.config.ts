import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root:"src",
  plugins: [react()],
  css: {
    modules: {
      // '[local]'은 원래 CSS에 작성한 클래스명을 의미합니다.
      generateScopedName: '[local]',
    }
  },
    build: {
        outDir: "../build",
    },    
})
