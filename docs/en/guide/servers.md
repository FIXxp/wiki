---
description: Binding of a game server to a Launchserver
---

# Working with a game server

## Binding of a game server

To ensure the full-fledged work of LaunchServer and your game server, you need to install ServerWrapper.

**Step 1**: Select and download the server core you need on our [mirror](https://mirror.gravit-launcher.ru)

**Step 2**: Place ServerWrapper(he is in the LaunchServer directory) to the Directory of your game server  
**Step 3**: Open the launcher and complete the next command, copy the resulting unique server indifier  

```bash
token server <server-name>
```

**Step 4**: Go to the Directory of your game server and execute the command

 ```bash
java -jar ServerWrapper.jar setup
```

**Step 5**: Indicate the name JAR of the file of your server nucleus, the name of the server, the address of the LaunchServer and the unique server indiff with **Step 2**

## Configuration ServerWrapper

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

#### Description of the settings ServerWrapper

`projectname` - Project name  
`address` - Launchserver's address  
`serverName` - Server name in the profile
`autoloadLibraries` - Library Automobile Automobile from folderlibraries  
`classpath` - Additional classpath  
`mainclass` - Main-Class Your server nucleus  
`args` - Launch arguments
`extendedTokens` - A unique server indifier  
`env` - ServerWrapper operating mode
