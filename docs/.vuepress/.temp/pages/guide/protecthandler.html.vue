<template><h1 id="protecthandler" tabindex="-1"><a class="header-anchor" href="#protecthandler" aria-hidden="true">#</a> ProtectHandler</h1>
<p>ProtectHandler часть находится в состоянии активной разработки. В дальнейшем будут появлятся всё новые и новые возможности</p>
<h2 id="метод-none" tabindex="-1"><a class="header-anchor" href="#метод-none" aria-hidden="true">#</a> Метод none</h2>
<p>Защита полностью отстуствует</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"protectHandler"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"none"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="метод-std" tabindex="-1"><a class="header-anchor" href="#метод-std" aria-hidden="true">#</a> Метод std</h2>
<p>Стандартный protectHandler</p>
<ul>
<li>Токен авторизации можно получить только если authType CLIENT и пройдена проверка хеша лаунчера</li>
<li>Получить и сменить профиль можно только если пройдена проверка на белый список</li>
<li>Получить можно только такие папки updates: assets выбранного клиента, папка выбранного клиента, все папки из allowUpdates</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"protectHandler"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"profileWhitelist"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"Ваш UUID профиля"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Ник1"</span><span class="token punctuation">,</span> <span class="token string">"Ник2"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"allowUpdates"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"std"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="метод-advanced" tabindex="-1"><a class="header-anchor" href="#метод-advanced" aria-hidden="true">#</a> Метод advanced</h2>
<p>Включает в себя все функции std а так же:</p>
<ul>
<li>Включает механизмы TrustLevel и обмен ключами с клиентом</li>
<li>Включает обработку SecurityReport от нативных защит</li>
<li>Можно включить обработку HardwareInfo и баны по железу</li>
</ul>
<p>Стандартная конфигурация без hardwareFeature</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"protectHandler"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"profileWhitelist"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"Ваш UUID профиля"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Ник1"</span><span class="token punctuation">,</span> <span class="token string">"Ник2"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"allowUpdates"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"advanced"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>profileWhitelist</code> - вайтлист</p>
</template>
