import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue2 from '@vitejs/plugin-vue2';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      $fonts: resolve('./public/fonts')
    }
  },
  server: {
    https: false,
    host: true,
    strictPort: true,
    port: 5173,
    hmr: {
      host: 'localhost',
    },
    cors: {
      origin: ['https://utolegal.ch.test'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true
    },
  },
  plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            refresh: true,
        }),
        // vue2(),
    ],
});
