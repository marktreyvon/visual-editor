<template>
  <el-button @click="add()">内部Add: {{ num }} </el-button>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent ({
  name: "CountNode",
  // 获取(节点)node和(画布)graph，在组件内就可以对画布或者节点做操作。
  inject: ["getGraph", "getNode"],
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    const self = this;
    const node = this.getNode();
    // 监听数据改变事件
    node.on("change:data", ({ current }) => {
      // 同步子组件和节点的数据
      self.num = current.num;
      const { width, height } = current;
      console.log("change:data", width, height)
    });
  },
  methods: {
    add() {
      // 获取节点
      const node = this.getNode();
      const { num } = node.getData();
      node.setData({
        num: num + 1,
      });
    },
  },
})
</script>