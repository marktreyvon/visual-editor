<template>
    <div :style="myStyle" style="width:100%;height:100%;">
        <span >{{ textValue }}</span>
    </div>
</template>

<script>
import { styleData } from './default'

export default {
  components: {},
  props: {
    value: {
      type: [String, Object],
      default: '文本'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    myStyle() {
        if (this.style) {
            return this.style
        } else {
            return styleData
        }
    },
    textValue() {
        if (JSON.stringify(this.value) !== "{}") {
            return this.value;
        } else {
            return "文本";
        }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped></style>