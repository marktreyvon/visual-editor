<!-- 画布属性 -->
<template>
    <el-form label-width="80px" label-position="left">

        <!-- <el-form-item label="尺寸:">
            <el-row :gutter="10">
                <el-col :span="12" ><el-input type="number" v-model="formData.size.width"></el-input></el-col>
                <el-col :span="12"><el-input type="number" v-model="formData.size.height"></el-input></el-col>
            </el-row>
        </el-form-item> -->

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

        <el-form-item label="显示标尺:">
            <el-switch v-model="formData.showRuler" />
        </el-form-item>

    </el-form>
  
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
const activeNames = ref("ruler");
const formData = reactive({
    showGrid: true,
    gridSize: 10,
    backgroundColor: "#F2F7FA",
    backgroundImage: "",
    showRuler: true,
    size: {
        width: 1920,
        height: 1080
    }
})
const emit = defineEmits(["onChange"]);
watch(formData, (newVal) => {
    emit('onChange', newVal)
}, { deep: true })
</script>

<style lang="scss" scoped>

</style>