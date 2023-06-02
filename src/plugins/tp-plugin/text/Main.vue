<template>
    <div :style="myStyle" style="width:100%;height:100%;">
        <span >{{ textValue }}</span>
    </div>
</template>

<script>
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
            return {
                fontSize: '20px',
                color: '#000',
                backgroundColor: '#409EFF',
                border: '1px solid #000'
            }
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