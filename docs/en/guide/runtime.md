---
description: The runtime in the launcher is a launcher module and a set of resources responsible for interacting with the user.
---

# Runtime setting

The runtime in the launcher is a launcher module and a set of resources (FXML/CSS/PNG) responsible for interacting with the user.Rantaim is based on JavaFx. Useful links:

- Scene Builder - FXML editor files
- Openjfx API DOCS - JavaFX API documentation
- Javafx CSS Reference Guide - Javafx CSS documentation

In this section, you will find useful functions that are included in the radar "out of the box", but not included by default

## Encryption runtime

- Download the ENFS library and put it in the Launcher-Libraries folder
- Turn on the `runtimeEncrypt` option in the launcher configuration and make Build
- Check the correctness of the work

## Downloading your java

- Download archives with Jre/JDK from the official Oracle website or other Openjdk assembly supplier
- Screw the archives into the updates folder and give them clear names: `java17-windows-64`, `java17-windows-32` etc.
- Upon request, remove optional components from jre/jdk assemblies to reduce the volume of downloaded data
- Open the file `config/JavaRuntime/Config.json` In a text editor, find a line `"javaList": {}` and bring it to this type:

```json
"javaList": {
    "java17-windows-64": "Java 17 b53 mustdie x64 javafx true",
    "java17-windows-32": "Java 17 b53 mustdie x32 javafx true"
}
```

Format: `Java {version number} b{assembly number} {mustdie (this is windows)/linux/macos} x{Disgusting} javafx {Availability javafx}`
Add folders with your Jre/JDK assembly in `allowUpdates` launcher core confige: `"allowUpdates": ["java17-windows-64", "java17-windows-32"]`,
Perform syncup и build
Check the correctness of the work

## Runtime structure

### File structure

- images — Folder that contains all the pictures
- overlay — The folder in which the overlaws are located.Each overly gives a separate folder in which FXML and CSS files should lie.It is allowed to place pictures specific for a specific overly next to FXML and CSS.
- scenes — The folder similar in structure to the Overlay folder, but is intended for scenes.
- components — The folder in which the design of individual parts is located (like Serverbutton and notifications).
- dialogs — The folder in which the design of dialogs is located.
- styles — Folder with CSS styles.
- runtime_*.properties —Collected localization files.
  
### The main entities

- Stage — window.This essence is responsible for the icon, the parameters of the window and its name
- Scene — The contents of the window.Is the root of all objects and cannot be built anywhere
- Overlay — Cash contents imposed on the stage.When the overly displays the scene, the scene is blurred and blocked until the overlays are opened
- Component —The contents that are not tied to something is liba.The component can exist in several copies at the same time, which differs from scenes and overlays
  
You will need a program to edit FXML files JavaFX SceneBuilder, which you can download from any site convenient for you
Then open the FXML file you are interested in, go inв Preview -> Internationalization -> Set Resourse And select the file runtime_*.properties

To edit the text, you will need a `compat` folder, in which there are original .properties файлы. ***Change directly runtime _*.properties from the Runtime folder (Russian will not work)***
After you have changed the text in Compat files, use the NATIVE2ASCII utility to bring a view that is in any JDK to be brought into a radio.

## Runtume objects

**JavaFXApplication** — The main class of the radio, the access point to all components and management of the application.
**FXMLLoader** — FXML asynchronous multi -heating bootloader provides an acceleration of starting and supporting multidimensions
**StateService** — Data exchange point and launcher condition
**RuntimeSecurityService** — Expecting keys with launa chief, collection of Hardwareinfo (HWID) and launcher update
**MessageManager** — displays notifications and dialogs

## Work with .properties and translation into other languages

You can translate the launcher into any other language by adding it to the language list in the Runtimesettings.java file.To do this, add your tongue to Enum Launcher_Locale.The first parameter is 2-3 letters of the country that will be used to search for. Properties file.The second parameter is the displayed name in a pop -up window for choosing languages.

In addition to the inscriptions of. Properties, the files support the change in any properties of Javafx, including the sizes and location of the elements, the paths to the pictures, the parameters of objects and generally any properties that you can indicate in the .Fxml file

## Rantaim debugging

To debug the Rantaim from IDEA, indicate the following parameters:

- Module: `JavaRuntime.main`
- Arguments jvm: `-Dlauncherdebug.modules=pro.gravit.launcher.client.JavaRuntimeModule` (if the parameters are not displayed, press Modify Options —> Add VM options)
- Main Class: `pro.gravit.launcher.debug.DebugMain`

Feedback restrictions:

- the "Save the password" option will not work, as the password encryption key is introduced by launa cherver
- It is impossible to launch a client Minecraft (at the same time, all stages of download, checks and preparations for the start will work)
- the launcher will not try to update and get a list of authorization methods
- The HWID check may not work, since the launcher will not trust the launcher
- the debuging mode cannot be activated on the already assembled launcher
