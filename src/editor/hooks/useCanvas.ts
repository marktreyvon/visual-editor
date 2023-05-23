import { CanvasConfig } from '../config';
import * as Common from '@/common';
import * as Plugins from '@/plugins'
import { useEvents, usePlugins } from '.';

const useCanvas = (data: any): void => {
    let canvasConfig: ICanvasConfig = CanvasConfig.getInstance(Common.DEFAULT_CONTAINER_ID);
    canvasConfig.renderJSON(data);
    useEvents(canvasConfig);
    usePlugins(Plugins);
}

export { useCanvas }