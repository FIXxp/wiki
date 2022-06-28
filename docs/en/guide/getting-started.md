---
description: This section will help you create and configure the launchserver from scratch
---

# Beginning of work

## Hosting choice

For the launched cherver, a virtual (VDS/VPS) or a dedicated server is required at Linux distribution, and a minimum of **300 MB** free **RAM** is required, but it takes **up to 1GB of RAM** to work to work [gradle](https://ru.wikipedia.org/wiki/Gradle)

## Installation

This section will help you create a zero launcher.If you have already installed Java 17, start with 5 step.

**Step 1**: Installation Java 17 with JavaFX, Curl, WGet

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

**Step 2**: Installation Java 8

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
If you have already installed Java 8 or servers, you can go to another server, then this step can be skipped because it serves to launch game servers until 1.16.5
:::

**Step 3**:Launch the installation script in a convenient directory for you:

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

**Step 4**: Launch the launchserver with the command:

```bash
/usr/lib/jvm/java-17-openjdk-amd64/bin/java -javaagent:LaunchServer.jar -jar LaunchServer.jar;
```

The launchserver in interactive mode will request detailed information for configuration

- Project name
- IP address

**Step 5**: Close the launchserver by the command :

```bash
stop
```  

After performing these actions, you will need:

- tune [Authorization](auth.md)
- [Build game client](clients.md)
- [Bind the game server](servers.html#привязка-игрового-сервера) To the launch server
- [Configure Nginx](nginx.md)
