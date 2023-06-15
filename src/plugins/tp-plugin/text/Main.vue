<template>
    <div :style="myStyle" style="width:100%;height:100%;">
        <span :style="{ 'color': myStyle.color }">{{ textValue }}</span>
    </div>
</template>

<script>
import { styleData } from './default'

export default {
  props: {
    value: {
      type: [String, Object],
      default: '文本'
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      myStyle: styleData,
      textValue: '文本'
    }
  },
  watch: {
    style: {
      handler: function (val, oldVal) {
        console.log('text.Main.style', val, oldVal)
        if (JSON.stringify(val) === "{}") return;
        this.myStyle = val;
      },
      immediate: true,
      deep: true
    },
    value: {
      handler: function(val) {
        if (!val) {
          this.textValue = "文本";
        } else {
          this.textValue = val;
        }
        console.log('text.Main.value', this.textValue)
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped></style>