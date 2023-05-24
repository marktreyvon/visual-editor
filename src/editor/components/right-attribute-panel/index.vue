<template>
    <div class="">
        <ElTabs v-model="activeName">
            <el-tab-pane label="外观" name="attr">
                <div>
                    <!-- 画布样式 -->
                    <CanvasAttr v-if="!isNode" />
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
            <el-tab-pane label="图层" name="layer">
                <ComponentList />
            </el-tab-pane>
        </ElTabs>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import CanvasAttr from "./components/CanvasAttr.vue";
import BaseAttr from "./components/BaseAttr.vue";
import ComponentList from "./components/ComponentList.vue";
import { useEvents } from "./useEvents"
const activeName = ref("attr");
let { 
    isNode, attributeCpt, dataCpt, nodeData, 
    initEvents, onChange 
} = useEvents();

let actionHandlers = reactive({})
onMounted(() => {
    initEvents();
});

</script>

<style lang="scss" scoped></style>