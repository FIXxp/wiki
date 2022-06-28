---
description: Description of the launcher configuration
---
# Configuration

## Configuration example

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
      "message": "The registration limit is exceeded",
      "excludeIps": [],
      "exclude": [],
      "rateLimit": 3,
      "rateLimitMillis": 36000000,
      "type": "regLimiter"
    },
    "authLimiter": {
      "message": "The limit of authorizations is exceeded",
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

### Description of configuration settings

`projectName` - The name of your project  
`mirrors` - List of mirrors for downloading the game files.For detailed information, see the section [Download customers](/en/guide/clients)  
`binaryName` - The name of the binary in the updates folder.Changing it, do not forget to change url jumps
`copyBinaries` - Whether to place binary in the updates folder  
`env`- environment affects the level of debugging messages
`auth` - is responsible for the authorization and recoil of skins [Setting Authorization](/en/guide/auth)  
`protectHandler` - is responsible for issuing tokens(accessToken) [Setting Protectler](/en/guide/configuration.md#setup-protecthandler)  
`sessions` - is responsible for storing sessions  
`components` - Optional components

- `regLimiter` -Registration restriction
  - `message`: - Message in case of limit
  - `excludeIps`
  - `exclude`
  - `rateLimit` - number of attempts to restriction
  - `rateLimitMillis` - time before removing restriction in MS
- `authLimiter` - Limiting the number of authorizations attempts
  - `message` - Message in case of limit
  - `exclude` - White list :think:
  - `rateLimit` - the number of authorization attempts to restriction
  - `rateLimitMillis` - time before removing restriction in MS
- `proguard` - is responsible for the launcher's
  - `modeAfter` - The mode of operation
  - `dir` -Folder with Proguard
  - `enabled` - Turn on the compulsion
  - `mappings` - Enable the generation of the Mapping Proguard

`launch4j` - Create Exe from Jar

- `enabled` - Turn on the creation of EXE
- `setMaxVersion` - limits the Java version within the version of the versions, see below
- `maxVersion` - The maximum version of Java
- `minVersion` -The minimum version of Java
- `downloadUrl` - Java download link in case of its absence

`netty`  

- `fileServerEnabled` - Turn on the distribution of files from Updates by http
- `sendExceptionEnabled` -allow sending an error of the server launcher to the client
- `disableWebApiInterface` - Disconnect /Web API - http queries to launch server
- `ipForwarding` - Allow to proxify the real IP through http headers.Enable if you use nginx/apache2/cloudflare
- `showHiddenFiles` - allows the distribution of hidden files
- `launcherURL` -URL for downloading launcher (jar)
- `downloadURL` - URL for downloading customers and ascets
- `launcherEXEURL` - URL Launcher's races (EXE)
- `address` - WebSocket API address, through which the launcher will connect
- `bindings` - SPECIAL URL settings for downloading ascets/customers
- `performance`  
  - `usingEpoll` - accelerates the work with a lot of saliva (available only for Linux)
  - `bossThread` - The number of streams for receiving compounds
  - `workerThread` - number of flows for requests processing
- `binds` - Listening addresses of the socket (BIND)
- `logLevel` - Netty Messages in the SLF4J logger

`launcher` - Launcher settings

- `guardType` - type of native protection antiinject (see instructions for your native protection)
- `compress` - Compression of the final file
- `stripLineNumbers` - turn on the cutting out of the debug information
- `deleteTempFiles` - delete temporary files in the Build folder

`sign` - Launcher signatures settings [Launcher signature](/en/guide/sign)  
`startScript` - Lunch server launch script (used only in the RESTART team)

## Setup ProtectHandler

Protecthandler part is in a state of active development.In the future, more and more possibilities will appear

### Method none

Protection is completely tapped

```json
"protectHandler": {
    "type": "none"
}
```

### Method std

Default Protecthandler

- Autocation token can only be obtained if authType client is checked and checked hash launcher
- You can get and change the profile only if the check on the white list is passed
- You can only get such updates folders: assets selected client, a folder of the selected client, all folders from allowUpdates

```json
"protectHandler": {
    "profileWhitelist": { "Your uuid profile": ["Nickname1", "Nickname2"] }, 
    "allowUpdates": [],
    "type": "std"
}
```

### Method advanced

Includes all StD functions as well as:

- includes Trustlevel mechanisms and the exchange of keys with the client
- includes securityreport processing from native defense
- You can enable hardwareinfo processing and gland banks

Standard configuration without HardwareFeature

```json
"protectHandler": {
    "profileWhitelist": { "Your uuid profile": ["Nickname1", "Nickname2"] },
    "allowUpdates": [],
    "type": "advanced"
}
```

`profileWhitelist` - Whitelist
