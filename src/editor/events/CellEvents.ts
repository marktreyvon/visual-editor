import { Graph,Edge,Node,ToolsView } from "@antv/x6";
import * as Common from "@/common";
import { h } from 'vue';
import {DEFAULT_CONTAINER_ID} from "@/common";
/**
 * 事件处理
 */
class CellEvents implements ICellEvents {

    graph: Graph | undefined;

    container: HTMLElement | SVGElement| undefined;

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

    constructor(graph: Graph) {
        this.graph = graph;
        this.container = <HTMLDivElement>document.getElementById(Common.DEFAULT_CONTAINER_ID);
        this.initEvents();
    }

    initEvents(): void {
        if (!this.graph)
            throw new Error('Graph is undefined.');

        let edge: Edge | null = null
        let node: Node | null = null

        const init = (pos: { x: number; y: number }) => {
            if (!this.graph)
                throw new Error('Graph is undefined.');
            edge = this.graph.addEdge({
                source: {x:pos.x-100,y:pos.y},
                target: pos,
                attrs: {
                    line: {
                        stroke: '#343434',
                        strokeWidth: 2,
                    },
                },
            })
            finish(true)
        }

        const finish = (closed: boolean) => {
            if (!this.graph)
                throw new Error('Graph is undefined.');
            if (node && edge) {
                const vertices = edge.getVertices()
                if (closed) {
                    if (vertices.length >= 2) {
                        const center = node.getBBox().center
                        edge.setSource(center)
                        edge.setTarget(center)
                        this.graph.removeNode(node)
                        node = null
                        print()
                    } else {
                        this.graph.removeCells([node, edge])
                        node = null
                        edge = null
                    }
                } else {
                    if (vertices.length >= 1) {
                        const center = node.getBBox().center
                        edge.setSource(center)
                        edge.setTarget(vertices[vertices.length - 1])
                        this.graph.removeNode(node)
                        node = null
                        print()
                    } else {
                        this.graph.removeCells([node, edge])
                        node = null
                        edge = null
                    }
                }

            }
        }


        this.graph.on("blank:click", ({ e, x, y }) => {
            this.clickListener && this.clickListener({ e, x, y });
        });

        this.graph.on("blank:contextmenu", ({ e, x, y }) => {

            if (!this.graph)
                throw new Error('Graph is undefined.');
            if (!this.container)
                throw new Error('container is undefined.');
            const pos = this.graph.clientToGraph(e.clientX, e.clientY)
            const item = ToolsView.createElement('div',false) as HTMLDivElement

            item.className='menu-show'
            item.innerHTML="<div id='add-line'>添加直线</div>"

            const addLine=item.children[0] as HTMLDivElement
            addLine.onclick=()=>{
                init({x,y})
                item.className='menu-close'
            }


            item.style.left = `${pos.x-10}px`
            item.style.top = `${pos.y-10}px`
        item.onmouseleave=(e)=>{
            item.className='menu-close'
        }
            // item.style.bottom=y+'px'
            // item.style.right=x+'px'
            this.container.appendChild(item)
            // init({ x, y })
            this.clickListener && this.clickListener({ e, x, y });
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
}



export { CellEvents }