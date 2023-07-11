<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="样式" name="style">
      <el-form v-model="formData">
        <el-form-item label="字体大小">
          <el-input v-model="formData.fontSize"></el-input>
        </el-form-item>

        <el-form-item label="字体颜色">
          <tp-color-picker v-model="formData.color" />
        </el-form-item>

        <el-form-item label="背景颜色">
          <tp-color-picker v-model="formData.bgColor" />
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeNames: 'style',
      formData: {
        fontSize: 30,
        color: '#fff',
        bgColor: '#00AEFF',
      }
    }
  },
  watch: {
    formData: {
      handler(val) {
        this.$emit("onChange", {
          style: val
        });
      },
      deep: true
    }
  }
})


</script>

<style lang="scss" scoped>

</style>