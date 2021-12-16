module.exports = {
  title: "GravitLauncher Wiki",
  description: "Неплохой лаунчер майнкрафт для вашего проекта",
  bundler: '@vuepress/bundler-vite',
  lang: 'ru-RU',
  themeConfig: {
    lastUpdated: false,
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
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['script', { type: 'text/javascript', async: '' }, '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(86283189, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});',],
    ['script', { type: 'text/javascript', async: '', src:'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4970334321972173',crossorigin:'anonymous',}]

  ],
  plugins: [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-2SBRZBC5WN',
      },
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Поиск',
          }
        },
      },
  ],
};
