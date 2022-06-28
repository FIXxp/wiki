# Changelog

## 5.2.12 (31 May 2022)

#### Bug Fixes

- Fixed the problem with the work of the GenerateCertificate module on some systems
- Fixed the problem with the Parsing of arguments from the configuration in ServerWrapper

#### Features

- ServerWrapper is now setting a bit of +x on `Start.sh`
- Added the Debug True command and additional debt messages
- The new module `TelegrambotConsole

## 5.2.11 (12 Apr 2022)

#### Bug Fixes

- Fixed the problem with the completion of ServerWrapper immediately after the start

## 5.2.10 (11 Apr 2022)

#### Bug Fixes

- Исправлена проблема с работой HWID на `MysqlAuthCoreProvider`

#### Features

- New module `DiscordbotConsole` to replace the outdated and remote`discordintegration`
- Experimental support Forge 1.17+ (Follow the guide in our discord server)
- New team for loading LWJGL 3.3.0+ in UNSAFECMMANDSPACK

## 5.2.9 (19 Mar 2022)

#### Features

- Support for SessionStorage and sessions storage is removed.MySQL and PostgreSQL AUTHCOREPROVider are transferred to a standard system with Access and Refresh tokens
- Support for Properties on the side of Launcher.Authlib is required to use this feature
- Support User Assets instead of Skin/Cloak for skins, raincoats and other textures.Authlib is required to use this feature
- deleted the Discordintegration module
- Support 1.18.2
- Launcherauthlib is removed from the launcher assembly
- Added the CustomJVMOPTIONS parameter, which allows you to add additional JVM parameters when launcher starts

## 5.2.8 (12 Jan 2022)

#### Bug Fixes

- Fixed a bug with an error when launcher launcher if there are foreign characters in Path
- In the rash, a bug with the display and work of WebView was fixed

#### Features

- The mirror by default was changed to <https://mirror.gravit.pro/5.2.x/>
- Added support for updated customers with LOG4J vulnerability corrections.Servers and customers of previous versions must be patched on your own
- fully ready MicrosoftAuthcoreProvider in the Mojangsuport module
- Support for servers 1.18 and 1.18.1 in ServerWrapper
