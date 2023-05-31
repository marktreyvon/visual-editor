<template>
  <!-- <gauge id="pm25"></gauge> -->
  <div id="scene3d" ref="scene3d" style="width:800px;height:800px"></div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import Gauge from "../components/Gauge.vue";
import  { SceneBackstage }  from  './scene/lib/engine';
export default defineComponent({
  components: {
    Gauge,
  },
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
      scene: null,
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
    this.$nextTick(() => {
      const containerDiv = this.$refs.scene3d;
      const scene = new SceneBackstage(containerDiv);	
    })
    
  },
  methods: {
    changeData(data: any) {
      this.formData = JSON.parse(JSON.stringify(data));
      console.log("Main.data", this.formData);
    }
  }
})

</script>

<style lang="scss" scoped>

</style>