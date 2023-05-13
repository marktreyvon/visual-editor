<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="样式" name="1">
      <el-form>
        <el-form-item label="字体大小">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

</script>

<style lang="scss" scoped>

</style>