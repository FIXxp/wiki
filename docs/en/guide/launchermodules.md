---
description: Set of standard and public modules for Gravitlauncher
---
# Launcher modules

A set of standard, public modules for [Gravitlauncher].A detailed description and configuration of each of them can be found
In the folder with this module.

- All compiled modules are in the folder **modules** archive **Launcher.zip**, When you download
  Artifact [GravitLauncher].
- If you compile [GravitLauncher] script, modules are also gathering and are in their folders:
  `/LaunchServer/src/modules/ModuleName_module/build/libs/ModuleName_module.jar`

| Module                | Description                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| [AdditionalHash]      | Adds a new type**AuthProvider**. Allows you to check the hash passwords *bcrypt* and *phpass*. |
| [FileAuthSystem]\*    | Authorization system with storage of users base in the file json                               |
| [GenerateCertificate] | Creates certificates for signature **Launcher.**(*jar\|exe*).                                  |
| [MojangSupport]       | Adds *[GravitLauncher]* support **mojang**.                                                    |
| [OneLauncher]         | Prohibits the launch of two or more copies of launcher                                         |
| [OpenSSLSignCode]     | Allows you to sign **exe** files with your certificate.                                        |
| [Sentry LaunchServer] | Integration *[GravitLauncher]* with Sentry.                                                    |
| [SystemdNotifer]      | Serves for the correct loading procedure **LaunchServer** utility **systemd**.                 |
| [UnsafeCommandPack]   | Adds additional commands to *[GravitLauncher]*.                                                |
| [DiscordGame]         | *(launcher-modules)* Adds *Launcher* integration with **Discord**.                             |
| [LauncherStartScreen] | *(launcher-modules)* Adds the download window *launcher* until complete initialization **      |
| [Sentry Launcher]     | *(launcher-modules)* Itegration *Launcher* with Sentry.                                        |

**Recommended for use.*

[GravitLauncher]: https://github.com/GravitLauncher/Launcher

[AdditionalHash]: https://github.com/GravitLauncher/LauncherModules/tree/master/AdditionalHash_module

[FileAuthSystem]: https://github.com/GravitLauncher/LauncherModules/tree/master/FileAuthSystem_module

[GenerateCertificate]: https://github.com/GravitLauncher/LauncherModules/tree/master/GenerateCertificate_module

[MojangSupport]: https://github.com/GravitLauncher/LauncherModules/tree/master/MojangSupport_module

[OneLauncher]: https://github.com/GravitLauncher/LauncherModules/tree/master/OneLauncher_module

[OpenSSLSignCode]: https://github.com/GravitLauncher/LauncherModules/tree/master/OpenSSLSignCode_module

[Sentry LaunchServer]: https://github.com/GravitLauncher/LauncherModules/tree/master/Sentry_module

[SystemdNotifer]: https://github.com/GravitLauncher/LauncherModules/tree/master/SystemdNotifer_module

[UnsafeCommandPack]: https://github.com/GravitLauncher/LauncherModules/tree/master/UnsafeCommandPack_module

[LauncherStartScreen]: https://github.com/GravitLauncher/LauncherModules/tree/master/LauncherStartScreen_lmodule

[Sentry Launcher]: https://github.com/GravitLauncher/LauncherModules/tree/master/Sentry_lmodule

[DiscordGame]: https://github.com/GravitLauncher/LauncherModules/tree/master/DiscordGame_lmodule  
