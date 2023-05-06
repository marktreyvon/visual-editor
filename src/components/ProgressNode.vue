<template>
    <el-progress type="dashboard" :percentage="percentage" :width="80">
    </el-progress>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProgressNode",
    inject: ["getNode"],
    data() {
        return {
            percentage: 10,
        };
    },
    mounted() {
        const node = (this as any).getNode() as Node;
             
        node.on("change:data", ({ current }) => {
            const { progress, width, height } = current;
            console.log('width, height', width, height)
            this.percentage = progress;
        });
    },
});
</script>