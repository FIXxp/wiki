import{_ as n,d as a}from"./app.749051e4.js";const s={},e=a(`<h1 id="configuring-nginx" tabindex="-1"><a class="header-anchor" href="#configuring-nginx" aria-hidden="true">#</a> Configuring Nginx</h1><p>To achieve optimal performance performance, you need to configure nginx</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen <span class="token number">80</span> http2<span class="token punctuation">;</span>
        server_name Yourdomain.ru<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
                root /path/to/updates<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,3);function p(r,t){return e}var c=n(s,[["render",p],["__file","nginx.html.vue"]]);export{c as default};
