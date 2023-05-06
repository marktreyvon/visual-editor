<template>
  <div class="container" style="width=100%; height=100%">
    <div :id="Common.DEFAULT_CONTAINER_ID"></div>
    <div class="mini-container" :id="Common.DEFAULT_MINI_CONTAINER_ID"></div>
    <TeleportContainer />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { CanvasConfig } from '../../config';
import * as Common from '../../common';
import ProgressNode from "@/components/ProgressNode.vue";
import CountNode from "@/components/CountNode.vue";
// import PM25 from "@/components/pm25/index.vue";
import { getTeleport } from "@antv/x6-vue-shape";
import { defineAsyncComponent } from 'vue';
import { Main, Attributes, Data } from '@/components/pm25'
// const PM25 = defineAsyncComponent(() => import('@/components/pm25/index.vue'));

const TeleportContainer = getTeleport();

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
      label: 'hello', // String，节点标签
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
onMounted(() => {
  console.log('canvaseditor mounted')
  // 创建画布
  let canvasConfig: ICanvasConfig = CanvasConfig.getInstance('container');
  canvasConfig.renderJSON(data);
  const events: ICellEvents = canvasConfig.getEvents();


  // 右键菜单
  events.setContextMenuEventListener((data: any) => {
    console.log("setContextMenuEventListener", data);
  });

  // 移动事件
  events.setMovedEventListener((data: any) => {
    console.log("setMovedEventListener", data);
  });

  // 缩放事件
  events.setResizedEventListener((data: any) => {
    if (data.node) {
      console.log("setResizedEventListener.size", data.node.size())
      const { width, height } = data.node.size();
      data.node.setData({
        width,
        height,
      });
    }
  });

  const node = canvasConfig.addComponent(ProgressNode, "progress-node", { x: 200, y: 500 }, { w: 100, h: 100 }, { progress: 0, });
  setInterval(() => {
    const { progress } = node.getData();
    node.setData({
      progress: (progress + 10) % 100,
    });
  }, 2000);

  canvasConfig.addComponent(CountNode, "count-node", { x: 400, y: 300 });
  canvasConfig.addComponent(Main, "pm-25", { x: 400, y: 100 }, { w: 200, h: 200 }, { num: 0 });




});
</script>

<style lang="scss" scoped>
.mini-container {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 160px;
  z-index: 100;
}

:deep(.x6-widget-selection-box.x6-widget-selection-box-node) {
  border: unset !important;
  border-radius: 6px;
}


:deep(.x6-widget-transform) {
  margin: -1px 0 0 -1px;
  padding: 0;
  border: 1px solid #239edd;
  border-radius: 6px;
}

:deep(.x6-widget-transform > div) {
  border: 1px solid #239edd;
}

:deep(.x6-widget-transform > div:hover) {
  background-color: #3dafe4;
}

:deep(.x6-widget-transform-active-handle) {
  background-color: #3dafe4;
}

:deep(.x6-widget-transform-resize) {
  border-radius: 0;
}
</style>