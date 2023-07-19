<!--
 * @Author: MXL
 * @Date: 2022-12-29 21:54:11
 * @LastEditors: MXL
 * @LastEditTime: 2022-12-31 00:25:45
 * @Description: threejs 场景 通过引入sceneRender源码创建threejs场景
-->
<template>
  <div  :style="{padding:'10px',color:'#fff',position: 'absolute',width: '100%',height: isEnter,backgroundColor:' #00000000',display: 'flex',justifyContent: 'start',alignItems: 'start'}">
  <div style='color: #fff;background-color: #00000044;padding: 4px;font-size: 12px'>ctrl+alt+空格,进入3d预览,w:前进，a：后退，s：左移，d：右移，q：降低，e：升高</div>
  </div>
  <div class="content" ref="threeBox"></div>
</template>
<script lang="ts" setup>
import { useScene4 } from './store/sceneRenderBackstage';
import { useIs3D } from '@/store/modules/is3DStroe';
import {
  ref,
  watchEffect,
  nextTick,
  computed,
  defineComponent,
  watch,
  onMounted,
  onUnmounted,
  onBeforeUnmount
} from 'vue';
import {useThreeDDeviceData} from "@/store/modules/3DDeviceDataStroe";
import {isEqual, uniqWith} from "lodash";
import DataAPI from "@/api/data";
const ThreeDDeviceData=useThreeDDeviceData()


const props = defineProps({
  isContentReady: {
    type: Boolean,
    default: true,
  },
  value: {
    type: String,
    default: () => {
      return {};
    },
  },
  data: {
    type: Object,
    default: () => {
      return {};
    },
  },
  id: {
    type: String,
    default: () => {
      return '';
    },
  },
});

const formData=ref("")
const sceneStore=useScene4()
const isEnter=ref('0px')
const is3D=useIs3D()
const threeBox = ref();


function changeData(data: any) {

  formData.value = JSON.parse(JSON.stringify(data));
  // 解析数据传给SceneBackstage实例 更新标签上的数据
  // ...
  // this.scene.updateData(this.formData);
}
function enter3d(){

  if(isEnter.value==='100%'){
    isEnter.value='0px'
    is3D.setTrue()
  }
}

watch(() => is3D.is3D,(newValue, oldValue) => {
  if(newValue){
    isEnter.value='0px'
  }else{
    isEnter.value='0px'
  }
})

onBeforeUnmount(()=>{
  console.log(threeDTimer,"423432432")
  if(threeDTimer){
    clearInterval(threeDTimer)
    clearTimeout(threeDTimer1)
    clearTimeout(threeDTimer2)
  }
})

watch(() => props.value,(newValue, oldValue) => {
  console.log(props.value,"45935098435")
  if(threeDTimer){
    clearInterval(threeDTimer)
    clearTimeout(threeDTimer1)
    clearTimeout(threeDTimer2)
  }
  try {
    let obj = JSON.parse(newValue);
    console.log("table.Main.value.obj", obj);
    sceneStore.freshAttributes(obj.Attributes)
    sceneStore.freshSensors(obj.Sensors)
  } catch(e) {
    console.log('传入的数据不是JSON格式');
  }
})
let threeDTimer:any=null
let threeDTimer1:any=null
let threeDTimer2:any=null
watch(() => props.data,(newValue, oldValue) => {
  console.log(props.data.deviceData,"45935098435")

  if(threeDTimer){
    clearInterval(threeDTimer)
    clearTimeout(threeDTimer1)
    clearTimeout(threeDTimer2)
  }

    if(newValue.deviceData?.length>0){
      const getDeviceData=()=>{

        newValue.deviceData.forEach(async (i:any,index:number)=>{
          let propertyArr=[]
          i.property
          const res = await DataAPI.getCurrentValue({entity_id: i.deviceId})
          if(res?.data?.code===200&&res?.data?.data?.length>0){
            console.log(res.data.data[0][i.property],"rrewrewrew")

            // Attributes:{
            //   cylinderName: "二氧化碳气瓶",
            //       pumpPower:'可变负压抽采泵'
            // },
            // Sensors:[
            //   {sensorId: 1, gatherTime: '2023-06-01 15:48:08', gatherValue: 98.71},
            //   {sensorId: 2, gatherTime: '2023-06-01 15:48:08', gatherValue: 1.83},
            //   {sensorId: 5, gatherTime: '2023-06-01 15:48:08', gatherValue: 84.96},
            //   {sensorId: 6, gatherTime: '2023-06-01 15:48:08', gatherValue: 176.41},
            //   {sensorId: 7, gatherTime: '2023-06-01 15:48:08', gatherValue: 16.4}
            // ]

            if(index===0){
              sceneStore.freshAttributes({
                cylinderName: " ",
                pumpPower:'可变负压抽采泵'
              })
              threeDTimer1=setTimeout(()=>{
                sceneStore.freshAttributes({
                  cylinderName: res.data.data[0][i.property],
                  pumpPower:'可变负压抽采泵'
                })
              },500)

            }

            if(index===1){
              sceneStore.freshSensors([{sensorId: 1, gatherTime: "", gatherValue:  ""},])
              threeDTimer2=setTimeout(()=>{
                sceneStore.freshSensors([{sensorId: 1, gatherTime: res.data.data[0].systime, gatherValue:  res.data.data[0][i.property]},])
              },500)


            }
          }

        })
        return getDeviceData
      }
      threeDTimer =setInterval(getDeviceData(),10000)  }





})
watchEffect(() => {
  // 监听 高度是否计算完成
  if(threeDTimer){
    clearInterval(threeDTimer)
    clearTimeout(threeDTimer1)
    clearTimeout(threeDTimer2)
  }
  if (props.isContentReady)
    nextTick(() => {
      // 创建threejs 场景
      sceneStore.createSceneRender(threeBox.value);
    });
});

</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
}
</style>
