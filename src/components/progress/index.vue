<template>
    <el-progress style="width:100%;height:100%" type="dashboard" :percentage="percentage">
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
            console.log(' progress, width, height ', progress, width, height)
            this.percentage = progress || 10;
        });
    },
});
</script>