// text/Main.vue
<template>
    <div :style="myStyle" style="width:100%;height:100%">
        {{ value }}
    </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: [String],
      default: "文本"
    }
  },
  data() {
    return {}
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
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>