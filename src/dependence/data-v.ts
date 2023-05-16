import { App } from 'vue';
import DataVVue3 from '@kjgl77/datav-vue3';

export function installDataV(app: App): void {
  app.use(DataVVue3);
}