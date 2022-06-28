---
description: Authorization setting, AuthcoreProvider and TextureProvider
---

# Authorization setting

## Configuration example

```json
"auth": {
    "std": {
      "core": {
        "type": "mysql",
        "mySQLHolder": {
          "address": "localhost",
          "port": 3306,
          "username": "launchserver",
          "password": "password",
          "database": "db?serverTimezone=UTC",
          "timezone": "UTC",
          "useHikari": true
        },
        "passwordVerifier": {
          "algo": "SHA256",
          "type": "digest"
        },
        "expireSeconds": 7200,
        "table": "users",
        "tableHwid": "hwids",
        "uuidColumn": "uuid",
        "usernameColumn": "username",
        "passwordColumn": "password",
        "accessTokenColumn": "accessToken",
        "hardwareIdColumn": "hwidId",
        "serverIDColumn": "serverID"
      },
      "textureProvider": {
        "skinURL": "http://example.com/skins/%username%.png",
        "cloakURL": "http://example.com/cloaks/%username%.png",
        "type": "request"
      },
      "isDefault": true,
      "displayName": "Default"
    }
} 
```

## Description of the configuration

`address` - Address MySQL server  
`port` - Port MySQL server  
`username` - Username  
`password` - User password  
`database` - Database (before?), After the installation of server timezone is located  
`timezone` - Installation of client timezones  
`useHikari` - whether to use Hikaricp  
`passwordVerifier` - your passwordverifier view more in[PasswordVerifier](/en/guide/auth.md#configuration-passwordverifier)  
`textureProvider` - is responsible for the issuance of skins and cloaks [TextureProvider](/en/guide/auth.md#skins-and-cloak-system-textureprovider)  
`expireSeconds` - Opening hours AcceStoken (sec)  
`table` - table  
`tableHwid` - Table with HWID  
`uuidColumn` - Column name with uuid  
`usernameColumn` -Column name with user names  
`passwordColumn` -Column name with user password  
`accessTokenColumn` - Column name with accestoken  
`hardwareIdColumn` - Column name with ID record in the Hwids table  
`serverIDColumn` - Column name with serverid  

## Skins and cloak system(TextureProvider)

### Method Void

Skins and raincoats are completely disconnected.Example configuration:

```json
"textureProvider": {
  "type": "void"
},
```

### Method Request

In this method, skins and raincoats are configured by only two parameters - the URL mask on the PNG file.Example configuration:

```json
"textureProvider": {
  "skinURL": "http://example.com/skins/%username%.png",
  "cloakURL": "http://example.com/cloaks/%username%.png",
  "type": "request"
},
```

This method has a significant minus - there is no support for Slim skins

### Method Json

Ready implementation of the issuance of skins, cloaks, Slim skins [php-script](https://github.com/microwin7/GravitLauncher-TextureProvider)

```json
"textureProvider": {
  "url": "https://example.com/TextureProvider.php?login=%uuid%",
  "type": "json"
},
```

## Configuration PasswordVerifier

<CodeGroup>
  <CodeGroupItem title="digest" active>

```json
"passwordVerifier": {
  "algo": "SHA256",
  "type": "digest"
}
```

  </CodeGroupItem>

  <CodeGroupItem title="doubleDigest">

```json
"passwordVerifier": {
  "algo": "SHA256",
  "toHexMode": true,
  "type": "doubleDigest"
}
```

  </CodeGroupItem>
  <CodeGroupItem title="bcrypt">

```json
"passwordVerifier": {
  "type": "bcrypt"
}
```

  </CodeGroupItem>
    <CodeGroupItem title="phpass">

```json
"passwordVerifier": {
  "type": "phpass"
}
```

  </CodeGroupItem>
</CodeGroup>

`digest` - Heshs the password with the selected algorithm.Any algorithms implemented in Java or BouncyCastle are supported  
`doubleDigest` - Heshs the password with the selected algorithm twice. `toHexMode` Before the second round of the hash, the hash will transfer to HEX format.Any algorithms implemented in Java or BouncyCastle are supported  
`bcrypt`(Module `AddionalHash`) - checks the password by algorithm BCrypt(password_verify in PHP)  
`phpass`(Module `AddionalHash`) - checks the password by algorithm phpass(WordPress)  

## Authorization methods

### Method reject

Takes any pair of login-paralle for infidels.This method can be used during technical work.Example configuration:

```json
"auth": {
  "std": {
    "core": {
      "type": "reject",
    },
    "isDefault": true,
    "displayName": "Default"
  } 
}
```

### Method Memory

Suitable for testing.
It does not require a password to enter.

```json
"auth": {
  "std": {
    "core": {
      "type": "memory",
    },
    "isDefault": true,
    "displayName": "Default"
  } 
}
```

### Method  MySQL

This handler stores all the data on the authorization in the MySQL database, uses UUID ready.This handler is recommended to use all projects as far as possible.Example configuration:

```json
"auth": {
    "std": {
      "core": {
        "type": "mysql",
        "mySQLHolder": {
          "address": "localhost",
          "port": 3306,
          "username": "launchserver",
          "password": "password",
          "database": "db?serverTimezone=UTC",
          "timezone": "UTC",
          "useHikari": true
        },
        "passwordVerifier": {
          "algo": "SHA256",
          "type": "digest"
        },
        "expireSeconds": 7200,
        "table": "users",
        "tableHwid": "hwids",
        "uuidColumn": "uuid",
        "usernameColumn": "username", 
        "passwordColumn": "password",
        "accessTokenColumn": "accessToken",
        "serverIDColumn": "serverID"
      },
      "isDefault": true,
      "displayName": "Default"
    }
} 
```

In order to add the missing fields and cogereene UUID, you can use the SQL request:

```sql

-- Adds the missing fields to the table
ALTER TABLE users
ADD COLUMN uuid CHAR(36) UNIQUE DEFAULT NULL,
ADD COLUMN accessToken CHAR(32) DEFAULT NULL,
ADD COLUMN serverID VARCHAR(41) DEFAULT NULL,
ADD COLUMN hwidId BIGINT DEFAULT NULL;
-- Creates a trigger for UUID generation for new users
DELIMITER //
CREATE TRIGGER setUUID BEFORE INSERT ON users
FOR EACH ROW BEGIN
IF NEW.uuid IS NULL THEN
SET NEW.uuid = UUID();
END IF;
END; //
DELIMITER ;
-- Generates UUID for existing users
UPDATE users SET uuid=(SELECT UUID()) WHERE uuid IS NULL;

CREATE TABLE `hwids` (
  `id` bigint(20) NOT NULL,
  `publickey` blob,
  `hwDiskId` varchar(255) DEFAULT NULL,
  `baseboardSerialNumber` varchar(255) DEFAULT NULL,
  `graphicCard` varchar(255) DEFAULT NULL,
  `displayId` blob,
  `bitness` int(11) DEFAULT NULL,
  `totalMemory` bigint(20) DEFAULT NULL,
  `logicalProcessors` int(11) DEFAULT NULL,
  `physicalProcessors` int(11) DEFAULT NULL,
  `processorMaxFreq` bigint(11) DEFAULT NULL,
  `battery` tinyint(1) NOT NULL DEFAULT "0",
  `banned` tinyint(1) NOT NULL DEFAULT "0"
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `hwids`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `publickey` (`publickey`(255));
ALTER TABLE `hwids`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
ALTER TABLE `users`
  ADD CONSTRAINT `users_hwidfk` FOREIGN KEY (`hwidId`) REFERENCES `hwids` (`id`);
```

### Method  PostgreSQL

This handler stores all the data on the authorization in the PostgreSQL database, uses UUID ready.
An example of configuration:

```json
"auth": {
    "std": {
      "core": {
        "type": "postgresql",
        "postgresSQLHolder": {
          "addresses": ["localhost"],
          "ports": [5432],
          "username": "username",
          "password": "password",
          "database": "database",
          "timezone": "UTC",
          "useHikari": true
        },
        "passwordVerifier": {
          "algo": "SHA256",
          "type": "digest"
        },
        "expireSeconds": 7200,
        "table": "users",
        "tableHwid": "hwids",
        "uuidColumn": "uuid",
        "usernameColumn": "username", 
        "passwordColumn": "password",
        "accessTokenColumn": "accessToken",
        "serverIDColumn": "serverID"
      },
      "isDefault": true,
      "displayName": "Default"
    }
} 
```

In order to add the missing fields and cogereene UUID, you can use the SQL request:

```sql
-- Adds the missing fields to the table
ALTER TABLE users
ADD COLUMN uuid CHAR(36) UNIQUE DEFAULT NULL,
ADD COLUMN accessToken CHAR(32) DEFAULT NULL,
ADD COLUMN serverID VARCHAR(41) DEFAULT NULL;

-- Adds expansion for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Adds trigger to generate uuid
CREATE OR REPLACE FUNCTION public.users_uuid_trigger_func()
    RETURNS trigger
    LANGUAGE plpgsql
AS $function$
    BEGIN
        new.uuid = (SELECT uuid_generate_v4());
        return new;
    END;
$function$
CREATE trigger users_uuid_trigger
    BEFORE INSERT ON users
    FOR EACH ROW
    EXECUTE PROCEDURE users_uuid_trigger_func();

-- Generates UUID for existing users
UPDATE users SET uuid=(SELECT uuid_generate_v4()) WHERE uuid IS NULL;
```

### Method FileAuthSystem

Data storage system system in the file `.json`

#### Installation of the module

1. Copy the module **FileAuthSystem_module.jar** in the folder **/LaunchServer/modules/**
2. Launch launchserver and register the command `fileauthsystem install`
3. Register users with a commandm `config auth.std.core register [username] email [password]`
4. Everything!

#### Commands

Enter `config auth.std.core` and click Tab to view available commands

#### Configuration

- autoSave - automatically save the database to the file when stopping Launchserver

```
{
   "autoSave": true
}
```

- Type authCoreProvider `fileauthsystem`, configuration:

```json
{
  "type": "fileauthsystem"
}
```

- When installing through `FileauthSystem Install` AuthCoreProvider will be installed automatically
