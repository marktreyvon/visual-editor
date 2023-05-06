/**
 * @author cxs
 * @date 2023-04-19
 * @update 2023-04-19
 * @description 画布配置接口
 * @interface ICanvasConfig
 */
declare interface ICanvasConfig {

    /**
     * 画布
     */
    private graph: Graph | undefined;

    /**
     * 画布容器ID
     */
    private containerId: string;

    /**
     * 是否自动调整画布大小
     */
    private autoResize: boolean;

    /**
     * 网格大小
     */
    private gridSize: number;

    /**
     * 是否开启多节点框选
     */
    private selection: boolean;

    /**
     * 网格大小
     */
    private history: boolean;

    /**
     * 是否开启鼠标滚轮缩放
     */
    private enableMouseWheel: boolean;

    /**
     * 是否开启鼠标平移画布
     */
    private enableMousePan: boolean;

    /**
     * 缩放因子
     */
    private zoomFactor: number;

    /**
     * 节点每次旋转的角度
     */
    private rotatingGrid: number;

    /**
     * 初始化画布
     */
    private initGraph(): void;

    /**
     * 获取画布
     * @returns Graph | undefined
     */
    getGraph(): Graph | undefined;

    /**
     * 画布自适应
     */
    zoomToFit(): void;

    /**
     * 渲染节点数据
     * @param json 节点数据
     */
    renderJSON(json: any): void;

    /**
     * 放大
     */
    zoomIn(): void;

    /**
     * 缩小
     * @param factor 
     */
    zoomOut(): void;

    /**
     * 开启对齐线
     */
    enableSnapline(): void;

    /**
     * 关闭对齐线
     */
    disableSnapline(): void;

    /**
     * 撤销
     */
    undo(): void;

    /**
     * 重做
     */
    redo(): void;

    /**
     * 导出JSON
     * @returns { cells: Cell.Properties[] }
     */
    toJSON(): {
        cells: Cell.Properties[];
    };

    /**
     * 导出SVG
     * @param fileName  文件名,缺省为 chart
     * @param options   导出配置
     */
    exportSVG(fileName?: string, options?: Export.ToImageOptions): void;

    /**
     * 导出PNG
     * @param fileName  文件名,缺省为 chart
     * @param options   导出配置
     */
    exportPNG(fileName?: string, options?: Export.ToImageOptions): void;

    /**
     * 导出JPEG
     * @param fileName  文件名,缺省为 chart
     * @param options   导出配置
     */
    exportJPEG(fileName?: string, options?: Export.ToImageOptions): void;

}
