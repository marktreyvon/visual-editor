import { Cell } from '@antv/x6';
import { CanvasConfig } from '../config'

/**
 * @author cxs
 * @date 2023-04-20
 * @update 2023-05-18 新增预览、分享
 * @description 工具栏
 * @interface ITools
 * @returns 
 */
export const useTools = (): ITools => {
    return {
        zoomToFit: () => {
            CanvasConfig.getInstance().zoomToFit();
        },
        zoomOut: () => {
            CanvasConfig.getInstance().zoomOut();
        },
        zoomIn: () => {
            CanvasConfig.getInstance().zoomIn();
        },
        enableSnapline: () => {
            CanvasConfig.getInstance().enableSnapline();
        },
        disableSnapline: () => {
            CanvasConfig.getInstance().disableSnapline();
        },
        undo: () => {
            CanvasConfig.getInstance().undo();
        },
        redo: () => {
            CanvasConfig.getInstance().redo();
        },
        toJSON: (): { cells: Cell.Properties[] } => {
            return CanvasConfig.getInstance().toJSON();
        },
        exportJPEG(fileName?, options?) {
            CanvasConfig.getInstance().exportJPEG(fileName, options);
        },
        exportPNG(fileName?, options?) {
            CanvasConfig.getInstance().exportPNG(fileName, options);
        },
        exportSVG(fileName?, options?) {
            CanvasConfig.getInstance().exportSVG(fileName, options);
        },
        preview() {

        },
        share() {

        }
    }
}
