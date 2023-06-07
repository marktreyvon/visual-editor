<template>
  <el-dialog v-model="dialogVisible" title="上传图形" width="560" draggable>
    <el-form ref="ruleFormRef" :model="formData" :rules="formRules" label-width="120">
      <el-form-item label="输入分类名称" prop="plugin_name">
        <el-input v-model="formData.plugin_name"></el-input>
      </el-form-item>
      <el-form-item label="上传图片" prop="files">
        <el-upload ref="uploadRef" class="upload-demo" action="" :file-list="formData.files" :multiple="true"
          :auto-upload="false" :on-change="handleChange">
          <template #trigger>
            <el-button type="primary">选择图片</el-button>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit(ruleFormRef)">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import PluginAPI from '@/api/plugin'
import { FormInstance, UploadInstance } from "element-plus";
import { ref, reactive, computed, watch } from "vue";
const dialogVisible = ref<Boolean>(false);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

watch(() => props.visible, (val) => {
  dialogVisible.value = val;
})
const emit = defineEmits(['update:visible', 'submit'])
watch(dialogVisible, (val) => {
  emit('update:visible', val)
})

const formData = reactive({
  plugin_name: '',
  files: []
})
const ruleFormRef = ref<FormInstance>()
const formRules = reactive({
  plugin_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' }
  ],
  files: [
    { required: true, message: '请选择图片', trigger: 'blur' }
  ]
})

const handleChange = (file: any, uploadFiles: any) => {
  formData.files = uploadFiles;
}

/**
 * 提交上传
 */
const submit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const fd = new FormData()
      formData.files.forEach((item: any) => {
        fd.append('files', item.raw)
      })
      fd.append('plugin_name', formData.plugin_name);
      PluginAPI.uploadPlugins(fd).then(res => {
        console.log('uploadPlugins', res);
        dialogVisible.value = false;
        resetForm(formEl);
        emit('submit')
      })
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style lang="scss" scoped>
.upload-demo {
  text-align: left;
}
</style>