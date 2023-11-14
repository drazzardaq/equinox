import { defineConfig, splitVendorChunkPlugin } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://drazzardaq.com/equinox',
	resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [
		viteCompression(),
		splitVendorChunkPlugin(),
		vue(),
	],
})

