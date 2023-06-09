import { CanvasConfig, PluginConfig } from "@/editor/config";
import {Graph, Node, Timing} from '@antv/x6'
import * as Common from "@/common";
import * as Plugins from '@/plugins'
import { usePlugins } from '@/editor/hooks';
import extracted from "@/utils/makeedgevs";
import { register } from "@antv/x6-vue-shape";
import { getDisplayComponent } from "./components/DisplayComponent";
import PluginAPI from '@/api/plugin';
import VisualAPI from '@/api/visual';
import { getDisplayPicComponent } from "./components/DisplayPicComponent";
export const useDisplay = (containerId: string) => {

    let jsonObj: any = {};
    const initDisplay = async (data: any, id?: string) => {
        let jsonData = data;
        const options: ICanvasConfig.Options = {
            autoResize: true,
            nodeMovable: false,
            nodeResizable: false,
            enableRotating: false,
            enableSelection: false,
        }
        if (id) {
            let { data: result } = await VisualAPI.getJsonDataById({current_page: 1, per_page: 10, id});
            if (result.code === 200) {
                jsonData = result.data?.data?.[0]?.json_data;
            }
        }
        if (jsonData && JSON.stringify(jsonData) !== '{}') {
            jsonObj = JSON.parse(jsonData);
            console.log('initDisplay.jsonObj', jsonObj)
            let canvasConfig: ICanvasConfig = CanvasConfig.getDisplayInstance(containerId, options);
            // 渲染节点
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

                // 移除删除按钮
                cell.tools = undefined;

            });
            canvasConfig.renderJSON(jsonObj);
            // 初始化画布背景
            canvasConfig.setBackground(jsonObj.graph.background);
            // 初始化画布网格
            canvasConfig.showGrid(jsonObj.graph.showGrid);

            const  theg = canvasConfig.getGraph()
            const Edges=theg.getEdges()
            console.log(Edges)
            Edges.forEach((edge:any)=>{
                console.log(edge.attr('targetData'))
                canvasConfig.edgeAnimation(edge,edge.attr('targetData'))
            })


            // jsonObj.cells.forEach((cell: any) => {
            //     /**
            //      如果节点有链接桩，则不显示
            //      **/
            //     if(cell.shape==='edge'){
            //         console.log(cell.attrs.targetData)
            //         canvasConfig.getGraph().gete
            //         canvasConfig.edgeAnimation(cell,cell.attrs.targetData)
            //     }
            // });
        }
    }

    /**
     * 加载插件
     * @param plugins 
     * @param data { style, value, option }
     */
    const loadPlugins = (plugins: any, data: any): void => {
        if (data && JSON.stringify(data) !== '{}') {
            let jsonObj = JSON.parse(data);
            for (const key in plugins) {
                const plugin = plugins[key];
                const { views } = plugin.default;
                views.forEach((view: any) => {
                    jsonObj.cells.forEach((cell: any) => {
                        if (cell.shape === view.name) {
                            console.log('display.loadPlugins', cell)
                            // const cpt: any = getDisplayComponent(view.Main, cell.data || null);
                            // registerShape(view.name, cpt);
                        }
                        //  else if (cell.data && cell.data.pic) {
                        //     console.log('display.loadPlugins', cell.data)
                        //     const cpt: any = getDisplayPicComponent(cell.data);
                        //     registerShape(cell.shape, cpt);
                        // }
                    });
                })
            }
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

    const getJSONData = (id: string) => {
        
    }

    return {
        initDisplay
    }
}