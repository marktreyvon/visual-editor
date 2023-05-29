<template>
  <Yibiaopan id="yibiaopan" :formData="formData"></Yibiaopan>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import Yibiaopan from "../components/Yibiaopan.vue";

export default defineComponent({
  components: {
    Yibiaopan,
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
      formData: {}
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
        this.formData=val
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