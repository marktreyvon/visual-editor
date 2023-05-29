<template>
  <div style="height:100%">
    <!-- 项目 -> 分组(绑定分组) -->
    <el-row style="height:100%">
        <!-- 设备数据 -->
        <div class="w-full" >
          <el-button style="width:100%" @click="addDevice">新增设备</el-button>
          <div class="device-container overflow-y-auto overflow-x-auto" >
              <div v-for="(device, index) in deviceData" >
                <DeviceSelector :id="index" @delete="handleDeleteDevice" @change="handleChangeDeviceData"/>
              </div>
          </div>
          
        </div>
        
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
import { ElMessageBox } from 'element-plus'

import DeviceSelector from "./components/DeviceSelector.vue";
import { useBaseData } from './useBaseData'
const emit = defineEmits(["change"]);

const deviceData = ref<any>([
  {
    projectId: '',
    groupId: '',
    deviceId: ''
  }
])

let { 
  state, bindOptions, projectOptions, groupOptions,
  getProjectList, getGroupList, handleChangeProject, handleChangeGroup 
} = useBaseData();

onMounted(() => {
  getProjectList()
})

const addDevice = () => {
  deviceData.value.push({
    projectId: '',
    groupId: '',
    deviceId: ''
  })
}

const handleChangeDeviceData = (data: any) => {
  deviceData.value.splice(data.id, 1, data)
  emit('change', { bindType: state.bindType, deviceData: deviceData.value })
}

/**
 * 删除设备
 * @param id 
 */
const handleDeleteDevice = (id: number) => {
  if (deviceData.value.length === 1) {
    ElMessageBox.alert('至少保留一个设备', '提示', {})
    return
  }
  const callback = (action: any, instance: any) => {
    if (action === 'confirm') {
      deviceData.value.splice(id, 1)
    }
  }
  ElMessageBox.confirm('是否确认删除该设备？', '确认删除', {callback}, null)
}
    
</script>

<style lang="scss" scoped>
.device-container {
  width: 100%;
  height: calc(100vh - 200px);
}
</style>