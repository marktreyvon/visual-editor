import { CanvasConfig } from '../config';
import * as Common from '@/common';
import * as Plugins from '@/plugins'
import { useEvents, usePlugins, useStencil } from '.';
import { getDropPicComponent } from '../components/canvas-editor/DropPicComponent';
import { isFunction } from 'element-plus/es/utils';
import { getPicAttrComponent } from '../components/right-attribute-panel/components/PicAttr';
import VisualAPI from '@/api/visual';
import { isJSON } from '@/utils';
import { ref } from 'vue';
const localUrl = import.meta.env.VITE_BASE_URL  || document.location.origin;
/**
 * @author cxs
 * @date 2023-04-28
 * @update 2023-05-24
 * @description 初始化画布
 * @param data 
 */
const useCanvas = (id?: any): any => {
    const { loadPlugins } = usePlugins();
    const { initStencil } = useStencil();

    const screenName = ref<string>("");

    const initCanvas = async (picPlugins?: any) => {
        // 获取画布管理器
        let canvasConfig: ICanvasConfig = CanvasConfig.getInstance(Common.DEFAULT_CONTAINER_ID);

        let pluginsClone: any = Object.assign({}, Plugins);
        // 加载自定义图片插件
        if (picPlugins) {
            pluginsClone  = createPicPlugin(pluginsClone, picPlugins)
        }
        console.log('pluginsClone', pluginsClone)
        // 初始化事件
        // useEvents(canvasConfig);
        // 加载插件
        loadPlugins(pluginsClone);
        // 加载左侧组件列表
        initStencil(pluginsClone, picPlugins);
        // 加载画布内容
        console.log('====initCanvas.id', id)
        if (id) {
            let { data: result } = await VisualAPI.getJsonDataById({ id, current_page: 1, per_page: 10 })
            if (result.code === 200) {
                screenName.value = result.data?.data?.[0].dashboard_name;
                let jsonData = result.data?.data?.[0]?.json_data;
                const jsonObj = isJSON(jsonData);
                console.log('importJSON', jsonObj)
                if (jsonObj) {
                    canvasConfig.renderJSON(jsonObj);
                    canvasConfig.zoomToFit();

                }
            }
        } else {
            let storageJson = localStorage.getItem(Common.STORAGE_JSON_DATA_KEY);
            if (storageJson) {
                const jsonObj = isJSON(storageJson);
                console.log('useCanvas.storageJson', jsonObj)
                if (jsonObj) {
                    canvasConfig.renderJSON(jsonObj);
                    canvasConfig.zoomToFit();
                }
            }
        }
        const edges=canvasConfig.graph.getEdges()
        if(edges.length > 0) {
            edges.forEach((edge:any) => {
                console.log(edge.attr('targetData'),"54938590342859032485934825")
                if(edge?.attr('targetData')?.flowEffect!=="无效果"){
                    canvasConfig.edgeAnimation(edge,edge.attr('targetData'))
                }

            })
        }
    }

    const createPicPlugin = (plugins: any, picPlugins: any) => {
        console.log('=================createPicPlugin===================');
        console.log('plugins', picPlugins)
        let customPlugins: {default: { views: any[]}} = {default: {views: []}}
        console.log('createPicPlugin.localUrl', localUrl)
        picPlugins.forEach((plugin: any) => {
            plugin.files.forEach((file: any) => {
                const item = { 
                    name: plugin.plugin_name + "_" + file.file_name, 
                    description: "", 
                    group: plugin.plugin_name, 
                    icon: getPicUrl(file.file_url), 
                    size: { width: 200, height: 200 }, 
                    Main: getDropPicComponent(getPicUrl(file.file_url)), 
                    Attribute: getPicAttrComponent(), 
                    Data: null
                };
                customPlugins.default.views.push(item);

            })
        });
        plugins.customPlugins = customPlugins;
        console.log('=================createPicPlugin===================');
        return plugins;
    }

    const getPicUrl = (fileUrl: String) => {
        if (fileUrl.startsWith('.')) {
            return localUrl + fileUrl.slice(1);
        }
        return localUrl;
    }

    return {
        initCanvas, screenName
    }
}

export { useCanvas }