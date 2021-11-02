<template><h1 id="подпись-лаунчера" tabindex="-1"><a class="header-anchor" href="#подпись-лаунчера" aria-hidden="true">#</a> Подпись лаунчера</h1>
<h2 id="где-взять-сертификат" tabindex="-1"><a class="header-anchor" href="#где-взять-сертификат" aria-hidden="true">#</a> Где взять сертификат?</h2>
<ul>
<li>Сгенерировать самому себе самоподписанный сертификат(например с помощью GenerateCertificateModule или по инструкциям ниже)</li>
<li>Попросить сертификат у того, кто уже настроил грамотно свой СА и может подписывать другие сертификаты</li>
<li>Создать CSR, и передать его человеку, который его подпишет</li>
<li>Можно отдавать каждый билд лаунчера человеку, имеющему сертификат, но не являющийся СА, на подпись.</li>
<li>Можно купить сертификат для подписи лаунчера у официальных СА (очень дорого)</li>
</ul>
<h2 id="подпись-jar" tabindex="-1"><a class="header-anchor" href="#подпись-jar" aria-hidden="true">#</a> Подпись jar</h2>
<h3 id="требования" tabindex="-1"><a class="header-anchor" href="#требования" aria-hidden="true">#</a> Требования</h3>
<ul>
<li>Версия 5.1.0+</li>
<li>Сертификат</li>
</ul>
<h3 id="конфигурация" tabindex="-1"><a class="header-anchor" href="#конфигурация" aria-hidden="true">#</a> Конфигурация</h3>
<CodeGroup>
  <CodeGroupItem title="PKCS12" active>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"sign"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"keyStore"</span><span class="token operator">:</span> <span class="token string">"MyKeyStore.p12"</span><span class="token punctuation">,</span>
    <span class="token property">"keyStoreType"</span><span class="token operator">:</span> <span class="token string">"PKCS12"</span><span class="token punctuation">,</span>
    <span class="token property">"keyStorePass"</span><span class="token operator">:</span> <span class="token string">"mypass"</span><span class="token punctuation">,</span>
    <span class="token property">"keyAlias"</span><span class="token operator">:</span> <span class="token string">"myname"</span><span class="token punctuation">,</span>
    <span class="token property">"keyPass"</span><span class="token operator">:</span> <span class="token string">"mypass"</span><span class="token punctuation">,</span>
    <span class="token property">"metaInfKeyName"</span><span class="token operator">:</span> <span class="token string">"SIGNUMO.RSA"</span><span class="token punctuation">,</span>
    <span class="token property">"metaInfSfName"</span><span class="token operator">:</span> <span class="token string">"SIGNUMO.SF"</span><span class="token punctuation">,</span>
    <span class="token property">"signAlgo"</span><span class="token operator">:</span> <span class="token string">"SHA256WITHRSA"</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>  </CodeGroupItem>JKS
  <CodeGroupItem title="JKS" active>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"sign"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"keyStore"</span><span class="token operator">:</span> <span class="token string">"MyKeyStore.p12"</span><span class="token punctuation">,</span>
    <span class="token property">"keyStoreType"</span><span class="token operator">:</span> <span class="token string">"JKS"</span><span class="token punctuation">,</span>
    <span class="token property">"keyStorePass"</span><span class="token operator">:</span> <span class="token string">"mypass"</span><span class="token punctuation">,</span>
    <span class="token property">"keyAlias"</span><span class="token operator">:</span> <span class="token string">"myname"</span><span class="token punctuation">,</span>
    <span class="token property">"keyPass"</span><span class="token operator">:</span> <span class="token string">"mypass"</span><span class="token punctuation">,</span>
    <span class="token property">"metaInfKeyName"</span><span class="token operator">:</span> <span class="token string">"SIGNUMO.RSA"</span><span class="token punctuation">,</span>
    <span class="token property">"metaInfSfName"</span><span class="token operator">:</span> <span class="token string">"SIGNUMO.SF"</span><span class="token punctuation">,</span>
    <span class="token property">"signAlgo"</span><span class="token operator">:</span> <span class="token string">"SHA256WITHRSA"</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h4 id="описания-конфигурации" tabindex="-1"><a class="header-anchor" href="#описания-конфигурации" aria-hidden="true">#</a> Описания конфигурации</h4>
<p><code>enabled</code> - Включить подпись своим сертификатом<br>
<code>keyStore</code> - Путь к хранилищу ключей<br>
<code>keyStoreType</code> - Тип хранилища<br>
<code>keyStorePass</code> - Пароль от хранилища<br>
<code>keyAlias</code> - Key Alias<br>
<code>keyPass</code> - Пароль от ключа, может не совпадать с storepass<br>
<code>signAlgo</code> - Алгоритм подписи</p>
<h2 id="подпись-exe" tabindex="-1"><a class="header-anchor" href="#подпись-exe" aria-hidden="true">#</a> Подпись exe</h2>
<p><a href="https://github.com/GravitLauncher/LauncherModules/tree/master/OpenSSLSignCode_module" target="_blank" rel="noopener noreferrer">Модуль OpenSSLSignCode<OutboundLink/></a> позволяет подписывать <strong>Launcher.exe</strong> своим сертификатом используя утилиту osslsigncode.</p>
<h3 id="установка-модуля" tabindex="-1"><a class="header-anchor" href="#установка-модуля" aria-hidden="true">#</a> Установка модуля</h3>
<ol>
<li>Скопировать модуль <strong>OpenSSLSignCode_module.jar</strong> в папку <strong>/LaunchServer/modules/</strong>.</li>
<li>Обязательно создать самоподписанный сертификат или купить его.
<ul>
<li>В конфигурации <strong>LaunchServer.json</strong> <code>&quot;sign&quot;: { &quot;enabled&quot;: true }</code>.</li>
</ul>
</li>
<li>Установленная программа <strong>osslsigncode</strong>.</li>
</ol>
<CodeGroup>
  <CodeGroupItem title="Debian-подобные системы" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> osslsigncode
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="CentOS">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/yum.repos.d/
<span class="token function">wget</span> https://download.opensuse.org/repositories/home:danimo/CentOS_7/home:danimo.repo
yum <span class="token function">install</span> osslsigncode calc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<ol>
<li>Выполнить <strong>build</strong> в консоли <em>LaunchServer</em>, если всё сделали правильно, <strong>exe</strong> будет подписан сертификатом.</li>
</ol>
<h3 id="конфигурация-1" tabindex="-1"><a class="header-anchor" href="#конфигурация-1" aria-hidden="true">#</a> Конфигурация</h3>
<p>Путь: <code>/LaunchServer/config/OSSLSignCode/Config.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"timestampServer"</span><span class="token operator">:</span> <span class="token string">"http://timestamp.globalsign.com/scripts/timstamp.dll"</span><span class="token punctuation">,</span>
  <span class="token property">"osslsigncodePath"</span><span class="token operator">:</span> <span class="token string">"osslsigncode"</span><span class="token punctuation">,</span>
  <span class="token property">"customArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"checkSignSize"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"checkCorrectSign"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"checkCorrectJar"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="команды" tabindex="-1"><a class="header-anchor" href="#команды" aria-hidden="true">#</a> Команды</h3>
<p>Подписывает exe, созданный с помощью launch4j вручную</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>osslsignexe [path to input exe] [path to output exe]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="замечания" tabindex="-1"><a class="header-anchor" href="#замечания" aria-hidden="true">#</a> Замечания</h3>
<ul>
<li>Иногда вы можете получать ошибку о несоответствии размера подписи. Это происходит из за <em>timestamp server</em>, так как
нельзя заранее угадать совпадет ли размер подписи в первом вызове и во втором. Если это вас беспокоит вы можете
отключить использование <code>timestampServer</code> путем удаление этой строчки из конфигурации.</li>
</ul>
<h2 id="получение-своего-сертификата" tabindex="-1"><a class="header-anchor" href="#получение-своего-сертификата" aria-hidden="true">#</a> Получение своего сертификата</h2>
<h3 id="создание-самоподписаного-codesign-сертификата" tabindex="-1"><a class="header-anchor" href="#создание-самоподписаного-codesign-сертификата" aria-hidden="true">#</a> Создание самоподписаного CodeSign сертификата</h3>
<p>Вы не хотите ни от кого зависить и полностью владеть всей цепочкой сертификатов? Тогда вам сюда. В этом разделе мы создадим базовую цепочку сертификатов с одним СА и одним конечным сертификатом. Этого хватит что бы подписать JAR и EXE лаунчера и пройти проверки</p>
<p>Создавать мы будем с помощью утилиты <a href="https://github.com/chris2511/xca/releases" target="_blank" rel="noopener noreferrer">XCA<OutboundLink/></a>. Выбирайте последний релиз, качаете, устанавливаете</p>
<ol>
<li>Создайте базу данных. При создании базы данных обязательно задайте пароль и сохраните/запишите его в безопасное место. Старайтесь придерживаться правил безопастности - это доступ к всем вашим сертификатам.</li>
<li>Перейдите во вкладку &quot;Сертификаты&quot; и нажмите кнопку &quot;Новый сертификат&quot;</li>
<li>Во вкладке &quot;Субьект&quot; укажите поле commonName - например &quot;SuperCraft Root CA&quot;. Рекомендуется ввести имя, заканчивающиеся на &quot;Root CA&quot; - так будет проще и вам, и всем остальным кто будет смотреть ваш сертификат</li>
<li>В той же вкладке &quot;Субъект&quot; внизу нажмите на кнопку &quot;Сгенерировать новый ключ&quot;. Тип ключа - RSA, длинна ключа - 4096 бит. Нажмите &quot;Создать&quot;</li>
<li>В вкладке &quot;Расширения&quot; выберите &quot;тип&quot; - &quot;Центр Сертификации&quot;, в графе &quot;Выбор периода&quot; укажите от 1 до 10 лет и нажмите кнопку &quot;Применить&quot;, после чего дата окончания должна сдвинуться на указанное вами число лет</li>
<li>В вкладке &quot;Область приминения ключа&quot; в первой колонке укажите &quot;Digitial Signature&quot; и &quot;Certificate Sign&quot;, во второй &quot;Code Signing&quot;, больше ничего в этой вкладке менять не нужно</li>
<li>В вкладке &quot;Netscape&quot; если что либо написано в поле &quot;Netscape Comment&quot; - уберите</li>
<li>После чего если вы уверены в веденных параметрах можно нажать &quot;ОК&quot;. Вы создали корневой сертификат!</li>
<li>Экспортируем корневой сертификат. Для этого выберите свежесозданный сертификат и нажмите кнопку &quot;Экспорт&quot;. Формат экспорта - &quot;PEM (.crt)&quot;, файл куда экспортировать выберите сами на свое усмотрение. Нажимаете кнопку &quot;ОК&quot;</li>
<li>Далее вам нужно создать конечный сертификат, которым вы будете подписывать лаунчер(JAR и/или EXE). Нажимаете &quot;Новый сертификат&quot;</li>
<li>В Вкладке &quot;Первоисточник&quot; должен быть выбран &quot;Использовать этот сертификат для подписи&quot; где должен быть указан ваш Root CA, созданный на предыдущем этапе</li>
<li>В вкладке &quot;Субъект&quot; укажите поле commonName - например &quot;SuperCraft Code Sign&quot;. Рекомендуется ввести имя, заканчивающиеся на &quot;Code Sign&quot; - так будет проще и вам, и всем остальным кто будет смотреть ваш сертификат</li>
<li>В той же вкладке &quot;Субъект&quot; внизу нажмите на кнопку &quot;Сгенерировать новый ключ&quot;. Тип ключа - RSA, длинна ключа - 2048 бит. Нажмите &quot;Создать&quot;</li>
<li>В вкладке &quot;Расширения&quot; выберите &quot;тип&quot; - &quot;Конечный субъект&quot;, в графе &quot;Выбор периода&quot; укажите от 1 до 10 лет и нажмите кнопку &quot;Применить&quot;, после чего дата окончания должна сдвинуться на указанное вами число лет. Обратите внимание - срок действия конечного сертификата не может быть больше срока действия вашего Root CA. Меньше можно, больше - нет</li>
<li>Все прочие настройки аналогичны. В вкладке &quot;Область приминения ключа&quot; в первой колонке укажите &quot;Digitial Signature&quot;(и не указывайте Certificate Sign), во второй &quot;Code Signing&quot;, больше ничего в этой вкладке менять не нужно. В вкладке &quot;Netscape&quot; если что либо написано в поле &quot;Netscape Comment&quot; - уберите. После чего если вы уверены в веденных параметрах можно нажать &quot;ОК&quot;</li>
<li>Вы создали конечный сертификат! Осталось этот сертификат экспортировать. Выберите ваш &quot;Code Sign&quot; сертификат и нажмите кнопку &quot;Экспорт&quot;. Формат экспорта - &quot;Цепочка PKCS12&quot;, месторасположение выбирайте сами. Введите пароль, которым будет зашифрован ваш .p12 контейнер. Пароль не должен совпадать с паролем от вашей базы данных, это небезопасно. Именно этот пароль вы будете указывать в конфигурации при подписи
Всё! Уже можно пользоваться. Файл **_Root_CA.crt(ваш корневой сертификат) скопируйте в папку truststore лаунчсервера. При желании установите его в ваш ПК как доверенный центр сертификации. А дальше можете настраивать подпись JAR/EXE уже своим сертификатом</li>
</ol>
<h3 id="создание-самоподписаного-ca" tabindex="-1"><a class="header-anchor" href="#создание-самоподписаного-ca" aria-hidden="true">#</a> Создание самоподписаного CA</h3>
<p>Хотите почувствовать себя настоящим экспертом? Что бы всё выглядело максимально правдоподобно и серьезно? Хотите не только подписывать JAR/EXE, а вообще что угодно где используются сертификаты? Тогда вам сюда. Вам понадобится всё тот же <a href="https://github.com/chris2511/xca/releases" target="_blank" rel="noopener noreferrer">XCA<OutboundLink/></a></p>
<ol>
<li>Начнем с самого важного - ключа вашего центрального Root CA сертификата. Создайте базу данных XCA прямо на флешке и сгенерируйте ключ RSA с длинной не менее 4096 бит. После чего приступайте к созданию Root CA сертификата. В разделе &quot;Субъект&quot; укажите все основные параметры, исключая emailAddress, что бы всё выглядело серьезно. На дополнительные параметры можно забить в этой вкладке, они не нужны. В разделе &quot;Расширения&quot; укажите тип - &quot;Центр сертификации&quot;, срок действия минимум 5 лет. &quot;Область приминения ключа&quot; - &quot;Certificate Sign&quot; и &quot;CRL Sign&quot;, всё остальное без изменений. В разделе &quot;Netscape&quot; всё можно оставить пустым</li>
<li>Дальше создайте в той же базе данных &quot;дополнительный&quot; CA с настройками как у Root CA, а в имени либо номер, либо год. Единственное отличие в &quot;Расширения&quot; в поле &quot;X.509v3 CRL&quot; укажите URL на ваш сайт, где будет находится центральный CRL(например https://ca.example.com/root.crl). Этот СА вы будете использовать вместо центрального Root CA для создания других сертификатов. После чего экспортируйте ключ и сам сертификат дополнительного СА а так же только сертификат Root CA. Ключ Root CA не должен покидать пределы флешки. Дальше я для удобства будут называть этот CA - &quot;2020 CA&quot;</li>
<li>Создайте CRL root.crl используя ваш Root CA(ПКМ-&gt;ЦС-&gt;Сгенерировать CRL) и экспортируйте его. Потом вы его зальете себе на сайт по тому URL что указали выше, когда генерировали 2020 CA</li>
<li>Сохраните эту базу данных на еще одну флешку, CD диск, что угодно что будет не подключено к вашему ПК физически(а значит и ключ Root CA будет в безопастности) и что внезапно сразу не сломается</li>
<li>Создайте новю базу данных уже в другом месте(к примеру на вашем жестком диске) куда импортируйте сертификат Root CA, сертификат 2020 CA и ключ 2020 CA. Дальше вы будете работать только с этой базой.</li>
<li>Создайте CA, который будет служить определенной цели, например &quot;Code Sign RSA CA&quot;, указав в качестве CRL что то вроде https://ca.example.com/2020.crl . Все CA, созданные с помощью 2020 CA будут использовать этот CRL URL. Есстественно заполняя все необходимые поля</li>
<li>Сгенерируйте CRL для 2020 CA(https://ca.example.com/2020.crl) и всех специализированных CA(https://ca.example.com/2020/codesign.crl). Потом вы зальете их на сайт по тому URL что указали</li>
<li>И вот теперь можете создавать конечные сертификаты. Бывает нужно указать какой то особый OID, которого нет в GUI. Тогда вы идете в Дополнительно-&gt;Редактировать и там вы можете указать любые параметры, которые можно указать в конфигурации OpenSSL. К примеру добавить кастомные extendedKeyUsage</li>
</ol>
</template>
