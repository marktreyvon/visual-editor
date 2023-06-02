import { register } from "@antv/x6-vue-shape";
import * as Plugins from '@/plugins'

/**
 * @author cxs
 * @date 2023-05-20
 * @update 2023-05-20
 * @description 插件配置接口
 * @interface IPluginConfig
 * @export
 */
class PluginConfig implements IPluginConfig  {
    private static instance: PluginConfig;
    components: Map<String, any>;

    public constructor() {
        this.components = new Map<String, any>();
    }

    public static getInstance(): PluginConfig {
        if (!PluginConfig.instance) {
            PluginConfig.instance = new PluginConfig();
        }
        return PluginConfig.instance;
    }
    
    public addComponent(name: String, component: any): void {
        this.components.set(name, component);
    }

    public setComponents(components: Map<String, any>): void {
        this.components = components;
    }

    public getComponent(name: String): any {
        return this.components.get(name);
    }

    public getComponents(): Map<String, any> {
        return this.components;
    }

    public registerComponents(data: any): void {
        console.log('============registerComponents===================')
        console.log(Plugins)
        const plugins: any = <any>Plugins;
        for (const key in plugins) {
            console.log(key)
            const plugin = plugins[key];
            const { views } = plugin.default;
            views.forEach((view: any) => {
                const cell = data.find((item: any) => item.shape === view.name);
                if (cell) {
                    // 注册组件
                    this.registerComponent(cell, view.Main);
                }
            })
        }
       
        console.log('============registerComponents===================')
    }

    public registerComponent(cell: any, component: any): void {
        register({
            shape: cell.shape,
            width: cell.size.width,
            height: cell.size.height,
            component
          });
    }
   
}

export { PluginConfig }