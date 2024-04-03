import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: [
      { find: '@apis', replacement: resolve(__dirname, 'src/apis') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@context', replacement: resolve(__dirname, 'src/context') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@layouts', replacement: resolve(__dirname, 'src/layouts') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '@shared', replacement: resolve(__dirname, 'src/shared') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@typings', replacement: resolve(__dirname, 'src/typings') },
    ],
  },
});
