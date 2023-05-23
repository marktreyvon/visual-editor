<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="静态数据" name="static">
      <el-form v-model="formData">
        <el-form-item label="绑定数据">
          <el-input v-model="formData.staticValue"></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="动态数据" name="dynamic">

    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      activeName: 'static',
      formData: {
        value: ""
      }
    }
  },
  watch: {
    formData: {
      handler(val) {
        this.$emit("onChange", {
          value: { ...val }
        });
      },
      deep: true
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>