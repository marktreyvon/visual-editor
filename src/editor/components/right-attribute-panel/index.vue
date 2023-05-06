<template>
    <div class="">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="属性" name="attr">attr</el-tab-pane>
            <el-tab-pane label="数据" name="data">Config</el-tab-pane>
            <el-tab-pane label="动画" name="animate">Role</el-tab-pane>
            <el-tab-pane label="事件" name="event">Task</el-tab-pane>
          </el-tabs>
    </div>
    
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  
  const activeName = ref('attr')
  
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
  </script>

  <style>
  .demo-tabs > .el-tabs__content {
    color: #6b778c;
    font-size: 22px;
    font-weight: 600;
  }
  .el-tab-pane {
  }
  </style>
  