import  { useStencil }  from ".";
import { register } from "@antv/x6-vue-shape";
import { PluginConfig } from "../config";

const usePlugins = (plugins: any): void => {
    console.log(plugins);
    let pluginConfig: IPluginConfig = PluginConfig.getInstance();
    for (const key in plugins) {
        const plugin = plugins[key];
        const { views } = plugin.default;
        views.forEach((view: any) => {
            console.log('usePlugins', view.name, view.Main);
            pluginConfig.addComponent(view.name, view);
            registerShape(view.name, view.Main);
        })
    }
    useStencil(plugins);
}

const registerShape = (shape: string, component: any) => {
    register({
        shape,
        width: 100,
        height: 100,
        component
      });
}

export { usePlugins };
