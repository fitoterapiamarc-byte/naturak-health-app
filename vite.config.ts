import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages needs the repository prefix; Android embeds files locally.
const isAndroidBuild = process.env.ANDROID_BUILD === '1'

export default defineConfig({
  plugins: [react()],
  base: isAndroidBuild ? './' : '/naturak-health-app/',
})
