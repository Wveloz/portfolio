import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import fs from 'fs'
import path from 'path'

const relative = (p) => path.resolve(fs.realpathSync('.'), p)

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [{ find: '@pt', replacement: relative('./src') }],
    },
  },
})
