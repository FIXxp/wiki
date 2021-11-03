module.exports = {
  title: "GravitLauncher",
  description: "Неплохой лаунчер майнкрафт для вашего проекта",
  bundler: '@vuepress/bundler-vite',
  base: "/wiki/",
  themeConfig: {
    contributors: false,
    logo: "/logo.png",
    navbar: [
      {
        text: "Discord",
        link: "https://discord.com/invite/b9QG4ygY75",
      },
      {
        text: "GitHub",
        link: "https://github.com/GravitLauncher/Launcher",
      }
    ],
    sidebar: [
      {
        text: 'Основы',
        children: [
          '/guide/getting-started.md',
          '/guide/configuration.md',
          '/guide/directory-structure.md',
          '/guide/auth.md',
          '/guide/runtime.md',
          '/guide/nginx.md',
          '/guide/clients.md',
          '/guide/servers.md',
          '/guide/commands.md',
          '/guide/launchermodules.md',
        ],
      },
      {
        text: 'Для продвинутых',
        children: [
          '/guide/sign.md'
        ],
      }
    ],
  },
  head: [
    ['link', { rel: 'icon', href: '/wiki/logo.png' }],
    ['link', { rel: 'manifest', href: '/wiki/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-2SBRZBC5WN',
      },
      'seo', { /* options */ },
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
  ],
};