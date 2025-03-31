import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import license from 'rollup-plugin-license'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig( ( { mode } ) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: '/yahoong/',
    esbuild: {
      banner: '/*! licenses: /assets/vendor.licenses.txt */',
      legalComments: 'external',
      pure: mode === 'production' ? ['console.log'] : [],
    },
    build: {
      rollupOptions: {
        plugins: [
          license({
            sourcemap: true,
            thirdParty: {
              includePrivate: true,
              multipleVersions: true,
              output: {
                file: path.resolve(__dirname, 'dist', 'assets', 'vendor.LICENSE.txt'),
                encoding: 'utf-8'
              }
            }
          })
        ]
      }
    }
  }
})
