import { createApp } from 'vue'
import 'systemjs'
import './style.css'
import App from './App.vue'
import router from './router'
import * as Vue from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import * as ElementPlus from 'element-plus'
System.set('lib:vue', Vue)
System.set('lib:element-plus', ElementPlus)

// 第三方插件
import * as Plugins from './plugins';


// tailwindcss
import './index.css'  

const app = createApp(App);

// 使用 Element Plus
Plugins.installElementPlus(app);
Plugins.installDataV(app);

app.use(router);

router.isReady().then(() => app.mount('#app'));
