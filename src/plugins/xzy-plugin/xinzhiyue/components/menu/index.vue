<template>
    <div class="menu-nav">
      <div class="nav_bar" :class="open ? 'opens' : ''">
        <div
          class="nav_item"
          :class="nowIndex == index ? 'active' : ''"
          v-for="(item, index) in navList"
          :key="index"
          @click="change_active(index)"
        >
          <div class="item_title">
              {{ item.title }}
            </div>
            <div class="item_status">
              <div class="status_text" v-if="item.status">在线</div>
              <div class="status_text" v-else>离线</div>
              <div class="status_icon" :class="item.status ? 'isActive' : 'noActive'"></div>
            </div>
        </div>
      </div>
      <div class="nav_control">
        <div :class="['control_item', 'control_item_1', currentIndex > 0 ? 'turned' : 'un-turned' ]" @click="prevPage">
          <div class="close"></div>
        </div>
        <div :class="['control_item', 'open', currentIndex + 5 < navList.length ? 'turned' : 'un-turned']" @click="nextPage">
          <div class="open"></div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  // import { ArrowLeft, ArrowRight, Delete, Edit, Share } from '@element-plus/icons-vue';
  // import Descrition from '@/components/Descrition/index.vue';
  
  import { ref,computed,reactive, watch } from "vue";
  
  let obj = reactive({
    a: 1
  })
  const props = defineProps({
    navs: Array
  });

  const open = ref(true);
  const nowIndex = ref(1);
  const navList = ref<any>([]);

  watch(() => props.navs, (value) => {
    if (value) {
      navList.value = value
      navList.value[0].status = true;
    }
    console.log('defineProps',value)
  })

  const change_active = (index: any) => {
    nowIndex.value = index;
    obj.a = 2
    console.log(index, "index")
  };
  
  // const sideIndex = ref(0);
  const currentIndex = ref(0);
  const visibleItems = computed(() => {
    const startIndex = currentIndex.value;
    if(startIndex + 5 > navList.value.length) return
    return navList.value.slice(startIndex, startIndex + 5);
  });
  // const tabNavItem = (path: string) => {
  //   console.log(router, "router");
  //   router.push({ path: path });
  // };
  
  const prevPage = () => {
    if(currentIndex.value > 0){
      currentIndex.value -= 1;
      nowIndex.value += 1
    }
  }
  const nextPage = () => {
    console.log(currentIndex.value + 5 < navList.value.length);
    if(currentIndex.value + 5 < navList.value.length){
      currentIndex.value += 1;
      nowIndex.value -= 1
    }  
  }
  </script>
  
  <style scoped>
  .menu-nav {
    margin-left: 20px;
    margin-right: 15px;
  }
  
  .menu-nav .nav_bar {
    width: 100%;
    height: 450px;
    overflow: hidden;
    transition: 0.5s;
  }
  .menu-nav .nav_bar.opens {
    height: 680px;
  }
  .menu-nav .nav_bar .nav_item {
    width: 180px;
    height: 115px;
    background: #173268;
    box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.18);
    border-radius: 6px;
    font-size: 24px;
    font-family: SimHei;
    font-weight: 400;
    color: #b2bbcd;
    transition: 0.5s;
    display: flex;
    padding: 0px 28px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  /* .nav_item a {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 28px;
    box-sizing: border-box;
    text-decoration: inherit;
  } */
  .menu-nav .nav_bar .nav_item:not(:last-child) {
    margin-bottom: 16px;
  }
  .menu-nav .nav_bar .nav_item.active{
    background: #006ae2;
    color: #fff;
  }
  .menu-nav .nav_bar .nav_item .item_status {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    font-family: SimHei;
    font-weight: 400;
    color: #ffffff;
    text-shadow: 1px 2px 3px rgba(0, 53, 118, 0.5);
  }
  .menu-nav .nav_bar .nav_item .item_status .status_icon {
    width: 19px;
    height: 19px;
    margin-left: 10px;
  }
  .menu-nav .nav_bar .nav_item .item_status .isActive {
    background: url("../../../assets/daping/office/isActive.png") center center;
    background-size: 100% 100%;
  }
  .menu-nav .nav_bar .nav_item .item_status .noActive {
    background: url("../../../assets/daping/office/noActive.png") center center;
    background-size: 100% 100%;
  }
  
  .menu-nav .nav_control {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .menu-nav .nav_control .turned{
    background: #0168df;
  }
  .menu-nav .nav_control .un-turned{
    background: #2d3a5a;
  }
  .menu-nav .nav_control .control_item_1{
    margin-right: 30px;
  }
  .menu-nav .nav_control .control_item {
    width: 35px;
    height: 35px;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
  }
  .menu-nav .nav_control .control_item .close {
    width: 100%;
    height: 100%;
    background: url("../../../assets/daping/office/close.png") center center;
    background-size: 100% 100%;
  }
  .menu-nav .nav_control .control_item .open {
    width: 100%;
    height: 100%;
    background: url("../../../assets/daping/office/open.png") center center;
    background-size: 100% 100%;
  }
  
  </style>
  