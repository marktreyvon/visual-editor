<!-- 图层 -->
<template>

<div style='height:700px;overflow-y: auto;overflow-x: hidden;padding: 0 6px'>
  <el-row :gutter="20">
    <el-col style='margin-top:6px' :span="24" v-for='(i,index) in layerList' key='i.view.cell.id' @click='layerClick($event,i.view)'>

      <el-card :body-style="{padding: '0px 12px',height:'60px',display:'flex',justifyContent:'space-between',alignItems:'center' }">
        <img width='50' height='50' :src="pluginConfig.getComponent(i.view
        .cell.shape)?.icon||(i.view.cell.shape==='edge'?edgeLayerIcon:defaultIcon)" alt=''>
        <div style="padding: 14px">
          <el-switch
              @change='showCell($event,index,i)'
              v-model="layerList[index].isV"
              class="ml-2"
              inline-prompt
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              active-text="显示"
              inactive-text="影藏"
          />
          <el-switch
              v-model="layerList[index].isE"
              @change='editCell($event,index,i)'
              class="ml-2"
              inline-prompt
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              active-text="可编辑"
              inactive-text="禁用编辑"
          />
        </div>
      </el-card>
    </el-col>

  </el-row>

</div>

</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {PluginConfig} from "@/editor/config";
import defaultIcon from "@/assets/defaultIcon.svg";
import edgeLayerIcon from "@/assets/edgeLayerIcon.svg";
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
const showCell= (v: any, index: any, i: any)=>{

   i.view.cell.setVisible(!v)

}
const editCell= (v: any, index: any, i: any)=>{

//Todo 未完成
}
const layerList=ref<any>([])
const layerClick=(e:any,d:any)=> {

  if(d.cell.shape!=='edge'){
    d.graph.trigger('node:click',{ e:e, node: d.cell })
  }else{
    d.graph.clearTransformWidgets();
  }
  d.graph.trigger('cell:click', { e:e, cell: d.cell });
}

watch(props,(v)=>{
  layerList.value=v.cellList

})

</script>

<style lang="scss" scoped>

</style>