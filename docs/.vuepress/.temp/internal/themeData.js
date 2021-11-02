export const themeData = {
  "logo": "/logo.png",
  "navbar": [
    {
      "text": "Discord",
      "link": "https://discord.com/invite/b9QG4ygY75"
    },
    {
      "text": "GitHub",
      "link": "https://github.com/GravitLauncher/Launcher"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "Основы",
        "children": [
          "/guide/getting-started.md",
          "/guide/configuration.md",
          "/guide/auth.md",
          "/guide/clients.md",
          "/guide/servers.md",
          "/guide/commands.md",
          "/guide/directory-structure.md",
          "/guide/sign.md",
          "/guide/nginx.md",
          "/guide/protecthandler.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
