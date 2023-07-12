<template>
  <el-popover trigger="click" :width="400" v-if="row.state === 'put'" @show="data.releaseNote = ''">
    <div>
      <el-input type="textarea" :rows="4" placeholder="请填写发布说明" v-model="data.releaseNote" />
      <el-button type="primary" class="w-full mt-4" @click="submitAudit">
        提交
      </el-button>
    </div>
    <template #reference>
      <el-button size="small" link type="primary">
        提交审核
      </el-button>
    </template>
  </el-popover>
  <el-button size="small" link type="danger" v-if="row.state === 'put'" @click="removeStore">
    删除
  </el-button>
  <el-popover trigger="click" title="驳回原因" :width="300" v-if="row.state === 'reject'">
    <div class="text-sm text-gray-600 whitespace-pre">
      {{ row.rejectReason }}
    </div>
    <template #reference>
      <el-button size="small" link type="warning">
        原因
      </el-button>
    </template>
  </el-popover>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { MarketApi } from '@/api/market'

const props = defineProps<{
  row: any
  plugin: any
}>()

const emit = defineEmits<{
  (e: 'updateRecord', pluginId: string): void
}>()

const data = reactive({
  releaseNote: ''
})

const submitAudit = () => {
  if (!data.releaseNote) return ElMessage.info('请填写发布说明')
  MarketApi.submitAudit({
    id: props.row.id,
    releaseNote: data.releaseNote
  }).then(() => {
    ElMessage({
      message: '已提交审核，请等待审核结果',
      type: 'success'
    })
    emit('updateRecord', props.plugin.id)
  })
}
const removeStore = () => {
  ElMessageBox.confirm(
    '点击确定删除该版本',
    '提示',
    { type: 'warning' }
  ).then(() => {
    MarketApi.removeStore(props.row.id).then(() => {
      ElMessage({
        message: '删除成功',
        type: 'success'
      })
      emit('updateRecord', props.plugin.id)
    })
  })
}
</script>
