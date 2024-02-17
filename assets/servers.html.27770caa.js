import{_ as a,r,o,c as t,a as e,b as p,F as c,e as s,d as i}from"./app.749051e4.js";const l={},u=e("h1",{id:"working-with-a-game-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#working-with-a-game-server","aria-hidden":"true"},"#"),s(" Working with a game server")],-1),d=e("h2",{id:"binding-of-a-game-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#binding-of-a-game-server","aria-hidden":"true"},"#"),s(" Binding of a game server")],-1),h=e("p",null,"To ensure the full-fledged work of LaunchServer and your game server, you need to install ServerWrapper.",-1),m=e("strong",null,"Step 1",-1),b=s(": Select and download the server core you need on our "),k={href:"https://mirror.gravit-launcher.ru",target:"_blank",rel:""},g=s("mirror"),v=i(`<p><strong>Step 2</strong>: Place ServerWrapper(he is in the LaunchServer directory) to the Directory of your game server<br><strong>Step 3</strong>: Open the launcher and complete the next command, copy the resulting unique server indifier</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>token server <span class="token operator">&lt;</span>server-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>Step 4</strong>: Go to the Directory of your game server and execute the command</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -jar ServerWrapper.jar setup
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>Step 5</strong>: Indicate the name JAR of the file of your server nucleus, the name of the server, the address of the LaunchServer and the unique server indiff with <strong>Step 2</strong></p><h2 id="configuration-serverwrapper" tabindex="-1"><a class="header-anchor" href="#configuration-serverwrapper" aria-hidden="true">#</a> Configuration ServerWrapper</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;projectname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MineCraft&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ws://localhost/api&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;serverName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vanilla1.17.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;autoloadLibraries&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;classpath&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mainclass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;io.papermc.paperclip.Paperclip&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nogui&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;oauthExpireTime&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extendedTokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;checkServer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sa9c1a52-ufa9-kda6-a488-gfr802av905c&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STD&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="description-of-the-settings-serverwrapper" tabindex="-1"><a class="header-anchor" href="#description-of-the-settings-serverwrapper" aria-hidden="true">#</a> Description of the settings ServerWrapper</h4><p><code>projectname</code> - Project name<br><code>address</code> - Launchserver&#39;s address<br><code>serverName</code> - Server name in the profile <code>autoloadLibraries</code> - Library Automobile Automobile from folderlibraries<br><code>classpath</code> - Additional classpath<br><code>mainclass</code> - Main-Class Your server nucleus<br><code>args</code> - Launch arguments <code>extendedTokens</code> - A unique server indifier<br><code>env</code> - ServerWrapper operating mode</p>`,9);function f(q,_){const n=r("ExternalLinkIcon");return o(),t(c,null,[u,d,h,e("p",null,[m,b,e("a",k,[g,p(n)])]),v],64)}var S=a(l,[["render",f],["__file","servers.html.vue"]]);export{S as default};
