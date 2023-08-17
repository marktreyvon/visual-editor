import { App } from 'vue'
import * as echarts from 'echarts'

export function installEchart(app: App): void {
    app.config.globalProperties.$echarts = echarts;
  }