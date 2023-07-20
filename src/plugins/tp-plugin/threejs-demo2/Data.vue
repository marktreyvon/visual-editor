<template>
  <div style="height:100%">
    <el-row style="margin-bottom: 10px">
      <el-radio-group v-model="formData.bindType">
        <el-radio v-for="item in bindOptions" :label="item.value" size="small">{{ item.label}}</el-radio>
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
      <div class="w-full" v-else-if="formData.bindType==='device'" >
        <slot></slot>
      </div>

    </el-row>
  </div>
</template>

<script>
import DataAPI from '@/api/data';
const staticData = {
  Attributes:{
    cylinderName: "二氧化碳气瓶",
    pumpPower:'可变负压抽采泵'
  },
  Sensors:[
    {sensorId: 1, gatherTime: '2023-06-01 15:48:08', gatherValue: 98.71},
    {sensorId: 2, gatherTime: '2023-06-01 15:48:08', gatherValue: 1.83},
    {sensorId: 5, gatherTime: '2023-06-01 15:48:08', gatherValue: 84.96},
    {sensorId: 6, gatherTime: '2023-06-01 15:48:08', gatherValue: 176.41},
    {sensorId: 7, gatherTime: '2023-06-01 15:48:08', gatherValue: 16.4}
  ]
}

export default {
  props: {
    data: {
      type: [String, Object],
      default: () => ({})
    }
  },
  data() {
    return {
      timers:[],
      formData: {
        bindType: 'static',
        static: JSON.stringify(staticData)
      },
      formData2: {
        bindType: 'device',
        device: null
      },
      bindOptions: [
        { value: 'static', label: '静态数据' },
        { value: 'dynamic', label: '动态数据'},
        { value: 'device', label: '设备数据'}
      ]
    }
  },
  watch: {
    formData2:{
      handler(val) {
        console.log(val,"222222")

      },
      deep: true,
    },
    formData: {
      handler(val) {
        console.log(val,"4324324")
        this.$emit("onChange", {
          data: { bindType: this.bindType, ...val }
        });
      },
      deep: true,
    },

  },
   mounted() {

    if (JSON.stringify(this.data) !== "{}"  && JSON.stringify(this.data) !== "[]") {
      this.formData.device = JSON.parse(JSON.stringify(this.data));
    }
   //
  },
  unmounted() {
     if(this.timers.length>0){
       this.timers.map((i)=>{

         clearInterval(i)

       })
     }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.el-radio.el-radio--small {
  margin-right: 10px
}
</style>