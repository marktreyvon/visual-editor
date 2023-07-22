<template>
  <div style="height:100%">
    <el-row style="margin-bottom: 10px">
      <el-radio-group v-model="formData.bindType">
        <el-radio v-for="item in bindOptions" :label="item.value" size="small">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-row>
    <el-row style="height:100%">
      <!-- 静态数据 -->
      <el-input v-if="formData.bindType==='static'" :rows="20" type="textarea" v-model="formData.static"></el-input>
      <!-- 动态数据 -->
      <el-form-item v-else-if="formData.bindType==='dynamic'" style="width:100%">
        <el-input :rows="2" type="textarea" v-model="formData.dynamic"></el-input>
      </el-form-item>
      <!-- 设备数据 -->
      <div class="w-full" v-else-if="formData.bindType==='device'">
        <slot></slot>
      </div>

    </el-row>
  </div>
</template>

<script setup>

import {onMounted, onUnmounted, reactive, ref, watch} from "vue";

const staticData = {
  Attributes: {
    cylinderName: "二氧化碳气瓶",
    pumpPower: '可变负压抽采泵'
  },
  Sensors: [
    {sensorId: 1, gatherTime: '2023-06-01 15:48:08', gatherValue: 98.71},
    {sensorId: 2, gatherTime: '2023-06-01 15:48:08', gatherValue: 1.83},
    {sensorId: 5, gatherTime: '2023-06-01 15:48:08', gatherValue: 84.96},
    {sensorId: 6, gatherTime: '2023-06-01 15:48:08', gatherValue: 176.41},
    {sensorId: 7, gatherTime: '2023-06-01 15:48:08', gatherValue: 16.4}
  ]
}
const emit = defineEmits(['onChange'])
const props = defineProps({
  data: {
    type: [String, Object],
    default: () => ({})
  }
});
const timers = ref([])
const formData = reactive({
  bindType: 'static',
  static: JSON.stringify(staticData)
})
const formData2 = reactive({
  bindType: 'device',
  device: null
})

const bindOptions = ref([
  {value: 'static', label: '静态数据'},
  {value: 'dynamic', label: '动态数据'},
  {value: 'device', label: '设备数据'}
])
watch(formData, (newValues, oldValues) => {
  console.log(newValues, "4324324")
  emit("onChange", {
    data: {bindType: formData.bindType, ...newValues}
  });
})
onMounted(() => {
  if (JSON.stringify(props.data) !== "{}" && JSON.stringify(props.data) !== "[]") {
    formData.device = JSON.parse(JSON.stringify(props.data));
  }
})
onUnmounted(() => {
  if (timers.value.length > 0) {
    timers.value.map((i) => {
      clearInterval(i)
    })
  }
})

</script>
<style lang="scss" scoped>
.el-radio.el-radio--small {
  margin-right: 10px
}
</style>