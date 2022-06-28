---
description: Launcher signature
---

# Launcher signature

## Where to get a certificate?

- generate a self -signed certificate (for example, using GenerateCertificatemodule or according to the instructions below)
- Ask for a certificate from someone who has already set up his own CA competently and can sign other certificates
- Create CSR, and convey it to the person who will sign it
- You can give each build of launcher to a person who has a certificate, but not a SA for signature.
- you can buy a certificate for the signature of launcher from official SA (very expensive)

## Signature jar

### Requirements

- Version 5.1.0+
- Certificate

### Configuration

<CodeGroup>
  <CodeGroupItem title="PKCS12" active>

```json
"sign": {
    "enabled": false,
    "keyStore": "MyKeyStore.p12",
    "keyStoreType": "PKCS12",
    "keyStorePass": "mypass",
    "keyAlias": "myname",
    "keyPass": "mypass",
    "metaInfKeyName": "SIGNUMO.RSA",
    "metaInfSfName": "SIGNUMO.SF",
    "signAlgo": "SHA256WITHRSA"
  }
```

  </CodeGroupItem>JKS
  <CodeGroupItem title="JKS" active>

```json
"sign": {
    "enabled": false,
    "keyStore": "MyKeyStore.p12",
    "keyStoreType": "JKS",
    "keyStorePass": "mypass",
    "keyAlias": "myname",
    "keyPass": "mypass",
    "metaInfKeyName": "SIGNUMO.RSA",
    "metaInfSfName": "SIGNUMO.SF",
    "signAlgo": "SHA256WITHRSA"
  }
```

  </CodeGroupItem>
</CodeGroup>

#### Descriptions of the configuration

`enabled` - Turn on the signature with your certificate
`keyStore` - The path to the keys storage
`keyStoreType` - Storagery  
`keyStorePass` - Password from the storage  
`keyAlias` - Key Alias  
`keyPass` - Password from the key, may not match Storepass  
`signAlgo` - Signature algorithm

## Signature exe

[Module OpenSSLSignCode](https://github.com/GravitLauncher/LauncherModules/tree/master/OpenSSLSignCode_module)allows you to sign **Launcher.exe** with its certificate using the utility osslsigncode.

### Installation of the module

1. Copy the module **OpenSSLSignCode_module.jar** In the folder **/LaunchServer/modules/**.
2. Be sure to create a self -signed certificate or buy it.
    - In the configuration **LaunchServer.json** `"sign": { "enabled": true }`.
3. The installed program **osslsigncode**.
<CodeGroup>
  <CodeGroupItem title="Debian-like systems" active>

```bash
sudo apt install osslsigncode
```

  </CodeGroupItem>

  <CodeGroupItem title="CentOS">

```sh
cd /etc/yum.repos.d/
wget https://download.opensuse.org/repositories/home:danimo/CentOS_7/home:danimo.repo
yum install osslsigncode calc
```

  </CodeGroupItem>
</CodeGroup>

1.Perform **Build** in the *launchserver* console, if everything is done correctly, **exe** will be signed by a certificate.

### Configuration

Path: `/LaunchServer/config/OSSLSignCode/Config.json`

```json
{
  "timestampServer": "http://timestamp.globalsign.com/scripts/timstamp.dll",
  "osslsigncodePath": "osslsigncode",
  "customArgs": [],
  "checkSignSize": true,
  "checkCorrectSign": true,
  "checkCorrectJar": true
}
```

### Commands

Signs EXE created using Launch4j manually

```
osslsignexe [path to input exe] [path to output exe]
```

### Comments

- Sometimes you can get an error about the mismatch of the signature size.This occurs due to *timestamp server*, since
  You cannot guess in advance whether the signature size in the first call will coincide in the second.If you bother you, you can
  Disconnect the use of `timestampServer` by removing this line from the configuration.

## Obtaining your certificate

### Creation of self -signed Codesign Certificate

You do not want to depend on anyone and fully own the entire chain of certificates?Then you here.In this section, we will create a basic chain of certificates with one CA and one final certificate.That's enough to sign Jar and EXE Launcher and go through checks

We will create with the help of [XCA] (<https://github.com/chris2511/xca/releases>). Choose the last release, download, install

1. Create a database. When creating a database, be sure to set the password and save/write it in a safe place. Try to adhere to safety rules - this is access to all your certificates.
2. Go to the "Certificates" tab and press the "New Certificate" button
3. In the “Prostekt” tab, indicate the Commonname field - for example, “Supercraft Root Ca”. It is recommended to enter a name ending on "Root Ca" - it will be easier for you and to everyone else who will watch your certificate
4. In the same tab "subject" at the bottom, click on the "generate new key" button. Key type - RSA, key length - 4096 bits. Click "Create"
5. In the “Expansion” tab, select the Type - “Certification Center”, in the column “Choice of the period” indicate from 1 to 10 years and click the “Apply” button, after which the end date must move to the number of years you specified
6. In the “Keys Field” tab in the first column, indicate “Digital Signature” and “Certificate Sign”, in the second “Code Signing”, no more in this tab must change anything else in this tab
7. In the "Netscape" tab, if something is written in the "Netscape Comment" field - remove
8. After that, if you are sure in the conducted parameters, you can click OK. You have created a root certificate!
9. We export the root certificate. To do this, select a freshly executed certificate and press the "Export" button. Export format - "PEM (.crt)", the file where to export to select yourself at your discretion. Press the OK button
10. Next, you need to create the final certificate that you will sign the launcher (jar and/or exe). Click "New Certificate"
11. In the “Primary” tab, it should be selected ”to use this certificate for the signature“ where your Root CA, created at the previous stage, should be indicated
12. In the Subject tab, indicate the Commonname field - for example, "Supercraft Code Sign". It is recommended to enter a name ending on "Code Sign" - it will be easier for you and to everyone else who will watch your certificate
13. In the same tab "subject" at the bottom, click on the "generate new key" button. Key type - RSA, key length - 2048 bits. Click "Create"
14. In the “Expansion” tab, select the Type - “final subject”, in the column “Choice of the period” indicate from 1 to 10 years and click the “Apply” button, after which the end date should move to the number of years you specified. Please note that the deadline for the final certificate cannot be more than the validity period of your Root Ca. Less is possible, more - no
15. All other settings are similar. In the “Keys Field” tab in the first column, indicate “Digital Signature” (and do not indicate Certificate Sign), in the second “Code Signing”, you don’t need to change anything else in this tab. In the "Netscape" tab, if something is written in the field "Netscape Comment" - remove. After that, if you are sure in the conducted parameters, you can click "OK"
16. You have created a final certificate! It remains to export this certificate. Select your "Code Sign" certificate and press the "Export" button. Export format - "PKCS12 chain", choose the location yourself. Enter the password that your .p12 container will be encrypted. The password should not match the password from your database, it is unsafe. It is this password that you will indicate in the configuration in the signature
Everything! You can already use. File ** _ ROOT_CA.CRT (your root certificate) copy to the Launchserver TrustStore folder. If desired, install it in your PC as a trusted certification center. And then you can configure the Jar/Exe signature by your certificate

### Creation of self-signed CA

Want to feel like a real expert? What would everything look as believable and seriously? Do you want not only to sign JAR/EXE, but in general anything where certificates are used? Then you here. You will need the same [xca] (<https://github.com/chris2511/xca/releases>)

1. Let's start with the most important - the key of your central Root CA certificate. Create a XCA database directly on the flash drive and generate the RSA key with at least 4096 bits. Then proceed to the creation of a Root CA of a certificate. In the "subject" section, indicate all the main parameters, excluding emailaddress so that everything looks serious. For additional parameters, you can score in this tab, they are not needed. In the "Extensions" section, indicate the type - "certification center", for at least 5 years. "The area of ​​the key to the key" - "Certificate Sign" and "Crl Sign", everything else is unchanged. In the "Netscape" section, everything can be left empty
2. Then create an “additional” CA with settings like Root CA in the same database, and in the name either number or year. The only difference in "extensions" in the field "X.509V3 CRL" indicate the URL to your site where the central CRL (for example <https://ca.example.com/root.crl>). You will use this SA instead of the central Root CA to create other certificates. Then export the key and the certificate of additional CA itself and also only the Root Ca certificate. The Root CA key should not leave the flash drive. Further, I will call this CA for convenience - "2020 CA"
3. Create CRL ROOT.CRL using your Root CA (PKM-> Ts-> generate CRL) and export it. Then you will pour it on your site by the URL that you indicated above when generated 2020 CA
4. Save this database for another flash drive, CD disc, whatever it will not be connected to your PC physically (which means the Root CA key will be in safety) and that suddenly will not break immediately
5. Create a new database in another place (for example on your hard drive) where to import Root CA certificate, 2020 CA certificate and 2020 Ca key. Then you will work only with this base.
6. Create a CA that will serve as a specific goal, for example, "Code Sign RSA CA", indicating as CRL something like <https://ca.example.com/2020.crl>. All CA created using 2020 CA will use this CRL URL. Esstestively filling all the necessary fields
7. Generate CRL for 2020 CA (<https://ca.example.com/2020.crl> and all specialized CA (<https://ca.example.com/2020/codesign.crl>). Then you will pour them on the site by the URL that you indicated
8. And now you can create final certificates. It happens that you need to indicate some special OID that is not in GUI. Then you go to additionally-> edit and there you can specify any parameters that can be indicated in the OpensSL configuration. For example, add custom ExtndedKeyusage
