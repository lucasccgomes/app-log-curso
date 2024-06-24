import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
        'src/assets/icon/android-launchericon-48-48.png',
        'src/assets/icon/android-launchericon-72-72.png',
        'src/assets/icon/android-launchericon-96-96.png',
        'src/assets/icon/android-launchericon-144-144.png',
        'src/assets/icon/android-launchericon-192-192.png',
        'src/assets/icon/android-launchericon-512-512.png'
      ],
      manifest: {
        name: 'My Awesome App',
        short_name: 'AwesomeApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/icon/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'src/assets/icon/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'src/assets/icon/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'src/assets/icon/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'src/assets/icon/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/icon/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
