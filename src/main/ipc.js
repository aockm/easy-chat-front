import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

const NODE_ENV = process.env.NODE_ENV


const onLoginOrRegister = (callback) => {
    ipcMain.on("loginOrRegister",(e,isLogin)=>{
        // console.log("收到渲染进程消息",isLogin);
        callback(isLogin)
       
      })

}

const onLoginSuccess = (callback) => {
    ipcMain.on("openChat",(e,config)=>{
        callback(config)
       
      })
}


export {
    onLoginOrRegister,
    onLoginSuccess
}