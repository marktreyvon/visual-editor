import { Graph } from "@antv/x6";

/**
 * 事件处理
 */
class CellEvents implements ICellEvents {

    graph: Graph | undefined;

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
        this.initEvents();
    }
    
    
    initEvents(): void {
        if (!this.graph)
            throw new Error('Graph is undefined.');

        this.graph.on("blank:click", ({ e, x, y }) => {
            console.log("pppppp")
            this.clickListener && this.clickListener({ e, x, y });
        });

        // 单击事件 
        this.graph.on("cell:click", ({ e, x, y, cell, view }) => {
            console.log("ooooooooooo")
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

        this.graph.on('edge:mouseenter', ({ edge }) => {

            edge.addTools([ 'target-arrowhead','source-arrowhead'])

        })

        this.graph.on('edge:mouseleave', ({ edge }) => {
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