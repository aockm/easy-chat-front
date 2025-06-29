import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/cust-elementplus.scss'
import '@/assets/icon/iconfont.css'
import '@/assets/base.scss'
import router from '@/router'
import Utils from '@/utils/Utils'
import Verify from '@/utils/Verify'
import Request from '@/utils/Request'
import Message from '@/utils/Message'
import Api from '@/utils/Api'
import * as Pinia from 'pinia'
import Layout from '@/components/Layout.vue'
import WinOp from '@/components/WinOp.vue'
import ContentPanel from '@/components/ContentPanel.vue'
import ShowLocalImage from '@/components/ShowLocalImage.vue'
import UserBaseInfo from "@/components/UserBaseInfo.vue";


const app = createApp(App);

app.use(ElementPlus);

app.use(router);
app.use(Pinia.createPinia());

app.component("Layout",Layout);
app.component("WinOp",WinOp);
app.component("ContentPanel",ContentPanel);
app.component("ShowLocalImage",ShowLocalImage);
app.component("UserBaseInfo",UserBaseInfo);

app.config.globalProperties.Utils = Utils;
app.config.globalProperties.Verify = Verify;
app.config.globalProperties.Request = Request;
app.config.globalProperties.Message = Message;
app.config.globalProperties.Api = Api;
app.mount('#app')
