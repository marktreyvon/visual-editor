<template>
  <el-form v-model="state.formData">
    <el-form-item label="线条类型" ref="FormRef" >
      <el-select v-model="state.formData.lineType" placeholder="请选择" @change='validate'>
        <el-option value='1' label='直线'>
        </el-option>
<!--        <el-option value='2' label='线段'>-->
<!--        </el-option>-->
        <el-option value='3' label='曲线'>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="线条样式">
      <el-select v-model="state.formData.lineStyle" placeholder="请选择" @change='validate'>
        <el-option :value='0' label='实线'>
        </el-option>
        <el-option :value='5' label='虚线1'>
        </el-option>
        <el-option :value='15' label='虚线2'>
        </el-option>
        <el-option :value='20' label='虚线3'>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="线条宽度">
      <el-input v-model="state.formData.lineWidth" @change='validate'></el-input>
    </el-form-item>
    <el-form-item label="线条颜色">
      <el-color-picker v-model="state.formData.lineColor" @change='validate'/>
    </el-form-item>
    <el-form-item label="流动效果">
      <el-select v-model="state.formData.flowEffect" placeholder="请选择" @change='validate'>
        <el-option value='无效果' label='无效果'></el-option>
        <el-option value='水流' label='水流'></el-option>
        <el-option value='水珠' label='水珠'></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="流动颜色" v-if="state.formData.flowEffect!=='无效果'" >
      <el-color-picker v-model="state.formData.flowColor" @change='validate'/>
    </el-form-item>
    <el-form-item label="流动速度" v-if="state.formData.flowEffect!=='无效果'" >

      <el-slider style='width: 90%' v-model="state.formData.flowSpeed" :step="1" :min='1' :max="4" show-stops @change='validate'/>

    </el-form-item>
    <el-form-item label="流动方向" v-if="state.formData.flowEffect!=='无效果'" >

      <el-select v-model="state.formData.flowDirection" placeholder="请选择" @change='validate'>
        <el-option value='正向' label='正向'>
        </el-option>
        <el-option value='反向' label='反向'>
        </el-option>
      </el-select>

    </el-form-item>
    <el-form-item label="循环次数" v-if="state.formData.flowEffect!=='无效果'">
      <el-input v-model="state.formData.cycleTimes" @change='validate'></el-input>
    </el-form-item>
  </el-form>

</template>

<script setup lang="ts">
import {ref, reactive, watch, watchEffect, toRefs, toRaw} from "vue";
import type { FormInstance, FormRules } from 'element-plus'
const props = defineProps({
  edgeData: {
    type: Object,
    default: () => ({})
  },
  nodeData: {
    type: Object,
    default: () => ({})
  },
  tools: {
    type: Object,
    default: () => {
    }
  }
})
const FormRef = ref<FormInstance>()

const validate=(val:any)=>{

  setLineStyle(props.edgeData.id, props.nodeData.id, state.formData)
}
const {tools} = toRefs(props);
const {
  setLineStyle
} = tools.value
let state = reactive<any>({
  formData: {
    lineType: undefined,
    lineStyle: undefined,
    flowEffect: '无效果',
    lineWidth: 2,
    flowColor: '#409EFF',
    flowSpeed: 1,
    flowDirection: '正向',
    cycleTimes: 1,
    lineColor: '#409EFF',
    vertices:undefined
  }
})



watchEffect(() => {
  if (props.edgeData) {
    let edgeObj = {
      lineType: '',
      lineStyle: '',
      flowEffect: '无效果',
      lineWidth: 2,
      flowColor: '#409EFF',
      flowSpeed: 1,
      flowDirection: '正向',
      cycleTimes: -1,
      lineColor: '#409EFF',
      vertices:[]
    }

    if(props?.edgeData?.attrs?.targetData){
      edgeObj={...edgeObj,...props?.edgeData?.attrs?.targetData}
    }

    if (props?.edgeData?.vertices) {
      if (props?.edgeData?.vertices.length === 1) {
        if (props?.edgeData?.connector === 'normal') {
          edgeObj.lineType = '2'
        } else {
          edgeObj.lineType = '3'
        }

      } else {
        edgeObj.lineType = '1'
      }

    } else {
      edgeObj.lineType = '1'
    }

    edgeObj.vertices=props?.edgeData?.vertices
    edgeObj.lineColor = props?.edgeData?.attrs?.line?.stroke || '#000000'
    edgeObj.lineWidth = props?.edgeData?.attrs?.line?.strokeWidth || 1
    edgeObj.lineStyle = props?.edgeData?.attrs?.line?.strokeDasharray || 0


    state.formData = {...state.formData,...edgeObj};
    // state.data.position.x = getFixNumber(state.data.position.x);
    // state.data.position.y = getFixNumber(state.data.position.y);
  }

})
const emit = defineEmits(["onChange"]);
watch(state, () => {
  emit('onChange', toRaw(state))

})


</script>

<style lang="scss" scoped></style>