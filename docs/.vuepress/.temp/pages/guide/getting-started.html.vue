<template><h1 id="начало-работы" tabindex="-1"><a class="header-anchor" href="#начало-работы" aria-hidden="true">#</a> Начало работы</h1>
<h2 id="требования" tabindex="-1"><a class="header-anchor" href="#требования" aria-hidden="true">#</a> Требования</h2>
<ul>
<li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Java 17<OutboundLink/></a></li>
</ul>
<h2 id="установка" tabindex="-1"><a class="header-anchor" href="#установка" aria-hidden="true">#</a> Установка</h2>
<p>Этот раздел поможет вам создать лаунчсервер нуля. Если у вас уже установлена Java 17, начните с шага 3.</p>
<p><strong>Шаг 1</strong>: Установка Java 17</p>
<CodeGroup>
  <CodeGroupItem title="Debian" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> upgrade
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">apt</span> <span class="token function">curl</span> <span class="token function">wget</span> nftables openjdk-17-jdk 
<span class="token function">wget</span> <span class="token string">"https://download2.gluonhq.com/openjfx/17.0.0.1/openjfx-17.0.0.1_linux-x64_bin-jmods.zip"</span>
<span class="token function">unzip</span> openjfx-17.0.0.1_linux-x64_bin-jmods.zip
<span class="token function">cp</span> javafx-jmods-17.0.0.1/* /usr/lib/jvm/java-17-openjdk-amd64/jmods
<span class="token function">rm</span> -r javafx-jmods-17.0.0.1
<span class="token function">rm</span> openjfx-17.0.0.1_linux-x64_bin-jmods.zip
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>  </CodeGroupItem>
    <CodeGroupItem title="ArchLinux">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pacman -Syu jdk8-openjdk java8-openjfx jdk-openjdk java-openjfx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p><strong>Шаг 2</strong>: Установка Java 8</p>
<CodeGroup>
  <CodeGroupItem title="Debian" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> -qO - <span class="token string">"https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public"</span> <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
add-apt-repository --yes <span class="token string">"https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/"</span>
<span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> adoptopenjdk-8-hotspot
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>  </CodeGroupItem>
    <CodeGroupItem title="ArchLinux">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pacman -Syu jdk8-openjdk java8-openjfx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p><strong>Шаг 3</strong>: Запустите скрипт установки в удобной для Вас директории:</p>
<CodeGroup>
  <CodeGroupItem title="master" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -s https://mirror.gravit.pro/scripts/setup-master.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="dev">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -s https://mirror.gravit.pro/scripts/setup-dev.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p><strong>Шаг 4</strong>: Запустите лаунчсервер командой:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sh</span> start.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Лаунчсервер в интерактивном режиме запросит подробную информацию для настройки</p>
<ul>
<li>Название проекта</li>
<li>IP адресс</li>
</ul>
<p><strong>Шаг 5</strong>: Закройте лаунчсервер командой :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>stop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
