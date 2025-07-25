

# easychat-front

启动项目
```
npm run dev
```

构建项目



执行构建electron命令

```shell
npm create @quick-start/electron@1.0.16 easychat-front

```



依赖

```
{
  "name": "easychat-front",
  "version": "1.0.0",
  "description": "EasyChat",
  "main": "./out/main/index.js",
  "author": "example.com",
  "homepage": "https://www.electronjs.org",
  "scripts": {
    "format": "prettier --write .",
    "lint": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",
    "start": "electron-vite preview",
    "dev": "electron-vite dev",
    "build": "electron-vite build",
    "postinstall": "electron-builder install-app-deps",
    "build:win": "npm run build && electron-builder --win --config",
    "build:mac": "npm run build && electron-builder --mac --config",
    "build:linux": "npm run build && electron-builder --linux --config"
  },
  "build": {
    "extraResources": [
      "./assets/**"
    ],
    "productName": "EasyChat",
    "appId": "com.easychat",
    "directories": {
      "output": "installPackages"
    },
    "nsis": {
      "oneClick": false,
      "allowElevation": true,
      "allowToChangeInstallationDirectory": true,
      "installerIcon": "./resources/icon.ico",
      "uninstallerIcon": "./resources/icon.ico",
      "installerHeaderIcon": "./resources/icon.ico",
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true,
      "shortcutName": "EasyChat"
    },
    "mac": {
      "icon": "icons/icon.icns"
    },
    "win": {
      "artifactName": "${productName}Setup.${version}.exe",
      "icon": "resources/icon.ico",
      "target": [
        "nsis"
      ]
    }
  },
  "dependencies": {
    "@electron-toolkit/preload": "^2.0.0",
    "@electron-toolkit/utils": "^2.0.0",
    "@imengyu/vue3-context-menu": "^1.3.8",
    "axios": "^1.6.2",
    "dplayer": "^1.27.1",
    "electron-store": "^8.1.0",
    "element-plus": "^2.4.3",
    "express": "^4.18.2",
    "fluent-ffmpeg": "^2.1.2",
    "fs-extra": "^11.2.0",
    "js-md5": "^0.8.3",
    "moment": "^2.30.1",
    "pinia": "^2.1.7",
    "sass": "^1.69.5",
    "sass-loader": "^13.3.2",
    "sqlite3": "5.1.6",
    "v-viewer": "^3.0.11",
    "vue-cookies": "^1.8.3",
    "vue-router": "^4.2.5",
    "ws": "^8.16.0"
  },
  "devDependencies": {
    "@electron-toolkit/eslint-config": "^1.0.1",
    "@rushstack/eslint-patch": "^1.3.3",
    "@vitejs/plugin-vue": "^4.3.1",
    "@vue/eslint-config-prettier": "^8.0.0",
    "asarmor": "^2.0.0",
    "electron": "^25.6.0",
    "electron-builder": "^24.6.3",
    "electron-vite": "^1.0.27",
    "eslint": "^8.47.0",
    "eslint-plugin-vue": "^9.17.0",
    "less": "^4.2.0",
    "node-gyp": "^10.0.1",
    "prettier": "^3.0.2",
    "vite": "^4.4.9",
    "vue": "^3.3.4"
  }
}
```



引入element-plus

### main.js

```
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 

const app
```

### Electron 打开控制台

```JavaScript
const NODE_ENV = process.env.NODE_ENV

  //打开控制台
  if (NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
```
