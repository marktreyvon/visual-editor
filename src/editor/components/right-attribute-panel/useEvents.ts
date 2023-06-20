import { ref, shallowRef, toRaw } from "vue";
import { CanvasConfig, PluginConfig } from "@/editor/config";
import { isJSON } from "@/utils";
import {uniqWith,isEqual,filter}  from "lodash"
import {Graph} from "@antv/x6";
import * as Common from "@/common";
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
    // 当前点击的是否是边
    let isEdge = ref<any>(false);
    // 当前点击的节点
    // let currentNode = ref<any>(null);
    let currentNode: any = null;
    // 当前节点的Attribute组件
    let attributeCpt = shallowRef<any>(null);
    // 当前节点的Data组件
    let dataCpt = shallowRef<any>(null);
    // 当前节点的组件
    let component: any = {};
    // 当前节点的数据
    let nodeData = ref<any>({});
    let edgeData = ref<any>({});
    let nodeId = ref<any>(null)
    let cellList =  ref<any>([])

    /**
     * 初始化事件
     * @returns
     */
    const initEvents = () => {
        let canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
        const events: ICellEvents = canvasConfig.getEvents();
        const graph = canvasConfig.getGraph()

        // 新增节点事件
        events.setNodeAddEventListener((data: any) => {
            console.log('setNodeAddEventListener', data)
            storageGraphData();
        });

        // 点击node
        events.setClickEventListener((data: any) => {
            const temp = data.node || data.cell || null;
            // 节点工具
            setNodeTools(temp, currentNode);
            currentNode = temp;
            console.log('initEvents.setClickEventListener', currentNode)

            if (temp === null) {
                // 如果点击的是画布
                isNode.value = false;
                isEdge.value=false;
                nodeData.value = {};
                return;
            }

            nodeId = currentNode?.id
            // 获取插件管理器
            const pluginConfig: IPluginConfig = PluginConfig.getInstance();
            // 通过节点名称获取组件
            component = pluginConfig.getComponent(currentNode.shape);
            // 节点的附加数据
            nodeData.value = currentNode.store.data ;
            console.log('initEvents.nodeData', nodeData.value)
            if (component) {
                // 自定义组件
                setNodeData(data);
                isNode.value = true;
                isEdge.value=false;
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
                // 连线或基础节点

                if(currentNode.shape==='edge'){
                    //如果点击的是边 ;  *@author; 王炳宏  2023-05-23
                    console.log(currentNode.shape,"这是边：",currentNode.id,)
                    graph.clearTransformWidgets();
                    dataCpt.value = null;
                    isEdge.value=true;
                    isNode.value=false
                    setEdgeData(data)
                    // currentNode.attr('line/stroke','#7e14ff')
                    console.log(isEdge.value)

                } else {
                    // 基础节点
                    isNode.value = true;
                    attributeCpt.value = null;
                    dataCpt.value = null;

                }
            }
        });

        events.setResizedEventListener((data: any) => {
            console.log('setResizedEventListener')
            const temp = data.node || data.cell || null;
            currentNode = temp;
            setNodeData(data);
            storageGraphData();
        });

        events.setMovedEventListener((data: any) => {
            const temp = data.node || data.cell || null;
            currentNode = temp;
            setNodeData(data);
            storageGraphData();
        });

        events.setMountedEventListener((view) => {
            setCellList(view,true)
        });

        events.setUnmountedEventListener((view) => {
            setCellList(view,false)
            if(cellList.value.length===0){
                isNode.value = false;
                isEdge.value=false;
                nodeData.value = {};
                return;
            }
        });
        events.setMouseEnterEventListener((data: any) => {
            const node = data.cell;
            if(node.shape!=='edge'&&node.shape!=='rect_img'){
                const ports=node.getPorts()
                ports.forEach((port:any) => {
                    node.portProp(port.id, "attrs/circle/style/visibility", "visible");
                })
            }
        });

        events.setMouseLeaveEventListener((data: any) => {
            const node = data.cell;
            if(node.shape!=='edge'&&node.shape!=='rect_img'){
                const ports=node.getPorts()
                ports.forEach((port:any) => {
                    node.portProp(port.id, "attrs/circle/style/visibility", "hidden");
                })
            }

            // const { e } = data;
            // console.log('setMouseLeaveEventListener', e, e.offsetX, e.offsetY)
            // if (e.offsetX < node.size().width || e.offsetX > node.size().width + 10 || 
            //     e.offsetY > 0 && e.offsetY < -10 ) {
            //     // 删除所有的工具
            //     node.removeTools();
            // }
            
        });

    }

    const setNodeData = (data: any) => {
        const node = data.node || data.cell || null;
        if (node !== null) {
            nodeData.value = { ...node.store.data };
        }
    }

    const setCellList = (data: any,flag:boolean) => {
        if(flag){
            cellList.value=uniqWith([...cellList.value,data],isEqual)
        }else{
            cellList.value= filter(cellList.value,(n:any)=>{
                return n.view.cid!==data.view.cid
            })
        }

    }

    const setEdgeData = (data: any) => {

        const edge =  data.node || data.cell || null;
        // console.log('edges', edge)
        if (edge !== null) {
            edgeData.value = { ...edge.store.data };
            console.log('setEdgeData', edgeData.value)
        }
    }

    // 画布上的内容有改动时，将内容存入浏览器缓存中
    const storageGraphData = () => {
        const canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
        setTimeout(() => {
            const json = canvasConfig.toJSON();
            console.log('storageGraphData', json)
            localStorage.setItem(Common.STORAGE_JSON_DATA_KEY, JSON.stringify(json));
        }, 200);
    }

    /**
     * 用户自定义组件的样式和绑定的数据改变后，会调用这个方法，更新画布上的节点数据
     * @param data
     */
    const onChange = (data: any) => {
        console.log('useEvents.onChange', data)
        let jsonStr = "{}";
        if (currentNode?.getData()) {
            // 从节点的附加数据中获取JSON字符串
            jsonStr = currentNode.getData()?.jsonData || "{}";
        }
        const jsonObj = isJSON(jsonStr);
        if (data?.style) {
            jsonObj.style = { ...data.style };
        }
        if (data?.data) {
            jsonObj.data = { ...data.data };
        }
        // 因为antv-x6的setData暂不支持Array，所以这里只能用JSON字符串来存储数据
        const jsonData = JSON.stringify(jsonObj);
        console.log('useEvents.onChange', jsonData)
        // 更新节点的附加数据，写入JSON字符串
        currentNode.setData({
            // ...currentNode.getData(),
            jsonData
        });

        

        const baseNodes = ["rect", "circle", "ellipse", "polygon", "polyline", "rect_img"];
        const index = baseNodes.findIndex((item: string) => item === currentNode.shape)

        if (index !== -1) {
            if(currentNode.shape!=='rect_img'){
                console.log("1111")
                currentNode.attr('body', { ...data.style.body })
            }else{
                currentNode.attr('image', {...data.style.image} )
                currentNode.attr('image/xlink:href',data.style.image.xlink )
            }
        }

        storageGraphData();
    }

    /**
     * 基础属性改变时（位置、大小、层级），更新画布上的节点数据
     * @param data 
     */
    const onBaseChange = (data: any) => {
        console.log('onBaseChange', data)
        data.baseStyle.size && currentNode.resize(Number(data.baseStyle.size.width), Number(data.baseStyle.size.height));
        data.baseStyle.position && currentNode.position(Number(data.baseStyle.position.x), Number(data.baseStyle.position.y));
        data.baseStyle.zIndex && currentNode.setZIndex(data.baseStyle.zIndex);
    }

    const setNodeTools = (newNode: any, oldNode: any) => {
        if (oldNode) {
            // 删除旧节点的工具
            oldNode.removeTools();
        }
        if (newNode) {
            // 添加新节点的工具
            newNode.addTools({
                name: 'button-remove',
                args: {
                  x: '100%',
                  y: 0,
                  offset: { x: 10, y: -10 },
                },
              })
        }
    }

    return {
        isNode, attributeCpt, dataCpt, nodeData,isEdge,nodeId,edgeData,
        initEvents, onChange, onBaseChange, cellList
    }
}