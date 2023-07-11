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
        <el-option :value='0' label='————'>
        </el-option>
        <el-option :value='1' label='----------'>
        </el-option>
        <el-option :value='2' label='- - - - - -'>
        </el-option>
        <el-option :value='3' label='- · - · - · -'>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="起点样式">

      <el-input v-model="state.formData.starStyle" style='display:none;'/>
      <div style='width:100%;height: 32px;border: 1px solid #d5d5d5;margin-right: 16px;padding: 0 12px'>
        <el-dropdown @command="handleCommand1" style='width:100%;'>
          <div class="el-dropdown-link" style='width:100%;display: flex;justify-content: space-between;align-items: center'>
            <div style='line-height: 30px'>
              <i v-if="state.formData.starStyle!=='0'" style='font-size: 18px' :class='`icon iconfont ${state.formData.starStyle}`'></i>
              <span v-else>无</span>
            </div>
            <div style='line-height: 30px'>
              <el-icon class="el-icon--right" >
                <arrow-down />
              </el-icon>
            </div>
          </div>
          <template #dropdown >
            <el-dropdown-menu style='width: 200px'>
              <el-dropdown-item command="0">无</el-dropdown-item>
              <el-dropdown-item command="vta-l-block"><i style='font-size: 18px' class='icon iconfont vta-l-block'></i></el-dropdown-item>
              <el-dropdown-item command="vta-l-classic"><i style='font-size: 18px' class='icon iconfont vta-l-classic'></i></el-dropdown-item>
              <el-dropdown-item command="vta-diamond">  <i style='font-size: 18px'  class='icon iconfont vta-diamond'></i></el-dropdown-item>
              <el-dropdown-item command="vta-circle"><i style='font-size: 18px' class='icon iconfont vta-circle'></i></el-dropdown-item>
              <el-dropdown-item command="vta-circlePlus"><i style='font-size: 18px' class='icon iconfont vta-circlePlus'></i></el-dropdown-item>
              <el-dropdown-item command="vta-ellipse">  <i style='font-size: 18px'  class='icon iconfont vta-ellipse'></i></el-dropdown-item>
              <el-dropdown-item command="vta-cross"><i style='font-size: 18px' class='icon iconfont vta-cross'></i></el-dropdown-item>
              <el-dropdown-item command="vta-l-async"><i style='font-size: 18px' class='icon iconfont vta-l-async'></i></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

    </el-form-item>
    <el-form-item label="終點样式">
        <el-input v-model="state.formData.endStyle" style='display:none;'/>
        <div style='width:100%;height: 32px;border: 1px solid #d5d5d5;margin-right: 16px;padding: 0 12px'>
          <el-dropdown @command="handleCommand2" style='width:100%;'>
            <div class="el-dropdown-link" style='width:100%;display: flex;justify-content: space-between;align-items: center'>
              <div style='line-height: 30px'>
                <i v-if="state.formData.endStyle!=='0'" style='font-size: 18px' :class='`icon iconfont ${state.formData.endStyle}`'></i>
                <span v-else>无</span>
              </div>
              <div  style='line-height: 30px'>
                <el-icon class="el-icon--right" >
                  <arrow-down />
                </el-icon>
              </div>
            </div>
            <template #dropdown >
              <el-dropdown-menu style='width: 200px'>
                <el-dropdown-item command="0">无</el-dropdown-item>
                <el-dropdown-item command="vta-r-block"><i style='font-size: 18px' class='icon iconfont vta-r-block'></i></el-dropdown-item>
                <el-dropdown-item command="vta-r-classic"><i style='font-size: 18px' class='icon iconfont vta-r-classic'></i></el-dropdown-item>
                <el-dropdown-item command="vta-diamond">  <i style='font-size: 18px'  class='icon iconfont vta-diamond'></i></el-dropdown-item>
                <el-dropdown-item command="vta-circle"><i style='font-size: 18px' class='icon iconfont vta-circle'></i></el-dropdown-item>
                <el-dropdown-item command="vta-circlePlus"><i style='font-size: 18px' class='icon iconfont vta-circlePlus'></i></el-dropdown-item>
                <el-dropdown-item command="vta-ellipse">  <i style='font-size: 18px'  class='icon iconfont vta-ellipse'></i></el-dropdown-item>
                <el-dropdown-item command="vta-cross"><i style='font-size: 18px' class='icon iconfont vta-cross'></i></el-dropdown-item>
                <el-dropdown-item command="vta-r-async"><i style='font-size: 18px' class='icon iconfont vta-r-async'></i></el-dropdown-item>

              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
    </el-form-item>
    <el-form-item label="线条宽度">
      <el-input-number :min="1" :max="99" v-model="state.formData.lineWidth" @change='validate' ></el-input-number>
    </el-form-item>
    <el-form-item label="线条颜色">
      <tp-color-picker v-model="state.formData.lineColor" @change='validate'/>
    </el-form-item>
    <el-form-item label="流动效果">
      <el-select v-model="state.formData.flowEffect" placeholder="请选择" @change='validate'>
        <el-option value='无效果' label='无效果'></el-option>
        <el-option value='水流' label='水流'></el-option>
        <el-option value='水珠' label='水珠'></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="水流宽度"  v-if="state.formData.flowEffect==='水流'">
      <el-input-number :min="1" :max="99" v-model="state.formData.waters" @change='validate'></el-input-number>
    </el-form-item>

    <el-form-item label="水珠大小" v-if="state.formData.flowEffect==='水珠'">
      <el-input-number :min="1" :max="99" v-model="state.formData.droplet" @change='validate'></el-input-number>
    </el-form-item>

    <el-form-item label="流动颜色" v-if="state.formData.flowEffect!=='无效果'" >
      <tp-color-picker v-model="state.formData.flowColor" @change='validate'/>
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
import '@/style/font/iconfont.css'
import {ref, reactive, watch, watchEffect, toRefs, toRaw} from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
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

const validate=()=>{

  setLineStyle(props.edgeData.id, props.nodeData.id, state.formData)
}
const {tools} = toRefs(props);
const {
  setLineStyle
} = tools.value
let state = reactive<any>({
  formData: {
    lineType: '1',
    lineStyle: 1,
    flowEffect: '无效果',
    lineWidth: 2,
    flowColor: '#409EFF',
    flowSpeed: 1,
    flowDirection: '正向',
    cycleTimes: 1,
    lineColor: '#409EFF',
    waters:1,
    droplet:6,
    starStyle:'0',
    endStyle:'0'
  }
})

const handleCommand1 = (command: string | number | object) => {
  state.formData.starStyle=command
  validate()
}
const handleCommand2 = (command: string | number | object) => {
  state.formData.endStyle=command
  validate()
}
watchEffect(() => {
  if (props.edgeData) {
    let edgeObj = {
      lineType: '1',
      lineStyle: 1,
      flowEffect: '无效果',
      lineWidth: 2,
      flowColor: '#409EFF',
      flowSpeed: 1,
      flowDirection: '正向',
      cycleTimes: -1,
      lineColor: '#409EFF',
      waters:1,
      droplet:6,
      starStyle:'0',
      endStyle:'0'
    }

    if(props?.edgeData?.attrs?.targetData){
      edgeObj={...edgeObj,...props?.edgeData?.attrs?.targetData}
    }

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