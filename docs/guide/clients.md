# Работа с игровым клиентом

## Поддерживаемые версии

На данный момент лаунчер может запускать все версии с 1.7.10 по актуальную версию Minecraft, кроме Forge +1.17.1

| Версия | Ванилла | Forge | Fabric |
|:------:|:-------:|:-----:|:------:|
| 1.7.10 | ✔️ | ✔️|➖|
| 1.8.9  | ✔️ | ✔️|➖|
| 1.10.2 | ✔️ | ✔️|➖|
| 1.11.2 | ✔️ | ✔️|➖|
| 1.12.2 | ✔️ | ✔️|➖|
| 1.13.2 | ✔️ | ✔️|➖|
| 1.14.4 | ✔️ | ✔️|✔️|
| 1.15.2 | ✔️ | ✔️|✔️|
| 1.16.5 | ✔️ | ✔️|✔️|
| 1.17.1 | ✔️ | ➖|✔️|

## Установка клиента

**Шаг 1**: Добавте наше [зеркало]('https://mirror.gravit-laucnher.ru') в конфиг лаунчсервера и перезапустите его

```json
"mirrors": [ 
  "https://mirror.gravit-launcher.ru/"
],
```

**Шаг 2**: Выполните следующую команду для скачивания клиента

```bash
downloadclient <version> <name>
```

`version` - это версия Minecraft.
В настоящее время мы разделяем версии на 3 типа:  

- `1.16.5` - Ванильный Minecraft  
- `1.16.5-forge` - Minecraft модифицированный Forge  
- `1.16.5-fabric` - Minecraft модифицированный Fabric

`name` - название клиента на ваш выбор

**Шаг 3**(Опционально): Выполните следующую команду для скачивание ассетов(тексутры, звуки и т.п) клиента

```bash
downloadclient <version> asset<version>
```

::: tip
В случае скачивания ассетов версию нужно вводить без преписок forge и fabric
:::

После данных действий клиент скачается в папку `updates` и будет создан профиль в папке `profiles`  

## Настройка профиля клиента

Пример конфига профиля

```json
{
  "title": "Vanilla1.17",
  "uuid": "fa9c1a52-6fa9-4da6-a488-9fc80250095c",
  "version": "1.17",
  "info": "Информация о сервере",
  "dir": "Vanilla1.17",
  "sortIndex": 0,
  "assetIndex": "1.17", 
  "assetDir": "asset1.17",
  "update": [
    "servers.dat"
  ],
  "updateExclusions": [],
  "updateVerify": [
    "libraries",
    "natives",
    "minecraft.jar",
    "forge.jar",
    "liteloader.jar",
    "mods"
  ],
  "updateOptional": [],
  "jvmArgs": [
    "-XX:+DisableAttachMechanism",
    "-XX:+UseG1GC",
    "-XX:+UnlockExperimentalVMOptions",
    "-XX:G1NewSizePercent\u003d20",
    "-XX:MaxGCPauseMillis\u003d50",
    "-XX:G1HeapRegionSize\u003d32M",
    "-Djava.library.path\u003dnatives",
    "-Dfml.ignorePatchDiscrepancies\u003dtrue",
    "-Dfml.ignoreInvalidMinecraftCertificates\u003dtrue"
  ],
  "classPath": [
    "libraries",
    "minecraft.jar",
    "forge.jar",
    "liteloader.jar"
  ],
  "altClassPath": [],
  "clientArgs": [],
  "compatClasses": [],
  "properties": {},
  "servers": [
    {
      "name": "Vanilla1.17",
      "serverAddress": "localhost", 
      "serverPort": 25535,
      "isDefault": true,
      "socketPing": true
    }
  ],
  "classLoaderConfig": "LAUNCHER",
  "runtimeInClientConfig": "NONE",
  "recommendJavaVersion": 16,
  "minJavaVersion": 16,
  "maxJavaVersion": 17,
  "warnMissJavaVersion": true,
  "settings": {
    "ram": 0,
    "autoEnter": false,
    "fullScreen": false
  },
  "updateFastCheck": true,
  "limited": false,
  "mainClass": "net.minecraft.client.main.Main"
}
```

#### Описание настроек профиля

`title` - заголовок профиля  
`uuid` - UUID профиля  
`version` - версия майнкрафта  
`info` - информация о сервере в окне выбора серверов  
`dir` - папка клиента в updates  
`sortIndex` - порядковый номер в окне выбора серверов  
`assetIndex` - название используемого индекса в ассетах  
`assetDir` - папка с ассетами  
`update` - список файлов и папок, которые будут перекачиваться при старте клиента  
`updateExclusions` - список файлов и папок, которые не надо проверять  
`updateVerify` - список файлов и папок, которые будут перекачиваться при старте клиента и  во время работы  
`updateOptional` - список опциональных модов и дополнительных аргументов более подробнее смотрите в [Опциональные моды](/guide/clients.md#настроика-опциональных-модов)  
`jvmArgs` - аргументы JVM  
`classPath` - список файлов и библиотек, загружаемых при запуске выбранным загрузчиком классов  
`altClassPath` - список файлов и библиотек, загружаемых при запуске системным загрузчиком классов  
`clientArgs` - дополнительные аргументы клиента  
`compatClasses` - список дополнительных MainClass, которые будут запущены перед основным  
`properties` - кастомная информация о профиле  
`servers` - список серверов  

- `name` - название сервера
- `serverAddress` - адрес сервера  
- `serverPort` - порт сервера  
- `isDefault` - по умолчанию  
- `socketPing` - Прямой пинг для получения онлайна  
  
`classLoaderConfig` - тип загрузчика классов (LAUNCHER, AGENT, SYSTEM_ARGS)  
`runtimeInClientConfig` - запуск GUI рантайма при старте клиента (NONE, BASIC, FULL)  
`recommendJavaVersion` - рекомендуемая версия Java  
`minJavaVersion` - минимальная версия Java  
`maxJavaVersion` - максимальная версия Java  
`warnMissJavaVersion` - предупреждение о несоответствии Java требованиям для запуска  
`settings` - настройки по умолчанию  

- `ram` - количество ОЗУ (в мегабайтах), 0 - автоматически
- `autoEnter` - авто—вход, может крашиться
- `fullScreen` - полноэкранный режим

`updateFastCheck` - быстрая проверка файлов  
`limited` - ограничен permissions  
`mainClass` - главный класс клиента  

## Настройка опциональных модов
