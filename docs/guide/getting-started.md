# Начало работы

## Требования

- [Java 17](https://nodejs.org/)

## Установка

Этот раздел поможет вам создать лаунчсервер нуля. Если у вас уже установлена Java 17, начните с шага 3.

**Шаг 1**: Установка Java 17

<CodeGroup>
  <CodeGroupItem title="Debian" active>

```bash
apt-get update && apt-get upgrade
apt-get install apt curl wget nftables openjdk-17-jdk 
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
- IP адресс

**Шаг 5**: Закройте лаунчсервер командой :

```bash
stop
```  
