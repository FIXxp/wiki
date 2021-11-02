<template><h1 id="настроика-nginx" tabindex="-1"><a class="header-anchor" href="#настроика-nginx" aria-hidden="true">#</a> Настройка nginx</h1>
<p>Для достижения оптимальной производительности отдачи файлов нужно настроить Nginx</p>
<CodeGroup>
  <CodeGroupItem title="no SSL" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name ВАШДОМЕН.ru<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
                root /путь/до/updates<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /api <span class="token punctuation">{</span>
                proxy_pass http://127.0.0.1:9274/api<span class="token punctuation">;</span>
                proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
                proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /webapi <span class="token punctuation">{</span>
                proxy_pass http://127.0.0.1:9274/webapi<span class="token punctuation">;</span>
                proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
                proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>  </CodeGroupItem>
    <CodeGroupItem title="SSL">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen <span class="token number">80</span> http2<span class="token punctuation">;</span>
        server_name ВАШДОМЕН.ru<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
                root /путь/до/updates<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /api <span class="token punctuation">{</span>
                proxy_pass http://127.0.0.1:9274/api<span class="token punctuation">;</span>
                proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
                proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /webapi/ <span class="token punctuation">{</span>
                proxy_pass http://127.0.0.1:9274/webapi/<span class="token punctuation">;</span>
                proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
                proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
</template>
