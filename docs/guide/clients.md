---
description: Клиенты, ресурсы и другие файлы для загрузки лаунчером хранятся в виде субдиректорий в директории updates, а профили, в которых указываются имя директорий, адрес сервера для автозахода, исключения при обновлении и другие сведения, необходимые для запуска клиента хранятся в директории profiles
---
# Работа с игровым клиентом

Клиенты, ресурсы и другие файлы для загрузки лаунчером хранятся в виде субдиректорий в директории updates, а профили, в которых указываются имя директорий, адрес сервера для автозахода, исключения при обновлении и другие сведения, необходимые для запуска клиента хранятся в директории profiles
## Уязвимость в Minecraft

::: danger ВНИМАНИЕ
На днях была обнаружена критическая уязвимость в библиотеке apache log4j2, которую Minecraft использует для логгирования.
С помощью найденного эксплоита можно не только убивать сервера, но и ВЫПОЛНЯТЬ ПРОИЗВОЛЬНЫЙ КОД (!!!) как на клиенте, так и на сервере.

[Читать подробнее...](https://forum.mcmodding.ru/threads/kriticheskaja-ujazvimost-v-apache-log4j2-zatragivajuschaja-mnogie-versii-minecraft.30543/)
:::

::: tip Не всё потеряно
Не беспокойтесь всегда рабочие клиенты с фиксом данной уязвимости вы можете скачать на нашем [зеркале](https://mirror.gravit-launcher.ru)
:::
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
| 1.17.1 | ✔️ | ✔️|✔️|
| 1.18.2 | ✔️ | ✔️|✔️|

## Установка клиента

**Шаг 1**: Добавте наше [зеркало](https://mirror.gravit-launcher.ru) в конфиг лаунчсервера и перезапустите его

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

После данных действий клиент скачается в папку `updates` и будет создан профиль в папке `profiles`  

## Настройка профиля клиента

### Пример готовой конфигурации

После скачивания клиента лаунчсервер автоматически создаст профиль и заполнит его базовыми данными.
Ниже приведён пример готовой конфигурации для Minecraft 1.17.1

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

### Описание настроек профиля

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
`updateOptional` - список опциональных модов и дополнительных аргументов более подробнее смотрите в [Опциональные моды](/guide/clients.md#опциональных-моды)  
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

### Опциональные моды

```json
"updateOptional": [
    {
       "actions": [ //Список действий опционального мода
        { //Первое действие
          "files": {
            "mods/1.7.10/NotEnoughItems-1.7.10-1.0.5.118-universal.jar": "", //Простое добавление файла без переименований
            "mods/SuperStrangeMod0.jar": "mods/SuperStrangeMod.jar", //Добавление файла с перемещением. на стороне лаунчсервера файл находится по пути "mods/SuperStrangeMod0.jar", а в клиент он попадет сюда "mods/SuperStrangeMod.jar"
            "mods2/LowStrangeMod.jar": "mods/LowStrangeMod.jar", //Между папками перемещение тоже работает
            "config2/ic2": "config/ic2" //Перемещение папок тоже работает
          },
          "type": "file" //Тип действия - обработка файлов
        }
      ],
       "info": "Мод, показывающий рецепты", //Описание
       "visible": true, //Видимость
       "mark": true, //Включен по умолчанию
       "limited": false, //Ограничен permissions
       "permissions": 0, //Маска привилегий. 0 - мод для всех, 1 - только для админов.
       "name": "NotEnoughItems" //Имя
    },
    {
       "actions": [
        {
          "files": {
            "mods/Waila_1.5.10_1.7.10.jar": ""
          },
          "type": "file"
        }
      ],
       "info": "Мод, показывающий дополнительную информацию при наведении на блок",
       "name": "Walia",
       "permissions": 0,
       "visible": true,
       "dependenciesFile": [{"name":"NotEnoughItems"/* Имя зависимого мода */}],
       "conflictFile": [{"name":"ClientFixer"/* Имя конфликтующего мода */}],
       "subTreeLevel": 2  //Смещение относительно первого мода. Используется для создания визуального отображения дерева зависимостей
    },
    {
       "actions": [
         {
           "args": [
             "--add-modules",
             "jdk.unsupported"
           ],
           "type": "jvmArgs"
         }
       ],
       "triggers": [], //Триггеры, о них ниже
       "info": "Аргументы Java 9+",
       "visible": false,
       "permissions": 0,
       "name": "Java9Args"
    },
    {
       "actions": [
        {
          "files": {
            "mods/1.7.10/OptiFine_1.7.10_HD_U_E7.jar": ""
          },
          "type": "file"
        }
      ],
       "info": "Улучшение производительности",
       "permissions": 0,
       "visible": true,
       "name": "OptiFine HD"
    }
  ],
```

#### Триггеры

##### Тип OS

```json
"triggersList": [
{
  "os": "MACOSX", // ОС: LINUX, MUSTDIE (Это Windows), MACOSX
  "required": false,
  "inverted": false,
  "type": "os"
}
],
```

##### Тип Java

```json
"triggersList": [
{
    "type": "java",
    "minVersion": 8, //Минимальная версия Java для срабатывания триггера
    "maxVersion": 11, //Максимальная версия Java для срабатывания триггера
    "required": true, //Показывает, что без этого триггера включение опционального мода не имеет смысла
    "inverted": false //Инвертировать триггер
  }
],
```

## Синхронизация директорий

Для обеспечения высокой производительности, лаунчсервер кэширует содержимое директорий updates и profiles. При внесении изменений в эти директории, лаунчсервер о них не осведомлён, и при следующем обновлении скорее всего будет ошибка. Для того чтобы синхронизировать содержимое этих директорий, существует две команды - `syncupdates` и `syncprofiles`:

```bash
syncupdates # Синхронизирует содержимое директории updates
syncprofiles # Синхронизирует содержимое директории profiles
syncup # Синхронизировать обе директории
```
