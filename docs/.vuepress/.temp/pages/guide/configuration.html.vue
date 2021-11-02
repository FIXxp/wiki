<template><h1 id="конфигурация" tabindex="-1"><a class="header-anchor" href="#конфигурация" aria-hidden="true">#</a> Конфигурация</h1>
<h2 id="пример-готовои-конфигурации" tabindex="-1"><a class="header-anchor" href="#пример-готовои-конфигурации" aria-hidden="true">#</a> Пример готовой конфигурации</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"projectName"</span><span class="token operator">:</span> <span class="token string">"GravitProject"</span><span class="token punctuation">,</span>
  <span class="token property">"mirrors"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"https://mirror.gravit.pro/"</span><span class="token punctuation">,</span>
    <span class="token string">"https://gravit-launcher-mirror.storage.googleapis.com/"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"binaryName"</span><span class="token operator">:</span> <span class="token string">"Launcher"</span><span class="token punctuation">,</span>
  <span class="token property">"copyBinaries"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"cacheUpdates"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"STD"</span><span class="token punctuation">,</span>
  <span class="token property">"auth"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"std"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"reject"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Default"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"sessions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"autoDump"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"dumpFile"</span><span class="token operator">:</span> <span class="token string">"sessions.json"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"memory"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"protectHandler"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"profileWhitelist"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"allowUpdates"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"std"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"components"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"regLimiter"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Превышен лимит регистраций"</span><span class="token punctuation">,</span>
      <span class="token property">"excludeIps"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"rateLimit"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"rateLimitMillis"</span><span class="token operator">:</span> <span class="token number">36000000</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"regLimiter"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"authLimiter"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Превышен лимит авторизаций"</span><span class="token punctuation">,</span>
      <span class="token property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"rateLimit"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"rateLimitMillis"</span><span class="token operator">:</span> <span class="token number">8000</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"authLimiter"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"proguard"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"modeAfter"</span><span class="token operator">:</span> <span class="token string">"MainBuild"</span><span class="token punctuation">,</span>
      <span class="token property">"dir"</span><span class="token operator">:</span> <span class="token string">"proguard"</span><span class="token punctuation">,</span>
      <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"mappings"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"proguard"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"launch4j"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"setMaxVersion"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"maxVersion"</span><span class="token operator">:</span> <span class="token string">"1.8.999"</span><span class="token punctuation">,</span>
    <span class="token property">"minVersion"</span><span class="token operator">:</span> <span class="token string">"1.8.0"</span><span class="token punctuation">,</span>
    <span class="token property">"downloadUrl"</span><span class="token operator">:</span> <span class="token string">"http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html"</span><span class="token punctuation">,</span>
    <span class="token property">"productName"</span><span class="token operator">:</span> <span class="token string">"GravitLauncher"</span><span class="token punctuation">,</span>
    <span class="token property">"productVer"</span><span class="token operator">:</span> <span class="token string">"5.2.4.4"</span><span class="token punctuation">,</span>
    <span class="token property">"fileDesc"</span><span class="token operator">:</span> <span class="token string">"GravitLauncher 5.2.4"</span><span class="token punctuation">,</span>
    <span class="token property">"fileVer"</span><span class="token operator">:</span> <span class="token string">"5.2.4.4"</span><span class="token punctuation">,</span>
    <span class="token property">"internalName"</span><span class="token operator">:</span> <span class="token string">"Launcher"</span><span class="token punctuation">,</span>
    <span class="token property">"copyright"</span><span class="token operator">:</span> <span class="token string">"© GravitLauncher Team"</span><span class="token punctuation">,</span>
    <span class="token property">"trademarks"</span><span class="token operator">:</span> <span class="token string">"This product is licensed under GPLv3"</span><span class="token punctuation">,</span>
    <span class="token property">"txtFileVersion"</span><span class="token operator">:</span> <span class="token string">"%s, build %d"</span><span class="token punctuation">,</span>
    <span class="token property">"txtProductVersion"</span><span class="token operator">:</span> <span class="token string">"%s, build %d"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"netty"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"fileServerEnabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"sendExceptionEnabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"ipForwarding"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"disableWebApiInterface"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"showHiddenFiles"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"launcherURL"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9274/Launcher.jar"</span><span class="token punctuation">,</span>
    <span class="token property">"downloadURL"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9274/%dirname%/"</span><span class="token punctuation">,</span>
    <span class="token property">"launcherEXEURL"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9274/Launcher.exe"</span><span class="token punctuation">,</span>
    <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"ws://localhost:9274/api"</span><span class="token punctuation">,</span>
    <span class="token property">"bindings"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"performance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"usingEpoll"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"bossThread"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"workerThread"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">"schedulerThread"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"sessionLifetimeMs"</span><span class="token operator">:</span> <span class="token number">86400000</span><span class="token punctuation">,</span>
      <span class="token property">"maxWebSocketRequestBytes"</span><span class="token operator">:</span> <span class="token number">1048576</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"binds"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span>
        <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">9274</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"logLevel"</span><span class="token operator">:</span> <span class="token string">"DEBUG"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"launcher"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"guardType"</span><span class="token operator">:</span> <span class="token string">"no"</span><span class="token punctuation">,</span>
    <span class="token property">"compress"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"stripLineNumbers"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"deleteTempFiles"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"certificatePinning"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"encryptRuntime"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"memoryLimit"</span><span class="token operator">:</span> <span class="token number">256</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"keyStore"</span><span class="token operator">:</span> <span class="token string">"pathToKey"</span><span class="token punctuation">,</span>
    <span class="token property">"keyStoreType"</span><span class="token operator">:</span> <span class="token string">"JKS"</span><span class="token punctuation">,</span>
    <span class="token property">"keyStorePass"</span><span class="token operator">:</span> <span class="token string">"mypass"</span><span class="token punctuation">,</span>
    <span class="token property">"keyAlias"</span><span class="token operator">:</span> <span class="token string">"myname"</span><span class="token punctuation">,</span>
    <span class="token property">"keyPass"</span><span class="token operator">:</span> <span class="token string">"mypass"</span><span class="token punctuation">,</span>
    <span class="token property">"metaInfKeyName"</span><span class="token operator">:</span> <span class="token string">"SIGNUMO.RSA"</span><span class="token punctuation">,</span>
    <span class="token property">"metaInfSfName"</span><span class="token operator">:</span> <span class="token string">"SIGNUMO.SF"</span><span class="token punctuation">,</span>
    <span class="token property">"signAlgo"</span><span class="token operator">:</span> <span class="token string">"SHA256WITHRSA"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"startScript"</span><span class="token operator">:</span> <span class="token string">".\\start.bat"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br></div></div><h2 id="описание-настроек-конфигурации" tabindex="-1"><a class="header-anchor" href="#описание-настроек-конфигурации" aria-hidden="true">#</a> Описание настроек конфигурации</h2>
<p><code>projectName</code> - название вашего проекта<br>
<code>mirrors</code> - список зеркал, для скачивания файлов игры. Для получения подробной информации смотрите раздел <a href="/guide/clients" target="_blank" rel="noopener noreferrer">Загрузка клиентов<OutboundLink/></a><br>
<code>binaryName</code> - Имя бинарника в папке updates. Меняя его не забывайте менять URL скачки<br>
<code>copyBinaries</code> - Помещать ли бинарники в папку updates<br>
<code>env</code>- окружение, влияет на уровень отладочных сообщений<br>
<code>auth</code> - отвечает за авторизацию и отдачу скинов <a href="/guide/auth" target="_blank" rel="noopener noreferrer">Настройка авторизации<OutboundLink/></a><br>
<code>protectHandler</code> - отвечает за выдачу токенов(accessToken) <a href="/guide/protecthandler" target="_blank" rel="noopener noreferrer">Настройка ProtectHandler<OutboundLink/></a><br>
<code>sessions</code> - отвечает за хранение сессий<br>
<code>components</code> - опциональные компоненты</p>
<ul>
<li><code>regLimiter</code> - ограничение регистрации
<ul>
<li><code>message</code>: - сообщение в случае превышение лимита</li>
<li><code>excludeIps</code></li>
<li><code>exclude</code></li>
<li><code>rateLimit</code> - количество попыток до ограничения</li>
<li><code>rateLimitMillis</code> - время до снятия ограничения в мс</li>
</ul>
</li>
<li><code>authLimiter</code> - ограничение количества попыток авторизаций
<ul>
<li><code>message</code> - сообщение в случае превышение лимита</li>
<li><code>exclude</code> - белый список :think:</li>
<li><code>rateLimit</code> - количество попыток авторизации до ограничения</li>
<li><code>rateLimitMillis</code> - время до снятия ограничения в мс</li>
</ul>
</li>
<li><code>proguard</code> - отвечает за обфускацию лаунчера
<ul>
<li><code>modeAfter</code> - режим работы</li>
<li><code>dir</code> - папка с proguard</li>
<li><code>enabled</code> - включить обфускацию</li>
<li><code>mappings</code> - включить генерацию маппингов proguard</li>
</ul>
</li>
</ul>
<p><code>launch4j</code> - создание EXE из JAR</p>
<ul>
<li><code>enabled</code> - включить создание EXE</li>
<li><code>setMaxVersion</code> - ограничивает версию Java в пределах диапозона версий см. ниже</li>
<li><code>maxVersion</code> - максимальная версия Java</li>
<li><code>minVersion</code> - минимальная версия Java</li>
<li><code>downloadUrl</code> - ссылка для скачивания Java в случае её отсутствия</li>
</ul>
<p><code>netty</code></p>
<ul>
<li><code>fileServerEnabled</code> - включить раздачу файлов из updates по http</li>
<li><code>sendExceptionEnabled</code> - разрешить отправку сообщений об ошибке лаунчсервера на клиент</li>
<li><code>disableWebApiInterface</code> - отключение /webapi - http запросов к лаунчсерверу</li>
<li><code>ipForwarding</code> - разрешить проксирование реального IP через HTTP заголовки. Включить если используется проксирование nginx/apache2/cloudflare</li>
<li><code>showHiddenFiles</code> - разрешает раздачу скрытых файлов</li>
<li><code>launcherURL</code> - URL для скачивание лаунчера(JAR)</li>
<li><code>downloadURL</code> - URL для скачивание клиентов и ассетов</li>
<li><code>launcherEXEURL</code> - URL скачки лаунчера(EXE)</li>
<li><code>address</code> - адрес WebSocket API, по которому лаунчер будет подключаться</li>
<li><code>bindings</code> - настройки особых URL для скачивание ассетов/клиентов</li>
<li><code>performance</code>
<ul>
<li><code>usingEpoll</code> - ускоряет работу с множеством соеденений(доступно только для Linux)</li>
<li><code>bossThread</code> - число потоков на прием соеденений</li>
<li><code>workerThread</code> - число потоков на обработку запросов</li>
</ul>
</li>
<li><code>binds</code> - адреса прослушивания сокета(bind)</li>
<li><code>logLevel</code> - уровень сообщений Netty в логгере slf4j</li>
</ul>
<p><code>launcher</code> - настройки лаунчера</p>
<ul>
<li><code>guardType</code> - тип нативной защиты AntiInject(см инструкцию к вашей нативной защите)</li>
<li><code>compress</code> - сжатие итогового файла</li>
<li><code>stripLineNumbers</code> - включить вырезание отладочной информации</li>
<li><code>deleteTempFiles</code> - удалять временные файлы в папке build</li>
</ul>
<p><code>sign</code> - настройки подписи лаунчера <a href="/guide/sign" target="_blank" rel="noopener noreferrer">Подпись лаунчера<OutboundLink/></a><br>
<code>startScript</code> - Скрипт запуска лаунчсервера(используется только в команде restart)</p>
</template>
