<template>
    <div class="">
        <ElTabs v-model="activeName">
            <el-tab-pane :label="isEdge?'线条样式':'外观'" name="attr">
                <div>
                    <!-- 画布样式 -->
                    <CanvasAttr v-if="!isNode&&!isEdge" @onChange="onCanvasAttrChange"/>
                    <!-- 节点基础样式 -->
                    <BaseAttr v-if="isNode" :data="nodeData"/>
                    <!-- 自定义样式 -->
                    <component :currentNode='nodeId' v-if="isNode" :is="attributeCpt" v-on="actionHandlers"
                        @onChange="onChange" />
                      <!-- 边样式 -->
                     <LineAttr v-if="isEdge"  :tools="useTools()" :edgeData="edgeData" :nodeData="nodeData"/>
                </div>

            </el-tab-pane>
            <el-tab-pane label="数据" name="data" v-if="!isEdge">
                <component :is="dataCpt" @onChange="onChange"/>
            </el-tab-pane>
            <el-tab-pane label="图层" name="layer" v-if="!isEdge">
                <LayerAttr />
            </el-tab-pane>
        </ElTabs>
    </div>
</template>

<script setup lang="ts">
import { useTools } from '@/editor/hooks'

import { ref, onMounted, reactive } from "vue";
import CanvasAttr from "./components/CanvasAttr.vue";
import BaseAttr from "./components/BaseAttr.vue";
import LineAttr from "./components/LineAttr.vue";
import LayerAttr from "./components/LayerAttr.vue";
import { useEvents } from "./useEvents"
import { useAttribute } from "./useAttribute"
const activeName = ref("attr");
let { 
    isNode, attributeCpt, dataCpt, nodeData,edgeData,
  isEdge,nodeId,
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