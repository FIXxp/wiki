# Работа с игровым сервером

## Привязка игрового сервера

Чтобы обеспечинить полноценную работу лаунчсервера и Вашего игрового сервера - нужно установить ServerWrapper.

**Шаг 1**: Выберите и скачайте нужное вам ядро сервера на нашем [зеркале]('https://mirror.gravit-laucnher.ru')

**Шаг 2**: Поместите ServerWrapper(он находится в директории лаунчсервера) в директорию вашего игрового сервера  
**Шаг 3**: Откройте лаунчсервер и выполните следующую команду, скопируйте получившийся уникальный индификатора сервера

```bash
token server <server-name>
```

**Шаг 4**: Перейдите в директорию Вашего игрового сервера и выполните команду

 ```bash
java -jar ServerWrapper.jar setup
```

**Шаг 5**: Укажите название jar файла вашего серверного ядра, название сервера, адрес лаунчсервера и уникальный индификатора сервера, полученного на **Шаге 2**

## Конфигурация ServerWrapper

```json
{
  "projectname": "MineCraft",
  "address": "ws://localhost/api",
  "serverName": "Vanilla1.17.1",
  "autoloadLibraries": false,
  "classpath": [],
  "mainclass": "io.papermc.paperclip.Paperclip",
  "args": ["nogui"],
  "oauthExpireTime": 0,
  "extendedTokens": {
    "checkServer": "sa9c1a52-ufa9-kda6-a488-gfr802av905c"
  },
  "env": "STD"
}
```

#### Описание настроек ServerWrapper

`projectname` - Название проекта  
`address` - Адрес лаунчсервера  
`serverName` - Название сервера в профиле  
`autoloadLibraries` - Автозагрузка библиотек из папки libraries  
`classpath` - Дополнительный classpath  
`mainclass` - Main-Class вашего ядра сервера  
`args` - Аргументы запуска  
`extendedTokens` - уникальный индификатора сервера  
`env` - режим работы ServerWrapper  
