<template>
    <histogram id="yibiaopan" :formData="formData" :formData1="formData1"></histogram>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import histogram from "./components/histogram.vue";

export default defineComponent({
  components: {
    histogram,
  },
  props: {
    value: {
      type: [String, Object],
      default: '文本'
    },
    data: {
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
      formData: {},
    }
  },
  watch: {
    data: {
      handler(val) {
        console.log("Main.value", val);
        this.formData1=val
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
  },
  computed: {
    myStyle() {
        if (this.style) {
            return this.style
        } else {
            return {
                backgroundColor: '#409EFF',
            }
        }
    },
    formData1() {
        if (JSON.stringify(this.value) !== "{}") {
            return this.value;
        } else {
            return {};
        }
    }
  },
})

</script>

<style lang="scss" scoped>

</style>