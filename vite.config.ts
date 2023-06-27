// @ts-ignore
import { URL, fileURLToPath } from 'node:url'
import path from 'path'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const configFile = path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src/scss/settings.scss')

  return {
    css: {
      preprocessorOptions: {
        scss: {
          // implementation: sass,
          additionalData: '@import "@/scss/variables.scss";',
        },
      },
    },
    plugins: [
      vue(),
      vueRouter({
        routesFolder: 'src/views',
        extensions: ['.vue'],
        exclude: [],
        dts: './src/typed-router.d.ts',
      }),
      autoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          'pinia',
          {
            '@/utils/image-viewer': ['viewImage'],
          },
        ],
        dts: 'src/auto-imports.d.ts',
      }),
      components({
        dts: 'src/components.d.ts',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
