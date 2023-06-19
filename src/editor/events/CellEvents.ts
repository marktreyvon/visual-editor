import { Graph,Edge,Node,ToolsView } from "@antv/x6";
import * as Common from "@/common";
import { h } from 'vue';
import {DEFAULT_CONTAINER_ID} from "@/common";
/**
 * 事件处理
 */
class CellEvents implements ICellEvents {

    graph: Graph | undefined;
    isDrawLine:boolean =false
    container: HTMLElement | SVGElement| undefined;

    graphScaleListener: EventListener<Object> | undefined;

    nodeAddListener: EventListener<Object> | undefined;

    clickListener: EventListener<Object> | undefined;

    dbClickListener: EventListener<Object> | undefined;

    mouseEnterListener: EventListener<Object> | undefined;

    mouseLeaveListener: EventListener<Object> | undefined;

    movedListener: EventListener<Object> | undefined;

    contextMenuListener: EventListener<Object> | undefined;

    resizeListener: EventListener<Object> | undefined;

    resizedListener: EventListener<Object> | undefined;

    mountedListener: EventListener<Object> | undefined;

    unmountedListener: EventListener<Object> | undefined;

    removedListener: EventListener<Object> | undefined;

    constructor(graph: Graph,isDrawLine:boolean) {
        this.graph = graph;
        this.isDrawLine=isDrawLine
        this.container = <HTMLDivElement>document.getElementById(Common.DEFAULT_CONTAINER_ID);
        this.initEvents();
    }

    initEvents(): void {
        if (!this.graph)
            throw new Error('Graph is undefined.');
        let edge: Edge | null = null
        let node: Node | null = null

        // 画布缩放事件
        this.graph.on("scale", ({ sx, sy, ox, oy }) => {
            this.graphScaleListener && this.graphScaleListener({ sx, sy, ox, oy });
        });

        this.graph.on("blank:click", ({ e, x, y }) => {
            this.clickListener && this.clickListener({ e, x, y });
        });

        this.graph.on("blank:contextmenu", ({ e, x, y }) => {
            this.clickListener && this.clickListener({ e, x, y });
        });

        this.graph.on("cell:added", ({ cell, index, options }) => {
            this.nodeAddListener && this.nodeAddListener({ cell, index, options });
        });

        // 单击事件 
        this.graph.on("cell:click", ({ e, x, y, cell, view }) => {
            this.clickListener && this.clickListener({ e, x, y, cell, view });
        });

        // 节点双击事件
        this.graph.on("cell:dblclick", ({ e, x, y, cell, view }) => {
            this.dbClickListener && this.dbClickListener({ e, x, y, cell, view });
        });

        // 节点移入事件
        this.graph.on("cell:mouseenter", ({ e, cell, view }) => {
            this.mouseEnterListener && this.mouseEnterListener({ e, cell, view });
        });
        
        //节点被挂载到画布上时触发。
        this.graph.on("view:mounted", ({ view }) => {

            this.mountedListener&& this.mountedListener({  view });
        });


        //节点从画布上卸载时触发。
        this.graph.on("view:unmounted", ({ view }) => {

            this.unmountedListener&& this.unmountedListener({  view });

        });

        // 节点移出事件
        this.graph.on("cell:mouseleave", ({ e, cell, view }) => {
            this.mouseLeaveListener && this.mouseLeaveListener({ e, cell, view });
        });

        // 节点移动事件
        this.graph.on("node:moved", ({ e, x, y, node, view }) => {
            this.movedListener && this.movedListener({ e, x, y, node, view });
        });
        
        // 边移动事件
        this.graph.on("edge:moved", ({ e, x, y, edge, view }) => {
            this.movedListener && this.movedListener({ e, x, y, node: edge, view });
        });

        // 右键菜单事件
        this.graph.on("cell:contextmenu", ({ e, x, y, cell, view }) => {
            this.contextMenuListener && this.contextMenuListener({ e, x, y, cell, view });
        });

        // 节点大小改变事件
        this.graph.on("node:resize", ({ e, x, y, node, view }) => {
            this.resizeListener && this.resizeListener({ e, x, y, node, view });
        });

        this.graph.on("node:resized", ({ e, x, y, node, view }) => {
            this.resizedListener && this.resizedListener({ e, x, y, node, view });
        });

        this.graph.on("cell:added", ({  cell, index, options  }) => {
        });

        this.graph.on("cell:removed", ({  cell, index, options  }) => {
        });

        this.graph.on("cell:changed", ({ cell, options }) => {
        });

        this.graph.on('edge:selected', ({ edge }) => {
            edge.addTools([ { name: "segments" ,args:{stopPropagation:false,}},{ name: "vertices" ,args:{stopPropagation:false,}}, { name: "target-arrowhead" ,args:{stopPropagation:false}},  { name: "source-arrowhead" ,args:{
                    attrs: {
                        d: `
                        M 0,0
                        m -8,0
                        a4,4 0 1,0 8,0
                        a4,4 0 1,0 -8,0
                        `,
                        fill: 'rgba(0,0,0,0)',
                        stroke: '#282828',
                        'stroke-width':2,
                        cursor: 'move',
                    },
                }}])
        })

        this.graph.on('edge:unselected', ({ edge }) => {
            edge.removeTools()
        })

        this.graph.on('cell:removed', ({ cell }) => {
            this.removedListener && this.removedListener({ cell });
        })

    }

    public setGraphScaleEventListener(listener: EventListener<Object>): void {
        this.graphScaleListener = listener;
    }

    public setNodeAddEventListener(listener: EventListener<Object>): void {
        this.nodeAddListener = listener;
    }

    public setClickEventListener(listener: EventListener<Object>): void {
        this.clickListener = listener;
    }

    public setDBClickEventListener(listener: EventListener<Object>): void {
        this.dbClickListener = listener;
    }

    public setMouseEnterEventListener(listener: EventListener<Object>): void {
        this.mouseEnterListener = listener;
    }

    public setMouseLeaveEventListener(listener: EventListener<Object>): void {
        this.mouseLeaveListener = listener;
    }

    public setMovedEventListener(listener: EventListener<Object>): void {
        this.movedListener = listener;
    }

    public setContextMenuEventListener(listener: EventListener<Object>): void {
        this.contextMenuListener = listener;
    }

    public setResizeEventListener(listener: EventListener<Object>): void {
        this.resizeListener = listener;
    }

    public setResizedEventListener(listener: EventListener<Object>): void {
        this.resizedListener = listener;
    }
    public setMountedEventListener(listener: EventListener<Object>): void {
        this.mountedListener = listener;
    }
    public  setUnmountedEventListener(listener: EventListener<Object>): void {
        this.unmountedListener = listener;
    }

    public setRemovedEventListener(listener: EventListener<Object>): void {
        this.removedListener = listener;
    }
}



export { CellEvents }