<template>
  <div id="displayContainer" style="width:100vw;height:100vh">
    <div :id="Common.DEFAULT_DISPLAY_CONTAINER_ID"></div>
    <TeleportContainer />
  </div>
  <div class="display-tools-container" style="position: absolute">
    <!-- <el-button>全屏</el-button> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from "vue";
import * as Common from "@/common";
import { useDisplay } from "./useDisplay"
import { getTeleport } from "@antv/x6-vue-shape";
import { parseParams } from "@/utils";
import { CanvasConfig } from "@/editor/config";

const TeleportContainer = getTeleport();

let { initDisplay, screenName } = useDisplay(Common.DEFAULT_DISPLAY_CONTAINER_ID);
document.title = '可视化查看 - ThingsPanel - ' + screenName.value;
const params = parseParams();
onMounted(() => {
  let jsonData: any = "";

  if (params?.mode === 'preview') {
    jsonData = sessionStorage.getItem(Common.PREVIEW_JSON_DATA_KEY);
    initDisplay(jsonData);
  } else {
    initDisplay(jsonData, params.id);
  }
});

const containerRect = ref({
  width: 0,
  height: 0
});

onMounted(() => {
  const resizeObserver = new ResizeObserver(entries => {
    console.log("监听变化", entries[0].contentRect.width, entries[0].contentRect.height)
    containerRect.value = {
      width: entries[0].contentRect.width,
      height: entries[0].contentRect.height
    }
    CanvasConfig.getDisplayInstance().zoomToFit();
  })
  const displayContainer: HTMLElement = <HTMLElement>document.getElementById(Common.DEFAULT_DISPLAY_CONTAINER_ID);
  resizeObserver.observe(displayContainer);

})

</script>

<style lang="scss" scoped>
:deep(.x6-port.x6-port-link) {
  // 隐藏连接桩
  display:none;
}
.display-tools-container {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>