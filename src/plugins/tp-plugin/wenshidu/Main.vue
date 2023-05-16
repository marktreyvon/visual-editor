<template>
  <gauge id="wenshidu"></gauge>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from "vue";
import Gauge from "../components/Gauge.vue";

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
      formData: ""
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