<template>
  <div id="displayContainer" style="width:100vw;height:100vh">
    <div :id="Common.DEFAULT_DISPLAY_CONTAINER_ID"></div>
    <TeleportContainer />
  </div>
  <div class="display-tools-container" style="position: absolute">
    <el-button>全屏</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from "vue";
import * as Common from "@/common";
import { useDisplay } from "./useDisplay"
import { getTeleport } from "@antv/x6-vue-shape";

const TeleportContainer = getTeleport();
document.title = '可视化查看 - ThingsPanel'

console.log('editor mounted', inject('params'))
const params: any = inject('params');


let { initDisplay } = useDisplay(Common.DEFAULT_DISPLAY_CONTAINER_ID);
onMounted(() => {
  let jsonData: any = "";
  console.log('editor mounted', params.mode)

  if (params.mode === 'preview') {
    jsonData = sessionStorage.getItem(Common.PREVIEW_JSON_DATA_KEY);
    initDisplay(jsonData);
  } else {
    console.log('editor mounted', params.id)
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
  })
  const displayContainer: HTMLElement = <HTMLElement>document.getElementById(Common.DEFAULT_DISPLAY_CONTAINER_ID);
  resizeObserver.observe(displayContainer);

})
/*
http://127.0.0.1:5173/display?id=61ac9ff6-8b94-b0bb-bf32-e80ca4ad735d&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzYjIzMzZjLTllOWEtODZlNS0xMDFlLTQ4NjRlNmI3NzI0YiIsIm5hbWUiOiJ0ZW5hbnQtYUB0cC5jbiIsImNyZWF0ZV90aW1lIjoiMjAyMy0wNi0wOVQxNjoyNToyNC42MzQ1NjQ2MDUrMDg6MDAiLCJleHAiOjE2ODYzMDI3MjR9.4cytmMTPdbbk2F7oFE_W_wefv6SHu1ZEXXRwHHfndwI&expiresTime=1686302725017
*/
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