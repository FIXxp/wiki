# Конфигурация

## Пример готовой конфигурации

```json
{
  "projectName": "GravitProject",
  "mirrors": [ 
    "https://mirror.gravit.pro/"
  ],
  "binaryName": "Launcher",
  "copyBinaries": true
  "env": "STD",
  "auth": {
    "std": {
      "provider": {
        "type": "accept"
      },
      "handler": {
        "type": "memory"
      },
      "textureProvider": {
        "skinURL": "http://example.com/skins/%username%.png",
        "cloakURL": "http://example.com/cloaks/%username%.png",
        "type": "request"
      },
      "hwid": {
        "type": "accept"
      },
      "links": {
        "provider": "myauth"
      }
      "displayName": "Default",
      "isDefault": true 
    }
  },
  "protectHandler": {
    "checkSecure": true,
    "type": "std"
  },
  "sessions": {
    "type": "memory"
  },
  "components": {
    "regLimiter": {
      "message": "Превышен лимит регистраций",
      "excludeIps": [],
      "rateLimit": 3,
      "rateLimitMillis": 36000000,
      "exclude": [],
      "type": "regLimiter"
    },
    "authLimiter": {
      "message": "Превышен лимит авторизаций",
      "rateLimit": 3,
      "rateLimitMillis": 8000,
      "exclude": [],
      "type": "authLimiter"
    }
  },
  "launch4j": { 
    "enabled": true,
    "setMaxVersion": false,
    "maxVersion": "1.8.999",
    "minVersion": "1.8.0",
    "downloadUrl": "",
    "productName": "GravitLauncher",
    "productVer": "5.1.0.0",
    "fileDesc": "GravitLauncher 5.1.0",
    "fileVer": "5.1.0.0",
    "internalName": "Launcher",
    "copyright": "© GravitLauncher Team",
    "trademarks": "This product is licensed under GPLv3",
    "txtFileVersion": "%s, build %d",
    "txtProductVersion": "%s, build %d"
  },
  "netty": {
    "fileServerEnabled": true,
    "sendExceptionEnabled": true,
    "disableWebApiInterface": false, 
    "ipForwarding": false,
    "showHiddenFiles": false,
    "launcherURL": "http://localhost:9274/Launcher.jar",
    "downloadURL": "http://localhost:9274/%dirname%/",
    "launcherEXEURL": "http://localhost:9274/Launcher.exe",
    "address": "ws://localhost:9274/api",
    "bindings": {},
    "performance": {
      "usingEpoll": true,
      "bossThread": 2,
      "workerThread": 8
    },
    "binds": [
      {
        "address": "0.0.0.0",
        "port": 9274
      }
    ],
    "logLevel": "DEBUG" 
  },
  "whitelistRejectString": "Вас нет в белом списке",
  "launcher": {
    "guardType": "no",
    "attachLibraryBeforeProGuard": false,
    "compress": true,
    "warningMissArchJava": true,
    "enabledProGuard": false,
    "stripLineNumbers": false,
    "deleteTempFiles": true,
    "proguardGenMappings": true
  },
  "sign": {
    "enabled": true,
    "keyStore": "GravitCodeSignEC_Java.p12",
    "keyStoreType": "PKCS12",
    "keyStorePass": "password",
    "metaInfKeyName": "SIGNUMO.EC",
    "metaInfSfName": "SIGNUMO.SF",
    "keyAlias": "1",
    "keyPass": "password",
    "signAlgo": "SHA256withECDSA"
  },
  "startScript": "./start.sh"
}
```

## Описание настроек конфигурации

`projectName` - название вашего проекта  
`mirrors` - список зеркал, для скачивания файлов игры. Для получения подробной информации смотрите раздел [Загрузка клиентов](/guide/clients)    
`binaryName` - Имя бинарника в папке updates. Меняя его не забывайте менять URL скачки  
`copyBinaries` - Помещать ли бинарники в папку updates  
`env`- окружение, влияет на уровень отладочных сообщений  
`auth` - авторизация, подробнее в разделе [Настройка авторизации](/guide/auth)  
`protectHandler` - отвечает за выдачу токенов(accessToken) подробнее в разделе [Настройка ProtectHandler](/guide/protecthandler)  
`sessions` - отвечает за хранение сессий  
`components` - опциональные компоненты  
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
- `attachLibraryBeforeProGuard` - добавление библиотек до proguard. Включать если это требуется по инструкции к кастомному конфигу proguard  
- `compress` - сжатие итогового файла  
- `warningMissArchJava` - предупреждение о несоответствии разрядности b/или версии Java. Отключите елси используется скачивание своей JRE  
- `enabledProGuard` - включить обфускацию  
- `stripLineNumbers` - включить вырезание отладочной информации  
- `deleteTempFiles` - удалять временные файлы в папке build  
- `proguardGenMappings` - Включить генерацию маппингов proguard  
`sign` - настройки подписи лаунчера подробнее в разделе [Подпись лаунчера](/guide/sign)  
`startScript` - Скрипт запуска лаунчсервера(используется только в команде restart)  
