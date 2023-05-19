<template>
  <div id="displayContainer" style="width:100vw;height:100vh">
    <div :id="Common.DEFAULT_DISPLAY_CONTAINER_ID"></div>
    <TeleportContainer />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import * as Common from "@/common";
import { useDisplay } from "./useDisplay"
import { getTeleport } from "@antv/x6-vue-shape";
import { useRoute } from "vue-router";

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
      label: 'hello', // String，节点标签,
      data: {
        msg: 'hello world'
      }
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 1260,      // Number，必选，节点位置的 x 值
      y: 280,      // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
    },
  ],
};
const router = useRoute();

let { initDisplay } = useDisplay(Common.DEFAULT_DISPLAY_CONTAINER_ID, data);
onMounted(() => {
  console.log(router.query)
  initDisplay();
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
  const displayContainer: HTMLElement = <HTMLElement>document.getElementById("displayContainer");
  resizeObserver.observe(displayContainer);
})

</script>

<style lang="scss" scoped></style>