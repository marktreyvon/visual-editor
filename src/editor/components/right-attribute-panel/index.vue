<template>
  <div class="">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="属性" name="attr">

      </el-tab-pane>
      <el-tab-pane label="数据" name="data">Config</el-tab-pane>
      <el-tab-pane label="动画" name="animate">Role</el-tab-pane>
      <el-tab-pane label="事件" name="event">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { CanvasConfig } from '../../config';

const activeName = ref('attr')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
onMounted(() => {
  let canvasConfig: ICanvasConfig = CanvasConfig.getInstance('container');
  const events: ICellEvents = canvasConfig.getEvents();
  events.setClickEventListener((data: any) => {
    if (data.cell) {
      console.log("setClickEventListener.节点", data);
    } else {
      console.log("setClickEventListener.画布", data);
    }
  });
})

</script>

<style>
.demo-tabs>.el-tabs__content {
  color: #6b778c;
  font-size: 22px;
  font-weight: 600;
}

.el-tab-pane {}
</style>
  