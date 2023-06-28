import { App } from 'vue'
import VueAMap, {initAMapApiLoader} from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'

export function installAMap(app: App): void {
    initAMapApiLoader({
        key: 'ed5c61a1ea2cd5e4dc90b4a33f778f09',
        securityJsCode: 'securityJsCode', // 新版key需要配合安全密钥使用
        //Loca:{
        //  version: '2.0.0'
        //} // 如果需要使用loca组件库，需要加载Loca
      })
      app.use(VueAMap);
}