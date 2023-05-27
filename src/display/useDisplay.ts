import { CanvasConfig, PluginConfig } from "@/editor/config";
import { Graph, Node } from '@antv/x6'
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
            enableRotating: false,
            enableSelection: false,
        }
        loadPlugins(Plugins);
        console.log('initDisplay', )
        if (data && JSON.stringify(data) !== '{}') {
            const jsonObj = JSON.parse(data);
            let canvasConfig: ICanvasConfig = CanvasConfig.getDisplayInstance(containerId, options);
            // 渲染节点
            console.log('jsonObj', jsonObj.cells)
            jsonObj.cells.forEach((cell: any) => {

                /**
                 如果节点有链接桩，则不显示
                 **/
                if(cell.ports){
                    cell.ports.groups.top.attrs.circle.r=0
                    cell.ports.groups.bottom.attrs.circle.r=0
                    cell.ports.groups.left.attrs.circle.r=0
                    cell.ports.groups.right.attrs.circle.r=0
                }
                if(cell.shape!=='edge'){
                    cell.attrs = {
                        body: {
                            stroke: 'none', // 取消边框
                            fill: '#5F95FF',
                            rx: 5,
                            ry: 5,
                        }
                    }
                }

            });
            canvasConfig.renderJSON(jsonObj);
            // 初始化画布背景
            canvasConfig.setBackground(jsonObj.graph.background);
            // 初始化画布网格
            canvasConfig.showGrid(jsonObj.graph.showGrid);
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