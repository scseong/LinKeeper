import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@apis', replacement: './apis' },
      { find: '@assets', replacement: './assets' },
      { find: '@components', replacement: './components' },
      { find: '@hooks', replacement: './hooks' },
      { find: '@layouts', replacement: './layouts' },
      { find: '@pages', replacement: './pages' },
      { find: '@shared', replacement: './shared' },
      { find: '@styles', replacement: './styles' },
      { find: '@types', replacement: './types' },
    ],
  },
});
