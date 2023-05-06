/**
 * @author cxs
 * @date 2023-04-20
 * @update 2023-04-20
 * @interface ITools
 */
declare interface ITools {
    /**
     * 自适应
     * @returns 
     */
    zoomToFit: () => void;

    /**
     * 缩小
     * @returns 
     */
    zoomOut: () => void;

    /**
     * 放大
     * @returns 
     */
    zoomIn: () => void;

    /**
     * 开启对齐线
     */
    enableSnapline: () => void;

    /**
     * 关闭对齐线
     */
    disableSnapline: () => void;

    /**
     * 撤销
     */
    undo: () => void;

    /**
     * 重做
     */
    redo: () => void;

    /**
     * 
     * @returns 导出JSON
     */
    toJSON: () => {
        cells: Cell.Properties[];
    };

    /**
     * 导出SVG
     * @param fileName 
     * @param options 
     */
    exportSVG(fileName?: string, options?: Export.ToImageOptions): void;

    /**
     * 导出PNG
     * @param fileName 
     * @param options 
     */
    exportPNG(fileName?: string, options?: Export.ToImageOptions): void;

    /**
     * 导出JPEG
     * @param fileName 
     * @param options 
     */
    exportJPEG(fileName?: string, options?: Export.ToImageOptions): void;

}
