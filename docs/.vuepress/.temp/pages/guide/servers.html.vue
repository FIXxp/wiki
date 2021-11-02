<template><h1 id="работа-с-игровым-сервером" tabindex="-1"><a class="header-anchor" href="#работа-с-игровым-сервером" aria-hidden="true">#</a> Работа с игровым сервером</h1>
<h2 id="привязка-игрового-сервера" tabindex="-1"><a class="header-anchor" href="#привязка-игрового-сервера" aria-hidden="true">#</a> Привязка игрового сервера</h2>
<p>Чтобы обеспечинить полноценную работу лаунчсервера и Вашего игрового сервера - нужно установить ServerWrapper.</p>
<p><strong>Шаг 1</strong>: Выберите и скачайте нужное вам ядро сервера на нашем <a href="'https://mirror.gravit-laucnher.ru'">зеркале</a></p>
<p><strong>Шаг 2</strong>: Поместите ServerWrapper(он находится в директории лаунчсервера) в директорию вашего игрового сервера<br>
<strong>Шаг 3</strong>: Откройте лаунчсервер и выполните следующую команду, скопируйте получившийся уникальный индификатора сервера</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>token server <span class="token operator">&lt;</span>server-name<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Шаг 4</strong>: Перейдите в директорию Вашего игрового сервера и выполните команду</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>java -jar ServerWrapper.jar setup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Шаг 5</strong>: Укажите название jar файла вашего серверного ядра, название сервера, адрес лаунчсервера и уникальный индификатора сервера, полученного на <strong>Шаге 2</strong></p>
<h2 id="конфигурация-serverwrapper" tabindex="-1"><a class="header-anchor" href="#конфигурация-serverwrapper" aria-hidden="true">#</a> Конфигурация ServerWrapper</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"projectname"</span><span class="token operator">:</span> <span class="token string">"MineCraft"</span><span class="token punctuation">,</span>
  <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"ws://localhost/api"</span><span class="token punctuation">,</span>
  <span class="token property">"serverName"</span><span class="token operator">:</span> <span class="token string">"Vanilla1.17.1"</span><span class="token punctuation">,</span>
  <span class="token property">"autoloadLibraries"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"classpath"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"mainclass"</span><span class="token operator">:</span> <span class="token string">"io.papermc.paperclip.Paperclip"</span><span class="token punctuation">,</span>
  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"nogui"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"oauthExpireTime"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"extendedTokens"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"checkServer"</span><span class="token operator">:</span> <span class="token string">"sa9c1a52-ufa9-kda6-a488-gfr802av905c"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"STD"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="описание-настроек-serverwrapper" tabindex="-1"><a class="header-anchor" href="#описание-настроек-serverwrapper" aria-hidden="true">#</a> Описание настроек ServerWrapper</h4>
<p><code>projectname</code> - Название проекта<br>
<code>address</code> - Адрес лаунчсервера<br>
<code>serverName</code> - Название сервера в профиле<br>
<code>autoloadLibraries</code> - Автозагрузка библиотек из папки libraries<br>
<code>classpath</code> - Дополнительный classpath<br>
<code>mainclass</code> - Main-Class вашего ядра сервера<br>
<code>args</code> - Аргументы запуска<br>
<code>extendedTokens</code> - уникальный индификатора сервера<br>
<code>env</code> - режим работы ServerWrapper</p>
</template>
