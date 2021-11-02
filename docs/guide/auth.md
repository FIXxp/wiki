# Настройка авторизации

## Пример готовой конфигурации

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

## Описание конфигурации

`address` - адрес mysql сервера  
`port` - порт mysql сервера  
`username` - имя пользователя  
`password` - пароль пользователя  
`database` - база данных (до ?), после находится установка серверной таймзоны  
`timezone` - установка клиентской таймзоны  
`useHikari` - использовать ли HikariCP  

`passwordVerifier` - ваш PasswordVerifier см подробнее в [PasswordVerifier](/guide/auth.md#конфигурация-passwordverifier)

`textureProvider` - отвечает за выдачу скинов и плащей [TextureProvider](/guide/auth.md#textureProvider)

`table` - таблица  
`tableHwid` - таблица c HWID
`uuidColumn` - название столбца с uuid  
`usernameColumn` - название столбца с именами пользователей  
`passwordColumn` - название столбца с паролем пользователя  
`accessTokenColumn` - название столбца с accessToken  
`hardwareIdColumn` - название столбца с ID записи в таблице hwids  
`serverIDColumn` - название столбца с serverID  

## Система скинов и плащей (TextureProvider)

### Способ Void

Скины и плащи полностью отключены. Пример конфигурации:

```json
"textureProvider": {
  "type": "void"
},
```

### Способ Request

В данном способе скины и плащи настраиваются всего двумя параметрами - маской URL на PNG-файл. Пример конфигурации:

```json
"textureProvider": {
  "skinURL": "http://example.com/skins/%username%.png",
  "cloakURL": "http://example.com/cloaks/%username%.png",
  "type": "request"
},
```

У данного способа есть существенный минус - нет поддержки slim скинов

### Способ Json

Готовая реализация выдачи скинов, плащей, слим скинов [php-скрипт](https://github.com/microwin7/GravitLauncher-TextureProvider) от микровина

```json
"textureProvider": {
  "url": "https://example.com/TextureProvider.php?login=%uuid%",
  "type": "json"
},
```

## Конфигурация PasswordVerifier

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


`digest` - хеширует пароль выбранным алгоритмом. Поддерживаются любые алгоритмы, реализованные в Java или BouncyCastle  
`doubleDigest` - хеширует пароль выбранным алгоритмом дважды. `toHexMode` перед вторым раундом хеширования переведет хеш в HEX формат. Поддерживаются любые алгоритмы, реализованные в Java или BouncyCastle  
`bcrypt`(Модуль `AddionalHash`) - проверяет пароль по алгоритму BCrypt(password_verify в PHP)  
`phpass`(Модуль `AddionalHash`) - проверяет пароль по алгоритму phpass(WordPress)  

## Способы авторизации

### Способ reject

Принимает любые пары логин-пароль за неверные. Этот способ можно использовать во время проведения технических работ. Пример конфигурации:

```json
"auth": {
    "std": {
      "core": {
      "type": "reject",
      "isDefault": true,
      "displayName": "Default"
    }
} 
```

### Способ  MySQL

Этот обработчик хранит все данные об авторизациях в MySQL-базе данных, использует UUID готовые. Этот обработчик рекомендуется использовать всем проектам по мере возможности. Пример конфигурации:

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
      },
      "isDefault": true,
      "displayName": "Default"
    }
} 
```

Для того чтобы добавить недостающие поля и сгеренерировать UUID, можно использовать SQL-запрос:

```sql

-- Добавляет недостающие поля в таблицу
ALTER TABLE users
ADD COLUMN uuid CHAR(36) UNIQUE DEFAULT NULL,
ADD COLUMN accessToken CHAR(32) DEFAULT NULL,
ADD COLUMN serverID VARCHAR(41) DEFAULT NULL,
ADD COLUMN hwidId BIGINT DEFAULT NULL;
-- Создаёт триггер на генерацию UUID для новых пользователей
DELIMITER //
CREATE TRIGGER setUUID BEFORE INSERT ON users
FOR EACH ROW BEGIN
IF NEW.uuid IS NULL THEN
SET NEW.uuid = UUID();
END IF;
END; //
DELIMITER ;
-- Генерирует UUID для уже существующих пользователей
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
<!-- ### Обработчик JSON -->

### Способ FileAuthSystem

Система пользователей с хранением данных в файле `.json`

#### Установка модуля

1. Скопировать модуль **FileAuthSystem_module.jar** в папку **/LaunchServer/modules/**
2. Запустить LaunchServer и прописать команду `fileauthsystem install`
3. Зарегистрируйте пользователей командой `config auth.std.core register [username] email [password]`
4. Всё!

#### Команды

Введите `config auth.std.core` и нажмите TAB для просмотра доступных команд

#### Конфигурация

- autoSave - автоматически сохранить базу данных в файл при остановке LaunchServer

```
{
   "autoSave": true
}
```

- Тип authCoreProvider `fileauthsystem`, конфигурация:

```json
{
  "type": "fileauthsystem"
}
```

- При установке через `fileauthsystem install` AuthCoreProvider будет установлен автоматически
