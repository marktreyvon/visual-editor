import  { useStencil }  from ".";
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


export { usePlugins };
