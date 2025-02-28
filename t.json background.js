[1mdiff --git a/background.js b/background.js[m
[1mindex 9170ce9..03f19a7 100755[m
[1m--- a/background.js[m
[1m+++ b/background.js[m
[36m@@ -1,10 +1,13 @@[m
[32m+[m[32m// Import required scripts[m
[32m+[m[32mimportScripts('sites.js', 'bpc_count_daily_users.js');[m
[32m+[m
 'use strict';[m
 var ext_api = (typeof browser === 'object') ? browser : chrome;[m
 var url_loc = (typeof browser === 'object') ? 'firefox' : 'chrome';[m
 var manifestData = ext_api.runtime.getManifest();[m
 var ext_name = manifestData.name;[m
 var ext_version = manifestData.version;[m
[31m-var navigator_ua = navigator.userAgent;[m
[32m+[m[32mvar navigator_ua = self.navigator.userAgent;[m
 var navigator_ua_mobile = navigator_ua.toLowerCase().includes('mobile');[m
 var kiwi_browser = navigator_ua_mobile && (url_loc === 'chrome') && !navigator_ua.toLowerCase().includes('yabrowser');[m
 [m
[1mdiff --git a/manifest.json b/manifest.json[m
[1mindex 4b0b865..365e3b5 100755[m
[1m--- a/manifest.json[m
[1m+++ b/manifest.json[m
[36m@@ -1,9 +1,8 @@[m
 {[m
   "background": {[m
[31m-    "scripts": ["sites.js", "bpc_count_daily_users.js", "background.js"][m
[32m+[m[32m    "service_worker": "background.js"[m[41m[m
   },[m
[31m-  "content_security_policy": "script-src 'self'; object-src 'self'",[m
[31m-  "browser_action": {[m
[32m+[m[32m  "action": {[m[41m[m
     "default_popup": "options/popup.html"[m
   },[m
   "description": "Bypass Paywalls of news sites",[m
[36m@@ -11,7 +10,7 @@[m
   "icons": {[m
     "128": "bypass.png"[m
   },[m
[31m-  "manifest_version": 2,[m
[32m+[m[32m  "manifest_version": 3,[m[41m[m
   "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvLxf4oOeSoz8qKVzKGQWW5zW44hWCoOoQRGXTrObUpyoGfGzhFO8aZHQmBcLrAZMA4O6EA7GaXnHkOPCLKM11seZ4J2azb1gSswApfAlaoeOLnhDnp/Jpzz7Bt6o4HL+nhKRJUOZ9z+GXAyOkOps5O38TwJN5R6z8tLkleRgfYscp19YU/vq1x9PrbXIHJTRB7qtb/iJmiKATKisXGmFY3Nbs5m379TGqcJFBM9bI+8bSJtS4e7t0LHOwSLDq3IVRaWVsFd9P19WEDNTxuzr9+rczOrw1vgmiisNOcElse8cyVIoq4bjepvfHM/9nzDgKwQsNG5OTzujwHu2UUN4cwIDAQAB",[m
   "name": "Bypass Paywalls Clean",[m
   "update_url": "https://gitlab.com/magnolia1234/bypass-paywalls-chrome-clean/-/raw/master/updates.xml",[m
[36m@@ -36,8 +35,9 @@[m
     "cookies",[m
     "storage",[m
     "activeTab",[m
[31m-    "webRequest",[m
[31m-    "webRequestBlocking",[m
[32m+[m[32m    "declarativeNetRequest"[m[41m[m
[32m+[m[32m  ],[m[41m[m
[32m+[m[32m  "host_permissions": [[m[41m[m
     "*://*.360dx.com/*",[m
     "*://*.60millions-mag.com/*",[m
     "*://*.aachener-nachrichten.de/*",[m
[36m@@ -740,5 +740,8 @@[m
     "*://html.onlineviewer.net/*",[m
     "*://webcache.googleusercontent.com/*"[m
   ],[m
[31m-  "version": "3.1.4.4"[m
[32m+[m[32m  "version": "3.1.4.4",[m[41m[m
[32m+[m[32m  "content_security_policy": {[m[41m[m
[32m+[m[32m    "extension_pages": "script-src 'self'; object-src 'self'"[m[41m[m
[32m+[m[32m  }[m[41m[m
 }[m
