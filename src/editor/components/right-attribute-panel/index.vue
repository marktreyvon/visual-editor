<template>
    <div class="">
        <ElTabs v-model="activeName">
            <el-tab-pane label="外观" name="attr">
                <div>
                    <!-- 画布样式 -->
                    <CanvasAttr v-if="!isNode" @onChange="onCanvasAttrChange"/>
                    <!-- 节点基础样式 -->
                    <BaseAttr v-if="isNode" :data="nodeData"/>
                    <!-- 自定义样式 -->
                    <component v-if="isNode" :is="attributeCpt" v-on="actionHandlers" 
                        @onChange="onChange" />
                </div>

            </el-tab-pane>
            <el-tab-pane label="数据" name="data">
                <component :is="dataCpt" @onChange="onChange"/>
            </el-tab-pane>

            <el-tab-pane label="事件" name="event">
            </el-tab-pane>

            <el-tab-pane label="图层" name="layer">
                <LayerAttr />
            </el-tab-pane>
        </ElTabs>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import CanvasAttr from "./components/CanvasAttr.vue";
import BaseAttr from "./components/BaseAttr.vue";
import LayerAttr from "./components/LayerAttr.vue";
import { useEvents } from "./useEvents"
import { useAttribute } from "./useAttribute"
const activeName = ref("attr");
let { 
    isNode, attributeCpt, dataCpt, nodeData, 
    initEvents, onChange 
} = useEvents();

let actionHandlers = reactive({})
onMounted(() => {
    initEvents();
});

let {
    onCanvasAttrChange
} = useAttribute();

</script>

<style lang="scss" scoped></style>