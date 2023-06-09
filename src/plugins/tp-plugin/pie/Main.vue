<template>
  <piechart id="yibiaopan" :formData="formData" :formData1="formData1"></piechart>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import piechart from "./components/piechart.vue";

export default defineComponent({
  components: {
    piechart,
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
    data: {
      type: Object,
      default: () => {
        return {};
      },
    }
  },
  data() {
    return {
      formData: {},
    }
  },
  watch: {
    value: {
      handler(val) {
        console.log("Main.value", JSON.stringify(val));
        this.formData1=val
      },
      deep: true
    },
    style: {
      handler(val) {
        console.log("Main.style", val);
        this.formData = val
      },
      deep: true
    },
    data: {
      handler(val) {
        console.log("Main.data", val);
        // this.formData = val
      },
      deep: true
    }
  },
  computed: {
    formData1() {
        if (JSON.stringify(this.value) !== "{}"  && JSON.stringify(this.value) !== "[]") {
            return this.value;
        } else {
            return {};
        }
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