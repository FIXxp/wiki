import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarRu: SidebarConfig = [
  {
        text: 'Руководство',
        children: [
            '/install/README.md',
            '/auth/README.md',
            '/clientbuild/README.md',
            '/servers/README.md',
            '/other/README.md',
        ],
  },
  {
    text: "Для продвинутых",
    children: [
      '/dev/README.md',
      '/runtime/README.md',
      '/modules/README.md',
    ],
  },
  {
    text: "Полезный материал",
    children: [
      "/guide/useful.md",
      {
        text: "Список изменений",
        link: "/guide/changelog.html",
      },
    ],
  },
];
