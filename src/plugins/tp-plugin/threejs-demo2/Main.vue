<!--
 * @Author: wbh
 * @Date: 2022-12-29 21:54:11
 * @LastEditors: wbh
-->
<template>
  <!--  准备遮罩和提示，因拖动冲突，需要再一开始准备遮罩，并把engine.js进入无鼠标模式的快捷设为alt+1（亦可使用其他方式，单需要告知我们）-->
  <div
      :style="{padding:'10px',color:'#fff',position: 'absolute',width: '100%',height: props.isDisplay?'0px':isEnter,backgroundColor:' #00000000',display: 'flex',justifyContent: 'start',alignItems: 'start'}">
    <div style='color: #fff;background-color: #00000044;padding: 4px;font-size: 12px'>
      alt+1,进入3d预览,预览中请使用，w:前进，a：后退，s：左移，d：右移，q：降低，e：升高
    </div>
  </div>
  <!-- 准备渲染需要的div，关键点为ref，场景刷入的时候需要这个-->
  <div class="content" ref="threeBox"></div>
</template>
<!--以下为vue3，组合式api举例，也可以使用其他方式编写-->
<script lang="ts" setup>

//引入处理数据的数据仓库，改处理方式也可写在当前文件中
import {useSceneDemo} from './store/sceneRenderBackstage';
//引入判断是否进入3d预览模式的数据仓库，固定位置
import {useIs3DMode} from '@/store/modules/is3DStroe';
//设备数据的接口，该接口暂时由ThingsPanel提供，后续可使用自己的接口，但需要将接口地址，传出来
import DataAPI from "@/api/data";
//其他需要的引用
import {
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  h
} from 'vue';
import { ElMessage } from 'element-plus'
import {isEqual, uniqWith,debounce} from "lodash";


//props准备，改数据为固定处理，按如下格式编写即可，其中style为样式配置，value为静态数据，data为设备绑定数据，id是当前node节点Id
const props = defineProps({
  isDisplay: {
    type: Boolean,
    default: false,
  },
  isContentReady: {
    type: Boolean,
    default: true,
  },
  style: {
    type: Object,
    default: () => {
      return {};
    }
  },
  value: {
    type: String,
    default: () => {
      return '';
    },
  },
  data: {
    type: Object || undefined,
    default: () => {
      return undefined;
    },
  },
  id: {
    type: String,
    default: () => {
      return '';
    },
  },
});

//初始 遮罩高度100%防止拖动的时候镜头转动，之后这个值会被改为0
const isEnter = ref('100%')
//3渲染容器的ref
const threeBox = ref();
//数据准备
const is3DMode = useIs3DMode()  //是否3d预览模式数据仓库
const sceneStore = useSceneDemo()  //设置3d数据场景的数据仓仓库
let deviceDataRequestTimer: any = null   //设备请求度定时器返回值
let DataDelayTimer1: any = null //设备数据1延时刷新定时器返回值
let DataDelayTimer2: any = null //设备数据2延时刷新定时器返回值
//监听是否进入3d模式，如果进入，把遮罩高度设为0
watch(() => is3DMode.is3DMode, (newValue, oldValue) => {
  if (newValue) {
    isEnter.value = '0px'
  } else {
    isEnter.value = '0px'
  }
})

function setDeviceData(value: any) {
  if (deviceDataRequestTimer) {
    clearInterval(deviceDataRequestTimer)
    clearTimeout(DataDelayTimer1)
    clearTimeout(DataDelayTimer2)
  }


  if (value?.deviceData?.length > 0) {
    const getDeviceData = () => {
      value?.deviceData.forEach(async (i: any, index: number) => {
        let propertyArr = []
        if (i.properties.length > 0) {
          const res = await DataAPI.getCurrentValue({entity_id: i.deviceId, attribute: i.properties})
          console.log(res, "09098877666")
          if (res?.data?.code === 200 && res?.data?.data?.length > 0) {
            if (index === 0) {
              sceneStore.freshSensors([{sensorId: 1, gatherTime: "", gatherValue: ""},
                {sensorId: 2, gatherTime: "", gatherValue: ""},
                {sensorId: 3, gatherTime: "", gatherValue: ""},
                {sensorId: 4, gatherTime: "", gatherValue: ""},
                {sensorId: 5, gatherTime: "", gatherValue: ""},
                {sensorId: 6, gatherTime: "", gatherValue: ""},
                {sensorId: 7, gatherTime: "", gatherValue: ""},
              ])
              DataDelayTimer1 = setTimeout(() => {
                sceneStore.freshSensors([{
                  sensorId: 1,
                  gatherTime: res.data.data[0].systime,
                  gatherValue: res.data.data[0][i.property]
                }, {
                  sensorId: 2,
                  gatherTime: res.data.data[0].systime,
                  gatherValue: res.data.data[0][i.property]
                }, {
                  sensorId: 3,
                  gatherTime: res.data.data[0].systime,
                  gatherValue: res.data.data[0][i.property]
                }, {
                  sensorId: 4,
                  gatherTime: res.data.data[0].systime,
                  gatherValue: res.data.data[0][i.property]
                }, {
                  sensorId: 5,
                  gatherTime: res.data.data[0].systime,
                  gatherValue: res.data.data[0][i.property]
                }, {
                  sensorId: 6,
                  gatherTime: res.data.data[0].systime,
                  gatherValue: res.data.data[0][i.property]
                }, {sensorId: 7, gatherTime: res.data.data[0].systime, gatherValue: res.data.data[0][i.property]},])

              }, 500)
            }
            if (index === 1) {
              sceneStore.freshAttributes({
                cylinderName: " ",
                pumpPower: '可变负压抽采泵'
              })
              DataDelayTimer2 = setTimeout(() => {
              }, 500)

            }
          }else{
            ElMessage({
              message: h('p', null, [
                h('span', null, res.data.message),
                h('i', { style: 'color: teal' }, '数据为空'),
              ]),
            })
          }
        }
      })
      return getDeviceData
    }
    deviceDataRequestTimer = setInterval(getDeviceData(), 5000)
  }
}

function setStaticData(value: string) {
  if (deviceDataRequestTimer) {
    clearInterval(deviceDataRequestTimer)
    clearTimeout(DataDelayTimer1)
    clearTimeout(DataDelayTimer2)
  }
  try {
    //文本数据json转换
    let obj = JSON.parse(value);
    //设置静态数据
    sceneStore.freshAttributes(obj.Attributes)
    sceneStore.freshSensors(obj.Sensors)
  } catch (e) {
    console.log('传入的数据不是JSON格式');
  }
}

//渲染3D场景，并刷入默认或历史数据
onMounted(() => {
  //如果存在设备请求，清除设备请求定时器
  if (deviceDataRequestTimer) {
    clearInterval(deviceDataRequestTimer)
    clearTimeout(DataDelayTimer1)
    clearTimeout(DataDelayTimer2)
  }
  //渲染3d场景
  sceneStore.createSceneRender(threeBox.value)
  //调用初始化方法，加入初始化数据
  sceneStore.initData(() => {
    console.log(props.style, "32832139213")
    if (JSON.stringify(props.style) !== '{}') {

      sceneStore.setColor(props.style.color
          , props.style.bgColor, props.style.fontSize)
    }
    if (props.value) {
      console.log(props.value, "3dProps")
      setStaticData(props.value)
    } else {
      if (props.data && JSON.stringify(props.data) !== '{}') {
        console.log(props.data.deviceData, "3dProps")
        if (props.data.deviceData.length > 0) {
          console.log(props.data.deviceData, "3dProps")
          setDeviceData(props.data);
        }
      }
    }

  })
})
//监听样式数据变化，如果变化执行样式设置方法
watch(() => props.style, (newValue, oldValue) => {
  sceneStore.setColor(props.style.color
      , props.style.bgColor, props.style.fontSize)
})
//监听设备绑定数据变化，如果变化执行接口请求，并刷新数据，该数据和静态数据只会存在一个

watch(() => props.data, debounce((newValue, oldValue) => {

  if (newValue?.deviceData?.length > 0 && newValue?.deviceData[0].properties?.length > 0) {
    setDeviceData(newValue)

  }

},1000))
//监听静态数据变化，如果变化刷新数据，该数据和设备绑定数据只会存在一个
watch(() => props.value, (newValue, oldValue) => {
  setStaticData(newValue);
})
//组件写在的时候清除所以的定时器
onBeforeUnmount(() => {
  if (deviceDataRequestTimer) {
    clearInterval(deviceDataRequestTimer)
    clearTimeout(DataDelayTimer1)
    clearTimeout(DataDelayTimer2)
  }
})
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
}
</style>
