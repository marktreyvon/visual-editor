<template>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="样式" name="style">
        <el-form v-model="formData" label-width="140px" label-position="left">
          <el-form-item label="字体大小">
            <el-input v-model="formData.fontSize"></el-input>
          </el-form-item>
  
          <el-form-item label="字体颜色">
            <el-color-picker v-model="formData.color" />
          </el-form-item>
  
          <el-form-item label="背景颜色">
            <el-color-picker v-model="formData.bgColor" />
          </el-form-item>

          <el-form-item label="进度条颜色">
            <el-color-picker v-model="formData.ProgressColor" />
          </el-form-item>
          <el-form-item label="是否显示指针">
            <el-switch v-model="formData.pointerShow" />
          </el-form-item>
          <el-form-item label="指针颜色" v-if="formData.pointerShow">
            <el-color-picker v-model="formData.pointerColor" />
          </el-form-item>
          <el-form-item label="指针圆颜色" v-if="formData.pointerShow">
            <el-color-picker v-model="formData.pinColor" />
          </el-form-item>
          <el-form-item label="是否显示标签">
            <el-switch v-model="formData.tagShow" />
          </el-form-item>
          <el-form-item label="是否显示标签刻度">
            <el-switch v-model="formData.tagCunShow" />
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
          bgColor: '',
          ProgressColor:"#009DFF",
          pointerColor:'#00FFB3',
          pinColor:"#0400FF",
          pointerShow:true,
          tagShow:true,
          tagCunShow:true,
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