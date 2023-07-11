<template>
  <div>
    <el-color-picker
     :model-value="modelValue" 
      @update:modelValue="changeColor" 
      show-alpha
      :predefine="predefineColors"
      @change="changeColor">
    </el-color-picker>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  '#c7158577',
]
export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      predefineColors,
    }
  },
  mounted() {
    const storePredefineColors = localStorage.getItem('predefineColors')
      ? JSON.parse(localStorage.getItem('predefineColors') as any)
      : predefineColors

    this.predefineColors = storePredefineColors
    this.saveColorLocl()
  },
  methods: {
    changeColor(val: any) {
      const inx = this.predefineColors.findIndex(x => x === val)
      if (inx > -1) {
        this.predefineColors.splice(inx, 1)
      } else {
        const num = this.predefineColors.length - 7
        if (num > 0) {
          this.predefineColors.splice(7, num)
        }
      }

      this.predefineColors.unshift(val)
      this.saveColorLocl()
      this.$emit('update:modelValue', val)
      this.$emit('change', val)
    },
    saveColorLocl() {
      localStorage.setItem('predefineColors', JSON.stringify(this.predefineColors))
    },
  },
})
</script>
