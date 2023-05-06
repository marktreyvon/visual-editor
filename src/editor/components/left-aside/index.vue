<template>
  <div :id="Common.DEFAULT_STENCIL_CONTAINER_ID"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { CanvasConfig, StencilConfig } from "@/editor/config";
import * as Common from "@/editor/common";

onMounted(() => {
    const canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
    const graph = canvasConfig.getGraph();
    
    // 模拟异步加载
    setTimeout(() => {
      const groups = [
          {
              name: "group1",
              title: '分组1',
              collapsable: true,
          },
          {
              name: "group2",
              title: '分组2',
              collapsable: true,
          },
      ]
      const stencilConfig: IStencilConfig = StencilConfig.getInstance(canvasConfig.getGraph(), groups);
      stencilConfig.getStencil().load([rect1, rect2], "group1");
    }, 100);
    


    const rect1 = graph?.createNode({
        shape: "rect",
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        label: '文本1'
    });
    const rect2 = graph?.createNode({
        shape: "circle",
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        label: '文本2'
    });
    
})

</script>

<style lang="scss" scoped>

</style>