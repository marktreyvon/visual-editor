<template>
    <div style="height:100%">
      <!-- 项目 -> 分组(绑定分组) -->
      <el-row>
        <el-form-item label="绑定类型:">
          <el-select v-model="bindType" placeholder="绑定类型">
            <el-option v-for="item in bindOptions" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row style="height:100%">
          <!-- 静态数据 -->
          <el-input v-if="bindType==='static'" :rows="20" type="textarea" v-model="formData.static"></el-input>
          <!-- 动态数据 -->
          <el-form-item v-else-if="bindType==='dynamic'" style="width:100%">
            <el-input :rows="2" type="textarea" v-model="formData.dynamic"></el-input>
          </el-form-item>
          <!-- 设备数据 -->
          <div class="w-full" v-else-if="bindType==='device'" >
            <slot></slot>
          </div>
          
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    props: {},
    data() {
      return {
        formData: {
          value: ""
        },
        bindType: 'static',
        bindOptions: [
          { value: 'static', label: '静态数据' }, 
          { value: 'dynamic', label: '动态数据'}, 
          { value: 'device', label: '设备数据'}
      ]
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
    methods: {
      
    }
  }
  </script>
  <style lang="scss" scoped></style>