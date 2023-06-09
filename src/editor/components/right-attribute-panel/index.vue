<template>
    <div class="">
        <ElTabs v-model="activeName">
            <el-tab-pane :label="isEdge?'线条样式':'外观'" name="attr">
                <div style="height: 100%;">
                    <!-- 画布样式 -->
                    <CanvasAttr v-if="!isNode&&!isEdge" @onChange="onCanvasAttrChange"/>
                    <div v-if="isNode">
                        <!-- 节点基础样式 -->
                        <BaseAttr :data="nodeData" @onChange="onBaseChange"/>
                        <!-- 自定义样式 -->
                        <component  v-if="attributeCpt" :currentNode='nodeId' :data="attrData" :is="attributeCpt" v-on="actionHandlers"
                            @onChange="onChange" />
                        <BaseNodeAttr v-if="!attributeCpt"  @onChange="onChange"/>
                    </div>
                    
                      <!-- 边样式 -->
                    <LineAttr v-if="isEdge"  :tools="useTools()" :edgeData="edgeData" :nodeData="nodeData" @onChange="onChange"/>
                </div>

            </el-tab-pane>
            <el-tab-pane label="数据" name="data" v-if="!isEdge">
                <component v-if="isNode" :is="dataCpt" :data="bindData"  @onChange="onChange">
                    <BaseData @onChange="onChange"/>
                </component>
            </el-tab-pane>
            <el-tab-pane label="图层" name="layer">
                <LayerAttr :cellList='cellList' :initEvents='initEvents'/>
            </el-tab-pane>
        </ElTabs>
    </div>
</template>

<script setup lang="ts">
import { useTools } from '@/editor/hooks'

import { ref, onMounted, reactive, watch, toRaw, computed, shallowRef } from "vue";
import CanvasAttr from "./components/CanvasAttr.vue";
import BaseAttr from "./components/BaseAttr.vue";
import LineAttr from "./components/LineAttr.vue";
import LayerAttr from "./components/LayerAttr.vue";
import BaseData from './components/baseData/index.vue';
import BaseNodeAttr from "./components/BaseNodeAttr.vue"
import { useEvents } from "./useEvents"
import { useAttribute } from "./useAttribute"
import { parseJSONData } from '@/utils';
const activeName = ref("attr");
let {
    isNode, attributeCpt, dataCpt, nodeData,edgeData,
    isEdge,nodeId,
    initEvents, onChange, onBaseChange,
    cellList
} = useEvents();

// 自定义样式
const attrData = shallowRef<any>({});
// 数据绑定
const bindData = shallowRef<any>({});



// watch(nodeData, (value) => {
//     console.log('right-attribute-panel.nodeData', value)
//     if (!value || !value.data) return;
//     const jsonObj = parseJSONData(value.data.jsonData);
//     attrData.value = jsonObj.style;
//     bindData.value = jsonObj.data;
// })

let actionHandlers = reactive({})
onMounted(() => {
    initEvents();
});

let {
    onCanvasAttrChange
} = useAttribute();

</script>

<style lang="scss" scoped></style>