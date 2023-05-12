import { Stencil } from "@antv/x6-plugin-stencil";
import * as Common from "@/editor/common";
import { Graph, Node } from "@antv/x6";
/**
 * @author cxs
 * @date 2023-04-20
 * @update 2023-04-20
 * @description 左侧组件列表
 * @class StencilConfig
 * @param containerId 组件列表容器id
 * @param graph 画布
 */
class StencilConfig implements IStencilConfig {
    private static instance: StencilConfig;
    graph: Graph | undefined = undefined;
    stencil: Stencil | undefined = undefined;
    stencilId: string;
    groups: Stencil.Group[];

    /**
     * 构造函数
     * @param graph 
     * @param groups 
     * @param stencilId 
     */
    private constructor(
        graph: Graph, 
        groups: Stencil.Group[],
        stencilId: string) {
        this.graph = graph;
        this.stencilId = stencilId;
        this.groups = groups;
        this.initStencil();
    }

    /**
     * 获取单例
     * @param graph 
     * @param groups 
     * @param stencilId 
     * @returns 
     */
    public static getInstance (
        graph: Graph, 
        groups: Stencil.Group[], 
        stencilId: string = Common.DEFAULT_STENCIL_CONTAINER_ID): StencilConfig {
        if (!StencilConfig.instance) {
            StencilConfig.instance = new StencilConfig(graph, groups, stencilId);
        }
        return StencilConfig.instance;
    }

    initStencil(): void {
        this.stencil = new Stencil({
            title: '组件列表',
            target: this.graph,
            search(cell, keyword) {
                const text = cell.getAttrs()?.text?.text || '';
                if (typeof text === 'string') {
                    return text.indexOf(keyword) !== -1
                }
                return false;
            },
            groups: this.groups,
            getDropNode: (node) => {
                return this.getDropNode(node);
            }
        });

        document.getElementById(this.stencilId)?.appendChild(this.stencil.container);
    }

    public getStencil(): Stencil | undefined {
        return this.stencil;
    }

    private getDropNode(node) {
        if (!this.graph) return null;
        console.log('getDropNode', node)
        const { data } = node;
        return this.graph.createNode({
            shape: data.name,
            x: 100,
            y: 40,
            width: 200,
            height: 200,
            label: data.name
        });
    }
}

export { StencilConfig }