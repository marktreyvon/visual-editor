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
      timer: null
    }
  },
  computed: {
    myStyle() {
        if (JSON.stringify(this.style) !== "{}") {
            return this.style
        } else {
            return styleData
        }
    },
  },
  watch: {
    style: {
        handler: function (val, oldVal) {
            if (!val) return;
            this.format = val.format
            if (this.timer && val.format !== oldVal.format) {
                clearInterval(this.timer);
                this.start();
            }
        },
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
      this.textValue = (new Date()).format(this.myStyle.format)
      this.timer = setInterval(() => {
        this.textValue = (new Date()).format(this.myStyle.format)
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