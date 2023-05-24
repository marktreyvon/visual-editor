<template>
    <div>
        <p><el-link href="./editor">进入编辑器</el-link></p>
        <p><el-link href="./display">进入预览</el-link></p>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

</script>

<style lang="scss" scoped>
    el-link {
        color: #409EFF;
        font-size: 30px!important;
    }
</style>