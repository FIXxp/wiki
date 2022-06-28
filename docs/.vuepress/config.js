const { viteBundler } = require("vuepress");
const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");
const { searchPlugin } = require("@vuepress/plugin-search");
const { defaultTheme } = require("vuepress");
const { sidebarRu, sidebarEn } = require("./configs/sidebar");
module.exports = {
  bundler: viteBundler({}),
  lang: "ru-RU",
  locales: {
    "/": {
      lang: "ru-RU",
      title: "GravitLauncher Wiki",
      description: "Неплохой лаунчер майнкрафт для вашего проекта",
      head: [["link", { rel: "manifest", href: "/manifest.webmanifest" }]],
    },
    "/en/": {
      lang: "en-US",
      title: "GravitLauncher Wiki",
      description: "A good minecraft launcher for your project",
      head: [["link", { rel: "manifest", href: "/manifest_en.webmanifest" }]],
    },
  },
  theme: defaultTheme({
    // lastUpdated: false,
    locales: {
      "/": {
        sidebar: sidebarRu,
        selectLanguageName: "Русский",
        lastUpdatedText: "Последнее обновление",
      },
      "/en/": {
        sidebar: sidebarEn,
        selectLanguageName: "English",
      },
    },
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
  }),
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
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
        "/en/": {
          placeholder: "Search",
        },
      },
    }),
  ],
};
