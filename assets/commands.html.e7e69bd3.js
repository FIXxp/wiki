import{_ as t,d as e}from"./app.749051e4.js";const d={},n=e('<h1 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h1><h2 id="basic-commands" tabindex="-1"><a class="header-anchor" href="#basic-commands" aria-hidden="true">#</a> Basic Commands</h2><table><thead><tr><th>Command</th><th style="text-align:center;">An example of use</th><th style="text-align:right;">Description</th></tr></thead><tbody><tr><td>help</td><td style="text-align:center;">help [command name]</td><td style="text-align:right;">Display a command on the command or by all commands</td></tr><tr><td>stop</td><td style="text-align:center;">stop [nothing]</td><td style="text-align:right;">Stop LaunchServer</td></tr><tr><td>build</td><td style="text-align:center;">build [nothing]</td><td style="text-align:right;">Build Launcher.jar</td></tr><tr><td>downloadclient</td><td style="text-align:center;">downloadclient [version] [dir]</td><td style="text-align:right;">Download client from mirror</td></tr><tr><td>downloadasset</td><td style="text-align:center;">downloadasset [version] [dir]</td><td style="text-align:right;">Download assets from a mirror</td></tr><tr><td>syncupdates</td><td style="text-align:center;">syncupdates [subdirs...]</td><td style="text-align:right;">Synchronize hashes in memory with files in updates on the disk</td></tr><tr><td>syncprofiles</td><td style="text-align:center;">syncprofiles [nothing]</td><td style="text-align:right;">Synchronize profiles in memory with files in profiles on the disk</td></tr><tr><td>syncup</td><td style="text-align:center;">syncup [nothing]</td><td style="text-align:right;">Perform commands syncUpdates and syncProfiles</td></tr><tr><td>saveprofile</td><td style="text-align:center;">saveprofile [name]</td><td style="text-align:right;">Convert the profile of the old version into the actual format(profileUUID, ServerProfile, Optional mods, etc.)</td></tr><tr><td>debug</td><td style="text-align:center;">debug [true/false]</td><td style="text-align:right;">Enables or disables debugging mode in launchserver</td></tr></tbody></table><h2 id="advanced-commands" tabindex="-1"><a class="header-anchor" href="#advanced-commands" aria-hidden="true">#</a> Advanced Commands</h2><table><thead><tr><th>Command</th><th style="text-align:center;">An example of use</th><th style="text-align:right;">Description</th></tr></thead><tbody><tr><td>proguarddictregen</td><td style="text-align:center;">proguarddictregen [nothing]</td><td style="text-align:right;">Overheat the dictionary proguard</td></tr><tr><td>loadmodule</td><td style="text-align:center;">loadmodule [jar]</td><td style="text-align:right;">download the module not from the folder modules in runtime</td></tr><tr><td>proguardclean</td><td style="text-align:center;">proguardclean [nothing]</td><td style="text-align:right;">Config reset proguard</td></tr><tr><td>proguardmappingsremove</td><td style="text-align:center;">proguardmappingsremove [nothing]</td><td style="text-align:right;">Delete Proguard mappings</td></tr><tr><td>signjar</td><td style="text-align:center;">signjar [path to file] (path to signed file)</td><td style="text-align:right;">Sign a jar file using the configured certificate in the SIGN(enable in true)</td></tr><tr><td>signdir</td><td style="text-align:center;">signdir [path to dir]</td><td style="text-align:right;">Sign all files in the folder using the certificate configured in the SIGN (enable in true)</td></tr><tr><td>component</td><td style="text-align:center;">component [action] [component name] [more args]</td><td style="text-align:right;">Components management</td></tr></tbody></table>',5);function r(a,i){return n}var o=t(d,[["render",r],["__file","commands.html.vue"]]);export{o as default};
