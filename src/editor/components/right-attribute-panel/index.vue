<template>
    <div class="">
        <ElTabs v-model="activeName">
            <el-tab-pane label="外观" name="attr">
                <div>
                    <BaseAttr />
                    <component :is="attributeComp" @changeData="changeAttrData"/>
                </div>

            </el-tab-pane>
            <el-tab-pane label="数据" name="data">
                <component :is="dataComp" />
            </el-tab-pane>
            <el-tab-pane label="图层" name="componentList">
                <ComponentList/>
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
let attributeComp = ref<any>(null);
let dataComp = ref<any>(null);
let component: any = {};
onMounted(() => {
    let canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
    const events: ICellEvents = canvasConfig.getEvents();
    events.setClickEventListener((data: any) => {
        const node = data.node || data.cell;
        const pluginConfig: IPluginConfig = PluginConfig.getInstance();
        component = pluginConfig.getComponent(node.shape);
        if (component) {
            attributeComp.value = component.Attribute;
            dataComp.value = component.Data;
            console.log('component', component.Attribute);
        } else {
            attributeComp.value = null;
            dataComp.value = null;
        }

    });
});
const changeAttrData = (data: any) => {
    console.log('changeAttrData', data);
    console.log('changeAttrData.component', component.Main.methods.changeData());
    component.Main.props.style = data;
    // component.Main.fun();
}
</script>

<style lang="scss" scoped></style>