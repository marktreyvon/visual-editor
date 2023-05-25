<!-- 节点基础属性 -->
<template>
    <el-form>
        <el-form-item label="名称:">
            <el-input disabled v-model="state.data.shape"></el-input>
        </el-form-item>
        <el-form-item label="层级:">
            <el-input disabled v-model="state.data.zIndex"></el-input>
        </el-form-item>
        <el-form-item label="尺寸:">
            <el-row :gutter="10">
                <el-col :span="12" ><el-input disabled v-model="state.data.size.width"></el-input></el-col>
                <el-col :span="12"><el-input disabled v-model="state.data.size.height"></el-input></el-col>
            </el-row>
        </el-form-item>

        <el-form-item label="位置:">
            <el-row :gutter="10">
                <el-col :span="12" ><el-input disabled v-model="state.data.position.x"></el-input></el-col>
                <el-col :span="12"><el-input disabled v-model="state.data.position.y"></el-input></el-col>
            </el-row>
        </el-form-item>
        
        <!-- <el-form-item label="对齐:">
            <el-input></el-input>
        </el-form-item> -->
    </el-form>
  
</template>

<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from "vue";
const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})
const state = reactive<any>({
    data: {
        shape: "",
        zIndex: 0,
        size: {
            width: 0,
            height: 0
        },
        position: {
            x: 0,
            y: 0
        }
    }
})
watchEffect(() => {
    console.log('BaseAttr watchEffect', props.data)
    if (props.data) {
        state.data = { ...props.data };
        // state.data.position.x = getFixNumber(state.data.position.x);
        // state.data.position.y = getFixNumber(state.data.position.y);
    }
})

const getFixNumber = (value: any): number => {
    return Number(Number(value).toFixed(2));
}
</script>

<style lang="scss" scoped>

</style>