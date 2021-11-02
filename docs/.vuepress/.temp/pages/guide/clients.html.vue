<template><h1 id="работа-с-игровым-клиентом" tabindex="-1"><a class="header-anchor" href="#работа-с-игровым-клиентом" aria-hidden="true">#</a> Работа с игровым клиентом</h1>
<h2 id="поддерживаемые-версии" tabindex="-1"><a class="header-anchor" href="#поддерживаемые-версии" aria-hidden="true">#</a> Поддерживаемые версии</h2>
<p>На данный момент лаунчер может запускать все версии с 1.7.10 по актуальную версию Minecraft, кроме Forge +1.17.1</p>
<table>
<thead>
<tr>
<th style="text-align:center">Версия</th>
<th style="text-align:center">Ванилла</th>
<th style="text-align:center">Forge</th>
<th style="text-align:center">Fabric</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1.7.10</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">➖</td>
</tr>
<tr>
<td style="text-align:center">1.8.9</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">➖</td>
</tr>
<tr>
<td style="text-align:center">1.10.2</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">➖</td>
</tr>
<tr>
<td style="text-align:center">1.11.2</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">➖</td>
</tr>
<tr>
<td style="text-align:center">1.12.2</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">➖</td>
</tr>
<tr>
<td style="text-align:center">1.13.2</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">➖</td>
</tr>
<tr>
<td style="text-align:center">1.14.4</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
</tr>
<tr>
<td style="text-align:center">1.15.2</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
</tr>
<tr>
<td style="text-align:center">1.16.5</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">✔️</td>
</tr>
<tr>
<td style="text-align:center">1.17.1</td>
<td style="text-align:center">✔️</td>
<td style="text-align:center">➖</td>
<td style="text-align:center">✔️</td>
</tr>
</tbody>
</table>
<h2 id="установка-клиента" tabindex="-1"><a class="header-anchor" href="#установка-клиента" aria-hidden="true">#</a> Установка клиента</h2>
<p><strong>Шаг 1</strong>: Добавте наше <a href="'https://mirror.gravit-laucnher.ru'">зеркало</a> в конфиг лаунчсервера и перезапустите его</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"mirrors"</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
  <span class="token string">"https://mirror.gravit-launcher.ru/"</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Шаг 2</strong>: Выполните следующую команду для скачивания клиента</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>downloadclient <span class="token operator">&lt;</span>version<span class="token operator">></span> <span class="token operator">&lt;</span>name<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>version</code> - это версия Minecraft.
В настоящее время мы разделяем версии на 3 типа:</p>
<ul>
<li><code>1.16.5</code> - Ванильный Minecraft</li>
<li><code>1.16.5-forge</code> - Minecraft модифицированный Forge</li>
<li><code>1.16.5-fabric</code> - Minecraft модифицированный Fabric</li>
</ul>
<p><code>name</code> - название клиента на ваш выбор</p>
<p><strong>Шаг 3</strong>(Опционально): Выполните следующую команду для скачивание ассетов(тексутры, звуки и т.п) клиента</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>downloadclient <span class="token operator">&lt;</span>version<span class="token operator">></span> asset<span class="token operator">&lt;</span>version<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>В случае скачивания ассетов версию нужно вводить без преписок forge и fabric</p>
</div>
<p>После данных действий клиент скачается в папку <code>updates</code> и будет создан профиль в папке <code>profiles</code></p>
<h2 id="настроика-профиля-клиента" tabindex="-1"><a class="header-anchor" href="#настроика-профиля-клиента" aria-hidden="true">#</a> Настройка профиля клиента</h2>
<p>Пример конфига профиля</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Vanilla1.17"</span><span class="token punctuation">,</span>
  <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"fa9c1a52-6fa9-4da6-a488-9fc80250095c"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.17"</span><span class="token punctuation">,</span>
  <span class="token property">"info"</span><span class="token operator">:</span> <span class="token string">"Информация о сервере"</span><span class="token punctuation">,</span>
  <span class="token property">"dir"</span><span class="token operator">:</span> <span class="token string">"Vanilla1.17"</span><span class="token punctuation">,</span>
  <span class="token property">"sortIndex"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"assetIndex"</span><span class="token operator">:</span> <span class="token string">"1.17"</span><span class="token punctuation">,</span> 
  <span class="token property">"assetDir"</span><span class="token operator">:</span> <span class="token string">"asset1.17"</span><span class="token punctuation">,</span>
  <span class="token property">"update"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"servers.dat"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"updateExclusions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"updateVerify"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"libraries"</span><span class="token punctuation">,</span>
    <span class="token string">"natives"</span><span class="token punctuation">,</span>
    <span class="token string">"minecraft.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"forge.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"liteloader.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"mods"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"updateOptional"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"jvmArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"-XX:+DisableAttachMechanism"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:+UseG1GC"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:+UnlockExperimentalVMOptions"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:G1NewSizePercent\u003d20"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:MaxGCPauseMillis\u003d50"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:G1HeapRegionSize\u003d32M"</span><span class="token punctuation">,</span>
    <span class="token string">"-Djava.library.path\u003dnatives"</span><span class="token punctuation">,</span>
    <span class="token string">"-Dfml.ignorePatchDiscrepancies\u003dtrue"</span><span class="token punctuation">,</span>
    <span class="token string">"-Dfml.ignoreInvalidMinecraftCertificates\u003dtrue"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"classPath"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"libraries"</span><span class="token punctuation">,</span>
    <span class="token string">"minecraft.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"forge.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"liteloader.jar"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"altClassPath"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"clientArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"compatClasses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"servers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Vanilla1.17"</span><span class="token punctuation">,</span>
      <span class="token property">"serverAddress"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span> 
      <span class="token property">"serverPort"</span><span class="token operator">:</span> <span class="token number">25535</span><span class="token punctuation">,</span>
      <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"socketPing"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"classLoaderConfig"</span><span class="token operator">:</span> <span class="token string">"LAUNCHER"</span><span class="token punctuation">,</span>
  <span class="token property">"runtimeInClientConfig"</span><span class="token operator">:</span> <span class="token string">"NONE"</span><span class="token punctuation">,</span>
  <span class="token property">"recommendJavaVersion"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">"minJavaVersion"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">"maxJavaVersion"</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
  <span class="token property">"warnMissJavaVersion"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ram"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"autoEnter"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"fullScreen"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"updateFastCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"limited"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"mainClass"</span><span class="token operator">:</span> <span class="token string">"net.minecraft.client.main.Main"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h4 id="описание-настроек-профиля" tabindex="-1"><a class="header-anchor" href="#описание-настроек-профиля" aria-hidden="true">#</a> Описание настроек профиля</h4>
<p><code>title</code> - заголовок профиля<br>
<code>uuid</code> - UUID профиля<br>
<code>version</code> - версия майнкрафта<br>
<code>info</code> - информация о сервере в окне выбора серверов<br>
<code>dir</code> - папка клиента в updates<br>
<code>sortIndex</code> - порядковый номер в окне выбора серверов<br>
<code>assetIndex</code> - название используемого индекса в ассетах<br>
<code>assetDir</code> - папка с ассетами<br>
<code>update</code> - список файлов и папок, которые будут перекачиваться при старте клиента<br>
<code>updateExclusions</code> - список файлов и папок, которые не надо проверять<br>
<code>updateVerify</code> - список файлов и папок, которые будут перекачиваться при старте клиента и  во время работы<br>
<code>updateOptional</code> - список опциональных модов и дополнительных аргументов более подробнее смотрите в <a href="/guide/clients.md#%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D0%BA%D0%B0-%D0%BE%D0%BF%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%BC%D0%BE%D0%B4%D0%BE%D0%B2" target="_blank" rel="noopener noreferrer">Опциональные моды<OutboundLink/></a><br>
<code>jvmArgs</code> - аргументы JVM<br>
<code>classPath</code> - список файлов и библиотек, загружаемых при запуске выбранным загрузчиком классов<br>
<code>altClassPath</code> - список файлов и библиотек, загружаемых при запуске системным загрузчиком классов<br>
<code>clientArgs</code> - дополнительные аргументы клиента<br>
<code>compatClasses</code> - список дополнительных MainClass, которые будут запущены перед основным<br>
<code>properties</code> - кастомная информация о профиле<br>
<code>servers</code> - список серверов</p>
<ul>
<li><code>name</code> - название сервера</li>
<li><code>serverAddress</code> - адрес сервера</li>
<li><code>serverPort</code> - порт сервера</li>
<li><code>isDefault</code> - по умолчанию</li>
<li><code>socketPing</code> - Прямой пинг для получения онлайна</li>
</ul>
<p><code>classLoaderConfig</code> - тип загрузчика классов (LAUNCHER, AGENT, SYSTEM_ARGS)<br>
<code>runtimeInClientConfig</code> - запуск GUI рантайма при старте клиента (NONE, BASIC, FULL)<br>
<code>recommendJavaVersion</code> - рекомендуемая версия Java<br>
<code>minJavaVersion</code> - минимальная версия Java<br>
<code>maxJavaVersion</code> - максимальная версия Java<br>
<code>warnMissJavaVersion</code> - предупреждение о несоответствии Java требованиям для запуска<br>
<code>settings</code> - настройки по умолчанию</p>
<ul>
<li><code>ram</code> - количество ОЗУ (в мегабайтах), 0 - автоматически</li>
<li><code>autoEnter</code> - авто—вход, может крашиться</li>
<li><code>fullScreen</code> - полноэкранный режим</li>
</ul>
<p><code>updateFastCheck</code> - быстрая проверка файлов<br>
<code>limited</code> - ограничен permissions<br>
<code>mainClass</code> - главный класс клиента</p>
<h2 id="настроика-опциональных-модов" tabindex="-1"><a class="header-anchor" href="#настроика-опциональных-модов" aria-hidden="true">#</a> Настройка опциональных модов</h2>
</template>
