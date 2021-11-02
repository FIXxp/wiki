module.exports = {
  title: "GravitLauncher",
  description: "Хороший лаунчер майнкрафт для вашего проекта",
  bundler: '@vuepress/bundler-vite',
  themeConfig: {
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
    sidebar: {
      '/guide/': [
        {
          text: 'Основы',
          children: [
            '/guide/getting-started.md',
            '/guide/configuration.md',
            '/guide/auth.md',
            '/guide/clients.md',
            '/guide/servers.md',
            '/guide/commands.md',
            '/guide/directory-structure.md',
            '/guide/sign.md',
            '/guide/nginx.md',
            '/guide/protecthandler.md',
          ],
        },
      ]
    },
  },
};