<template>
    <el-container>
      <el-header id="header" height="50px" class="flex items-center shadow-md w-full">
        <!-- 顶部start -->
        <Header :tools="useTools()"/>
        <!-- 顶部end -->
      </el-header>
      <el-container id="layout" class="layout-container relative">
        <el-aside class="shadow-sm absolute w-44 z-50 h-full bg-white">
          <!-- 左侧组件start -->
          <left-aside class="w-full h-full"/>
          <!-- 左侧组件end -->
        </el-aside>
        <el-main>
          <!-- 中间编辑区域start -->
          <canvas-editor class="mx-64 w-auto h-full"/>
          <!-- 中间编辑区域end -->
  
          <!-- 右侧属性面板start -->
          <RightAttributePanel class="absolute inset-y-0 p-2 right-0 w-64 z-50 h-full bg-white"/>
          <!-- 右侧属性面板end -->
        </el-main>
      </el-container>
    </el-container>
  </template>
<script setup lang="ts">
import { onMounted, inject } from "vue";
import Header from "./components/header/index.vue";
import LeftAside from "./components/left-aside/index.vue";
import CanvasEditor from "./components/canvas-editor/index.vue";
import RightAttributePanel from "./components/right-attribute-panel/index.vue";
import { useTools, useCanvas } from './hooks'
import VisualAPI from '@/api/visual'

onMounted(() => {
  console.log('editor mounted', inject('params'))
  // 从服务器获取大屏数据
  const params1 = {
    "current_page": 1,
    "per_page": 10,
    "relation_id": "123456"
  }
  const params: any = inject('params', null);
  if (params) {
    VisualAPI.getJsonDataById({
      id: params.id,
      current_page: 1,
      per_page: 10
    }).then(res => {
      console.log('getJsonDataById', res)
    })
  }

  
  // 加载画布
  const { initCanvas } = useCanvas();
  initCanvas();
})

const data = {
    // 节点
    nodes: [
      {
        id: 'node1', // String，可选，节点的唯一标识
        shape: 'rect',  // 图形，默认是rect
        x: 40,       // Number，必选，节点位置的 x 值
        y: 40,       // Number，必选，节点位置的 y 值
        width: 80,   // Number，可选，节点大小的 width 值
        height: 40,  // Number，可选，节点大小的 height 值
        label: 'hello', // String，节点标签,
        data: {
          msg: 'hello world'
        }
      },
      {
        id: 'node2', // String，节点的唯一标识
        x: 160,      // Number，必选，节点位置的 x 值
        y: 180,      // Number，必选，节点位置的 y 值
        width: 80,   // Number，可选，节点大小的 width 值
        height: 40,  // Number，可选，节点大小的 height 值
        label: 'world', // String，节点标签
      },
    ],
    // 边
    edges: [
      {
        source: 'node1', // String，必须，起始节点 id
        target: 'node2', // String，必须，目标节点 id
      },
    ],
  };
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
