<template>
 <div class="bg" style="width:100vw;height:100vh">
    <div class="header">
      <div class="title">
        心智悦智慧环境监控系统
      </div>
      <div class="info">
        <div class="info-text">
          <span><img src="./assets/daping/office/device.png" alt="" /></span>
          <span class="txt">设备{{state.code}}</span>
        </div>
        <div class="info-text">
          <span><img src="./assets/daping/office/address.png" alt="" /></span>
          <span class="txt">北京市 海定区</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <Menu :navs="state.list" v-model:device="state.device"/>
        
      </div>
      <div class="content-right">
        <!-- <router-view></router-view> -->
        <Index :value="state.value"/>
      </div>
    </div>
    <div class="content-pic">
        <img src="./assets/daping/office/pic.png" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ElButton } from 'element-plus'
import { ref, watch } from 'vue';
import Menu from './components/menu/index.vue';
import Index from './components/index/index.vue';
import {reactive } from 'vue';
const props = defineProps({
  style: Object,
  value: Object,
  option: Object
});
const state = reactive({
  device: {},
  list: [],
  value: {},
  code: 'MAC:D0BAE40FB588',
  orderList: [],
  skillList: [],
});

// 从编辑器传递过来的设备的值
watch(() => props.value, (value: any) => {
  console.log('xinzhiyue.watch.props.value', value);
  if (value) {
    state.value = value;
  }
}
)

// 从编辑器传递过来的配置
watch(() => props.option, (value: any) => {
  console.log('xinzhiyue.watch.props.option', value);
  initDeviceList(value.deviceData[0].devices || []);
});

const emit = defineEmits(['change']);
watch(() => state.device, (value: any) => {
  // 向编辑器发送消息
  emit('change', { device: value });
})

const initDeviceList = (devices: any) => {
  state.list = devices.map((item: any) => ({ ...item, status: false }));
  // state.list[0].status = true;
  console.log('xinzhiyue.initDeviceList', state.list);
};

</script>
<style scoped>
.bg{
  padding: 20px;
  background: #16264A;
  position: relative;
}
.header{
  display: flex;
  justify-content: space-between;
}
.title{
  padding: 0 20px 20px 20px;
  font-size: 20px;
  color: #fff;
  letter-spacing: 5px;
  font-weight: 400;
}
.info{
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px 20px;

}
.info-text{
  margin-right: 10px;
}
.info-text span{
  vertical-align: text-top;
  margin-left: 5px;
}
.txt{
  color: #fff;
}

.content{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.content-left{
    position: relative;
    z-index: 9;
    width: 271px;
    height: 100%;
}
.content-right{
  width: 85%;

}
 
.content-pic{
  position: absolute;
  bottom:0;
  left:0;
}
</style>
