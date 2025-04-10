import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173, // or 5174 if you prefer
  },
  resolve: {
    alias: {
      '@': '/src', // Add any aliases you want here
    },
  },
});
