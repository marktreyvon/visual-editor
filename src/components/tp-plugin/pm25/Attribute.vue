<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="样式" name="style">
      <el-form v-model="formData">
        <el-form-item label="字体大小">
          <el-input v-model="formData.fontSize"></el-input>
        </el-form-item>

        <el-form-item label="字体颜色">
          <el-input v-model="formData.fontColor"></el-input>
        </el-form-item>

        <el-form-item label="背景颜色">
          <el-input v-modl="formData.bgColor"></el-input>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
const activeNames = ref<string>("style");
const emit = defineEmits(["changeData"]);
const formData = reactive({
  fontSize: 20,
  fontColor: '',
  bgColor: ''
})

watch(formData, () => {
  emit("changeData", formData);
}, { deep: true})
</script>

<style lang="scss" scoped>

</style>