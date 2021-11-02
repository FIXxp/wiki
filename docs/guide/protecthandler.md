# ProtectHandler

ProtectHandler часть находится в состоянии активной разработки. В дальнейшем будут появлятся всё новые и новые возможности

## Метод none

Защита полностью отстуствует

```json
"protectHandler": {
    "type": "none"
}

```

## Метод std

Стандартный protectHandler

- Токен авторизации можно получить только если authType CLIENT и пройдена проверка хеша лаунчера
- Получить и сменить профиль можно только если пройдена проверка на белый список
- Получить можно только такие папки updates: assets выбранного клиента, папка выбранного клиента, все папки из allowUpdates

```json
"protectHandler": {
    "profileWhitelist": { "Ваш UUID профиля": ["Ник1", "Ник2"] }, 
    "allowUpdates": [],
    "type": "std"
}
```

## Метод advanced

Включает в себя все функции std а так же:

- Включает механизмы TrustLevel и обмен ключами с клиентом
- Включает обработку SecurityReport от нативных защит
- Можно включить обработку HardwareInfo и баны по железу

Стандартная конфигурация без hardwareFeature

```json
"protectHandler": {
    "profileWhitelist": { "Ваш UUID профиля": ["Ник1", "Ник2"] },
    "allowUpdates": [],
    "type": "advanced"
}
```

`profileWhitelist` - вайтлист