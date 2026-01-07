import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read version from package.json
const packageJson = JSON.parse(readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'replace-version',
      transformIndexHtml(html) {
        return html.replace(/__VERSION__/g, packageJson.version);
      },
    },
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './components'),
      utils: path.resolve(__dirname, './utils'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
});
