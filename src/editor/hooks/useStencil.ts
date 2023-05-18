import { CanvasConfig, StencilConfig } from '../config';
import * as Common from '@/common';
import { Graph } from '@antv/x6';
import { Stencil } from "@antv/x6-plugin-stencil";


const getGraph = (): Graph => {
    const canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
    const graph: Graph = canvasConfig.getGraph();
    return graph;
}


const getStencilConfig = (groupList: Stencil.Group[]) : IStencilConfig => {
    const graph = getGraph();
    const stencilConfig: IStencilConfig = StencilConfig.getInstance(graph, groupList, Common.DEFAULT_STENCIL_CONTAINER_ID);
    return stencilConfig;
}

function useStencil(plugins: any) {
    const graph: Graph = getGraph();
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
    let groupList: Stencil.Group[] = groups.map((group: string) => getGroup(group));
    const stencilConfig: IStencilConfig = getStencilConfig(groupList);
    nodeMap.forEach((nodes: any[], key: string) => {
        stencilConfig.getStencil().load(nodes, key);
    });
}

const getGroup = (name: string): Stencil.Group => {
    return {
        name: name,
        title: name,
        collapsable: true,
    }
}

export { useStencil }