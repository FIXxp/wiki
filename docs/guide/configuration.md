# Конфигурация

## Пример готовой конфигурации

```json
{
  "projectName": "GravitProject",
  "mirrors": [
    "https://mirror.gravit.pro/",
    "https://gravit-launcher-mirror.storage.googleapis.com/"
  ],
  "binaryName": "Launcher",
  "copyBinaries": true,
  "cacheUpdates": true,
  "env": "STD",
  "auth": {
    "std": {
      "isDefault": true,
      "core": {
        "type": "reject"
      },
      "textureProvider": {
        "skinURL": "http://example.com/skins/%username%.png",
        "cloakURL": "http://example.com/cloaks/%username%.png",
        "type": "request"
      },
      "displayName": "Default"
    }
  },
  "sessions": {
    "autoDump": false,
    "dumpFile": "sessions.json",
    "type": "memory"
  },
  "protectHandler": {
    "profileWhitelist": {},
    "allowUpdates": [],
    "type": "std"
  },
  "components": {
    "regLimiter": {
      "message": "Превышен лимит регистраций",
      "excludeIps": [],
      "exclude": [],
      "rateLimit": 3,
      "rateLimitMillis": 36000000,
      "type": "regLimiter"
    },
    "authLimiter": {
      "message": "Превышен лимит авторизаций",
      "exclude": [],
      "rateLimit": 3,
      "rateLimitMillis": 8000,
      "type": "authLimiter"
    },
    "proguard": {
      "modeAfter": "MainBuild",
      "dir": "proguard",
      "enabled": true,
      "mappings": true,
      "type": "proguard"
    }
  },
  "launch4j": {
    "enabled": true,
    "setMaxVersion": false,
    "maxVersion": "1.8.999",
    "minVersion": "1.8.0",
    "downloadUrl": "http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html",
    "productName": "GravitLauncher",
    "productVer": "5.2.4.4",
    "fileDesc": "GravitLauncher 5.2.4",
    "fileVer": "5.2.4.4",
    "internalName": "Launcher",
    "copyright": "© GravitLauncher Team",
    "trademarks": "This product is licensed under GPLv3",
    "txtFileVersion": "%s, build %d",
    "txtProductVersion": "%s, build %d"
  },
  "netty": {
    "fileServerEnabled": true,
    "sendExceptionEnabled": false,
    "ipForwarding": false,
    "disableWebApiInterface": false,
    "showHiddenFiles": false,
    "launcherURL": "http://localhost:9274/Launcher.jar",
    "downloadURL": "http://localhost:9274/%dirname%/",
    "launcherEXEURL": "http://localhost:9274/Launcher.exe",
    "address": "ws://localhost:9274/api",
    "bindings": {},
    "performance": {
      "usingEpoll": false,
      "bossThread": 2,
      "workerThread": 8,
      "schedulerThread": 2,
      "sessionLifetimeMs": 86400000,
      "maxWebSocketRequestBytes": 1048576
    },
    "binds": [
      {
        "address": "0.0.0.0",
        "port": 9274
      }
    ],
    "logLevel": "DEBUG"
  },
  "launcher": {
    "guardType": "no",
    "compress": true,
    "stripLineNumbers": true,
    "deleteTempFiles": true,
    "certificatePinning": false,
    "encryptRuntime": false,
    "memoryLimit": 256
  },
  "sign": {
    "enabled": false,
    "keyStore": "pathToKey",
    "keyStoreType": "JKS",
    "keyStorePass": "mypass",
    "keyAlias": "myname",
    "keyPass": "mypass",
    "metaInfKeyName": "SIGNUMO.RSA",
    "metaInfSfName": "SIGNUMO.SF",
    "signAlgo": "SHA256WITHRSA"
  },
  "startScript": ".\\start.bat"
}
```

## Описание настроек конфигурации

`projectName` - название вашего проекта  
`mirrors` - список зеркал, для скачивания файлов игры. Для получения подробной информации смотрите раздел [Загрузка клиентов](/guide/clients)  
`binaryName` - Имя бинарника в папке updates. Меняя его не забывайте менять URL скачки  
`copyBinaries` - Помещать ли бинарники в папку updates  
`env`- окружение, влияет на уровень отладочных сообщений  
`auth` - отвечает за авторизацию и отдачу скинов [Настройка авторизации](/guide/auth)  
`protectHandler` - отвечает за выдачу токенов(accessToken) [Настройка ProtectHandler](/guide/protecthandler)  
`sessions` - отвечает за хранение сессий  
`components` - опциональные компоненты  

- `regLimiter` - ограничение регистрации
  - `message`: - сообщение в случае превышение лимита
  - `excludeIps`
  - `exclude`
  - `rateLimit` - количество попыток до ограничения
  - `rateLimitMillis` - время до снятия ограничения в мс
- `authLimiter` - ограничение количества попыток авторизаций
  - `message` - сообщение в случае превышение лимита
  - `exclude` - белый список :think:
  - `rateLimit` - количество попыток авторизации до ограничения
  - `rateLimitMillis` - время до снятия ограничения в мс
- `proguard` - отвечает за обфускацию лаунчера
  - `modeAfter` - режим работы
  - `dir` - папка с proguard
  - `enabled` - включить обфускацию
  - `mappings` - включить генерацию маппингов proguard

`launch4j` - создание EXE из JAR  

- `enabled` - включить создание EXE  
- `setMaxVersion` - ограничивает версию Java в пределах диапозона версий см. ниже  
- `maxVersion` - максимальная версия Java  
- `minVersion` - минимальная версия Java  
- `downloadUrl` - ссылка для скачивания Java в случае её отсутствия  

`netty`  

- `fileServerEnabled` - включить раздачу файлов из updates по http  
- `sendExceptionEnabled` - разрешить отправку сообщений об ошибке лаунчсервера на клиент  
- `disableWebApiInterface` - отключение /webapi - http запросов к лаунчсерверу  
- `ipForwarding` - разрешить проксирование реального IP через HTTP заголовки. Включить если используется проксирование nginx/apache2/cloudflare  
- `showHiddenFiles` - разрешает раздачу скрытых файлов  
- `launcherURL` - URL для скачивание лаунчера(JAR)  
- `downloadURL` - URL для скачивание клиентов и ассетов  
- `launcherEXEURL` - URL скачки лаунчера(EXE)  
- `address` - адрес WebSocket API, по которому лаунчер будет подключаться  
- `bindings` - настройки особых URL для скачивание ассетов/клиентов  
- `performance`  
  - `usingEpoll` - ускоряет работу с множеством соеденений(доступно только для Linux)  
  - `bossThread` - число потоков на прием соеденений  
  - `workerThread` - число потоков на обработку запросов  
- `binds` - адреса прослушивания сокета(bind)  
- `logLevel` - уровень сообщений Netty в логгере slf4j  

`launcher` - настройки лаунчера  

- `guardType` - тип нативной защиты AntiInject(см инструкцию к вашей нативной защите)  
- `compress` - сжатие итогового файла  
- `stripLineNumbers` - включить вырезание отладочной информации  
- `deleteTempFiles` - удалять временные файлы в папке build  

`sign` - настройки подписи лаунчера [Подпись лаунчера](/guide/sign)  
`startScript` - Скрипт запуска лаунчсервера(используется только в команде restart)  
