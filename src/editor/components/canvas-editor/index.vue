<template>
  <div class="container" style="width:100%; height:100%">
    <div :id="Common.DEFAULT_CONTAINER_ID"></div>
    <!-- <div class="mini-container" :id="Common.DEFAULT_MINI_CONTAINER_ID"></div> -->
    <TeleportContainer />
  </div>
</template>

<script setup lang="ts">
import * as Common from '@/common';
import { register,getTeleport } from "@antv/x6-vue-shape";
// import RightClickMenu from '@/editor/RightClickMenu.vue'
// register({
//   shape: "right-click-menu",
//   width: 100,
//   height: 100,
//   component: RightClickMenu,
// });
const TeleportContainer = getTeleport();

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