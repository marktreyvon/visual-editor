<!--
 * @Author: MXL
 * @Date: 2022-12-29 21:54:11
 * @LastEditors: MXL
 * @LastEditTime: 2022-12-31 00:25:45
 * @Description: threejs 场景 通过引入sceneRender源码创建threejs场景
-->
<template>
  <div  :style="{padding:100,color:'#fff',position: 'absolute',width: '100%',height: isEnter,backgroundColor:' #00000025',display: 'flex',justifyContent: 'center',alignItems: 'end'}">
  <div  @click.stop='enter3d'>{{ is3D.is3D?'移动被锁定，按esc或点击空白退出' :'锁定移动'}}</div>
  </div>
  <div class="content" ref="threeBox"></div>
</template>
<script lang="ts" setup>
import { useScene4 } from './store/sceneRenderBackstage';
import { useIs3D } from '@/store/modules/is3DStroe';
import {ref, watchEffect, nextTick, computed, defineComponent, watch} from 'vue';

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
});

const formData=ref("")
const sceneStore=useScene4()
const isEnter=ref('100%')
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
    isEnter.value='30px'
    is3D.setTrue()
  }
}
watch(() => is3D.is3D,(newValue, oldValue) => {

  if(newValue){
    isEnter.value='30px'
  }else{
    isEnter.value='100%'
  }
})

watch(() => props.value,(newValue, oldValue) => {
  try {

    let obj = JSON.parse(newValue);
    console.log("table.Main.value.obj", obj);
    sceneStore.freshAttributes(obj.Attributes)
    sceneStore.freshSensors(obj.Sensors)
  } catch(e) {
    console.log('传入的数据不是JSON格式');
  }
})
watchEffect(() => {
  // 监听 高度是否计算完成
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
