<template>
  <div id="displayContainer" style="width:100vw;height:100vh">
    <div :id="Common.DEFAULT_DISPLAY_CONTAINER_ID"></div>
    <TeleportContainer />
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as Common from "@/common";
import { useDisplay } from "./useDisplay"
import { getTeleport } from "@antv/x6-vue-shape";
import PluginAPI from '@/api/plugin'

const TeleportContainer = getTeleport();
document.title = '查看 - ThingsPanel可视化'

let { initDisplay } = useDisplay(Common.DEFAULT_DISPLAY_CONTAINER_ID);
onMounted(() => {
  let data = getPicPlugins();
  console.log('onMounted.data', data)

  const jsonData = sessionStorage.getItem(Common.PREVIEW_JSON_DATA_KEY);
  initDisplay(jsonData);
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

const getPicPlugins = async () => {
  let { data: result } = await PluginAPI.getPicPlugins({"current_page": 1,"per_page": 9999})
  if (result.code === 200) {
    console.log('onMounted.data', result.data.data)

    return result.data.data;
  }
}

</script>

<style lang="scss" scoped>
:deep(.x6-port.x6-port-link) {
  // 隐藏连接桩
  display:none;
}
</style>