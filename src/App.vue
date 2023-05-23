<script setup lang="ts">
import { ref, computed } from 'vue';
import {Render} from './Demo'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}

// 在新窗口中执行      
const queryString = window.location.search;
if (queryString) {
  const queryStringArray = queryString.split("?")[1].split("&");
  let params:any = {}
  queryStringArray.forEach((item) => {
    const [key, value] = item.split("=");
    params[key] = value;
  });
}



</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
    <!-- <Render/> -->
  </el-config-provider>
</template>

<style lang="scss">
  @import 'style/common';
</style>
