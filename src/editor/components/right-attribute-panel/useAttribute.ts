import { CanvasConfig } from "@/editor/config"
/**
 * @author cxs
 * @date 2023-05-25
 * @description 属性面板逻辑
 * @returns 
 */
export const useAttribute = () => {

    render: () => {

    }

    const onCanvasAttrChange = (data: any) => {
        const canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
        canvasConfig.showGrid(data.showGrid);
        canvasConfig.setGridSize(data.gridSize);
        const background = {
            color: data.backgroundColor,
            showImage: false,
            repeat: 'no-repeat',
            position: 'center',
            size: 'auto auto',
            opacity: 1,
            angle: 20,
          }
        canvasConfig.setBackground(background);
        console.log('onCanvasAttrChange', data, data.showGrid, data.gridSize)

    }

    return {
        onCanvasAttrChange
    }

}