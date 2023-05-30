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
        <Menu :navs="navList" v-model:deviceIndex="state.deviceIndex"/>
        
      </div>
      <div class="content-right">
        <!-- <router-view></router-view> -->
        <Index />
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
import DeviceAPI from '@/api/device';
const props = defineProps({
  style: Object,
  value: Object,
  option: Object
});
const state = reactive({
  deviceIndex: 0,
  list: [],
  code: 'MAC:D0BAE40FB588',
  orderList: [],
  skillList: [],
});
// 设备列表
const navList = ref([]);

const groupId = ref('');

watch(() => props.option, (value: any) => {
  console.log('xinzhiyue.watch.props.option', value);
  initDeviceList(value.deviceData[0].devices || []);
  // groupId.value = value.deviceData[0].groupId;
  // getDeviceList();
  console.log('xinzhiyue.watch.props.option', value.deviceData[0].groupId);
});

const emit = defineEmits(['change']);
watch(() => state.deviceIndex, (value: any) => {
  console.log('Main.watch.state.deviceIndex', value);
  emit('change', { deviceIndex: value });
})

const initDeviceList = (devices: any) => {
  navList.value = devices.map((item: any) => ({ title: item.deviceName, status: false, id: item.deviceId, properties: item.properties }));
  console.log('xinzhiyue.initDeviceList', navList.value);
};

const getDeviceList = () => {
  if (!groupId.value) return;
  const params = {
    asset_id: groupId.value,
    current_page: 1, 
    per_page: 9999
  };
  DeviceAPI.getDeviceList(params)
    .then(({ data }) => {
      if (data.code === 200) {
        navList.value = data.data.data.map((item: any) => ({ title: item.device_name, status: false, id: item.device, pluginId: item.type }));
        console.log('xinzhiyue.getDeviceList', navList.value);

      }
    })
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
