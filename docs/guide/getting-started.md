---
description: Этот раздел поможет вам создать и настроить лаунчсервер с нуля
---

# Начало работы

## Выбор хостинга

Для работы лаунчсервера необходим виртуальный (VDS/VPS) или выделенный сервер на дистрибутиве Linux, а требуется минимум **300 мб** свободной **оперативной памяти**, но для сборки потребоваться **до 1ГБ оперативной памяти** для работы [gradle](https://ru.wikipedia.org/wiki/Gradle)

В связи со сложившейся ситуацией, мы **рекомендуем** использовать услуги **российского** хостинга [beget.com](https://beget.com/ru/vps) или [VDSina.ru](https://vdsina.ru/?partner=3z7v4137aw)

## Установка

Этот раздел поможет вам создать лаунчсервер нуля. Если у вас уже установлена Java 17, начните с шага 3.

**Шаг 1**: Установка Java 17 with JavaFX, curl, wget

<CodeGroup>
  <CodeGroupItem title="Debian" active>

```bash
apt-get update && apt-get upgrade
apt-get install apt curl wget openjdk-17-jdk 
wget "https://download2.gluonhq.com/openjfx/17.0.0.1/openjfx-17.0.0.1_linux-x64_bin-jmods.zip"
unzip openjfx-17.0.0.1_linux-x64_bin-jmods.zip
cp javafx-jmods-17.0.0.1/* /usr/lib/jvm/java-17-openjdk-amd64/jmods
rm -r javafx-jmods-17.0.0.1
rm openjfx-17.0.0.1_linux-x64_bin-jmods.zip
```

  </CodeGroupItem>
    <CodeGroupItem title="ArchLinux">

```bash
pacman -Syu jdk-openjdk java-openjfx
```

  </CodeGroupItem>
</CodeGroup>

**Шаг 2**: Установка Java 8

<CodeGroup>
  <CodeGroupItem title="Debian" active>

```bash
wget -qO - "https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public" | sudo apt-key add -
add-apt-repository --yes "https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/"
apt-get update && apt-get install adoptopenjdk-8-hotspot
```

  </CodeGroupItem>
    <CodeGroupItem title="ArchLinux">

```bash
pacman -Syu jdk8-openjdk java8-openjfx
```

  </CodeGroupItem>
</CodeGroup>

:::tip
Eсли у вас уже установлена Java 8 или сервера находсятся на другом сервере, то этот шаг можно пропустить т.к он служит для запуска игровых серверов до 1.16.5
:::

**Шаг 3**: Запустите скрипт установки в удобной для Вас директории:

<CodeGroup>
  <CodeGroupItem title="master" active>

```bash
curl -s https://mirror.gravit.pro/scripts/setup-master.sh | sh
```

  </CodeGroupItem>

  <CodeGroupItem title="dev">

```bash
curl -s https://mirror.gravit.pro/scripts/setup-dev.sh | sh
```

  </CodeGroupItem>
</CodeGroup>

**Шаг 4**: Запустите лаунчсервер командой:

```bash
/usr/lib/jvm/java-17-openjdk-amd64/bin/java -javaagent:LaunchServer.jar -jar LaunchServer.jar;
```

Лаунчсервер в интерактивном режиме запросит подробную информацию для настройки

- Название проекта
- IP адрес

**Шаг 5**: Закройте лаунчсервер командой :

```bash
stop
```  

После выполнения данных действий, нужно будет:

- настроить [авторизацию](auth.md)
- [cобрать клиент](clients.md)
- [привязать игровой сервер](servers.html#привязка-игрового-сервера) к лаунчсерверу
- [настроить nginx](nginx.md)
