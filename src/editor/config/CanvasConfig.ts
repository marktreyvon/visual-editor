import { Cell, Graph, Node,Color,Timing } from '@antv/x6';
import { Selection } from "@antv/x6-plugin-selection";
import { History } from "@antv/x6-plugin-history";
import { Snapline } from "@antv/x6-plugin-snapline";
import { Transform } from "@antv/x6-plugin-transform";
import { Export } from "@antv/x6-plugin-export";
import extracted from "@/utils/makeedgevs"
import { register } from "@antv/x6-vue-shape";
import * as Common from "@/common";
import { CellEvents } from '../events/CellEvents';
import {message} from "@/utils";
import { PluginConfig } from '.';
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
    graphOptions: ICanvasConfig.GraphOptions;
    cellEvents: CellEvents | undefined = undefined;
    containerId: string;
    autoResize: boolean = Common.DEFAULT_AUTO_RESIZE;
    gridSize: number = Common.DEFAULT_GRID_SIZE;
    history: boolean = Common.DEFAULT_HISTORY;
    enableMouseWheel: boolean = Common.DEFAULT_ENABLE_MOUSE_WHEEL;
    enableMousePan: boolean = Common.DEFAULT_ENABLE_MOUSE_PAN;
    enableSelection: boolean = Common.DEFAULT_ENABLE_SELECTION;
    zoomFactor: number = Common.DEFAULT_ZOOM_FACTOR;
    enableRotating: boolean = Common.DEFAULT_ENABLE_ROTATING;
    rotatingGrid: number = Common.DEFAULT_RATATING_GRID;
    nodeMovable: boolean = Common.DEFAULT_NODE_MOVABLE;
    nodeResizable: boolean = Common.DEFAULT_NODE_RESIZABLE;

    private constructor(containerId: string, options?: ICanvasConfig.Options) {
        this.containerId = containerId;
        if (options) {
            if (options.autoResize !== undefined) this.autoResize = options.autoResize;
            if (options.gridSize !== undefined) this.gridSize = options.gridSize;
            if (options.history !== undefined) this.history = options.history;
            if (options.enableMouseWheel !== undefined) this.enableMouseWheel = options.enableMouseWheel;
            if (options.enableMousePan !== undefined) this.enableMousePan = options.enableMousePan;
            if (options.enableSelection !== undefined) this.enableSelection = options.enableSelection;
            if (options.zoomFactor !== undefined) this.zoomFactor = options.zoomFactor;
            if (options.enableRotating !== undefined) this.enableRotating = options.enableRotating;
            if (options.rotatingGrid !== undefined) this.rotatingGrid = options.rotatingGrid;
            if (options.nodeMovable !== undefined) this.nodeMovable = options.nodeMovable;
            if (options.nodeResizable !== undefined) this.nodeResizable = options.nodeResizable;
        }
        this.graphOptions = {
            background: {},
            showGrid: Common.DEFAULT_SHOW_GRID,
            gridSize: this.gridSize,
        }
        this.initGraph();
    }
    
    /**
     * 获取编辑器单例
     * @param containerId 
     * @param options 
     * @returns 
     */
    public static getInstance(containerId: string = Common.DEFAULT_CONTAINER_ID, options?: ICanvasConfig.Options): CanvasConfig {
        if (!CanvasConfig.instance) {
            CanvasConfig.instance = new CanvasConfig(containerId, options);
        }
        return CanvasConfig.instance;
    }

    /**
     * 获取查看单例
     * @param containerId 
     * @param options 
     * @returns 
     */
    public static getDisplayInstance(containerId: string = Common.DEFAULT_DISPLAY_CONTAINER_ID, options?: ICanvasConfig.Options): CanvasConfig {
        if (!CanvasConfig.displayInstance) {
            CanvasConfig.displayInstance = new CanvasConfig(containerId, options);
        }
        return CanvasConfig.displayInstance;
    }

    initGraph(): void {
        // window.__x6_instances__ = [];
        this.graph = new Graph({
            container: <HTMLDivElement>document.getElementById(this.containerId),
            autoResize: this.autoResize,
            panning: {
                enabled: this.enableMousePan,
                eventTypes: ["rightMouseDown", "mouseWheel"]
            },
            connecting:{
                snap: true,
                allowBlank: true,  //不允许指向空节点;  *@author 王炳宏  2023-05-23
                allowMulti: true,  //不允许重复连接;  *@author 王炳宏  2023-05-23
                allowLoop: false,   //不允许自连;   *@author; 王炳宏  2023-05-23
                allowNode: true,   //不允许非连接点连接,如需要改为true；  *@author; 王炳宏  2023-05-23
                allowEdge: false,   //不允许非连接点连接,如需要改为true； *@author; 王炳宏  2023-05-23
                allowPort: true,    //不允许指向空节点,*@author; 王炳宏  2023-05-23
                highlight:true,
                createEdge(){
                    return this.createEdge({
                        shape: "edge",
                        zIndex: 0,
                        attrs: {
                            line: {
                                stroke: "#ff2929",
                                strokeWidth: 1,
                                targetMarker: null,
                            },
                        },
                    });
                }
            },
            interacting: (cellView) => {
                return {
                    nodeMovable: this.nodeMovable,
                    magnetConnectable: true      // 增加可连接点的交互,magnetConnectable*@author; 王炳宏  2023-05-23
                }
            }
        });
        // window.__x6_instances__.push(this.graph);
        // 配置网格大小
        this.graph.setGridSize(this.gridSize);
        // 显示网格
        this.graph.showGrid();
        // 配置多节点框选
        if (this.enableSelection) {
            this.graph.use(
                new Selection({
                    enabled: true,
                    multiple: true,
                    rubberband: true,
                    movable: true,
                    showNodeSelectionBox: true,
                })
            ).use(
                new Selection({
                    multiple: true,
                    rubberEdge: true,
                    rubberNode: true,
                    modifiers: 'shift',
                    rubberband: true,
                }),
            )
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
            maxWidth: 2000,
            minHeight: 40,
            maxHeight: 2000,
            orthogonal: false,
            restrict: true,
            preserveAspectRatio: false,
        }

        // 配置节点旋转
        const rotatingOptions = {
            enabled: this.enableRotating,
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

        this.graph.centerContent();
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
    public onChangeEdges(edgeId: any,nodeId:any,data:any): void {
        if (!this.graph)
            throw new Error('Graph is undefined.');
        const edge = this.graph.getCellById(edgeId)
        edge.attr('targetData',data)
        edge.attr('line/stroke', data.lineColor)
        edge.attr('line/strokeDasharray', data.lineStyle)
        edge.attr('line/strokeWidth', data.lineWidth)
        edge.removeMarkup()
        edge.getTransitions().forEach(
            (path) => edge.stopTransition(path),
        )
    this.edgeAnimation(edge,data)
    }

    public edgeAnimation(edge:any,data:any):void{
        if (!this.graph)
            throw new Error('Graph is undefined.');
        let x1,y1,w1,h1,x2,y2,w2,h2
        let ex,ey, ew,eh
        if(edge.getProp().source){
            const  theSource = this.graph.getCellById(edge.getProp().source?.cell)
            const  theTarget = this.graph.getCellById(edge.getProp().target?.cell)
            if(theSource&&theTarget){
                x1=theSource.getProp().position.x
                y1=theSource.getProp().position.y
                w1=theSource.getProp().size.width
                h1=theSource.getProp().size.height
                x2=theTarget.getProp().position.x
                y2=theTarget.getProp().position.y
                w2=theTarget.getProp().size.width
                h2=theTarget.getProp().size.height
            }
            if(x2>x1){
                ex=x1
                ew=w1
            }else{
                ex=x2
                ew=w2
            }
            if(h2>h1){
                ey=y1
                eh=h1
            }else{
                ey=y2
                eh=h2
            }
        }

        let speed=0
        let speed1=0
        if (data && data.flowSpeed) {
            switch (data.flowSpeed) {
                case 1:
                    speed=4000
                    break
                case 2:
                    speed=3000
                    break
                case 3:
                    speed=2000
                    break
                case 4:
                    speed=1000
                    break
            }
            switch (data.flowSpeed) {
                case 1:
                    speed1=210
                    break
                case 2:
                    speed1=180
                    break
                case 3:
                    speed1=160
                    break
                case 4:
                    speed1=130
                    break
            }
        }


        if(data && data.flowEffect!=='无效果'){
            console.log(speed)
            let count=data.cycleTimes
            let count1=-1
            if(data.cycleTimes!=-1){
                count1=data.cycleTimes*10
            }else{
                count1=-1
            }
            if(data.flowEffect==='水流') {
                edge.setMarkup([
                    {
                        tagName: 'path',
                        selector: 'p2',
                        groupSelector: 'lines',
                    },
                    {
                        tagName: 'path',
                        selector: 'p1',
                    },

                ])

                edge.attr('p1', { connection: true, stroke: data.flowColor,
                    fill: 'none',strokeDasharray:'10 5 10',strokeDashoffset:10})
                edge.attr('p2', {...edge.attr().line, connection: true,
                    fill: 'none', cursor: 'pointer',})
                const t1=data.flowDirection==='正向'?10:-10
                const options = {
                    delay:10,
                    duration: speed1,
                    timing: Timing.linear,
                    complete:()=>{
                        if(count1==-1||count1>1){
                            const t=edge.attr('p1/strokeDashoffset') as number-(t1)
                            edge.transition('attrs/p1/strokeDashoffset', t, options)
                            if(count1!==-1){
                                count1=count1-1
                            }
                        }
                    }
                }
                edge.transition('attrs/p1/strokeDashoffset', t1, options)
            }else{
                edge.setMarkup([
                    {
                        tagName: 'circle',
                        selector: 'c1',
                    },
                    {
                        tagName: 'path',
                        selector: 'p1',
                    },
                ])
                edge.attr('c1',{
                    r: 6,
                    stroke: data.flowColor,
                    fill: data.flowColor,
                    atConnectionRatio: data.flowDirection==='正向'?0.01:0.99,
                    strokeWidth: 1,
                    event: 'click:circle',
                })
                edge.attr('p1', {...edge.attr().line, connection: true,
                    fill: 'none', cursor: 'pointer',})
                const baseOption1={
                    delay:1,
                    timing: Timing.linear,
                    duration: speed,
                }
                const baseOption2={
                    delay:1,
                    timing: Timing.linear,
                    duration: 0,
                }
                const options4={
                    ...baseOption2,
                    complete:()=>{
                        edge.transition('attrs/c1/atConnectionRatio', t, options1)
                    }
                }
                const options3={
                    ...baseOption2,
                    complete:()=>{
                        edge.transition('attrs/c1/r', 6, options4)
                    }
                }
                const options2={
                    ...baseOption2,
                    complete:()=>{
                        edge.transition('attrs/c1/atConnectionRatio',data.flowDirection==='正向'?0.01:0.99, options3)
                    }
                }
                const options1={
                    ...baseOption1,
                    complete:()=>{
                        edge.transition('attrs/c1/r', 0, options2)
                    }
                }
                let t = edge.attr('c1/atConnectionRatio') > 0.01 ? 0.01 : 0.99
                edge.transition('attrs/c1/atConnectionRatio', t, options1)
            }
        }
        extracted(ex,ey, ew,eh,edge,data)
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

    public showGrid(show: boolean): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        if (show) {
            this.graph.showGrid();
        } else {
            this.graph.hideGrid();
        }
        this.graphOptions.showGrid = show;
    }

    public setBackground(options: ICanvasConfig.BackgroundOptions): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.drawBackground(options);
        this.graphOptions.background = options;
    }

    public getGrahOptions() {
        return this.graphOptions;
    }
    
    public getGridSize(): number {
        return this.gridSize;
    }

    public setGridSize(gridSize: number): void {
        if(!this.graph) 
            throw new Error('Graph is undefined.');
        this.gridSize = gridSize;
        this.graph.setGridSize(gridSize);
        this.graphOptions.gridSize = gridSize;
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

    public renderJSON(json: any): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        const pluginConfig: IPluginConfig = new PluginConfig();
        pluginConfig.registerComponents(json.cells);
        this.graph.fromJSON(json);
    }

    public toJSON(): { cells: Cell.Properties[] } | { graph: any } {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        const json = { 
            ...this.graph.toJSON(), 
            graph: this.graphOptions
        };
        return json;
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





