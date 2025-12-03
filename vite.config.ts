import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: isLib
      ? {
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Richtor',
            formats: ['es', 'umd'],
            fileName: (format) => `editor.${format}.js`,
          },
          rollupOptions: {
            external: [
              'react', 
              'react-dom', 
              'react/jsx-runtime',
            ],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'jsxRuntime',
              },
              // Inline CSS into JS for automatic loading
              assetFileNames: (assetInfo) => {
                if (assetInfo.name === 'style.css') return 'richtor.css';
                return assetInfo.name || 'assets/[name][extname]';
              },
              // Enable tree-shaking
              manualChunks: undefined,
            },
            treeshake: {
              moduleSideEffects: false,
              propertyReadSideEffects: false,
            },
          },
          minify: 'esbuild',
          cssCodeSplit: false,
          sourcemap: false,
        }
      : {},
  }
})
