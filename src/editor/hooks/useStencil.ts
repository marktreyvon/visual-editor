import { CanvasConfig, StencilConfig } from '../config';
import * as Common from '../common';
import { Graph } from '@antv/x6';
import { Stencil } from "@antv/x6-plugin-stencil";


const getGraph = (): Graph => {
    const canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
    const graph: Graph = canvasConfig.getGraph();
    return graph;
}


const getStencilConfig = () : IStencilConfig => {
    const graph = getGraph();
    const stencilConfig: IStencilConfig = StencilConfig.getInstance(graph, getGroups(), Common.DEFAULT_STENCIL_CONTAINER_ID);
    return stencilConfig;
}

function useStencil(plugins: any) {
    const graph: Graph = getGraph();
    const stencilConfig: IStencilConfig = getStencilConfig();
    
    let nodeList: any[] = [];
    let groupList: Map<String, string> = new WeakMap();
    
    for (const key in plugins) {
        const plugin = plugins[key];
        const { views } = plugin.default;
        views.forEach((view: any) => {
            const node = graph?.createNode({
                shape: 'image',
                x: 40,
                y: 40,
                width: 100,
                height: 40,
                data: {
                    name: view.name
                },
                imageUrl: view.icon
            })
            nodeList.push(node);
        })
    }
    
    stencilConfig.getStencil().load(nodeList, "group1");
}


function getGroups() {
    const groups = [
        {
            name: "group1",
            title: '分组1',
            collapsable: true,
        },
        {
            name: "group2",
            title: '分组2',
            collapsable: true,
        },
    ]
    return groups;
}

export { useStencil }