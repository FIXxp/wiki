import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarEn: SidebarConfig = [
  {
    text: "Guide",
    children: [
      "/en/guide/getting-started.md",
      "/en/guide/configuration.md",
      "/en/guide/directory-structure.md",
      "/en/guide/auth.md",
      "/en/guide/runtime.md",
      "/en/guide/nginx.md",
      "/en/guide/clients.md",
      "/en/guide/servers.md",
      "/en/guide/commands.md",
      "/en/guide/launchermodules.md",
    ],
  },
  {
    text: "Advanced",
    children: ["/en/guide/sign.md"],
  },
  {
    text: "Something useful",
    children: [
      "/en/guide/useful.md",
      {
        text: "Configuration generator",
        link: "https://config.gravit-launcher.ru/",
      },
      {
        text: "Changelog",
        link: "/en/guide/changelog.html",
      },
    ],
  },
];
