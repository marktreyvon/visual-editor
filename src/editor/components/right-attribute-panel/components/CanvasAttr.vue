<!-- 画布属性 -->
<template>
    <el-form>
        <el-form-item label="背景颜色:">
            <el-color-picker v-model="formData.backgroundColor" />
        </el-form-item>
        
<!--        <el-form-item label="背景图片:">-->
<!--            <el-input  v-model="formData.backgroundImage"></el-input>-->
<!--        </el-form-item>-->

        <el-form-item label="显示网格:">
            <el-switch v-model="formData.showGrid" />
        </el-form-item>

        <el-form-item v-if="formData.showGrid" label="网格大小:">
            <el-input v-model="formData.gridSize"></el-input>
        </el-form-item>
    </el-form>
  
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
const formData = reactive({
    showGrid: true,
    gridSize: 10,
    backgroundColor: "#F2F7FA",
    backgroundImage: ""
})
const emit = defineEmits(["onChange"]);
watch(formData, (newVal) => {
    emit('onChange', newVal)
}, { deep: true })
</script>

<style lang="scss" scoped>

</style>