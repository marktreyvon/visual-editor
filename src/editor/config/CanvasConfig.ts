import { Cell, Graph } from '@antv/x6';
import { Selection } from "@antv/x6-plugin-selection";
import { History } from "@antv/x6-plugin-history";
import { Snapline } from "@antv/x6-plugin-snapline";
import { Transform } from "@antv/x6-plugin-transform";
import { Export } from "@antv/x6-plugin-export";
import * as Common from "@/editor/common";
/**
 * @author cxs
 * @date 2023-04-19
 * @update 2023-04-19
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
 * @example
 * const canvasConfig = CanvasConfig.getInstance();
 * canvasConfig.zoomToFit();
 */
class CanvasConfig implements ICanvasConfig {
    private static instance: CanvasConfig;
    graph: Graph | undefined = undefined;
    containerId: string;
    autoResize: boolean = Common.DEFAULT_AUTO_RESIZE;
    gridSize: number = Common.DEFAULT_GRID_SIZE;
    selection: boolean = Common.DEFAULT_SELECTION;
    history: boolean = Common.DEFAULT_HISTORY;
    enableMouseWheel: boolean = Common.DEFAULT_ENABLE_MOUSE_WHEEL;
    enableMousePan: boolean = Common.DEFAULT_ENABLE_MOUSE_PAN;
    zoomFactor: number = Common.DEFAULT_ZOOM_FACTOR;
    rotatingGrid: number = Common.DEFAULT_RATATING_GRID;

    private constructor(containerId: string) {
        this.containerId = containerId;
        this.initGraph();
    }
    
    public static getInstance(containerId: string = Common.DEFAULT_CONTAINER_ID): CanvasConfig {
        if (!CanvasConfig.instance) {
            CanvasConfig.instance = new CanvasConfig(containerId);
        }
        return CanvasConfig.instance;
    }

    initGraph(): void {
        this.graph = new Graph({
            container: <HTMLDivElement>document.getElementById(this.containerId),
            autoResize: this.autoResize,
            panning: {
                enabled: this.enableMousePan,
                eventTypes: ["rightMouseDown", "mouseWheel"]
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

        // 启用节点缩放
        const resizingOptions = {
            enabled: true,
            minWidth: 1,
            maxWidth: 200,
            minHeight: 1,
            maxHeight: 150,
            orthogonal: false,
            restrict: false,
            preserveAspectRatio: false,
        }

        // 启用节点旋转
        const rotatingOptions = {
            enabled: true,
            grid: this.rotatingGrid,
        }
        this.graph.use(
            new Transform({
              resizing: resizingOptions,
              rotating: rotatingOptions
            })
          );

        // 启用导出
        this.graph.use(new Export());
    }


    public getGraph(): Graph | undefined {
        return this.graph;
    }

    
    public zoomToFit(): void {
        if (!this.graph) 
            throw new Error('Graph is undefined.');
        this.graph.zoomToFit({ maxScale: 1 });
        this.graph.centerContent();
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

    public toJSON(): { cells: Cell.Properties[]; } {
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
}

class CellEvent {
        
}

export { CanvasConfig };