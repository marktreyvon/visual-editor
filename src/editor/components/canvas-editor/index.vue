<template>
  <div class="canvas-box">
    <el-button v-if="showRuler" class="button-view" :icon="View" ></el-button>
    <HorizontalGuides v-if="showRuler" class="horizontal-container" :scaling="scaling"/>
    <VerticalGuides v-if="showRuler" class="vertical-container" :scaling="scaling"/>
    <div class="canvas-container" :id="Common.DEFAULT_CONTAINER_ID"></div>
    <!-- <div class="mini-container" :id="Common.DEFAULT_MINI_CONTAINER_ID"></div> -->
    <TeleportContainer />
  </div>
</template>

<script setup lang="ts">
import * as Common from '@/common';
import { CanvasConfig } from '@/editor/config';
import { getTeleport } from "@antv/x6-vue-shape";
import { View } from '@element-plus/icons-vue'

import { onMounted, ref } from 'vue';
import HorizontalGuides from "./components/HorizontalGuides.vue";
import VerticalGuides from "./components/VerticalGuides.vue";
// import RightClickMenu from '@/editor/RightClickMenu.vue'
// register({
//   shape: "right-click-menu",
//   width: 100,
//   height: 100,
//   component: RightClickMenu,
// });

const TeleportContainer = getTeleport();

const showRuler = ref<Boolean>(Common.DEFAULT_SHOW_RULER);
const scaling = ref(1);
onMounted(() => {
  let canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
  const events: ICellEvents = canvasConfig.getEvents();

  /**
   * 监听标尺事件
   */
  canvasConfig.setRulerCallback((data: any) => {
      console.log('setRulerCallback', data)
      showRuler.value = data.show;
      console.log('setRulerCallback', showRuler.value)
      const canvasContainer = document.getElementById(Common.DEFAULT_CONTAINER_ID);
      if (data.show) {
          canvasContainer?.style.setProperty("--left", "20px");
          canvasContainer?.style.setProperty("--top", "20px");
          canvasContainer?.style.setProperty("--w", "calc(100% - 20px)");

      } else {
          canvasContainer?.style.setProperty("--left", "0px");
          canvasContainer?.style.setProperty("--top", "0px");
          canvasContainer?.style.setProperty("--w", "100%");
      }
  });

  /**
   * 节点删除事件
   */
  events.setRemovedEventListener((cell: any) => {
      setTimeout(() => {
          const json = canvasConfig.toJSON();
          localStorage.setItem(Common.STORAGE_JSON_DATA_KEY, JSON.stringify(json));
      }, 200);
  })

  /**
   * 缩放事件
   */
  events.setGraphScaleEventListener((data: any) => {
      console.log('setGraphScaleEventListener', data)
      scaling.value = data.sx;
  })
})

</script>

<style lang="scss" scoped>
.canvas-box {
  position:relative;
  width: 100%;
  height: calc(100% - 30px);
  margin-top: 0px;
  .button-view {
    position:absolute;
    top: 1px;
    left: 0px;
    width: 20px;
    height: 20px;
    padding: 0px;
    border: 0px;
    border-radius: 0px;
    background-color: #ffffff;
    z-index: 2;
  }
  .horizontal-container {
    position:absolute;
    height: 20px;
  }
  .vertical-container {
    position:absolute;
    left: 0px;
    height: 100%;
    width: 20px;
  }
  .canvas-container {
    position: absolute;
    margin-top: var(--top, 20px);
    margin-left: var(--left, 20px);
    width: var(--w, calc(100% - 20px));
  }
  .mini-container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 200px;
    height: 160px;
    z-index: 100;
  }
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