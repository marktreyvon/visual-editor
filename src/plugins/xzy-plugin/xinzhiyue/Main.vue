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
        <Menu :navList="navList"/>
        
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
const props = defineProps({
  value: Object,
});
const state = reactive({
  list: [],
  code: 'MAC:D0BAE40FB588',
  orderList: [],
  skillList: [],
});
// 设备列表
const navList = ref([
  { title: "前台", status: true },
  { title: "办公室", status: true },
  { title: "接待区", status: false },
  { title: "会议室", status: false },
  { title: "财务室", status: false },
  { title: "娱乐室", status: false },
]);

watch(() => props.value, (value) => {
  console.log('xinzhiyue.watch', value);
});
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
