<template>
  <div class="container" style="width=100%; height=100%">
    <div :id="Common.DEFAULT_CONTAINER_ID"></div>
    <div class="mini-container" :id="Common.DEFAULT_MINI_CONTAINER_ID"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { CanvasConfig } from '../../config'
import * as Common from '../../common';
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
  // 创建画布
  let canvasConfig: ICanvasConfig = CanvasConfig.getInstance('container');
  canvasConfig.renderJSON(data);
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