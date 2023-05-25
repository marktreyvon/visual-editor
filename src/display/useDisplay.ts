import { CanvasConfig, PluginConfig } from "@/editor/config";
import { Graph } from "@antv/x6";
import * as Common from "@/common";
import * as Plugins from '@/plugins'
import { usePlugins } from '@/editor/hooks';
import { register } from "@antv/x6-vue-shape";


export const useDisplay = (containerId: string) => {

    const initDisplay = (data: any) => {
        const options: ICanvasConfig.Options = {
            autoResize: true,
            nodeMovable: false,
            nodeResizable: false,
            enableRotating: false
        }
        loadPlugins(Plugins)
        let canvasConfig: ICanvasConfig = CanvasConfig.getDisplayInstance(containerId, options);
        if (data) {
            canvasConfig.renderJSON(JSON.parse(data));
        }
    }

    /**
     * 加载插件
     * @param plugins 
     */
    const loadPlugins = (plugins: any): void => {
        for (const key in plugins) {
            const plugin = plugins[key];
            const { views } = plugin.default;
            views.forEach((view: any) => {
                registerShape(view.name, view.Main);
            })
        }
    }

    /**
     * 注册组件
     * @param shape 
     * @param component 
     */
    const registerShape = (shape: string, component: any) => {
        register({
            shape,
            width: 100,
            height: 100,
            component
          });
    }

    return {
        initDisplay
    }
}