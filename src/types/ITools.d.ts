/**
 * @author cxs
 * @date 2023-04-20
 * @update 2023-04-20
 * @description 工具栏接口
 * @interface ITools
 */
declare interface ITools {
    // 测试线条的颜色修改  *@author; 王炳宏  2023-05-23
    setLineStyle:(eid:any,nid:any,data:any) => void;


    /**
     * 自适应
     */
    zoomToFit: () => void;

    /**
     * 缩小
     */
    zoomOut: () => void;

    /**
     * 放大
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
     * 导出JSON
     */
    toJSON: () => { cells: Cell.Properties[] } | { graph: any };

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

    /**
     * 预览
     */
    preview(id: string): void;

    /**
     * 分享
     */
    share(): void;

    /**
     * 帮助
     */
    help(): void;
    /**
     * 保存大屏数据
     */
    save(id: string): void;
}
