import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000
  }
});
export default {
  build: {
    rollupOptions: {
      external: ['react/jsx-runtime']
    }
  }
};