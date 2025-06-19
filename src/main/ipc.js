import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import store from './store'

const NODE_ENV = process.env.NODE_ENV


const onLoginOrRegister = (callback) => {
    ipcMain.on("loginOrRegister",(e,isLogin)=>{
        store.initUserId(config.userId)
        store.setUserData("token",config.token);
        // TODO 增加用户配置
        
        // console.log("收到渲染进程消息",isLogin);
        callback(isLogin)
        // TODO 初始化ws连接

       
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