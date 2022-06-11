const { viteBundler } = require("vuepress");
const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");
const { searchPlugin } = require("@vuepress/plugin-search");
const { defaultTheme } = require("vuepress");
module.exports = {
  title: "GravitLauncher Wiki",
  description: "Неплохой лаунчер майнкрафт для вашего проекта",
  bundler: viteBundler({}),
  lang: "ru-RU",
  theme: defaultTheme({
    // lastUpdated: false,
    lastUpdatedText: "Последнее обновление",
    contributors: true,
    logo: "/logo.avif",
    navbar: [
      {
        text: "Discord",
        link: "https://discord.com/invite/b9QG4ygY75",
      },
      {
        text: "GitHub",
        link: "https://github.com/GravitLauncher/Launcher",
      },
      {
        text: `v5.2.12`,
        children: [
          {
            text: "Changelog",
            link: "https://github.com/GravitLauncher/Launcher/releases/tag/v5.2.12",
          },
          {
            text: "v6.x",
            link: "https://c.tenor.com/GryShD35-psAAAAC/troll-face-creepy-smile.gif",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "Основы",
        children: [
          "/guide/getting-started.md",
          "/guide/configuration.md",
          "/guide/directory-structure.md",
          "/guide/auth.md",
          "/guide/runtime.md",
          "/guide/nginx.md",
          "/guide/clients.md",
          "/guide/servers.md",
          "/guide/commands.md",
          "/guide/launchermodules.md",
        ],
      },
      {
        text: "Для продвинутых",
        children: ["/guide/sign.md"],
      },
      {
        text: "Что-то полезное",
        children: [
          "/guide/useful.md",
          {
            text: "Генератор конфигурации",
            link: "https://config.gravit-launcher.ru/",
          },
          {
            text: "Список изменений",
            link: "/guide/changelog.html",
          },
        ],
      },
    ],
  }),
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#6b72f2" }],
    ["meta", { name: "msapplication-TileColor", content: "#6b72f2" }],
    [
      "script",
      { type: "text/javascript", async: "" },
      '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(86283189, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});',
    ],
  ],
  markdown: {
    links: { externalAttrs: { target: "_blank", rel: "" } },
  },
  plugins: [
    googleAnalyticsPlugin({
      id: "G-2SBRZBC5WN",
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Поиск",
        },
      },
    }),
  ],
};
