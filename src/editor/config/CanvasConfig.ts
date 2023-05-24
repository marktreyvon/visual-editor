import { Cell, Graph, Node,Color } from '@antv/x6';
import { Selection } from "@antv/x6-plugin-selection";
import { History } from "@antv/x6-plugin-history";
import { Snapline } from "@antv/x6-plugin-snapline";
import { Transform } from "@antv/x6-plugin-transform";
import { Export } from "@antv/x6-plugin-export";

import { register } from "@antv/x6-vue-shape";
import * as Common from "@/common";
import { CellEvents } from '../events/CellEvents';
/**
 * @author cxs
 * @date 2023-04-19
 * @update 2023-05-19 新增了节点不可拖拽和调整大小的功能 
 * @description 画布配置 
 * @param graph 画布
 * @param containerId 画布容器id
 * @param autoResize 是否自动调整画布大小
 * @param gridSize 网格大小
 * @param selection 是否开启框选
 * @param history 是否开启撤销重做
 * @param enableMouseWheel 是否开启鼠标滚轮缩放
 * @param enableMousePan 是否开启鼠标平移画布
 * @param zoomFactor 缩放因子
 * @param rotatingGrid 节点每次旋转的角度
 * @class CanvasConfig
 * @implements {ICanvasConfig}
 */
class CanvasConfig implements ICanvasConfig {
    private static instance: CanvasConfig;
    private static displayInstance: CanvasConfig;
    graph: Graph | undefined = undefined;
    cellEvents: CellEvents | undefined = undefined;
    containerId: string;
    autoResize: boolean = Common.DEFAULT_AUTO_RESIZE;
    gridSize: number = Common.DEFAULT_GRID_SIZE;
    selection: boolean = Common.DEFAULT_SELECTION;
    history: boolean = Common.DEFAULT_HISTORY;
    enableMouseWheel: boolean = Common.DEFAULT_ENABLE_MOUSE_WHEEL;
    enableMousePan: boolean = Common.DEFAULT_ENABLE_MOUSE_PAN;
    zoomFactor: number = Common.DEFAULT_ZOOM_FACTOR;
    rotatingGrid: number = Common.DEFAULT_RATATING_GRID;
    nodeMovable: boolean = Common.DEFAULT_NODE_MOVABLE;
    nodeResizable: boolean = Common.DEFAULT_NODE_RESIZABLE;

    private constructor(containerId: string, options?: ICanvasConfig.Options) {
        this.containerId = containerId;
        if (options) {
            if (options.autoResize !== undefined) this.autoResize = options.autoResize;
            if (options.gridSize !== undefined) this.gridSize = options.gridSize;
            if (options.selection !== undefined) this.selection = options.selection;
            if (options.history !== undefined) this.history = options.history;
            if (options.enableMouseWheel !== undefined) this.enableMouseWheel = options.enableMouseWheel;
            if (options.enableMousePan !== undefined) this.enableMousePan = options.enableMousePan;
            if (options.zoomFactor !== undefined) this.zoomFactor = options.zoomFactor;
            if (options.rotatingGrid !== undefined) this.rotatingGrid = options.rotatingGrid;
            if (options.nodeMovable !== undefined) this.nodeMovable = options.nodeMovable;
            if (options.nodeResizable !== undefined) this.nodeResizable = options.nodeResizable;
        }
        this.initGraph();
    }
    
    public static getInstance(containerId: string = Common.DEFAULT_CONTAINER_ID, options?: ICanvasConfig.Options): CanvasConfig {
        if (!CanvasConfig.instance) {
            CanvasConfig.instance = new CanvasConfig(containerId, options);
        }
        return CanvasConfig.instance;
    }

    public static getDisplayInstance(containerId: string = Common.DEFAULT_DISPLAY_CONTAINER_ID, options?: ICanvasConfig.Options): CanvasConfig {
        if (!CanvasConfig.displayInstance) {
            CanvasConfig.displayInstance = new CanvasConfig(containerId, options);
        }
        return CanvasConfig.displayInstance;
    }

    initGraph(): void {
        this.graph = new Graph({
            container: <HTMLDivElement>document.getElementById(this.containerId),
            autoResize: this.autoResize,
            panning: {
                enabled: this.enableMousePan,
                eventTypes: ["rightMouseDown", "mouseWheel"]
            },
            connecting:{
                allowBlank: false,  //不允许指向空节点;  *@author 王炳宏  2023-05-23
                allowMulti: false,  //不允许重复连接;  *@author 王炳宏  2023-05-23
                allowLoop: false,   //不允许自连;   *@author; 王炳宏  2023-05-23
                allowNode: false,   //不允许非连接点连接,如需要改为true；  *@author; 王炳宏  2023-05-23
                allowEdge: false,   //不允许非连接点连接,如需要改为true； *@author; 王炳宏  2023-05-23
                allowPort: true,    //不允许指向空节点,*@author; 王炳宏  2023-05-23
            },
            interacting: (cellView) => {
                return {
                    nodeMovable: this.nodeMovable,
                    magnetConnectable:true      // 增加可连接点的交互,magnetConnectable*@author; 王炳宏  2023-05-23
                }
            }
        });
        // 配置网格大小
        this.graph.setGridSize(this.gridSize);
        // 显示网格
        this.graph.showGrid();

        // 配置多节点框选
        if (this.selection) {
            this.graph.use(
                new Selection({
                    enabled: true,
                    multiple: true,
                    rubberband: true,
                    movable: true,
                    showNodeSelectionBox: true,
                })
            );
        }
        

        // 配置撤销重做
        if (this.history) {
            this.graph.use(
                new History({
                    enabled: true,
                })
            );
        }

        // 开启滚轮缩放画布
        if (this.enableMouseWheel) {
            this.graph.enableMouseWheel();
        }

        // 启用画布平移
        this.graph.enablePanning();

        // 启用对齐线
        this.graph.use(
            new Snapline({
              enabled: true,
            })
          );

        // 配置节点缩放
        const resizingOptions = {
            enabled: this.nodeResizable,
            minWidth: 80,
            maxWidth: 400,
            minHeight: 40,
            maxHeight: 400,
            orthogonal: false,
            restrict: true,
            preserveAspectRatio: false,
        }

        // 配置节点旋转
        const rotatingOptions = {
            enabled: true,
            grid: this.rotatingGrid,
        }
        // 启用缩放和旋转
        this.graph.use(
            new Transform({
              resizing: resizingOptions,
              rotating: rotatingOptions
            })
          );

        // 启用导出
        this.graph.use(new Export());

        // 监听节点事件
        this.cellEvents = new CellEvents(this.graph);

        this.setNodeMovable(this.nodeMovable);
    }


    public getGraph(): Graph | undefined {
        return this.graph;
    }

    public getEvents(): CellEvents | undefined {
        return this.cellEvents;
    }

    public setNodeMovable(nodeMovable: boolean): void {
        this.nodeMovable = nodeMovable;
        if (!this.nodeMovable) {
            this.graph?.disableSelectionMovable();
        }
    }
    
    public zoomToFit(): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.zoomToFit({ maxScale: 1 });
        this.graph.centerContent();
    }

    //增加改变边样式的函数， ;  *@author; 王炳宏  2023-05-23
    //todo 需要完善其他需求
    public onChangeEdges(command: string): void {

        if (!this.graph)
            throw new Error('Graph is undefined.');
        const edges = this.graph.getEdges()
        switch (command){
            case 'prop':
                edges.forEach((edge) => {
                    const x = Math.floor(Math.random() * 600)
                    const y = Math.floor(Math.random() * 200)
                    edge.prop('vertices', [[x, y]])
                })
                break
            case 'attr':
                edges.forEach((edge) => {
                    const color = Color.random().toHex()
                    edge.attr('line/stroke', color)
                })
                break
        }

    }
    
    public renderJSON(json: any): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.fromJSON(json);
    }

    
    public zoomIn(): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.zoom(this.zoomFactor);
    }

    
    public zoomOut(): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.zoom(-this.zoomFactor);
    }

    public enableSnapline(): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.enableSnapline()
    }

    public disableSnapline(): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.disableSnapline();
    }

    public undo(): void {   
        if (!this.graph)
            throw new Error('Graph is undefined.');
        this.graph.undo();
    }

    public redo(): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.redo();
    }

    public toJSON(): { cells: Cell.Properties[] } {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        return this.graph.toJSON();
    }

    public exportSVG(fileName?: string, options?: Export.ToImageOptions): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.exportSVG(fileName, options);
    }

    public exportPNG(fileName?: string, options?: Export.ToImageOptions): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.exportPNG(fileName, options);
    }

    public exportJPEG(fileName?: string, options?: Export.ToImageOptions): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.exportJPEG(fileName, options);
    }

    public addComponent(
        component: any, 
        name: string, 
        pos?: {x: number, y: number}, 
        size?: {w: number, h: number}, 
        data?: Object): Node<Node.Properties> {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        register({
            shape: name,
            width: size?.w || 100,
            height: size?.h || 100,
            component
        })
        let _data: { width: number, height: number } = { width: size?.w || 100, height: size?.h || 100 };
        
        return this.graph.addNode({
            shape: name,
            x: pos?.x || 0,
            y: pos?.y || 0,
            data: _data
        });
    }

}


export { CanvasConfig };