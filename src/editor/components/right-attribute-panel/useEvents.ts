import { ref } from "vue";
import { CanvasConfig, PluginConfig } from "@/editor/config";

/**
 * @author cxs
 * @date 2023-05-20
 * @update 2023-05-20
 * @description 事件管理
 * @returns 
 */
export const useEvents = () => {

    // 当前点击的是节点还是画布
    let isNode = ref<any>(false);
    // 当前点击的节点
    let currentNode = ref<any>(null);
    // 当前节点的Attribute组件
    let attributeCpt = ref<any>(null);
    // 当前节点的Data组件
    let dataCpt = ref<any>(null);
    // 当前节点的组件
    let component: any = {};
    // 当前节点的数据
    let nodeData = ref<any>({});

    /**
     * 初始化事件
     * @returns
     */
    const initEvents = () => {
        let canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
        const events: ICellEvents = canvasConfig.getEvents();
    
        // 点击node
        events.setClickEventListener((data: any) => {
            currentNode = data.node || data.cell || null;
            if (currentNode === null) {
                // 如果点击的是画布
                isNode.value = false;
                return;
            }
            isNode.value = true;
            setNodeData(data);
            // 获取插件管理器
            const pluginConfig: IPluginConfig = PluginConfig.getInstance();
            // 通过节点名称获取组件
            component = pluginConfig.getComponent(currentNode.shape);
            // 节点的附加数据
            nodeData.value = currentNode.store.data ;
            console.log('currentNode', nodeData.value)
            
            if (component) {
                // 当前组件的Attribute组件
                attributeCpt.value = component.Attribute;
                // 当前组件的Data组件
                dataCpt.value = component.Data;
                for (const key in component.Main.methods) {
                    console.log('element.key', key)
                    if (Object.prototype.hasOwnProperty.call(component.Main.methods, key)) {
                        const element = component.Main.methods[key];
                        if (typeof element === 'function') {
                            // actionHandlers[key] = element;
                        }
                        console.log('element.hasOwnProperty', key, typeof element)
                        // actionHanders[key] = 
                    }
                }
            } else {
                attributeCpt.value = null;
                dataCpt.value = null;
            }
    
        });

        events.setResizedEventListener((data: any) => {
            setNodeData(data)
        });

        events.setMovedEventListener((data: any) => {
            setNodeData(data)
        });

    }

    

    const setNodeData = (data: any) => {
        const node = data.node || data.cell || null;
        if (node !== null) {
            nodeData.value = { ...node.store.data };
            console.log('setNodeData', nodeData.value)
        }
    }

    const onChange = (data: any) => {
        currentNode.setData({
            ...currentNode.getData(),
            ...data
        });
    }

    return {
        isNode, currentNode, attributeCpt, dataCpt, nodeData, 
        initEvents, onChange
    }
}