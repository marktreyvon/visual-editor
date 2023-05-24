import  { useStencil }  from ".";
import { PluginConfig } from "../config";

/**
 * @author cxs
 * @date 2023-04-28
 * @update 2023-05-24
 * @description 加载插件
 * @returns 
 */
export const usePlugins = (): any => {
    const { initStencil } = useStencil();

    const loadPlugins = (plugins: any): void => {
        const pluginConfig: IPluginConfig = PluginConfig.getInstance();
        for (const key in plugins) {
            const plugin = plugins[key];
            const { views } = plugin.default;
            views.forEach((view: any) => {
                pluginConfig.addComponent(view.name, view);
            })
        }
        initStencil(plugins);
    }

    return {
        loadPlugins
    }
}

