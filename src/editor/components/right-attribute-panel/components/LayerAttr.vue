<!-- 图层 -->
<template>

<div style='height:700px;overflow-y: auto;overflow-x: hidden;padding: 0 6px'>
  <el-row :gutter="20">
    <el-col style='margin-top:6px' :span="24" v-for='(data,index) in layerList' key='i.view.cell.id' @click='layerClick($event,data.view)'>
      <el-card :body-style="{padding: '0px 12px',height:'60px',display:'flex',justifyContent:'space-between',alignItems:'center' }">
        <img v-if="pluginConfig.getComponent(data.view
        .cell.shape)?.icon" width='50' height='50' :src="pluginConfig.getComponent(i.view
        .cell.shape)?.icon" alt=''>
        <img v-else-if="data.view.cell.shape==='edge'" width='50' height='50' :src="edgeLayerIcon" alt=''>
        <img v-else width='50' height='50' :src="defaultIcon" alt=''>
        <div  v-else style='width: 50px;height: 50px;background-color: #409EFF;color: white;text-align:center;line-height: 50px'>
          {{data.view.cell.label}}
        </div>

        <div style="padding: 14px">
          <el-switch
              @change='showCell($event,index,data)'
              v-model="statList[index].isShow"
              class="ml-2"
              inline-prompt
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              active-text="显示"
              inactive-text="影藏"
          />
<!--          <el-switch-->
<!--              v-model="layerList[index].isE"-->
<!--              @change='editCell($event,index,i)'-->
<!--              class="ml-2"-->
<!--              inline-prompt-->
<!--              style="&#45;&#45;el-switch-on-color: #13ce66; &#45;&#45;el-switch-off-color: #ff4949"-->
<!--              active-text="可编辑"-->
<!--              inactive-text="禁用编辑"-->
<!--          />-->
        </div>
      </el-card>
    </el-col>

  </el-row>

</div>

</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {uniqWith, isEqual, forEach} from "lodash"
import {PluginConfig} from "@/editor/config";
import defaultIcon from "@/assets/defaultIcon.svg";
import edgeLayerIcon from "@/assets/edgeLayerIcon.svg";
const pluginConfig: IPluginConfig = PluginConfig.getInstance();
const statList=ref<any>([])
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
  console.log(statList,"0000")
  layerList.value.forEach((i:any)=>{
    console.log(i.view.cell.isVisible(),"1111")
  })
   i.view.cell.setVisible(v)
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
  layerList.value.forEach((i:any)=>{
    statList.value.push({isShow:i.view.cell.isVisible(),isEdit:true})
  })
})

</script>

<style lang="scss" scoped>

</style>