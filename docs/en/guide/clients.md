---
description: Clients, resources and other files for loading the launcher are stored in the form of subdivorories in the UPDATES directory, and the profiles that indicate the name of the Directory, the address of the server for the car driver, exclusion during updating and other information necessary for launching the client are stored in the Profiles Directory
---

# Working with a game client

Clients, resources and other files for loading the launcher are stored in the form of subdivorories in the UPDATES directory, and the profiles that indicate the name of the Directory, the address of the server for the car driver, exclusion during updating and other information necessary for launching the client are stored in the Profiles Directory

## Supported versions

At the moment, the launcher can run all versions from 1.7.10 according to the current version of Minecraft, except for Forge +1.17.1

| Version | Vanilla | Forge | Fabric |
| :-----: | :-----: | :---: | :----: |
| 1.7.10  |    ✔️    |   ✔️   |   ➖    |
|  1.8.9  |    ✔️    |   ✔️   |   ➖    |
| 1.10.2  |    ✔️    |   ✔️   |   ➖    |
| 1.11.2  |    ✔️    |   ✔️   |   ➖    |
| 1.12.2  |    ✔️    |   ✔️   |   ➖    |
| 1.13.2  |    ✔️    |   ✔️   |   ➖    |
| 1.14.4  |    ✔️    |   ✔️   |   ✔️    |
| 1.15.2  |    ✔️    |   ✔️   |   ✔️    |
| 1.16.5  |    ✔️    |   ✔️   |   ✔️    |
| 1.17.1  |    ✔️    |   ✔️   |   ✔️    |
| 1.18.2  |    ✔️    |   ✔️   |   ✔️    |
| 1.19.1  |    ✔️    |   ✔️   |   ✔️    |

## Client installation

**Stem 1**: Add to ours [mirror](https://mirror.gravit-launcher.ru) to the launch server config and restart it

```json
"mirrors": [ 
  "https://mirror.gravit-launcher.ru/"
],
```

**Stem 2**: Follow the next command to download the client

```bash
downloadclient <version> <name>
```

`version` - This is a version of Minecraft.
Currently, we are dividing versions into 3 types:

- `1.16.5` - Vanilla minecraft
- `1.16.5-forge` - Minecraft modified Forge
- `1.16.5-fabric` - Minecraft modified Fabric

`name` - Client's name for your choice

**Step 3**(Optional): Perform the next command for downloading ascets (textures, sounds, etc.) of the client

```bash
downloadclient <version> asset<version>
```

After these actions, the client downloads in the `updates` folder and a profile will be created in the `profiles` folder

## Client profile configuration

### Example configuration

After downloading the client, the launa server will automatically create a profile and fill it with the basic data.
The following is an example of a finished configuration for Minecraft 1.17.1

```json
{
  "title": "Vanilla1.17",
  "uuid": "fa9c1a52-6fa9-4da6-a488-9fc80250095c",
  "version": "1.17",
  "info": "Information about the server",
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

### Description of profile settings

`title` - Profile title  
`uuid` - UUID profile  
`version` - Minecraft version
`info` - Information about the server in the server selection window  
`dir` - Customer Folder in Updates  
`sortIndex` - serial number in the server selection window
`assetIndex` - The name of the index used in ASSUTES
`assetDir` - Asset folder
`update` - List of files and folders that will be pumped at the start of the client
`updateExclusions` - list of files and folders that do not need to be checked
`updateVerify` - list of files and folders that will be pumped at the start of the client and during operation
`updateOptional` - List of optional mods and additional arguments See in more details in [optional mods](/en/guide/clients.md#optional-mods)  
`jvmArgs` - JVM arguments
`classPath` - List of files and libraries loaded when launching the selected class loader
`altClassPath` - List of files and libraries loaded when launching a class bootloader of classes
`clientArgs` - Additional customer arguments
`compatClasses` - list of additional Mainclass, which will be launched before the main  
`properties` - Castle information about the profile  
`servers` - List of servers  

- `name` - The name of the server
- `serverAddress` - server address  
- `serverPort` - The port of the server  
- `isDefault` - default
- `socketPing` - Direct ping for online  
  
`classLoaderConfig` - Type of class bootloader(LAUNCHER, AGENT, SYSTEM_ARGS)  
`runtimeInClientConfig` - Launch GUI Rantaim at the start of the client (None, Basic, Full)
`recommendJavaVersion` - Recommended Java version
`minJavaVersion` - The minimum version of Java
`maxJavaVersion` - The maximum version of Java
`warnMissJavaVersion` - warning about the non -compliance of Java requirements for launching  
`settings` - default settings  

- `ram` - the amount of RAM (in megabytes), 0 - automatically
- `autoEnter` - Auto - input, can paint
- `fullScreen` - full screen mode

`updateFastCheck` - Fast file check  
`limited` - limited permissions  
`mainClass` - The main class of the client  

### Optional mods

```json
"updateOptional": [
    {
       "actions": [ //List of optional mod actions
        { //First action
          "files": {
            "mods/1.7.10/NotEnoughItems-1.7.10-1.0.5.118-universal.jar": "", //Simple adding a file without renaming
            "mods/SuperStrangeMod0.jar": "mods/SuperStrangeMod.jar", //Adding a file with movement.On the side of the launch server, the file is on the way "mods/SuperStrangeMod0.jar", And he will get here to the client"mods/SuperStrangeMod.jar"
            "mods2/LowStrangeMod.jar": "mods/LowStrangeMod.jar", //The movement also works between the folders
            "config2/ic2": "config/ic2" //Moving folders also works
          },
          "type": "file" //Action type - file processing
        }
      ],
       "info": "Recipes", //Description
       "visible": true, //Visibility
       "mark": true, //Included by defaultю
       "limited": false, //Limited permissions
       "permissions": 0, //Mask of privileges.0 - mod for all, 1 - only for admins.
       "name": "NotEnoughItems" //Name
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
       "info": "Mod showing additional information when entering the block",
       "name": "Walia",
       "permissions": 0,
       "visible": true,
       "dependenciesFile": [{"name":"NotEnoughItems"/* The name of the dependent fashion */}],
       "conflictFile": [{"name":"ClientFixer"/* The name of the conflicting fashion */}],
       "subTreeLevel": 2  //The displacement relative to the first mod.Used to create a visual display of the dependencies
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
       "triggers": [], //Triggers, about them below
       "info": "Java 9 arguments+",
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
       "info": "Performance improvement",
       "permissions": 0,
       "visible": true,
       "name": "OptiFine HD"
    }
  ],
```

#### Triggers

##### Type OS

```json
"triggersList": [
{
  "os": "MACOSX", // ОС: LINUX, MUSTDIE (it Windows), MACOSX
  "required": false,
  "inverted": false,
  "type": "os"
}
],
```

##### Type Java

```json
"triggersList": [
{
    "type": "java",
    "minVersion": 8, //The minimum version of Java for the trigger trigger
    "maxVersion": 11, //The maximum version of Java for the trigger trigger
    "required": true, //Shows that without this trigger, the inclusion of an optional mod does not make sense
    "inverted": false //Invert the trigger
  }
],
```

## Synchronization

To ensure high performance, the launcher ceremer caching the contents of the UPDATES and Profiles directory.When making changes to these directors, the launa server is not aware of them, and at the next update there will most likely be an error.In order to synchronize the contents of these directors, there are two teams - `syncupdates` and `syncprofiles`:

```bash
syncupdates # Synchronizes the contents of the Updates directory
syncprofiles # Synchronizes the contents of the Profiles directory
syncup # Synchronize both directors
```
