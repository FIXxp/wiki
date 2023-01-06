import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarRu: SidebarConfig = [
  {
    text: "Основы",
    children: [
      "/guide/getting-started.md",
      "/guide/configuration.md",
      "/guide/directory-structure.md",
      "/guide/auth.md",
      "/guide/nginx.md",
      "/guide/clients.md",
      "/guide/servers.md",
      "/guide/commands.md",
    ],
  },
  {
    text: "Для продвинутых",
    children: [
      "/guide/sign.md",
      "/guide/runtime.md",
      "/guide/launchermodules.md"
    ],
  },
  {
    text: "Полезный материал",
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
];
