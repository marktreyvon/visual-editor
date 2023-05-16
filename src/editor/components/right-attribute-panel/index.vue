<template>
    <div class="">
        <ElTabs v-model="activeName">
            <el-tab-pane label="外观" name="attr">
                <div>
                    <BaseAttr />
                    <component :is="attributeCpt" v-on="actionHandlers" 
                        @onChange="onChange" />
                </div>

            </el-tab-pane>
            <el-tab-pane label="数据" name="data">
                <component :is="dataCpt" />
            </el-tab-pane>
            <el-tab-pane label="图层" name="layer">
                <ComponentList />
            </el-tab-pane>
        </ElTabs>
    </div>
</template>

<script setup lang="ts">
import { CanvasConfig, PluginConfig } from "@/editor/config";
import { ref, onMounted, reactive, watch } from "vue";
import BaseAttr from "./components/BaseAttr.vue";
import ComponentList from "./components/ComponentList.vue";

const activeName = ref("attr");
let currentNode = ref<any>(null);
let attributeCpt = ref<any>(null);
let dataCpt = ref<any>(null);
let component: any = {};

let actionHandlers = reactive({})
onMounted(() => {
    let canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
    const events: ICellEvents = canvasConfig.getEvents();
    // 点击node
    events.setClickEventListener((data: any) => {
        currentNode = data.node || data.cell;
        const pluginConfig: IPluginConfig = PluginConfig.getInstance();
        component = pluginConfig.getComponent(currentNode.shape);
        console.log('component', component, currentNode)
        
        if (component) {
            attributeCpt.value = component.Attribute;
            dataCpt.value = component.Data;
            console.log('component.Attribute', component.Main);
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
            // methodList = 
        } else {
            attributeCpt.value = null;
            dataCpt.value = null;
        }

    });
});

const onChange = (data: any) => {
    currentNode.setData({
        ...currentNode.getData(),
        ...data
    });
}

</script>

<style lang="scss" scoped></style>