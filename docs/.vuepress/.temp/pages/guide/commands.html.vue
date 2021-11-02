<template><h1 id="команды" tabindex="-1"><a class="header-anchor" href="#команды" aria-hidden="true">#</a> Команды</h1>
<h2 id="базовые-команды" tabindex="-1"><a class="header-anchor" href="#базовые-команды" aria-hidden="true">#</a> Базовые команды</h2>
<table>
<thead>
<tr>
<th>Команда</th>
<th style="text-align:center">Пример использования</th>
<th style="text-align:right">Информация</th>
</tr>
</thead>
<tbody>
<tr>
<td>help</td>
<td style="text-align:center">help [command name]</td>
<td style="text-align:right">Вывести справку по команде или по всем командам</td>
</tr>
<tr>
<td>stop</td>
<td style="text-align:center">stop [nothing]</td>
<td style="text-align:right">Остановить LaunchServer</td>
</tr>
<tr>
<td>build</td>
<td style="text-align:center">build [nothing]</td>
<td style="text-align:right">Собрать Launcher.jar</td>
</tr>
<tr>
<td>downloadclient</td>
<td style="text-align:center">downloadclient [version] [dir]</td>
<td style="text-align:right">Скачать клиент с зеркала</td>
</tr>
<tr>
<td>downloadasset</td>
<td style="text-align:center">downloadasset [version] [dir]</td>
<td style="text-align:right">Скачать ассеты с зеркала</td>
</tr>
<tr>
<td>syncupdates</td>
<td style="text-align:center">syncupdates [subdirs...]</td>
<td style="text-align:right">Синхронизировать хеши в памяти с файлами в updates на диске</td>
</tr>
<tr>
<td>syncprofiles</td>
<td style="text-align:center">syncprofiles [nothing]</td>
<td style="text-align:right">Синхронизировать профили в памяти с файлами в profiles на диске</td>
</tr>
<tr>
<td>syncup</td>
<td style="text-align:center">syncup [nothing]</td>
<td style="text-align:right">Выполнить команды syncUpdates и syncProfiles</td>
</tr>
<tr>
<td>saveprofile</td>
<td style="text-align:center">saveprofile [name]</td>
<td style="text-align:right">Конвертировать профиль старой версии в актуальный формат(profileUUID, ServerProfile, опциональные моды и пр)</td>
</tr>
<tr>
<td>debug</td>
<td style="text-align:center">debug [true/false]</td>
<td style="text-align:right">Включает или отключает режим отладки в лаунчсервере</td>
</tr>
</tbody>
</table>
<h2 id="продвинутые-команды" tabindex="-1"><a class="header-anchor" href="#продвинутые-команды" aria-hidden="true">#</a> Продвинутые команды</h2>
<table>
<thead>
<tr>
<th>Команда</th>
<th style="text-align:center">Пример использования</th>
<th style="text-align:right">Информация</th>
</tr>
</thead>
<tbody>
<tr>
<td>proguarddictregen</td>
<td style="text-align:center">proguarddictregen [nothing]</td>
<td style="text-align:right">перегенерировать словарь proguard</td>
</tr>
<tr>
<td>loadmodule</td>
<td style="text-align:center">loadmodule [jar]</td>
<td style="text-align:right">загрузить модуль не из папки modules в runtime</td>
</tr>
<tr>
<td>proguardclean</td>
<td style="text-align:center">proguardclean [nothing]</td>
<td style="text-align:right">сброс конфига proguard</td>
</tr>
<tr>
<td>proguardmappingsremove</td>
<td style="text-align:center">proguardmappingsremove [nothing]</td>
<td style="text-align:right">удалить маппинги proguard</td>
</tr>
<tr>
<td>signjar</td>
<td style="text-align:center">signjar [path to file] (path to signed file)</td>
<td style="text-align:right">подписать JAR файл используя настроеный в sign сертификат(enable в true)</td>
</tr>
<tr>
<td>signdir</td>
<td style="text-align:center">signdir [path to dir]</td>
<td style="text-align:right">подписать все файлы в папке, используя настроеный в sign сертификат (enable в true)</td>
</tr>
<tr>
<td>component</td>
<td style="text-align:center">component [action] [component name] [more args]</td>
<td style="text-align:right">управление компонентами</td>
</tr>
</tbody>
</table>
</template>
