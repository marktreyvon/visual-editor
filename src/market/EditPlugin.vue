<template>
  <el-dialog
    title="创建插件"
    width="800"
    :model-value="visible"
    append-to-body
    @close="emit('update:visible', false)"
  >
    <el-form label-position="right" label-width="120" ref="formRef" :rules="rules" :model="model">
      <el-form-item label="插件名称" prop="name">
        <el-input
          placeholder="小写英文字母与下划线组合"
          maxlength="30"
          v-model="model.name"
        />
      </el-form-item>
      <el-form-item label="插件中文名称" prop="zh_name">
        <el-input v-model="model.zh_name" maxlength="20"/>
      </el-form-item>
      <el-form-item label="icon" prop="icon">
        <div class="relative">
          <img class="w-16 h-16" v-if="model.icon" :src="`${oss}/${model.icon}`"/>
          <el-button v-else>上传</el-button>
          <input
            type="file"
            class="absolute z-10 inset-0 opacity-0"
            @change="uploadIcon"
            accept="image/png,image/jpg,image/jpeg"
          />
        </div>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <div style="border: 1px solid #ccc" class="text-editor">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            mode="default"
          />
          <Editor
            style="height: 300px; overflow-y: hidden;"
            v-model="model.description"
            :defaultConfig="editorConfig"
            @onCreated="handleCreated"
            mode="default"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="emit('update:visible', false)">取消</el-button>
        <el-button type="primary" @click="submit" :loading="data.submitting">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, ref, shallowRef, reactive, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor, IEditorConfig } from '@wangeditor/editor'
import { MarketApi } from '@/api/market'
import { FormInstance, FormRules } from 'element-plus'
const props = defineProps<{
  visible: boolean
  id?: string
}>()

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'success'): void
}>()

const editorRef = shallowRef<IDomEditor>()
const oss = import.meta.env.VITE_OSS
const formRef = ref<FormInstance>()
const model = reactive({
  description: '',
  icon: '',
  zh_name: '',
  name: ''
})

const data = reactive({
  submitting: false
})
const toolbarConfig = {}
const editorConfig: Partial<IEditorConfig> = {    // TS 语法
  placeholder: '请输入内容...',
  scroll: false,
  MENU_CONF: {
    uploadImage: {
      async customUpload(file: File, insertFn: any) {
        const res = await MarketApi.upload(file)
        insertFn(`${oss}/${res.data.name}`)
      }
    }
  }
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (!editor) return
  editor.destroy()
})

const rules = reactive<FormRules>({
  name: {
    required: true,
    validator: (rule, value, callback) => {
      if (/^[a-z0-9][a-z0-9_]*[a-z0-9]$/.test(value)) {
        callback()
      } else{
        callback(new Error('插件名由至少2位小写字母数字或_划线组成，_划线不能出现在首尾'))
      }
    }
  },
  zh_name: {
    required: true,
    message: '请填写插件中文名称'
  },
  icon: {
    required: true,
    message: '请上传插件icon'
  },
  description: {
    required: true,
    message: '请填写插件描述'
  }
})
const uploadIcon = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    const res = await MarketApi.upload(file)
    model.icon = res.data.name
  }
}
const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor
}

watch(() => props.visible, () => {
  formRef.value?.resetFields()
})
const submit = () => {
  formRef.value?.validate(v => {
    if (v) {
      data.submitting = true
      MarketApi.createPlugin(model).then(res => {
        emit('success')
        emit('update:visible', false)
      }).finally(() => data.submitting = false)
    }
  })
}
</script>

<style>
.text-editor{
  .w-e-text-placeholder{
    top: 11px;
  }
}
.w-e-full-screen-container{
  z-index: 1000;
}
</style>
