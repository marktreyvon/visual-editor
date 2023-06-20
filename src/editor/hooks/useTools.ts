import { Cell } from "@antv/x6";
import { CanvasConfig,StencilConfig } from "../config"
import { useRouter } from "vue-router";
import VisualAPI from "@/api/visual";
import { exportFile, isJSON, message } from "@/utils/tool";
import * as Common from "@/common"
import { ref } from "vue";
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
    const scaling = ref<Number>(100);
    return {
        scaling,
        // 测试线条的颜色修改工具;  *@author; 王炳宏  2023-05-23
        setLineStyle: (eid,nid,data) => {
            CanvasConfig.getInstance().onChangeEdges(eid,nid,data);
        },

        zoomToFit: () => {
            scaling.value = CanvasConfig.getInstance().zoomToFit();
        },
        getZoom: () => {
            return scaling.value;
        },
        zoomOut: () => {
            scaling.value = CanvasConfig.getInstance().zoomOut();
        },
        zoomIn: () => {
            scaling.value = CanvasConfig.getInstance().zoomIn();
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
        importJSON: (jsonData: any) => {
            const jsonObj = isJSON(jsonData);
            console.log('importJSON', jsonObj)
            if (jsonObj) {
                 CanvasConfig.getInstance().renderJSON(jsonObj);
            }
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

            const instance= CanvasConfig.getInstance()

            const nodes=  instance.graph?.getNodes()
            nodes?.forEach((node)=>{
                const ports=node.getPorts()
                console.log(ports)
                ports.forEach((port:any) => {
                    node.portProp(port.id, "attrs/circle/style/visibility", "hidden");
                })
                console.log(ports)
            })


            const jsonData =instance.toJSON();

            // 大屏数据存入session
            sessionStorage.setItem(Common.PREVIEW_JSON_DATA_KEY, JSON.stringify(jsonData));
            const url = router.resolve({
                name: 'display',
                query: {
                    mode: 'preview'
                }
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
