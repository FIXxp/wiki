---
description: Commands for interacting with launchserver
---

# Commands

## Basic Commands

| Command        |       An example of use        |                                                                                                    Description |
| -------------- | :----------------------------: | -------------------------------------------------------------------------------------------------------------: |
| help           |      help [command name]       |                                                            Display a command on the command or by all commands |
| stop           |         stop [nothing]         |                                                                                              Stop LaunchServer |
| build          |        build [nothing]         |                                                                                             Build Launcher.jar |
| downloadclient | downloadclient [version] [dir] |                                                                                    Download client from mirror |
| downloadasset  | downloadasset [version] [dir]  |                                                                                  Download assets from a mirror |
| syncupdates    |    syncupdates [subdirs...]    |                                                 Synchronize hashes in memory with files in updates on the disk |
| syncprofiles   |     syncprofiles [nothing]     |                                              Synchronize profiles in memory with files in profiles on the disk |
| syncup         |        syncup [nothing]        |                                                                  Perform commands syncUpdates and syncProfiles |
| saveprofile    |       saveprofile [name]       | Convert the profile of the old version into the actual format(profileUUID, ServerProfile, Optional mods, etc.) |
| debug          |       debug [true/false]       |                                                            Enables or disables debugging mode in  launchserver |

## Advanced Commands

| Command                |                An example of use                |                                                                                Description |
| ---------------------- | :---------------------------------------------: | -----------------------------------------------------------------------------------------: |
| proguarddictregen      |           proguarddictregen [nothing]           |                                                           Overheat the dictionary proguard |
| loadmodule             |                loadmodule [jar]                 |                                 download the module not from the folder modules in runtime |
| proguardclean          |             proguardclean [nothing]             |                                                                      Config reset proguard |
| proguardmappingsremove |        proguardmappingsremove [nothing]         |                                                                   Delete Proguard mappings |
| signjar                |  signjar [path to file] (path to signed file)   |               Sign a jar file using the configured certificate in the SIGN(enable in true) |
| signdir                |              signdir [path to dir]              | Sign all files in the folder using the certificate configured in the SIGN (enable in true) |
| component              | component [action] [component name] [more args] |                                                                      Components management |
