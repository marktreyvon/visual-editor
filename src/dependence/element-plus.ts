import { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export function installElementPlus(app: App): void {
  app.use(ElementPlus, { locale: zhCn })
}