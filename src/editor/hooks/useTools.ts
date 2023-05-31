import { Cell } from "@antv/x6";
import { CanvasConfig,StencilConfig } from "../config"
import { useRouter } from "vue-router";
import VisualAPI from "@/api/visual";
import { inject } from "vue";
import { message } from "@/utils/tool";
import * as Common from "@/common"
/**
 * @author cxs
 * @date 2023-04-20
 * @update 2023-05-18 新增预览、分享
 * @description 工具栏
 * @interface ITools
 * @returns 
 */
export const useTools = (): ITools => {
    const router = useRouter();
    return {
        // 测试线条的颜色修改工具;  *@author; 王炳宏  2023-05-23
        setLineStyle: (eid,nid,data) => {
            CanvasConfig.getInstance().onChangeEdges(eid,nid,data);
        },

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
        toJSON: (): { cells: Cell.Properties[] } | { graph: any } => {
            return CanvasConfig.getInstance().toJSON();
        },
        exportJPEG: (fileName?, options?) => {
            CanvasConfig.getInstance().exportJPEG(fileName, options);
        },
        exportPNG: (fileName?, options?) => {
            CanvasConfig.getInstance().exportPNG(fileName, options);
        },
        exportSVG: (fileName?, options?) => {
            CanvasConfig.getInstance().exportSVG(fileName, options);
        },
        preview: () => {
            // 获取大屏数据

            const jsonData = CanvasConfig.getInstance().toJSON();

            // 大屏数据存入session
            sessionStorage.setItem(Common.PREVIEW_JSON_DATA_KEY, JSON.stringify(jsonData));
            const url = router.resolve({
                name: 'display'
            })
            window.open(url.href);
        },
        help() {
            window.open('http://thingspanel.io/zh-Hans/docs/overview');
        },
        share: () => {

        },
        save: (id: string) => {
            const json =  CanvasConfig.getInstance().toJSON();
            VisualAPI.updateJsonDate({id, json_data: JSON.stringify(json)})
                .then(({ data }) => {
                    if (data.code === 200) {
                        message.success('保存成功')
                    }
                });
        }
    }
}
