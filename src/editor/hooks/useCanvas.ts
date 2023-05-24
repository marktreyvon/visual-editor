import { CanvasConfig } from '../config';
import * as Common from '@/common';
import * as Plugins from '@/plugins'
import { useEvents, usePlugins } from '.';

/**
 * @author cxs
 * @date 2023-04-28
 * @update 2023-05-24
 * @description 初始化画布
 * @param data 
 */
const useCanvas = (): any => {
    const { loadPlugins } = usePlugins();

    const initCanvas = (data?: any) => {
        // 获取画布管理器
        let canvasConfig: ICanvasConfig = CanvasConfig.getInstance(Common.DEFAULT_CONTAINER_ID);
        // 初始化事件
        // useEvents(canvasConfig);
        // 加载插件
        loadPlugins(Plugins);
    }

    return {
        initCanvas
    }
}

export { useCanvas }