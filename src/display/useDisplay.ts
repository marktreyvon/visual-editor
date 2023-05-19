import { CanvasConfig } from "@/editor/config";
import { Graph } from "@antv/x6";
import * as Common from "@/common";

export const useDisplay = (containerId: string, data: any) => {

    const initDisplay = () => {
        const options: ICanvasConfig.Options = {
            autoResize: true,
            nodeMovable: false,
            nodeResizable: false
        }
        let canvasConfig: ICanvasConfig = CanvasConfig.getDisplayInstance(containerId, options);
        canvasConfig.renderJSON(data);
    }

    return {
        initDisplay
    }
}