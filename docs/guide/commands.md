# Команды


## Базовые команды

| Команда        | Пример использования | Информация  |
| ------------- |:-------------:| -----:|
| help     | help [command name] | Вывести справку по команде или по всем командам |
| stop      | stop [nothing]      |   Остановить LaunchServer |
| build | build [nothing]      |    Собрать Launcher.jar |
| downloadclient | downloadclient [version] [dir]      |    Скачать клиент с зеркала |
| downloadasset | downloadasset [version] [dir]      |    Скачать ассеты с зеркала |
| syncupdates | syncupdates [subdirs...]      |    Синхронизировать хеши в памяти с файлами в updates на диске |
| syncprofiles | syncprofiles [nothing]      |     Синхронизировать профили в памяти с файлами в profiles на диске |
| syncup | syncup [nothing]      |    Выполнить команды syncUpdates и syncProfiles |
| saveprofile |  saveprofile [name]      |    Конвертировать профиль старой версии в актуальный формат(profileUUID, ServerProfile, опциональные моды и пр) |
| debug |  debug [true/false]      |   Включает или отключает режим отладки в лаунчсервере |

## Продвинутые команды


| Команда        | Пример использования | Информация  |
| ------------- |:-------------:| -----:|
|proguarddictregen|proguarddictregen [nothing] | перегенерировать словарь proguard|
|loadmodule|loadmodule [jar] | загрузить модуль не из папки modules в runtime|
|proguardclean|proguardclean [nothing] | сброс конфига proguard|
|proguardmappingsremove|proguardmappingsremove [nothing] | удалить маппинги proguard|
|signjar|signjar [path to file] (path to signed file) | подписать JAR файл используя настроеный в sign сертификат(enable в true)|
|signdir|signdir [path to dir] | подписать все файлы в папке, используя настроеный в sign сертификат (enable в true)|
|component|component [action] [component name] [more args] | управление компонентами|