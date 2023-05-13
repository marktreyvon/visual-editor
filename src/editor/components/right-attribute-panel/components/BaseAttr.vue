<template>
    <el-form>
        <el-form-item label="名称:">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="层级:">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="尺寸:">
            <el-row :gutter="10">
                <el-col :span="12" ><el-input></el-input></el-col>
                <el-col :span="12"><el-input></el-input></el-col>
            </el-row>
        </el-form-item>
        
        <el-form-item label="对齐:">
            <el-input></el-input>
        </el-form-item>
        </el-form>
  
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const activeNames = ref<string>("")
</script>

<style lang="scss" scoped>

</style>