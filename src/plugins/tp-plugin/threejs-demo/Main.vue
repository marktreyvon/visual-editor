<template>
  <!-- <gauge id="pm25"></gauge> -->
  <div id="scene3d" ref="scene3d" style="width:100%;height:100%"></div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import  { SceneBackstage }  from  './scene/lib/engine.js';
export default defineComponent({
  props: {
    value: {
      type: [Object, String, Number],
      default: () => {
        return {};
      },
    },
    style: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      formData: "",
      scene: {},
    }
  },

  watch: {
    value: {
      handler(val) {
        console.log("Main.value", val);
      },
      deep: true
    },
    style: {
      handler(val) {
        console.log("Main.style", val);
      },
      deep: true
    }
  },
  mounted() {
    const containerDiv=document.getElementById('scene3d')
    this.scene = new SceneBackstage(containerDiv);
    // this.$nextTick(() => {
    //   // const containerDiv = this.$refs.scene3d;
    //
    //
    //   this.scene = new SceneBackstage(containerDiv);
    // })
    //
  },
  methods: {
    changeData(data: any) {
      this.formData = JSON.parse(JSON.stringify(data));
      // 解析数据传给SceneBackstage实例 更新标签上的数据
      // ...
      // this.scene.updateData(this.formData);
    }
  }
})

</script>

<style lang="scss" scoped>

</style>