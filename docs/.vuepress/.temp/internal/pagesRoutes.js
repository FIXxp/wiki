import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Главная",["/index.html","/README.md"]],
  ["v-09e68676","/guide/auth.html","Настройка авторизации",["/guide/auth","/guide/auth.md"]],
  ["v-16df1286","/guide/clients.html","Работа с игровым клиентом",["/guide/clients","/guide/clients.md"]],
  ["v-0cbb31e5","/guide/commands.html","Команды",["/guide/commands","/guide/commands.md"]],
  ["v-4f4ccb8f","/guide/configuration.html","Конфигурация",["/guide/configuration","/guide/configuration.md"]],
  ["v-040800dc","/guide/directory-structure.html","Структура каталогов",["/guide/directory-structure","/guide/directory-structure.md"]],
  ["v-fb0f0066","/guide/getting-started.html","Начало работы",["/guide/getting-started","/guide/getting-started.md"]],
  ["v-1760212a","/guide/nginx.html","Настройка nginx",["/guide/nginx","/guide/nginx.md"]],
  ["v-d805309c","/guide/protecthandler.html","ProtectHandler",["/guide/protecthandler","/guide/protecthandler.md"]],
  ["v-88598f96","/guide/servers.html","Работа с игровым сервером",["/guide/servers","/guide/servers.md"]],
  ["v-384afc60","/guide/sign.html","Подпись лаунчера",["/guide/sign","/guide/sign.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
