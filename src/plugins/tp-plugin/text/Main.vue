<template>
    <div :style="myStyle" style="width:100%;height:100%;">
        {{ textValue }}
    </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: [String]
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
                fontColor: '#ffffff',
                backgroundColor: '#409EFF',
                border: '1px solid #000'
            }
        }
    },
    textValue() {
        if (this.value) {
            return this.value.staticValue;
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