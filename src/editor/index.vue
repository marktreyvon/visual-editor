<template>
    <el-container>
      <el-header id="header" height="50px" class="flex items-center shadow-md w-full">
        <!-- 顶部start -->
        <Header :tools="useTools()"/>
        <!-- 顶部end -->
      </el-header>
      <el-container id="layout" class="layout-container relative">
        <el-aside class="shadow-sm absolute w-64 z-50 h-full">
          <!-- 左侧组件start -->
          <left-aside class="w-full"/>
          <!-- 左侧组件end -->
        </el-aside>
        <el-main>
          <!-- 中间编辑区域start -->
          <canvas-editor class="mx-64 w-auto h-full"/>
          <!-- 中间编辑区域end -->
  
          <!-- 右侧属性面板start -->
          <right-attribute-panel class="absolute inset-y-0 right-0 w-64 z-50 h-full bg-gray-300 "/>
          <!-- 右侧属性面板end -->
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  

<script setup lang="ts">
import { ref, reactive, onMounted, toRefs } from "vue";
import Header from "./components/header/index.vue";
import LeftAside from "./components/left-aside/index.vue";
import CanvasEditor from "./components/canvas-editor/index.vue";
import RightAttributePanel from "./components/right-attribute-panel/index.vue";
import { useTools } from './hooks/useTools'

</script>

<style lang="scss">
  $headerHeight: 50px;
  .el-header {
    height: $headerHeight;
  }
  .el-header,
  .el-footer {
    position: relative;
    z-index: 99;
    background-color: white;
    padding: 0;
  }

  .el-aside {
    background-color: white;
  }

  .layout-container {
    height: calc(100vh - $headerHeight);
  }

  .el-main {
    padding: 12px;
    background-color: #f5f5f5;
    @media (min-width: 1111px) {
      overflow-x: hidden;
    }
  }
</style>
