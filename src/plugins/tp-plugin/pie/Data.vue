<template>
    <el-form-item label="绑定类型">
        <el-select v-model="formData.selectedValue">
        <el-option
        v-for="(item, index) in formData.options"
        :key="index"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
    </el-form-item>
    <el-input
            v-show="formData.selectedValue === '静态数据'"
            v-model="formData.inputText"
            :rows="24"
            type="textarea"
            placeholder="请输入"
        />
  </template>
  
  <script>
  const staticData = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 },
  ]

  export default {
    props: {},
    data() {
      return {
        activeName: 'static',
        formData: {
          value: "",
          options:['静态数据','动态数据','设备数据'],
          selectedValue:'',
          inputText: JSON.stringify(staticData, null, 4)
        },
        
      }
    },
    watch: {
      formData: {
        handler(val) {
            console.log(val)
          this.$emit("onChange", {
            value: { ...val },
            
          });
        },
        deep: true
      }
    },
    methods: {}
  }
  </script>
  <style lang="scss" scoped></style>