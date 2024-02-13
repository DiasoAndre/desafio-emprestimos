import { defineConfig } from 'vite';
import { ViteTestPlugin } from '@vitejs/plugin-test';

export default defineConfig({
  plugins: [
    ViteTestPlugin(),
  ],
});
