import  { useStencil }  from ".";
import { register } from "@antv/x6-vue-shape";
import { PluginConfig } from "../config";

const usePlugins = (plugins: any): void => {
    console.log(plugins);
    const pluginConfig: IPluginConfig = PluginConfig.getInstance();
    for (const key in plugins) {
        const plugin = plugins[key];
        const { views } = plugin.default;
        views.forEach((view: any) => {
            pluginConfig.addComponent(view.name, view);
        })
    }
    useStencil(plugins);
}
const registerShape = (shape: string, component: any) => {
    register({
        shape,
        width: 100,
        height: 100,
        component: component
      });
}

export { usePlugins };
