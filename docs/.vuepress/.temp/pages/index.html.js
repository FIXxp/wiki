export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Главная",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Главная",
    "heroImage": "/logo.png",
    "actions": [
      {
        "text": "Начало работы",
        "link": "/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "Ознакомиться",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "footer": "Copyright © 2021"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1635811362000,
    "contributors": [
      {
        "name": "FIXxp",
        "email": "41650742+FIXxp@users.noreply.github.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
