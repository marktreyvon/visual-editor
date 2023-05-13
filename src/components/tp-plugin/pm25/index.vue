<template>
  <gauge></gauge>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import Gauge from "./components/Gauge.vue";

export default defineComponent({
  components: {
    Gauge,
  },
  props: {
    style: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    changeData(data: any) {
      console.log("data", data);
    }
  }
})
// const props = defineProps({
//   style: {
//     type: Object,
//     default: () => {
//       return {};
//     },
//   },
// });

// watch(props.style, (val) => {
//   console.log("props.style", val);
// });

// const fun = () => {
//   return "i am function";
// }
</script>

<style lang="scss" scoped>

</style>