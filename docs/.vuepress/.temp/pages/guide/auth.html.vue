<template><h1 id="настроика-авторизации" tabindex="-1"><a class="header-anchor" href="#настроика-авторизации" aria-hidden="true">#</a> Настройка авторизации</h1>
<h2 id="пример-готовои-конфигурации" tabindex="-1"><a class="header-anchor" href="#пример-готовои-конфигурации" aria-hidden="true">#</a> Пример готовой конфигурации</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"auth"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"std"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"mysql"</span><span class="token punctuation">,</span>
        <span class="token property">"mySQLHolder"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
          <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
          <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"launchserver"</span><span class="token punctuation">,</span>
          <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span>
          <span class="token property">"database"</span><span class="token operator">:</span> <span class="token string">"db?serverTimezone=UTC"</span><span class="token punctuation">,</span>
          <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"UTC"</span><span class="token punctuation">,</span>
          <span class="token property">"useHikari"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"SHA256"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"digest"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"table"</span><span class="token operator">:</span> <span class="token string">"users"</span><span class="token punctuation">,</span>
        <span class="token property">"tableHwid"</span><span class="token operator">:</span> <span class="token string">"hwids"</span><span class="token punctuation">,</span>
        <span class="token property">"uuidColumn"</span><span class="token operator">:</span> <span class="token string">"uuid"</span><span class="token punctuation">,</span>
        <span class="token property">"usernameColumn"</span><span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span>
        <span class="token property">"passwordColumn"</span><span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span>
        <span class="token property">"accessTokenColumn"</span><span class="token operator">:</span> <span class="token string">"accessToken"</span><span class="token punctuation">,</span>
        <span class="token property">"hardwareIdColumn"</span><span class="token operator">:</span> <span class="token string">"hwidId"</span><span class="token punctuation">,</span>
        <span class="token property">"serverIDColumn"</span><span class="token operator">:</span> <span class="token string">"serverID"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Default"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="описание-конфигурации" tabindex="-1"><a class="header-anchor" href="#описание-конфигурации" aria-hidden="true">#</a> Описание конфигурации</h2>
<p><code>address</code> - адрес mysql сервера<br>
<code>port</code> - порт mysql сервера<br>
<code>username</code> - имя пользователя<br>
<code>password</code> - пароль пользователя<br>
<code>database</code> - база данных (до ?), после находится установка серверной таймзоны<br>
<code>timezone</code> - установка клиентской таймзоны<br>
<code>useHikari</code> - использовать ли HikariCP</p>
<p><code>passwordVerifier</code> - ваш PasswordVerifier см подробнее в <a href="/guide/auth.md#%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-passwordverifier" target="_blank" rel="noopener noreferrer">PasswordVerifier<OutboundLink/></a></p>
<p><code>textureProvider</code> - отвечает за выдачу скинов и плащей <a href="/guide/auth.md#textureProvider" target="_blank" rel="noopener noreferrer">TextureProvider<OutboundLink/></a></p>
<p><code>table</code> - таблица<br>
<code>tableHwid</code> - таблица c HWID
<code>uuidColumn</code> - название столбца с uuid<br>
<code>usernameColumn</code> - название столбца с именами пользователей<br>
<code>passwordColumn</code> - название столбца с паролем пользователя<br>
<code>accessTokenColumn</code> - название столбца с accessToken<br>
<code>hardwareIdColumn</code> - название столбца с ID записи в таблице hwids<br>
<code>serverIDColumn</code> - название столбца с serverID</p>
<h2 id="система-скинов-и-плащеи-textureprovider" tabindex="-1"><a class="header-anchor" href="#система-скинов-и-плащеи-textureprovider" aria-hidden="true">#</a> Система скинов и плащей (TextureProvider)</h2>
<h3 id="способ-request" tabindex="-1"><a class="header-anchor" href="#способ-request" aria-hidden="true">#</a> Способ Request</h3>
<p>В данном способе скины и плащи настраиваются всего двумя параметрами - маской URL на PNG-файл. Пример конфигурации:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
  <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>У данного способа есть существенный минус - нет поддержки slim скинов</p>
<h3 id="способ-json" tabindex="-1"><a class="header-anchor" href="#способ-json" aria-hidden="true">#</a> Способ Json</h3>
<p>Готовая реализация выдачи скинов, плащей, слим скинов <a href="https://github.com/microwin7/GravitLauncher-TextureProvider" target="_blank" rel="noopener noreferrer">php-скрипт<OutboundLink/></a> от микровина</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://example.com/TextureProvider.php?login=%uuid%"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"json"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="конфигурация-passwordverifier" tabindex="-1"><a class="header-anchor" href="#конфигурация-passwordverifier" aria-hidden="true">#</a> Конфигурация PasswordVerifier</h2>
<CodeGroup>
  <CodeGroupItem title="digest" active>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"SHA256"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"digest"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="doubleDigest">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"SHA256"</span><span class="token punctuation">,</span>
  <span class="token property">"toHexMode"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"doubleDigest"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="bcrypt">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bcrypt"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>  </CodeGroupItem>
    <CodeGroupItem title="phpass">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"phpass"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p><code>digest</code> - хеширует пароль выбранным алгоритмом. Поддерживаются любые алгоритмы, реализованные в Java или BouncyCastle<br>
<code>doubleDigest</code> - хеширует пароль выбранным алгоритмом дважды. <code>toHexMode</code> перед вторым раундом хеширования переведет хеш в HEX формат. Поддерживаются любые алгоритмы, реализованные в Java или BouncyCastle<br>
<code>bcrypt</code>(Модуль <code>AddionalHash</code>) - проверяет пароль по алгоритму BCrypt(password_verify в PHP)<br>
<code>phpass</code>(Модуль <code>AddionalHash</code>) - проверяет пароль по алгоритму phpass(WordPress)</p>
<h2 id="обработчики" tabindex="-1"><a class="header-anchor" href="#обработчики" aria-hidden="true">#</a> Обработчики</h2>
<h3 id="обработчик-mysql" tabindex="-1"><a class="header-anchor" href="#обработчик-mysql" aria-hidden="true">#</a> Обработчик MySQL</h3>
<p>Этот обработчик хранит все данные об авторизациях в MySQL-базе данных, использует UUID готовые. Этот обработчик рекомендуется использовать всем проектам по мере возможности. Пример конфигурации:</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>
<span class="token comment">-- Добавляет недостающие поля в таблицу</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> users
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> uuid <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> accessToken <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> serverID <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> hwidId <span class="token keyword">BIGINT</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
<span class="token comment">-- Создаёт триггер на генерацию UUID для новых пользователей</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> setUUID BEFORE <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> users
<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>
<span class="token keyword">IF</span> NEW<span class="token punctuation">.</span>uuid <span class="token operator">IS</span> <span class="token boolean">NULL</span> <span class="token keyword">THEN</span>
<span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>uuid <span class="token operator">=</span> UUID<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span> <span class="token comment">//</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
<span class="token comment">-- Генерирует UUID для уже существующих пользователей</span>
<span class="token keyword">UPDATE</span> users <span class="token keyword">SET</span> uuid<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> UUID<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">WHERE</span> uuid <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">`</span>hwids<span class="token punctuation">`</span> <span class="token punctuation">(</span>
  <span class="token punctuation">`</span>id<span class="token punctuation">`</span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>publickey<span class="token punctuation">`</span> <span class="token keyword">blob</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>hwDiskId<span class="token punctuation">`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>baseboardSerialNumber<span class="token punctuation">`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>graphicCard<span class="token punctuation">`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>displayId<span class="token punctuation">`</span> <span class="token keyword">blob</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>bitness<span class="token punctuation">`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>totalMemory<span class="token punctuation">`</span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>logicalProcessors<span class="token punctuation">`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>physicalProcessors<span class="token punctuation">`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>processorMaxFreq<span class="token punctuation">`</span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>battery<span class="token punctuation">`</span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>banned<span class="token punctuation">`</span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">"0"</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token punctuation">`</span>hwids<span class="token punctuation">`</span>
  <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">ADD</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token punctuation">`</span>publickey<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>publickey<span class="token punctuation">`</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token punctuation">`</span>hwids<span class="token punctuation">`</span>
  <span class="token keyword">MODIFY</span> <span class="token punctuation">`</span>id<span class="token punctuation">`</span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token punctuation">`</span>users<span class="token punctuation">`</span>
  <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token punctuation">`</span>users_hwidfk<span class="token punctuation">`</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>hwidId<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token punctuation">`</span>hwids<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><!-- ### Обработчик JSON -->
<h3 id="обработчик-fileauthsystem" tabindex="-1"><a class="header-anchor" href="#обработчик-fileauthsystem" aria-hidden="true">#</a> Обработчик FileAuthSystem</h3>
<p>Система пользователей с хранением данных в файле <code>.json</code></p>
<h4 id="установка-модуля" tabindex="-1"><a class="header-anchor" href="#установка-модуля" aria-hidden="true">#</a> Установка модуля</h4>
<ol>
<li>Скопировать модуль <strong>FileAuthSystem_module.jar</strong> в папку <strong>/LaunchServer/modules/</strong></li>
<li>Запустить LaunchServer и прописать команду <code>fileauthsystem install</code></li>
<li>Зарегистрируйте пользователей командой <code>config auth.std.core register [username] email [password]</code></li>
<li>Всё!</li>
</ol>
<h4 id="команды" tabindex="-1"><a class="header-anchor" href="#команды" aria-hidden="true">#</a> Команды</h4>
<p>Введите <code>config auth.std.core</code> и нажмите TAB для просмотра доступных команд</p>
<h4 id="конфигурация" tabindex="-1"><a class="header-anchor" href="#конфигурация" aria-hidden="true">#</a> Конфигурация</h4>
<ul>
<li>autoSave - автоматически сохранить базу данных в файл при остановке LaunchServer</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
   "autoSave": true
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>Тип authCoreProvider <code>fileauthsystem</code>, конфигурация:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"fileauthsystem"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>При установке через <code>fileauthsystem install</code> AuthCoreProvider будет установлен автоматически</li>
</ul>
</template>
