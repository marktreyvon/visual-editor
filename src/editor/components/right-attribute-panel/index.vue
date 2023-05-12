<template>
    <div class="">
        <ElTabs v-model="activeName" @click="handleClick">
            <el-tab-pane label="属性" name="attr">
                <div>
                    <BaseAttr />
                    <component :is="attributeComp" />
                </div>

            </el-tab-pane>
            <el-tab-pane label="数据" name="data">
                <component :is="dataComp" />
            </el-tab-pane>
            <el-tab-pane label="动画" name="animate">Role</el-tab-pane>
            <el-tab-pane label="事件" name="event">Task</el-tab-pane>
        </ElTabs>
    </div>
</template>

<script setup lang="ts">
import { CanvasConfig, PluginConfig } from "@/editor/config";
import { ref, onMounted } from "vue";
import BaseAttr from "./components/BaseAttr";

const activeName = ref("attr");
let attributeComp = ref<any>(null);
let dataComp = ref<any>(null);
onMounted(() => {
    let canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
    const events: ICellEvents = canvasConfig.getEvents();
    events.setClickEventListener((data: any) => {
        const node = data.node || data.cell;
        const pluginConfig: IPluginConfig = PluginConfig.getInstance();
        const component = pluginConfig.getComponent(node.shape);
        if (component) {
            attributeComp.value = component.Attribute;
            dataComp.value = component.Data;

        } else {
            attributeComp.value = null;
            dataComp.value = null;
        }

    });
});

const handleClick = (tab: any) => {
    console.log(tab);
};
</script>

<style lang="scss" scoped></style>