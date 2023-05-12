import { defineComponent, onMounted, ref, h, resolveComponent, computed } from "vue";
import { ElTabs, type TabsPaneContext } from 'element-plus'
import BaseAttr from "./components/BaseAttr";
import { CanvasConfig, PluginConfig } from "@/editor/config";

 
export default defineComponent({
    name: "RightAttributePanel",
    setup() {
        let activeName = ref<string>('attr');
        const handleClick = (tab: TabsPaneContext, event: Event) => {
            console.log(activeName, tab, event);
        };

        const attribute = ref<any>(null);
        const attributeName = ref<string>('');
        onMounted(() => {
            let canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
            const events: ICellEvents = canvasConfig.getEvents();
    
            events.setClickEventListener((data: any) => {
                const node = data.node || data.cell;
                console.log("setClickEventListener", node.shape);
                let pluginConfig: IPluginConfig = PluginConfig.getInstance();
                const component = pluginConfig.getComponent(node.shape);
                if (component) {
                    console.log("component", component.Attribute)
                    attributeName.value = node.shape;
                    attribute.value = component.Attribute;
                    console.log("attribute", attribute.value)
                }
                
            });
        });
        let attrDiv = computed(() => {
                const ButtonCounter = resolveComponent(attributeName.value)
                return h(ButtonCounter)
        })
        // const render = () => {
        //     const ButtonCounter = resolveComponent(attributeName.value)
        //     return h(ButtonCounter)
        // };
        
        return () => (
            <div class="">
                <ElTabs v-model={activeName} onClick={handleClick}>
                    <el-tab-pane label="属性" name="attr">
                        <div>
                            <BaseAttr />
                            <div>
                                { attrDiv.value }
                            </div>
                        </div>
                        
                    </el-tab-pane>
                    <el-tab-pane label="数据" name="data">Config</el-tab-pane>
                    <el-tab-pane label="动画" name="animate">Role</el-tab-pane>
                    <el-tab-pane label="事件" name="event">Task</el-tab-pane>
                </ElTabs>
            </div>
        )
            
        
    }
})
