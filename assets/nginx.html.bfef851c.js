import{_ as n,d as a}from"./app.749051e4.js";const s={},e=a(`<h1 id="\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0430-nginx" tabindex="-1"><a class="header-anchor" href="#\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0430-nginx" aria-hidden="true">#</a> \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 nginx</h1><p>\u0414\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043E\u0442\u0434\u0430\u0447\u0438 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0443\u0436\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C nginx</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen <span class="token number">80</span> http2<span class="token punctuation">;</span>
        server_name \u0412\u0410\u0428\u0414\u041E\u041C\u0415\u041D.ru<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
                root /\u043F\u0443\u0442\u044C/\u0434\u043E/updates<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,3);function p(r,t){return e}var l=n(s,[["render",p],["__file","nginx.html.vue"]]);export{l as default};
