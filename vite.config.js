import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Get the current file path
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});