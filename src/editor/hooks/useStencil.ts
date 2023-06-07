import { CanvasConfig, StencilConfig } from '../config';
import * as Common from '@/common';
import { Graph } from '@antv/x6';
import { Stencil } from "@antv/x6-plugin-stencil";
import { getDropPicComponent } from '../components/canvas-editor/DropPicComponent';
/**
 * @author cxs
 * @date 2023-04-28
 * @update 2023-05-24
 * @description 左侧组件列表
 * @returns 
 */
export const useStencil = () => {

    /**
     * 初始化左侧组件列表
     * @param plugins 
     */
    const initStencil = (plugins: any, picPlugins?: any) => {
        const graph: Graph = getGraph();
        console.log('=================initStencil===================');
        console.log('=================initStencil===================');
        const { groups, nodeMap} = createStencilNode(plugins, graph);
        let groupList: Stencil.Group[] = groups.map((group: string) => getGroup(group));
        const stencilConfig: IStencilConfig = getStencilConfig(groupList);
        nodeMap.forEach((nodes: any[], key: string) => {
            stencilConfig.getStencil().load(nodes, key);
        });
    }

    /**
     * 创建左侧列表上的图标
     * @param plugins 
     * @param graph 
     * @returns 
     */
    const createStencilNode = (plugins: any, graph: Graph) => {
        let nodeMap: Map<string, any[]> = new Map<string, any[]>();
        let groups: string[] = [];
        let nodeList: any[] = [];
        for (const key in plugins) {
            const plugin = plugins[key];
            const { views } = plugin.default;
            views.forEach((view: any) => {
                if (groups.indexOf(view.group) === -1) {
                    groups.push(view.group);
                }
                const node = graph?.createNode({
                    shape: 'image',
                    x: 40,
                    y: 40,
                    width: 40,
                    height: 40,
                    data: {
                        name: view.name
                    },
                    imageUrl: view.icon
                })
                if (!nodeMap.has(view.group)) {
                    nodeList = [];
                    nodeList.push(node);
                } else {
                    nodeList.push(node);
                }
                nodeMap.set(view.group, nodeList);
            })
        }

        return {
            groups,
            nodeMap
        }
    }


    /**
     * 获取画布上下文
     * @returns 
     */
    const getGraph = (): Graph => {
        const canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
        const graph: Graph = canvasConfig.getGraph();
        return graph;
    }
    
    /**
     * 获取Stencil管理器
     * @param groupList 
     * @returns 
     */
    const getStencilConfig = (groupList: Stencil.Group[]) : IStencilConfig => {
        const graph = getGraph();
        const stencilConfig: IStencilConfig = StencilConfig.getInstance(graph, groupList, Common.DEFAULT_STENCIL_CONTAINER_ID);
        return stencilConfig;
    }

    const getGroup = (name: string): Stencil.Group => {
        return {
            name: name,
            title: name,
            collapsable: true,
            collapsed: true
        }
    }

    return {
        initStencil
    }
    
}



