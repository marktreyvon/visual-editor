import { CanvasConfig } from '../config';
import * as Common from '../common';
import * as Plugins from '@/components'
import * as useStencil from './useStencil';
import CountNode from '@/components/CountNode.vue'
import PM25 from '@/components/PM25.vue'
import { useEvents, usePlugins } from '.';

const useCanvas = (data: any): void => {
    let canvasConfig: ICanvasConfig = CanvasConfig.getInstance(Common.DEFAULT_CONTAINER_ID);
    canvasConfig.renderJSON(data);
    useEvents(canvasConfig);
    usePlugins(Plugins);
}

export { useCanvas }