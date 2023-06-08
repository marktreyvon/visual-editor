<!-- 图层 -->
<template>
<div v-for='i in layerList' key='i.view.cell.id' @click='layerClick($event,i.view)'>

  <img width='50' height='50' :src="pluginConfig.getComponent(i.view
        .cell.shape)?.icon||'https://bpic.588ku.com/element_origin_min_pic/01/39/50/51573cc2a0b4083.jpg'" alt=''>

</div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {PluginConfig} from "@/editor/config";
import { useEvents } from "../useEvents"

const pluginConfig: IPluginConfig = PluginConfig.getInstance();

const props = defineProps({
  cellList: {
    type: Array,
    default: () => ([])
  },initEvents:{
    type:Function,
    default: () => {}
  }
})
let {
  initEvents, onChange ,
} = useEvents();
const layerList=ref<any>([])
const layerClick=(e:any,d:any)=> {

  if(d.cell.shape!=='edge'){
    console.log(d.cell.shape,"00000000000")
    d.graph.trigger('node:click',{ e:e, node: d.cell })
  }else{
    d.graph.clearTransformWidgets();
  }
  d.graph.trigger('cell:click', { e:e, cell: d.cell });
  // d.graph.trigger('edge:click', {  edge: d.cell });
}
onMounted(()=>{
  initEvents()
})
watch(props,(v)=>{
  layerList.value=v.cellList
})

</script>

<style lang="scss" scoped>

</style>