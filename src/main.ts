import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Vue from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import * as ElementPlus from 'element-plus'

// 第三方插件
import * as Plugins from './plugins';

// import ElementPlus from 'element-plus';

import 'systemjs'
// @ts-ignore
System.set('lib:vue', Vue);
// @ts-ignore
System.set('lib:element-plus', ElementPlus);


const app = createApp(App);

// 使用 Element Plus
Plugins.installElementPlus(app);
// Plugins.installDataV(app);

app.use(router);

router.isReady().then(() => app.mount('#app'));
