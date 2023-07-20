import { App } from 'vue';
// import DataV, { setClassNamePrefix } from '@kjgl77/datav-vue3';
import DataVVue3 from '@kjgl77/datav-vue3'
// import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';
export function installDataV(app: App): void {
  app.use(DataVVue3);
}