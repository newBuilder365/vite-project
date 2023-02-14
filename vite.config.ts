import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

export default defineConfig({
  plugins: [vue(), Components({
    dts: true,
    resolvers: [ElementPlusResolver()]
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
