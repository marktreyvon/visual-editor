<template>
    <div :style="myStyle" style="width:100%;height:100%;">
        <span >{{ textValue }}</span>
    </div>
</template>

<script>
import { styleData } from "./default"
export default {
  props: {
    style: {
        type: Object,
        default: () => ({})
    }
  },
  data() {
    return {
      textValue: "",
      format: "yyyy-MM-dd HH:mm:ss",
      timer: null,
      myStyle: styleData
    }
  },
  watch: {
    style: {
        handler: function (val, oldVal) {
            console.log('timer.Main.style', val)
            if (JSON.stringify(val) === "{}") return;
            this.myStyle = val;
            this.format = val?.format || "yyyy-MM-dd HH:mm:ss";
            if (this.timer && val.format !== oldVal.format) {
                clearInterval(this.timer);
                this.start();
            }
        },
        immediate: true,
        deep: true
    }
  },
  mounted() {
    this.start();
  },
  methods: {
    /**
     * 开始计时
     */
    start() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.textValue = (new Date()).format(this.format)
      this.timer = setInterval(() => {
        this.textValue = (new Date()).format(this.format)
      }, 1000)
    },
    /**
     * 销毁计时器
     */
    destroy() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>